export type ArticleSection = { heading: string; paragraphs: string[] };
export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  featuredImage: string;
  imageAlt: string;
  introduction: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "estimate-plant-material-landscape-tender-bc",
    title: "How to Estimate Plant Material for a Landscape Tender in BC",
    description: "A practical sequence for reviewing a landscape plant schedule, organizing quantities, checking suppliers and preparing plant pricing assumptions in British Columbia.",
    date: "2026-10-16", author: "Plant Estimators", category: "Estimating", readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Broad planted growing fields viewed across a nursery landscape",
    introduction: "Plant pricing can look like a straightforward multiplication exercise: quantity times unit cost. In a tender package, however, the schedule may be spread across drawings and specifications, supplier availability can differ by size, and delivery details can materially affect the number carried in a bid. A repeatable review makes those assumptions easier to see before close.",
    sections: [
      { heading: "Start with the current tender documents", paragraphs: [
        "Before counting or requesting prices, confirm that the planting schedule, drawings, specifications and addenda are the current set. A species name or quantity may have changed in an addendum while an earlier sheet remains in the drawing package. Record the issue date or revision that your estimate uses, and keep a list of any missing or unclear documents.",
        "Identify where the plant information lives. Some packages provide a consolidated schedule; others combine keyed symbols, plan callouts, notes and specification sections. Check whether alternates, optional areas, restoration zones or future phases belong in the base tender. It is much easier to resolve scope boundaries before sending a long quote request to suppliers."
      ]},
      { heading: "Normalize species, sizes and quantities", paragraphs: [
        "Organize each line with the botanical name as specified, common name where useful, plant size or format, quantity, and any relevant note. Keep the specified size intact. A #2 container, a plug and a bare-root plant are not interchangeable simply because they share a species name; their cost, handling, availability and installation context differ.",
        "Reconcile quantities between the schedule and drawings when the contract documents require it. Document the basis for any counts made from symbols, area ratios or planting details. If a drawing count conflicts with a schedule, do not quietly choose the larger or smaller number. Record the discrepancy and ask the appropriate project contact for direction."
      ]},
      { heading: "Research supply and pricing deliberately", paragraphs: [
        "A useful supplier inquiry includes botanical name, specified size, quantity, required timing, delivery location and any known provenance or production requirements. Grouping information consistently makes responses easier to compare. Ask suppliers to identify quote validity, whether freight is included, what availability was checked and any conditions attached to a substitution or equivalent size.",
        "In British Columbia, project location matters. The supplier options and freight considerations for Metro Vancouver or the Fraser Valley may differ from those for a more distant site. Treat availability as time-specific information rather than a permanent fact, and distinguish a budget price or availability indication from a confirmed reservation or order."
      ]},
      { heading: "Make the estimate reviewable", paragraphs: [
        "Carry assumptions beside the relevant plant lines: date of supplier information, delivery basis, unpriced items, taxes or other exclusions, and any items requiring approval. If a line is priced from a comparable size or a proposed alternative, label it clearly and keep the specified item visible. Avoid merging distinct sizes into one number where that would conceal a scope difference.",
        "Before tender close, perform a final scope check against the latest addenda and your internal bid inclusions. Confirm that quantities, units and delivery assumptions align across the takeoff and supplier responses. A clear plant estimate does not remove every risk, but it gives the bid team a better view of what has been checked and what still needs a decision."
      ]},
    ],
  },
  {
    slug: "read-landscape-planting-schedule",
    title: "How to Read a Landscape Planting Schedule",
    description: "Learn how botanical names, size codes, quantities, plan references, notes and specifications work together in a landscape planting schedule.",
    date: "2026-10-16", author: "Plant Estimators", category: "Project documents", readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Close view of nursery plants and foliage in a growing environment",
    introduction: "A planting schedule is a compact specification, not just a list of plant names. Each row can carry several decisions about identity, size, quantity and installation. Reading it alongside the drawings and specification helps avoid pricing a line that looks familiar but means something different in the project context.",
    sections: [
      { heading: "Read the full plant name", paragraphs: [
        "The botanical name is usually the most precise identifier in the schedule. Read the genus, species and any cultivar or variety designation carefully. Common names are useful for conversation but can refer to different plants in different regions. When a name is abbreviated, use the schedule key or specification to confirm its meaning rather than expanding it from memory.",
        "Also look for notes about provenance, seed source, local ecotype or other project-specific requirements. These details can influence what suppliers can offer and how long sourcing may take. A scientific name on its own does not necessarily describe every procurement requirement in an ecological or restoration planting."
      ]},
      { heading: "Understand the size column", paragraphs: [
        "Size may be stated as a container designation, height range, caliper, plug format, bare-root grade or balled-and-burlapped specification. Those formats describe different stock and are not directly interchangeable. Review the project specification for definitions and minimum dimensions, especially where the schedule uses a shorthand such as #5 or B&B.",
        "A size designation can also affect supplier coverage. A species may be commonly available as a small container while the specified larger size is limited or seasonal. Keep size attached to each quantity when creating a takeoff or quote request; combining sizes can lead to responses that are difficult to compare."
      ]},
      { heading: "Connect schedule rows to the plan", paragraphs: [
        "Schedules often use a key that appears on planting plans. The key may identify a species, a planting group or a particular detail. Check the sheet references and legends to understand whether quantities are scheduled, to be counted from the drawing, or both. If the same identifier appears in multiple areas, note any phase or zone distinction that matters to the bid.",
        "Pay attention to unit conventions. A schedule quantity might count individual plants, trays, plugs, groups or areas. The drawing may clarify spacing or density. If you calculate quantities from area and spacing, write down the basis and confirm that the project documents support that method."
      ]},
      { heading: "Use notes and specifications together", paragraphs: [
        "General notes can define planting season, handling, substitutions, inspection, delivery or installation requirements. Specification sections may explain quality, size measurement, plant condition and approval procedures. These requirements can change price and logistics even when the schedule itself appears complete.",
        "When a schedule conflicts with a drawing or specification, preserve the conflict as a question. Do not assume a plant can be replaced with a similar species, size or format without project approval. A short, well-referenced clarification is more useful than embedding an undocumented interpretation in a tender estimate."
      ]},
    ],
  },
  {
    slug: "specified-plant-unavailable",
    title: "What Happens When a Specified Plant Is Unavailable?",
    description: "A careful approach to plant availability gaps, supplier research, equivalent material and formal substitution requests for landscape projects.",
    date: "2026-10-16", author: "Plant Estimators", category: "Sourcing", readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Natural landscape at early morning with a meadow and wooded horizon",
    introduction: "An unavailable plant does not automatically mean the specification should change. It means the project team needs clearer information: what was searched, which sizes and quantities were checked, what timing is required, and who has authority to review an alternative. Keeping those steps distinct protects both the estimate and the project intent.",
    sections: [
      { heading: "Confirm the exact supply question", paragraphs: [
        "First verify the botanical name, specified size, quantity, delivery timing and location. A supplier may have the species in a different size, a related cultivar or a limited quantity. Those responses should not be collapsed into a simple available or unavailable label. Ask what was checked and when, and whether the response is a current stock indication, a future production estimate or a firm quote condition.",
        "Check other suppliers where time and scope permit. A single nursery's inventory is not the whole market, although a search across multiple sources still cannot guarantee future supply. Record the supplier and date of the inquiry so a team can decide whether updated confirmation is needed before purchasing."
      ]},
      { heading: "Keep specified material separate from alternatives", paragraphs: [
        "A proposed alternative should be shown as a separate option, with its scientific name, size, quantity, source and any differences identified. Avoid replacing the original schedule row in a working estimate. Keeping both visible helps the estimator and reviewer understand the cost and scope implications without losing sight of the contract requirement.",
        "For restoration work, the review may involve provenance, ecological function, habitat conditions, plant form, timing and project-specific criteria. A species with a similar common name or appearance is not necessarily a suitable ecological substitute. The appropriate designer, environmental professional or contract authority must assess the proposal."
      ]},
      { heading: "Follow the project's approval process", paragraphs: [
        "Tender documents and contracts typically set out how substitutions are requested and approved. Follow that process and submit the information the project team needs: the specified item, the reason for the request, supplier availability evidence, the proposed alternative and any effects on cost, schedule or installation. An estimator can organize the information but cannot grant approval on behalf of the project authority.",
        "Do not assume that silence means approval. Keep written confirmation with the project record and update purchasing documents only after the required approval has been received. If the substitution remains unresolved at bid time, identify the assumption or risk in the estimate in a way that is consistent with the tender instructions."
      ]},
      { heading: "Revisit pricing and logistics", paragraphs: [
        "A different size or source can change unit pricing, freight, handling, availability timing and delivery sequence. A proposed alternative may be less expensive at the nursery gate but require a different quantity, staging plan or maintenance expectation. Compare the full project effect rather than focusing on a single line price.",
        "Availability changes. If procurement is delayed or the planting window moves, refresh the inquiry before committing. A careful substitution review is a documented decision process, not a promise that a replacement will be accepted or delivered."
      ]},
    ],
  },
  {
    slug: "plant-container-sizes-landscape-projects",
    title: "Understanding Plant Container Sizes for Landscape Projects",
    description: "Why container sizes and stock formats matter to landscape quantities, supplier quotes, handling, freight and specification compliance.",
    date: "2026-10-16", author: "Plant Estimators", category: "Plant material", readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Plants growing in nursery containers arranged in rows",
    introduction: "Plant size codes make schedules concise, but they can be easy to misread when different stock types appear in the same package. Container designation is only one part of the specification. The plant's dimensions, quality requirements, format, quantity and delivery conditions all influence how a quote should be interpreted.",
    sections: [
      { heading: "A code is not a complete description", paragraphs: [
        "Codes such as #1, #5 or #15 commonly refer to container categories in nursery trade, but the applicable standard and actual dimensions should be checked in the project specification and supplier quote. Container volume does not, by itself, state the plant's height, spread, caliper or branching. Those attributes may appear in a separate schedule column or specification clause.",
        "Different suppliers may describe stock using different conventions. When comparing quotes, ask the supplier to confirm how the quoted size meets the specified requirement. Make the unit and format explicit in the estimate rather than carrying a shorthand that a reviewer could interpret another way."
      ]},
      { heading: "Compare like with like", paragraphs: [
        "A plug, a 10 cm pot, a larger container, bare-root stock and B&B are different supply formats. They can differ in production, root condition, handling, delivery method and planting needs. A quote for the same species in another format is useful information, but it is not a directly comparable price until the contract requirement and any approval path have been checked.",
        "For trees, the schedule may specify caliper, height or root-ball details alongside a container or B&B designation. For grasses and wetland material, the schedule may use plugs, cells or trays. Preserve those differences when grouping quote requests and checking supplier responses."
      ]},
      { heading: "Size affects logistics as well as unit cost", paragraphs: [
        "Larger stock can change pallet or truck space, unloading equipment, handling time and site access requirements. A package with many small plugs may have a high plant count but different load characteristics than a smaller number of larger trees. Delivery planning should account for both dimensions and total quantities, not only line-item counts.",
        "Staging can matter too. If the site cannot receive the full order at once, phased deliveries may change freight cost, plant holding requirements and coordination effort. Identify those conditions early enough for the contractor and supplier to discuss a workable plan."
      ]},
      { heading: "Keep size traceable through the estimate", paragraphs: [
        "Carry the specified size alongside the species and quantity from schedule to takeoff, quote request and final estimate. If a supplier offers a different size, record it separately with the supplier's description and any caveat. This makes review easier and reduces the chance of a price being attached to the wrong format.",
        "When size wording is ambiguous, check the project documents and ask a focused clarification question. Do not infer equivalency from a container number alone. A traceable size review supports a more defensible estimate and gives procurement a clearer starting point after award."
      ]},
    ],
  },
  {
    slug: "plant-procurement-restoration-projects",
    title: "Plant Procurement Considerations for Restoration Projects",
    description: "A project-minded checklist for restoration plant procurement, including provenance, seasonality, plugs, sourcing, delivery phases and approval.",
    date: "2026-10-16", author: "Plant Estimators", category: "Restoration", readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Native vegetation and young plants growing in a natural setting",
    introduction: "Restoration plant procurement has to connect a project specification with living material and a site-specific schedule. Species, source, size, planting window and delivery sequence can all be important. Early organization helps teams find questions that affect availability before they are compressed into a tender deadline or a planting date.",
    sections: [
      { heading: "Read ecological requirements before requesting quotes", paragraphs: [
        "Start with the botanical names, specified sizes, quantities, planting zones and any provenance or source requirements. Wetland, riparian and upland schedules may contain different plant forms and delivery needs. Notes about local ecotypes, seed zones or collection requirements should be carried through a supplier inquiry exactly as written and referred to the project professional when interpretation is needed.",
        "A species list alone may not capture the full requirement. Review drawings, specifications and addenda for quality, timing, labeling, inspection, substitutions and installation notes. Record missing information rather than filling gaps with assumptions about what is ecologically acceptable."
      ]},
      { heading: "Check timing and production realities", paragraphs: [
        "Some material is produced to order or available within seasonal windows. Plugs, small container stock, larger trees and bare-root formats can have different production and handling cycles. Ask suppliers about current availability, expected ready dates, quantity limits and quote validity. Treat estimates as time-bound until the supplier confirms a specific order and delivery arrangement.",
        "Compare the expected supply timing with site access, contractor sequencing and the project's planting window. If a project is phased, identify which quantities are required for each phase and whether the supplier can support those dates. An estimate that prices the whole schedule without considering timing may miss a substantial coordination issue."
      ]},
      { heading: "Plan delivery for the site and the material", paragraphs: [
        "Restoration sites may have constrained access, limited staging, temporary roads or sensitive areas where unloading and storage require coordination. The number of plants, stock size, palletization, truck type and delivery point influence freight planning. Confirm the assumptions with the contractor and supplier instead of treating delivery as a generic line item.",
        "Phased delivery can reduce on-site holding but may add separate freight events and coordination. Plants are living material; extended holding can create care and condition concerns. Where timing shifts, refresh supplier confirmation and align the delivery sequence with the team responsible for receiving and planting."
      ]},
      { heading: "Document alternatives and approvals", paragraphs: [
        "If specified material cannot be sourced, keep the original requirement visible and gather the evidence needed for a substitution review. A proposed alternative may need review for ecological function, source, size, timing or other specification criteria. Similarity of appearance or common name does not establish suitability.",
        "Follow the contract's approval process and obtain written direction from the appropriate project authority before changing procurement documents. Estimating and sourcing support can organize supplier information and cost implications, but ecological or design acceptance belongs with the authorized project professional."
      ]},
    ],
  },
  {
    slug: "freight-plant-material-pricing",
    title: "How Freight Impacts Plant Material Pricing",
    description: "Understand how distance, plant size, load configuration, delivery access, staging and phased shipments influence landscape plant freight costs.",
    date: "2026-10-16", author: "Plant Estimators", category: "Logistics", readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Wide agricultural landscape representing plant production and delivery distance",
    introduction: "Freight is easy to underestimate when a plant quote is reviewed only as a unit price. A shipment depends on where material is available, how it is packed, what vehicle can carry it and whether the site can receive it. Those details can change the delivered plant cost and should be visible in a project estimate.",
    sections: [
      { heading: "Know what the supplier price includes", paragraphs: [
        "Ask whether the supplier quote is nursery pickup, delivery to a defined address, or an estimate with freight to be confirmed. Clarify any minimum load, fuel, handling, unloading or access assumptions. A quote that includes delivery to a nearby depot may not cover transport to the jobsite or placement at the planting area.",
        "Record the delivery location and quote date. For projects across British Columbia, a supplier's distance from the site may significantly affect freight options. Metro Vancouver, the Fraser Valley and remote or access-constrained locations can present different routing and cost considerations."
      ]},
      { heading: "Plant format changes the load", paragraphs: [
        "Large trees, B&B material and substantial container stock take more space and may require different loading or unloading equipment than plugs and small pots. A high number of plants does not always translate into a full truck, and a relatively short species list can still require significant transport capacity if the stock is large.",
        "Ask how the plants will be packed and whether a mixed order can travel together. Species from different suppliers or production locations may require separate shipments. Combining orders can improve efficiency in some cases, but timing and handling constraints may make separate deliveries more practical."
      ]},
      { heading: "Include site receiving conditions", paragraphs: [
        "Delivery cost is affected by more than road distance. Consider truck access, turning room, unloading equipment, weight limits, site hours, traffic control, staging area and whether the delivery point is at the site gate or closer to the planting location. Identify special constraints early and make sure the receiving party knows what equipment or labor is expected.",
        "For sensitive restoration areas, the available route may be limited or a transfer to smaller vehicles may be needed. Those arrangements should be discussed with the project team and supplier. Do not assume that a standard nursery delivery includes specialized access or on-site distribution."
      ]},
      { heading: "Model delivery phasing honestly", paragraphs: [
        "Phased work can require multiple dispatches, each with its own freight and coordination cost. Compare the cost of one consolidated load with the practical implications of holding plants on site. Site readiness, storage conditions, planting sequence and living-material care all influence the better option.",
        "In the estimate, state whether delivery is included, assumed, allowance-based or still to be confirmed. Refresh freight pricing when quantities, supplier locations, timing or site conditions change. Clear assumptions help the bid team understand what has been carried and what requires a final supplier confirmation."
      ]},
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}