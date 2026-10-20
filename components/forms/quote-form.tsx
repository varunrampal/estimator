"use client";

import { ArrowUpRight, FilePlus2, FileText, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

const projectTypes = ["Landscape", "Restoration", "Municipal", "Civil", "Commercial", "Residential Development", "Environmental", "Other"];
const neededServices = ["Plant Takeoff", "Plant Pricing", "Plant Sourcing", "Procurement Support", "Substitution Review", "Freight / Delivery Planning", "Complete Plant Estimate"];
const accepted = new Set(["pdf", "xls", "xlsx", "csv", "doc", "docx"]);
const maxFileBytes = 10 * 1024 * 1024;
const maxTotalBytes = 20 * 1024 * 1024;

type Feedback = { kind: "success" | "unavailable" | "error"; message: string } | null;

export function QuoteForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(fileList: FileList | null) {
    if (!fileList) return;
    const additions = Array.from(fileList);
    const invalid = additions.find((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase() || "";
      return !accepted.has(extension) || file.size > maxFileBytes;
    });
    if (invalid) {
      setFileError(`${invalid.name} is not an accepted file type or exceeds the 10 MB per-file limit.`);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    const combined = [...files, ...additions];
    if (combined.length > 10 || combined.reduce((sum, file) => sum + file.size, 0) > maxTotalBytes) {
      setFileError("Choose up to 10 files with a combined size under 20 MB.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    setFiles(combined);
    setFileError("");
    if (inputRef.current) inputRef.current.value = "";
  }

  function removeFile(index: number) {
    setFiles((current) => current.filter((_, itemIndex) => itemIndex !== index));
    setFileError("");
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);
    if (fileError) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    files.forEach((file) => formData.append("documents", file));
    setSubmitting(true);
    try {
      const response = await fetch("/api/estimate", { method: "POST", body: formData });
      const result = (await response.json()) as { message?: string };
      if (response.status === 503) {
        setFeedback({ kind: "unavailable", message: result.message || "The estimate request service is not configured yet. Nothing was stored or forwarded." });
      } else if (response.ok) {
        setFeedback({ kind: "success", message: result.message || "Your request was received." });
      } else {
        setFeedback({ kind: "error", message: result.message || "Please review the form and try again." });
      }
    } catch {
      setFeedback({ kind: "error", message: "We could not reach the request service. No confirmation was received; please email info@plantestimators.ca." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="quote-form" onSubmit={submit} noValidate>
      {feedback && <div className={`form-feedback feedback-${feedback.kind}`} role={feedback.kind === "error" ? "alert" : "status"} tabIndex={-1}>{feedback.message}</div>}
      <div className="form-section-head"><span>01</span><div><h2>Project contact</h2><p>Tell us who to follow up with and what you are working on.</p></div></div>
      <div className="form-grid">
        <label>Full name <span>*</span><input name="fullName" autoComplete="name" required maxLength={120} /></label>
        <label>Company <span>*</span><input name="company" autoComplete="organization" required maxLength={160} /></label>
        <label>Email <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>Project name <span>*</span><input name="projectName" required maxLength={160} /></label>
        <label>Project location <span>*</span><input name="projectLocation" placeholder="City or region, BC" required maxLength={160} /></label>
        <label>Project type <span>*</span><select name="projectType" defaultValue="" required><option value="" disabled>Select project type</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>Tender closing date<input name="closingDate" type="date" /></label>
      </div>

      <div className="form-section-head"><span>02</span><div><h2>Support needed</h2><p>Select any services that apply.</p></div></div>
      <fieldset className="service-options"><legend className="visually-hidden">Services needed</legend>{neededServices.map((service) => <label className="check-option" key={service}><input type="checkbox" name="servicesNeeded" value={service} /><span>{service}</span></label>)}</fieldset>
      <label className="notes-field">Project notes<textarea name="projectNotes" rows={5} maxLength={5000} placeholder="Plant material, scope, timing or questions to flag" /></label>

      <div className="form-section-head" id="documents"><span>03</span><div><h2>Project documents</h2><p>Share the current schedule, drawings or tender package if available.</p></div></div>
      <div className="upload-zone">
        <input ref={inputRef} id="documents-input" className="visually-hidden" type="file" multiple accept=".pdf,.xls,.xlsx,.csv,.doc,.docx" onChange={(event) => addFiles(event.currentTarget.files)} aria-describedby="upload-help upload-error" />
        <FilePlus2 size={22} aria-hidden="true" />
        <div><strong>Attach project documents</strong><p id="upload-help">PDF, XLS, XLSX, CSV, DOC or DOCX. Up to 10 files, 10 MB each (20 MB total).</p></div>
        <button type="button" className="button button-quiet" onClick={() => inputRef.current?.click()}>Choose files</button>
      </div>
      {fileError && <p className="field-error" id="upload-error" role="alert">{fileError}</p>}
      {files.length > 0 && <ul className="selected-files" aria-label="Selected files">{files.map((file, index) => <li key={`${file.name}-${index}`}><FileText size={15} /><span>{file.name}<small>{(file.size / (1024 * 1024)).toFixed(2)} MB</small></span><button type="button" aria-label={`Remove ${file.name}`} onClick={() => removeFile(index)}><Trash2 size={15} /></button></li>)}</ul>}
      <p className="confidentiality-note">Project details and documents are used to evaluate your request. When configured, this form emails them to the project inbox through IONOS. Do not send information you are not authorized to share.</p>
      <label className="consent-option"><input type="checkbox" name="acknowledge" required /><span>I confirm I am authorized to share these details and documents and understand they will be emailed to the configured project inbox to evaluate my request.</span></label>
      <button className="button submit-button" type="submit" disabled={submitting}>{submitting ? "Sending request..." : "Submit estimate request"}<ArrowUpRight size={14} /></button>
      <p className="form-footnote">Prefer email? <a href="mailto:info@plantestimators.ca">info@plantestimators.ca</a>. Please confirm a secure document-delivery method before sending sensitive files.</p>
    </form>
  );
}
