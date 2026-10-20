import {
  ClipboardList,
  FileSearch,
  Leaf,
  ListChecks,
  PackageCheck,
  Truck,
  Trees,
  HandCoins,
} from "lucide-react";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://plantestimators.ca";

export const services = [
  { title: "Plant Estimating", description: "Plant quantity reviews, pricing and cost analysis shaped around project documents and bid requirements.", href: "/plant-estimating", icon: HandCoins },
  { title: "Plant Takeoffs", description: "Organized planting quantities from drawings, specifications and planting schedules.", href: "/plant-takeoffs", icon: ListChecks },
  { title: "Plant Sourcing", description: "Supplier research and availability checks for specified plant material across the BC market.", href: "/plant-sourcing-procurement", icon: Leaf },
  { title: "Procurement Support", description: "Practical support for pricing conversations, purchasing requirements and supplier coordination.", href: "/plant-sourcing-procurement", icon: PackageCheck },
  { title: "Plant Substitutions", description: "Consider alternatives when specified material is unavailable, subject to project approval.", href: "/plant-sourcing-procurement", icon: FileSearch },
  { title: "Tender Support", description: "Plant-material assistance for landscape, restoration and construction tender packages.", href: "/tender-support", icon: ClipboardList },
  { title: "Freight & Delivery", description: "Consider plant volumes, load requirements, delivery timing and project phasing.", href: "/plant-sourcing-procurement", icon: Truck },
  { title: "Native & Restoration", description: "BC native, riparian, wetland and ecological restoration plant material knowledge.", href: "/native-restoration-plants", icon: Trees },
];

export const industries = [
  "Landscape Contractors", "Environmental Contractors", "Restoration Contractors", "Civil Contractors", "Developers",
  "Landscape Architects", "Environmental Consultants", "Municipal Project Teams", "Nurseries", "General Contractors",
];

export const processSteps = [
  { title: "Send your project", description: "Share the documents and deadline. We will confirm the scope and information needed.", details: ["Plant list or schedule", "Tender package", "Drawings and specifications", "Excel schedules"] },
  { title: "We review the package", description: "We check the plant information against quantities, sizes, requirements and timing.", details: ["Species and sizes", "Quantities", "Availability risks", "Project requirements"] },
  { title: "Estimate and source", description: "We organize the requested takeoff, pricing, sourcing and delivery considerations.", details: ["Quantity review", "Supplier sourcing", "Substitution considerations", "Logistics notes"] },
  { title: "Receive your estimate", description: "Get an organized deliverable to support bidding, budgeting or procurement planning.", details: ["Clear assumptions", "Plant-focused detail", "Bid-ready organization", "Next-step discussion"] },
];

export const projectTypes = [
  "Riparian restoration", "Wetland restoration", "Municipal parks", "Roadside landscape", "Commercial landscape",
  "Stream restoration", "Habitat enhancement", "Subdivision landscaping", "Public realm", "Urban forestry",
];

export const plantSizes = ["Plugs", "10 cm", "#1", "#2", "#3", "#5", "#7", "#10", "#15", "B&B"];

export const nativeSpecies = [
  ["Cornus sericea", "Red-osier dogwood"], ["Physocarpus capitatus", "Pacific ninebark"],
  ["Rubus spectabilis", "Salmonberry"], ["Acer circinatum", "Vine maple"],
  ["Acer macrophyllum", "Bigleaf maple"], ["Alnus rubra", "Red alder"],
  ["Pseudotsuga menziesii", "Douglas-fir"], ["Thuja plicata", "Western redcedar"],
  ["Carex species", "Sedges"], ["Juncus species", "Rushes"], ["Salix species", "Willows"],
];

export const insights = [
  { slug: "estimate-plant-material-landscape-tender-bc", title: "How to Estimate Plant Material for a Landscape Tender in BC", category: "Estimating", description: "A practical way to move from planting schedule to a defensible, organized plant estimate." },
  { slug: "read-landscape-planting-schedule", title: "How to Read a Landscape Planting Schedule", category: "Project documents", description: "The details in a schedule that shape quantities, sourcing and pricing." },
  { slug: "specified-plant-unavailable", title: "What Happens When a Specified Plant Is Unavailable?", category: "Sourcing", description: "A project-minded approach to availability gaps and substitution requests." },
  { slug: "plant-container-sizes-landscape-projects", title: "Understanding Plant Container Sizes for Landscape Projects", category: "Plant material", description: "Why container sizes matter to quantity, cost, handling and specifications." },
  { slug: "plant-procurement-restoration-projects", title: "Plant Procurement Considerations for Restoration Projects", category: "Restoration", description: "Seasonality, provenance, timing and coordination considerations for restoration material." },
  { slug: "freight-plant-material-pricing", title: "How Freight Impacts Plant Material Pricing", category: "Logistics", description: "The shipment and delivery details that can change a plant package budget." },
];

