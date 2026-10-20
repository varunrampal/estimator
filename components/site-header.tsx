"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["How it works", "/#process"],
  ["Expertise", "/#expertise"],
  ["About", "/about"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Plant Estimators home" onClick={() => setOpen(false)}>
          <Image className="brand-logo" src="/images/plant-estimators-logo-transparent.png" alt="Plant Estimators" width={1760} height={500} priority unoptimized />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="upload-link" href="/request-estimate#documents">Upload plant list <ArrowUpRight size={13} /></Link>
          <Link className="button" href="/request-estimate">Request an estimate <ArrowUpRight size={14} /></Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="button" href="/request-estimate" onClick={() => setOpen(false)}>Request an estimate <ArrowUpRight size={14} /></Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
