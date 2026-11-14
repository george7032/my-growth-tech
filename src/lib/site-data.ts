export const CONTACT = {
  phone: "+254 115 339 092",
  phoneHref: "tel:+254115339092",
  whatsapp: "254115339092",
  email: "info@zebnextechsolutions.co.ke",
  location: "Benedicta, Utawala (Pioneer Trading Centre – P19)",
  hours: "Monday – Friday, 8:00 AM – 5:00 PM EAT",
  socials: [
    { name: "Instagram", url: "https://instagram.com/zebnextechsolutions" },
    { name: "Facebook", url: "https://facebook.com/zebnextechsolutions" },
    { name: "LinkedIn", url: "https://linkedin.com/company/zebnextechsolutions" },
    { name: "X", url: "https://x.com/zebnextechsolutions" },
    { name: "TikTok", url: "https://tiktok.com/@zebnextechsolutions" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  body: string[];
  included: string;
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    title: "Websites",
    tagline: "Professional, responsive websites built for your organization.",
    body: [
      "Your website is often the first interaction a customer has with your organization. We build clear, fast websites that work across phones and computers and make it easy for visitors to find the information they need.",
      "From company and school websites to e-commerce, booking platforms and customer portals, each site is designed around your goals and the way your team works.",
    ],
    included:
      "Custom design, mobile responsiveness, content pages, contact options, basic search setup, hosting guidance and optional ongoing care.",
  },
  {
    slug: "management-systems",
    title: "Management Systems",
    tagline: "Custom web-based systems for day-to-day operations and clear reporting.",
    body: [
      "Replace scattered notebooks and spreadsheets with one dependable system for the records your organization relies on each day.",
      "We build management systems around your workflows, with useful records, payment tracking, reports and staff access. Systems can be tailored for schools, property operations, retail, transport and other organizations.",
    ],
    included:
      "Workflow planning, tailored records and modules, payment and messaging integrations where needed, operational reports, staff training and ongoing support options.",
  },
];

export const CLIENTS = [
  "KHL",
  "Embakasi Bedicta Academy",
  "Antique",
  "Gokyle Tours and Safaris",
  "Lancaster Security Ltd",
  "Pure Care Services",
];

export const CATEGORIES = ["Websites", "Management Systems"] as const;

export type Post = {
  slug: string;
  title: string;
  category: (typeof CATEGORIES)[number] | "Tech Trends" | "Cybersecurity Tips" | "Branding Strategy" | "Cloud Adoption";
  excerpt: string;
  date: string;
  readTime: string;
  image: "security" | "network" | "branding" | "web" | "analytics";
  body: { heading: string; paragraphs: string[] }[];
};

const ALL_POSTS: Post[] = [
  {
    slug: "signs-your-business-network-needs-an-upgrade",
    title: "5 Signs Your Business Network Needs an Upgrade",
    category: "Tech Trends",
    excerpt: "Slow mornings and dropped calls are symptoms — here's how to read them.",
    date: "2026-08-18",
    readTime: "6 min read",
    image: "network",
    body: [
      {
        heading: "The network is usually the last thing anyone blames",
        paragraphs: [
          "When files take forever to open or video calls stutter, most teams blame the laptop or the internet provider. More often the bottleneck sits between the two: ageing switches, overloaded access points, or cabling that was never designed for the number of people now using it.",
          "The good news is that network problems announce themselves fairly clearly if you know what to look for.",
        ],
      },
      {
        heading: "What to watch for",
        paragraphs: [
          "Dead zones in parts of the office, devices that drop off Wi-Fi at predictable times of day, a network that slows down every time someone uploads a large file, equipment that no longer receives firmware updates, and a setup nobody has documented.",
          "Any two of those together usually means the network is at capacity rather than broken.",
        ],
      },
      {
        heading: "Upgrading without over-buying",
        paragraphs: [
          "An upgrade doesn't have to mean replacing everything. Start with a survey of actual usage and coverage, fix the weakest link, and plan the rest in stages so spend follows need.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-basics-every-small-business-should-have",
    title: "Cybersecurity Basics Every Small Business Should Have in Place",
    category: "Cybersecurity Tips",
    excerpt: "The short list of protections that stops most real-world attacks.",
    date: "2026-08-02",
    readTime: "7 min read",
    image: "security",
    body: [
      {
        heading: "Most attacks are opportunistic",
        paragraphs: [
          "Small businesses are rarely singled out. They are swept up by automated attacks looking for reused passwords, unpatched software, and inboxes with no filtering.",
          "That's encouraging, because opportunistic attacks are also the easiest to defend against.",
        ],
      },
      {
        heading: "The essentials",
        paragraphs: [
          "Multi-factor authentication on email and finance systems. A password manager so staff stop reusing credentials. Automatic updates on every device. Tested backups kept separate from the main system. And thirty minutes of phishing awareness training every quarter.",
        ],
      },
      {
        heading: "What is usually overkill",
        paragraphs: [
          "Enterprise threat-hunting platforms and 24/7 security operations centres rarely make sense for a team of fifteen. Spend the budget on the basics first — they cover the overwhelming majority of incidents.",
        ],
      },
    ],
  },
  {
    slug: "is-it-time-to-rebrand",
    title: "Is It Time to Rebrand? Here's How to Tell",
    category: "Branding Strategy",
    excerpt: "A practical test for whether your brand is dated or just unfamiliar to you.",
    date: "2026-07-21",
    readTime: "5 min read",
    image: "branding",
    body: [
      {
        heading: "Boredom is not a business case",
        paragraphs: [
          "You see your own brand more than anyone else does, so it dates faster in your eyes than in your customers'. Before starting a rebrand, separate your fatigue from real signals.",
        ],
      },
      {
        heading: "Real signals",
        paragraphs: [
          "Your offering has changed and the name or look no longer describes it. Your materials are inconsistent because nobody documented the rules. You're moving into a market where the current identity reads as amateur. Or you're being confused with a competitor.",
        ],
      },
      {
        heading: "Refresh before rebuild",
        paragraphs: [
          "Often a disciplined refresh — tightened typography, a defined palette, and a proper set of guidelines — solves the problem at a fraction of the cost and keeps the recognition you have already earned.",
        ],
      },
    ],
  },
  {
    slug: "cloud-vs-on-premise",
    title: "Cloud vs. On-Premise: What Actually Makes Sense for a Growing Business",
    category: "Cloud Adoption",
    excerpt: "An honest comparison, including the costs nobody mentions upfront.",
    date: "2026-07-06",
    readTime: "8 min read",
    image: "analytics",
    body: [
      {
        heading: "It is rarely all or nothing",
        paragraphs: [
          "Most growing businesses end up somewhere in the middle: email, documents, and customer systems in the cloud, with a local server for the things that genuinely need to be on site.",
        ],
      },
      {
        heading: "Where cloud wins",
        paragraphs: [
          "Predictable monthly cost instead of large capital purchases, remote access by default, and someone else handling hardware failure and patching.",
        ],
      },
      {
        heading: "Where on-premise still wins",
        paragraphs: [
          "Very large local files, equipment that must keep working through internet outages, and workloads where bandwidth costs would exceed the savings. Plan the mix around how your team actually works.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-a-website-convert",
    title: "What Makes a Website Actually Convert Visitors Into Customers",
    category: "Tech Trends",
    excerpt: "Clarity, speed and one obvious next step beat clever design every time.",
    date: "2026-06-24",
    readTime: "6 min read",
    image: "web",
    body: [
      {
        heading: "Say what you do in one line",
        paragraphs: [
          "Visitors decide within seconds whether they are in the right place. A specific, plainly worded headline outperforms an abstract slogan almost every time.",
        ],
      },
      {
        heading: "Make the next step obvious",
        paragraphs: [
          "One primary action per page — call, book, enquire — repeated at natural decision points. Competing buttons split attention and reduce enquiries.",
        ],
      },
      {
        heading: "Speed is a conversion feature",
        paragraphs: [
          "Compressed images, minimal scripts, and a fast host do more for enquiries than another round of visual polish.",
        ],
      },
    ],
  },
  {
    slug: "real-cost-of-a-data-breach",
    title: "Understanding the Real Cost of a Data Breach for Small Businesses",
    category: "Cybersecurity Tips",
    excerpt: "The invoice is only part of it — downtime and trust cost more.",
    date: "2026-06-09",
    readTime: "7 min read",
    image: "security",
    body: [
      {
        heading: "Three kinds of cost",
        paragraphs: [
          "Direct recovery, lost trading time, and reputational damage. The first is the smallest and the only one most businesses budget for.",
        ],
      },
      {
        heading: "Downtime dominates",
        paragraphs: [
          "A week of disrupted operations usually costs more than the technical clean-up, especially where invoicing or delivery depends on the affected system.",
        ],
      },
      {
        heading: "Prevention is cheap by comparison",
        paragraphs: [
          "Backups, multi-factor authentication and a written incident plan cost a fraction of a single serious incident.",
        ],
      },
    ],
  },
  {
    slug: "brand-identity-that-lasts",
    title: "Building a Brand Identity That Doesn't Need a Redesign Every Year",
    category: "Branding Strategy",
    excerpt: "Durable identities are systems, not single logos.",
    date: "2026-05-27",
    readTime: "5 min read",
    image: "branding",
    body: [
      {
        heading: "Design the system, not the artwork",
        paragraphs: [
          "A logo is one asset. What keeps a brand coherent is the palette, typography, spacing and tone rules that sit behind it.",
        ],
      },
      {
        heading: "Avoid trend-locked choices",
        paragraphs: [
          "Effects that date quickly tie your identity to a moment. Restraint ages better.",
        ],
      },
      {
        heading: "Write it down",
        paragraphs: [
          "Guidelines let staff, printers and partners apply the brand consistently without asking, which is what makes it feel established.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-database",
    title: "A Non-Technical Guide to Choosing the Right Database for Your Business",
    category: "Tech Trends",
    excerpt: "What the choice actually affects, in plain language.",
    date: "2026-05-12",
    readTime: "6 min read",
    image: "analytics",
    body: [
      {
        heading: "Start with the questions you need answered",
        paragraphs: [
          "The reports and lookups your business depends on shape the structure far more than any technology preference.",
        ],
      },
      {
        heading: "Structure beats software choice",
        paragraphs: [
          "A well-organised database on ordinary technology outperforms a badly organised one on something fashionable.",
        ],
      },
      {
        heading: "Plan for growth and for leaving",
        paragraphs: [
          "Check you can export everything easily. Portability protects you far more than any single platform's feature list.",
        ],
      },
    ],
  },
];

export const POSTS = ALL_POSTS.filter((post) =>
  ["what-makes-a-website-convert", "choosing-the-right-database"].includes(post.slug),
).map((post) => ({
  ...post,
  category: post.slug === "what-makes-a-website-convert" ? "Websites" : "Management Systems",
}));

export const PROJECTS = [
  {
    title: "TUK Ticketing System",
    summary:
      "A digital ticketing platform for a tuk tuk transport operator — mobile ticket purchase, kiosk issuing, driver verification and daily revenue reporting in one system.",
    tags: ["Management Systems"],
  },
  {
    title: "Tenant Management System",
    summary:
      "A property management platform covering units, leases, rent invoicing and maintenance requests, giving landlords a live view of collections and arrears.",
    tags: ["Management Systems"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Zebnex rebuilt our school website. Parents can finally find information without calling us.",
    name: "Grace Wanjiru",
    role: "Administrator",
    company: "Embakasi Bedicta Academy",
  },
  {
    quote:
    name: "Kelvin Otieno",
    role: "Director",
    company: "Gokyle Tours and Safaris",
  },
  {
    quote:
      "Our records were scattered across spreadsheets. Zebnex moved everything into one proper database and now our reports take minutes instead of days.",
    name: "Samuel Kiprono",
    role: "Founder",
    company: "Pure Care Services",
  },
  {
    quote:
      "Responsive, honest about timelines, and they stayed available long after handover. That is rare.",
    name: "Peter Mwangi",
    role: "General Manager",
    company: "KHL",
  },
];

export type Plan = {
  name: string;
  price: string;
  note: string;
  summary: string;
  features: string[];
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "From KSh 35,000",
    note: "one-off project",
    summary:
      "For small businesses that need a professional presence online, quickly and affordably.",
    features: [
      "Up to 5-page responsive website",
      "Mobile and tablet optimised",
      "Contact form and WhatsApp button",
      "Basic SEO setup",
      "Domain and hosting guidance",
      "30 days post-launch support",
    ],
  },
  {
    name: "Business",
    price: "From KSh 95,000",
    note: "one-off project",
    summary:
      "For growing businesses that need a larger website or a website connected to their operations.",
    features: [
      "Everything in Starter",
      "Custom design and content management",
      "Blog, gallery or booking module",
      "Management system integrations",
      "3 months support and maintenance",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom quote",
    note: "scoped per project",
    summary:
      "For organizations that need a tailored management system for their operations.",
    features: [
      "Custom management system modules",
      "Operational records and reporting",
      "Payment and messaging integrations where needed",
      "Staff training and handover",
      "Ongoing system support options",
    ],
  },
];

export const RETAINERS = [
  {
    name: "Management System Support",
    price: "From KSh 15,000 / month",
    body: "System updates, user assistance, monitoring and ongoing improvements for your team.",
  },
  {
    name: "Website Care",
    price: "From KSh 6,000 / month",
    body: "Hosting oversight, backups, security patching, and content updates each month.",
  },
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "A straightforward website usually takes 2–3 weeks from approval of the design. A management system depends on its modules and workflows; we give you a timeline in the proposal before work starts.",
  },
  {
    q: "Do you work with businesses outside Nairobi?",
    a: "Yes. We work with organizations across Kenya. Website projects can be handled remotely, and we arrange consultations and system training to suit your team.",
  },
  {
    q: "How much does a website cost?",
    a: "Most small business websites start around KSh 35,000, with larger custom builds priced on scope. Our pricing page lays out what is included at each level.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Projects are normally split into a deposit to begin, a milestone payment, and a balance on delivery. Retainers are billed monthly.",
  },
  {
    q: "Who owns the work once it is delivered?",
    a: "You do. Code, designs, domains and accounts are handed over to you with documentation. We do not hold your business hostage to keep you as a client.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Every project includes a support window after launch. Beyond that you can move onto a monthly care or support retainer, or simply call us when you need something.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Often, yes. We review what exists, tell you honestly whether it is worth continuing or rebuilding, and quote accordingly.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation. We talk through what you need, then send a written scope and quote. Nothing is charged until you approve it.",
  },
];