export const routePages: Record<string, {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string; points?: string[] }[];
}> = {
  services: {
    title: "Plant services for project teams",
    description: "Plant estimating, takeoffs, sourcing, procurement and tender support for landscape and restoration projects across British Columbia.",
    eyebrow: "Services",
    intro: "From a first quantity review to a fully assembled plant estimate, support is shaped around your documents, timeline and project needs.",
    sections: [
      { heading: "One plant package, connected decisions", body: "Quantities, sizes, availability, substitutions and delivery can affect one another. Plant Estimators brings these details into view so project teams can make informed decisions as they prepare a bid or procurement plan.", points: services.map((service) => service.title) },
      { heading: "Support scoped to your project", body: "Some teams need pricing on a defined list. Others need help reading a schedule, finding suppliers or understanding an availability risk. We confirm the work and assumptions before proceeding." },
    ],
  },
  "plant-estimating": {
    title: "Plant estimating services in British Columbia",
    description: "Plant material estimating for landscape and restoration bids in BC. Review quantities, sizes, pricing assumptions and sourcing needs with a plant-focused estimator.",
    eyebrow: "Plant estimating · British Columbia",
    intro: "A plant estimate is more than a unit price beside a species name. It needs to account for the schedule, specified sizes, quantities, availability and the practical work of getting material to site.",
    sections: [
      { heading: "Plant material estimating built around the documents", body: "Plant Estimators reviews planting schedules, drawings and specifications to organize the plant scope for bidding or budgeting. The work can include quantity checks, pricing research, supplier comparisons and clear assumptions about what has and has not been confirmed.", points: ["Review plant lists and schedules", "Check sizes, quantities and notes", "Research pricing and supplier availability", "Flag incomplete or unclear information", "Organize estimate detail for project use"] },
      { heading: "A BC plant estimator for landscape and restoration work", body: "Supplier coverage, seasonality, shipping distance and project location all influence a BC estimate. We consider the market context across Metro Vancouver, the Fraser Valley and projects elsewhere in the province, while confirming supplier and freight assumptions rather than presenting unverified availability as fact." },
      { heading: "When to request an estimate", body: "Send the package when a tender closes soon, the plant scope is large, plant sizes are mixed, or you need another set of eyes on sourcing and pricing. Early review can help identify questions that are easier to resolve before close." },
    ],
  },
  "plant-takeoffs": {
    title: "Plant takeoffs from drawings and schedules",
    description: "Organized plant takeoffs from landscape drawings, planting schedules and project specifications for BC contractors and project teams.",
    eyebrow: "Plant takeoffs",
    intro: "A reliable takeoff starts with the source documents. We help convert planting information into an organized quantity view that can be reviewed, priced and carried into a bid.",
    sections: [
      { heading: "From plan notes to a usable quantity list", body: "Planting plans may refer to schedules, keyed notes, details and specification sections. Our review traces those references, flags conflicts and records the quantity basis so your team can understand the resulting list.", points: ["Planting plans and symbols", "Species and schedule references", "Container sizes and specifications", "Quantities and alternates", "Unclear or conflicting callouts"] },
      { heading: "Documents we can review", body: "Share PDFs, spreadsheet schedules and relevant drawing or specification packages. For large sets, identifying the planting sheets and addenda helps keep the takeoff focused on the current scope." },
    ],
  },
  "plant-sourcing-procurement": {
    title: "Plant sourcing and procurement support in BC",
    description: "Plant sourcing and procurement support across British Columbia, including supplier research, availability questions, practical alternatives and delivery planning.",
    eyebrow: "Plant sourcing · procurement",
    intro: "A specified plant may be available in one size but not another, or the timing and delivery requirements may change the practical sourcing options. Plant Estimators helps teams investigate these questions before they become bid or procurement surprises.",
    sections: [
      { heading: "Supplier research with project context", body: "Sourcing begins with the species, size, quantity, timing and delivery location. We can help identify potential suppliers and organize pricing or availability information, with the limits and date of each inquiry kept visible.", points: ["Supplier identification and quote coordination", "Availability checks by size and quantity", "Pricing comparisons and assumptions", "Plant substitution considerations", "Freight, phasing and delivery notes"] },
      { heading: "Procurement support, not unverified promises", body: "Availability changes and quotes have conditions. We distinguish supplier responses from confirmed orders and identify where a team needs written confirmation, approval or a refreshed quote before committing." },
      { heading: "Landscape and restoration material", body: "Support covers trees, shrubs, perennials, grasses, plugs, wetland and riparian plants, and general landscape plant material. BC native and restoration knowledge is a specialty within that broader scope." },
    ],
  },
  "tender-support": {
    title: "Plant tender support for landscape bids",
    description: "Plant tender estimating and bid support for landscape, civil and restoration contractors working on projects in British Columbia.",
    eyebrow: "Tender support",
    intro: "Tender deadlines leave little room for plant information to be incomplete. Plant-focused support helps contractors organize the package, identify sourcing questions and prepare pricing assumptions before submission.",
    sections: [
      { heading: "Plant-material assistance for bid packages", body: "We review the plant portion of a tender, including schedules, drawings, addenda and specifications provided by your team. The requested scope may be a takeoff, price research, supplier outreach, availability review or a combination of these tasks.", points: ["Plant schedule and drawing review", "Quantity and size organization", "Pricing and supplier research", "Questions and availability risks", "Substitution and delivery considerations"] },
      { heading: "Work back from the close", body: "A useful request includes the tender closing date, the current addenda and any internal pricing milestones. We confirm what can reasonably be completed in the available time and make assumptions explicit in the deliverable." },
      { heading: "Bid support that respects project approval", body: "A substitution is a consideration for review, not an automatic change to the specification. Any proposed alternative remains subject to the contract documents and approval by the appropriate project representative." },
    ],
  },
  "native-restoration-plants": {
    title: "BC native and restoration plant sourcing",
    description: "Plant sourcing support for BC native, riparian and wetland species used in ecological restoration, stream work and landscape projects.",
    eyebrow: "BC native · restoration specialty",
    intro: "Plant Estimators supports general landscape plant material and brings focused knowledge of native and restoration schedules, including riparian, wetland and other ecologically specified planting.",
    sections: [
      { heading: "Native plant knowledge for complex schedules", body: "Restoration schedules can combine trees, shrubs, sedges, rushes and plugs with exacting size, timing and project requirements. We help organize the information, investigate sourcing questions and surface details that may need confirmation.", points: ["Riparian and wetland species", "Native shrubs and trees", "Sedges, rushes and willow material", "Plug and container-grown formats", "Project timing and phased delivery"] },
      { heading: "Species are part of a specification", body: "Scientific names, sizes, provenance and installation context matter. A similar common name does not establish that two plants are interchangeable. Alternatives need review against the project requirements and approval process." },
      { heading: "Across the broader landscape scope", body: "The restoration specialty complements support for ornamental plants, trees, shrubs, perennials, grasses and other landscape construction material. Plant lists can be reviewed as one package even when they span several plant types." },
    ],
  },
  industries: {
    title: "Built for the teams moving plants from specification to site",
    description: "Plant estimating and sourcing support for contractors, consultants, developers, nurseries and public project teams across BC.",
    eyebrow: "Who we help",
    intro: "Plant Estimators works with the people responsible for pricing, planning or coordinating plant material within a larger construction or restoration project.",
    sections: [
      { heading: "Contractors and project partners", body: "Whether the plant scope is one line in a broad civil tender or the central schedule in a landscape package, the support can be tailored to the responsibilities of your team.", points: industries },
      { heading: "A practical interface between documents and supply", body: "Consultants and designers define project requirements; suppliers share availability and pricing; contractors carry the work into bids and delivery plans. Plant Estimators helps organize plant-specific information across those conversations without replacing design authority or supplier commitments." },
    ],
  },
  "landscape-contractors": {
    title: "Plant estimating support for landscape contractors",
    description: "Landscape plant takeoffs, estimating and sourcing support for BC contractors preparing bids, budgets and procurement plans.",
    eyebrow: "Landscape contractors",
    intro: "Landscape bids often combine a broad planting schedule with a short pricing window. Plant Estimators helps contractors organize quantities, price research and supplier questions so the plant package is easier to carry forward.",
    sections: [
      { heading: "Keep the plant scope visible", body: "Plant schedules may contain hundreds of lines, multiple sizes and specific delivery requirements. We can help turn that detail into a structured takeoff and make unclear quantities or assumptions easier to identify.", points: ["Commercial landscape projects", "Municipal parks and public realm", "Roadside and civil landscape", "Subdivision and development work", "Plant pricing and procurement planning"] },
      { heading: "Support for the bid and beyond", body: "Depending on scope, support can continue from initial estimating into supplier comparisons, availability updates and delivery planning. Procurement commitments remain with the purchasing party and supplier." },
    ],
  },
  "restoration-contractors": {
    title: "Plant sourcing support for restoration contractors",
    description: "Plant takeoffs, sourcing research and tender support for BC restoration contractors working with native, riparian and wetland plant schedules.",
    eyebrow: "Restoration contractors",
    intro: "Ecological restoration schedules bring plant specification, sourcing and timing together. We help contractors understand the plant package and investigate practical supply questions early.",
    sections: [
      { heading: "Restoration material with project context", body: "Support may include native trees and shrubs, sedges, rushes, wetland plants, riparian species and plugs. We review the names, sizes, quantities and schedule notes provided, and flag where an ecological or contract interpretation is needed from the project team.", points: ["Riparian and stream restoration", "Wetland and habitat enhancement", "Native plant schedules", "Phased or seasonal delivery", "Availability and substitution questions"] },
      { heading: "Clear scope, careful assumptions", body: "Plant sourcing research is date- and supplier-specific. We identify what was checked, what remains uncertain and what requires project approval, so an estimate does not imply a confirmed supply commitment." },
    ],
  },
  about: {
    title: "Bridging plant specifications and real-world supply",
    description: "Plant Estimators supports the people pricing and procuring plant material, with practical knowledge of nursery operations, quotations, sourcing and delivery coordination.",
    eyebrow: "About Plant Estimators",
    intro: "Plant Estimators was created to bridge the gap between project specifications, nursery availability and real-world plant procurement.",
    sections: [
      { heading: "Practical experience, applied to plant packages", body: "The work is grounded in the details that shape plant orders: quotations, plant recommendations, nursery operations, customer coordination, pricing, substitutions and delivery planning. That perspective helps connect what a project asks for with the information suppliers can confirm.", points: ["Plant quotations and pricing", "Plant recommendations and substitutions", "Nursery operations and availability", "Customer and supplier coordination", "Delivery planning and restoration material"] },
      { heading: "An independent plant-focused resource", body: "Plant Estimators supports contractors, consultants and project teams with plant-specific estimating and sourcing work. We do not replace a landscape architect, environmental professional, contract administrator or plant supplier, and we do not imply design approval or supply commitments that have not been made." },
    ],
  },
  "privacy-policy": {
    title: "Privacy policy",
    description: "How Plant Estimators handles information shared through this website and estimate request forms.",
    eyebrow: "Website information",
    intro: "When configured, estimate requests and contact messages are sent through IONOS SMTP to the Plant Estimators inbox configured for this site. Uploaded documents are attached to the estimate email. The application does not currently write submissions to its own database or file store.",
    sections: [{ heading: "Email delivery and retention", body: "IONOS processes the email and attachments, and the configured recipient mailbox receives them. Email and mailbox retention are governed by IONOS and recipient mailbox settings. Do not submit information you are not authorized to share. Before launch, replace this starter notice with a policy covering the operating business, applicable privacy requirements, mailbox retention and any other third-party services." }],
  },
  terms: {
    title: "Website terms",
    description: "Preliminary terms for the Plant Estimators website. Service engagements require a separate confirmed scope.",
    eyebrow: "Website information",
    intro: "Website content is general information and is not a supplier quote, a plant order, professional design advice or a commitment to perform services.",
    sections: [{ heading: "Confirming a service request", body: "A request made through this site is not accepted until a scope, timeline and applicable terms have been confirmed directly. Plant availability, pricing, substitutions and delivery details require confirmation with relevant suppliers and project representatives." }],
  },
};
