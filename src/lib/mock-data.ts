// Realistic-flavored mock data based on figures from World Bank, ILO, UNICEF, BBS reports
// (rounded / illustrative — clearly marked as projections in the UI).

export const HERO_STATS = [
  { label: "Women onboarded", value: "14,202", sub: "across 8 divisions" },
  { label: "Children kept in school", value: "12,840", sub: "this academic year" },
  { label: "Weekly earnings", value: "৳ 42.5M", sub: "via micro-business hub" },
  { label: "School retention", value: "98.2%", sub: "in active hubs" },
] as const;

export const INCOME_GROWTH = [
  { month: "M1", income: 1800, attendance: 62 },
  { month: "M2", income: 2400, attendance: 68 },
  { month: "M3", income: 3300, attendance: 74 },
  { month: "M4", income: 4100, attendance: 82 },
  { month: "M5", income: 5200, attendance: 89 },
  { month: "M6", income: 6800, attendance: 94 },
  { month: "M7", income: 7900, attendance: 96 },
  { month: "M8", income: 9100, attendance: 98 },
];

export const PROBLEM_STATS = [
  { label: "Rural female labor force participation", value: "36%", source: "World Bank, 2023" },
  { label: "Children 5–17 in child labor", value: "1.07M", source: "BBS / ILO survey" },
  { label: "Primary completion (rural girls)", value: "78%", source: "UNICEF Bangladesh" },
  { label: "Mobile penetration", value: "84%", source: "BTRC, 2024" },
  { label: "Mobile internet users", value: "77M+", source: "BTRC, 2024" },
  { label: "MFS accounts (bKash/Nagad/Rocket)", value: "220M+", source: "Bangladesh Bank" },
];

export const COURSES = [
  { title: "Tailoring & Stitching", bn: "সেলাই", level: "Beginner", hours: 18, learners: 4210, tag: "Handicraft" },
  { title: "Nakshi Kantha Embroidery", bn: "নকশী কাঁথা", level: "Intermediate", hours: 22, learners: 1820, tag: "Handicraft" },
  { title: "Food Processing & Pickle", bn: "খাদ্য প্রক্রিয়াজাত", level: "Beginner", hours: 14, learners: 2310, tag: "Agro" },
  { title: "Poultry & Dairy Basics", bn: "পশুপালন", level: "Beginner", hours: 12, learners: 1750, tag: "Agro" },
  { title: "Digital Marketing for Sellers", bn: "ডিজিটাল মার্কেটিং", level: "Intermediate", hours: 16, learners: 980, tag: "Digital" },
  { title: "Online Selling on Daraz/Facebook", bn: "অনলাইন বিক্রয়", level: "Beginner", hours: 10, learners: 1640, tag: "Digital" },
  { title: "Freelancing 101", bn: "ফ্রিল্যান্সিং", level: "Intermediate", hours: 24, learners: 720, tag: "Digital" },
  { title: "Graphic Design with Canva", bn: "গ্রাফিক ডিজাইন", level: "Beginner", hours: 14, learners: 540, tag: "Digital" },
  { title: "AI Basics in Bangla", bn: "এআই পরিচিতি", level: "Beginner", hours: 8, learners: 1120, tag: "Digital" },
  { title: "Data Entry & MS Office", bn: "ডেটা এন্ট্রি", level: "Beginner", hours: 12, learners: 880, tag: "Digital" },
  { title: "Customer Support (Bangla/EN)", bn: "কাস্টমার সাপোর্ট", level: "Intermediate", hours: 14, learners: 410, tag: "Service" },
  { title: "Local Business Bookkeeping", bn: "হিসাব রক্ষা", level: "Beginner", hours: 10, learners: 690, tag: "Business" },
] as const;

export const JOBS = [
  { title: "Garment QC (Remote)", org: "Aarong Supply", type: "Remote", pay: "৳ 14,000/mo", district: "Dhaka" },
  { title: "Nakshi Kantha Artisan", org: "Jaago Foundation", type: "Piece-rate", pay: "৳ 220/piece", district: "Rangpur" },
  { title: "Data Annotation (Bangla)", org: "GigaTech NGO", type: "Remote", pay: "৳ 18,000/mo", district: "Any" },
  { title: "Customer Support — Bangla", org: "Daraz BD", type: "Remote PT", pay: "৳ 9,500/mo", district: "Any" },
  { title: "Poultry Cluster Lead", op: "Govt Poultry Scheme", type: "Field", pay: "৳ 16,500/mo", district: "Mymensingh" },
  { title: "Tailoring Cluster Worker", org: "BRAC SME", type: "Hybrid", pay: "৳ 12,000/mo", district: "Khulna" },
  { title: "School Liaison Volunteer", org: "Save the Children", type: "Field PT", pay: "৳ 6,500/mo", district: "Sylhet" },
  { title: "Pickle Production Helper", org: "Pran-RFL", type: "On-site", pay: "৳ 11,000/mo", district: "Chattogram" },
] as const;

export const PRODUCTS = [
  { name: "Nakshi Kantha Quilt", price: 2400, stock: 12, sold: 47 },
  { name: "Hand-stitched Saree", price: 1800, stock: 6, sold: 23 },
  { name: "Mango Pickle (500g)", price: 320, stock: 80, sold: 142 },
  { name: "Organic Honey (1L)", price: 950, stock: 15, sold: 38 },
  { name: "Jute Bag", price: 280, stock: 40, sold: 96 },
];

export const SCHEMES = [
  { name: "Mother Allowance (Matritto Bhata)", ministry: "Women & Children Affairs", amount: "৳ 800/mo" },
  { name: "Primary Education Stipend", ministry: "Ministry of Primary Education", amount: "৳ 150/mo per child" },
  { name: "Vulnerable Group Development (VGD)", ministry: "Ministry of Women", amount: "30kg rice/mo + skills" },
  { name: "SME Foundation Women Loan", ministry: "SME Foundation", amount: "Up to ৳ 5L @ 6%" },
  { name: "PKSF Microfinance", ministry: "Palli Karma-Sahayak", amount: "Up to ৳ 50,000" },
];

export const STORIES = [
  {
    name: "Rahima Khatun",
    age: 32,
    district: "Bogura",
    bn: "রহিমা খাতুন",
    role: "Tailor & online seller",
    quote: "My daughter is the first in our family to study science — while I run my orders from the porch.",
    metric: "৳ 9,200/mo · 2 children in school",
  },
  {
    name: "Sufia Begum",
    age: 41,
    district: "Satkhira",
    bn: "সুফিয়া বেগম",
    role: "Nakshi kantha cluster lead",
    quote: "Sutara helped 14 women in our village. None of our children dropped out this year.",
    metric: "৳ 12,800/mo · cluster of 14",
  },
  {
    name: "Morjina Akter",
    age: 27,
    district: "Rangpur",
    bn: "মর্জিনা আক্তার",
    role: "Data annotation (Bangla)",
    quote: "I work two hours a day on my phone. My son is in class 5 now — top of his class.",
    metric: "৳ 7,500/mo · 1 child in school",
  },
];

export const PARTNERS = ["BRAC", "UNICEF", "ILO", "World Bank", "a2i", "PKSF", "Grameen", "Aarong"];