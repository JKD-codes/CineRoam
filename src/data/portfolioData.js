export const personalInfo = {
  name: "Chandan Mahato",
  title: "Cinematographer, Commercial Photographer & Editor",
  brand: "CineRoam Production",
  tagline: "Social Media Marketing & Cinematic Storytelling",
  location: "India (Available Worldwide)",
  experience: "5+ Years",
  email: "cineroamproduction@gmail.com",
  phone: "+91 96081 00000", // placeholder or easy to change
  whatsapp: "919608100000",
  instagram: "https://instagram.com/cineroam_production",
  youtube: "https://youtube.com/@cineroam",
  bio: "Director of Photography and founder of CineRoam Production. Specializing in high-impact commercial food photography, luxury product visuals, cinematic brand films, and short-form social media campaigns that convert viewers into loyal brand advocates.",
  availability: "Available for Commercial & Brand Shoots",
  stats: [
    { label: "Commercial Shoots", value: "85+", suffix: "" },
    { label: "Views Generated", value: "12M+", suffix: "" },
    { label: "Brand Partners", value: "40+", suffix: "" },
    { label: "Average ROAS Lift", value: "3.4x", suffix: "" }
  ]
};

export const categories = [
  { id: "all", label: "All Works" },
  { id: "food", label: "Food & Culinary" },
  { id: "product", label: "Product & E-Commerce" },
  { id: "cinematography", label: "Cinematography & Films" },
  { id: "social", label: "Social Media Reels" }
];

export const portfolioProjects = [
  {
    id: "mesaura-skincare",
    title: "Mesaura — The Fluid Ritual",
    client: "Mesaura Skincare",
    category: "product",
    coverImage: "/assets/product-mesaura.jpeg",
    aspectRatio: "portrait",
    year: "2026",
    role: "Commercial Photographer & Lighting Director",
    camera: "Sony FX3 / A7S III",
    lens: "Sony FE 90mm f/2.8 Macro G OSS",
    specs: "1/200s · f/8.0 · ISO 100 · 5600K",
    lighting: "Dual Godox Bowens Key with Strip Softbox & Silver Card Fill",
    description: "High-key commercial packshot highlighting the clean aesthetic, typography, and premium formulation of Mesaura's Glutathione + Hyaluronic Acid Brightening Face Wash.",
    deliverables: ["E-Commerce Hero Shots", "Amazon A+ Lifestyle Cards", "Instagram Product Reveal"],
    featured: true
  },
  {
    id: "artisan-mithai-tradition",
    title: "Heritage Sweets & Royal Chiaroscuro",
    client: "Shree Artisan Confectionery",
    category: "food",
    coverImage: "/assets/food-artisan-laddus.jpeg",
    aspectRatio: "portrait",
    year: "2026",
    role: "Food Stylist & Still Photographer",
    camera: "Sony Cinema Line",
    lens: "50mm f/1.4 GM",
    specs: "1/160s · f/2.8 · ISO 200 · 3200K Warm Tungsten",
    lighting: "Directional Snoot with Warm Amber Gel & Hand-Carved Brass Reflector",
    description: "Deep chiaroscuro food styling capturing handcrafted artisanal laddus served in an engraved brass lotus platter, flanked by hand-painted royal miniature elephants.",
    deliverables: ["Festive Campaign Imagery", "Menu Redesign", "Print Catalog Stills"],
    featured: true
  },
  {
    id: "chocolate-cacao-pyramid",
    title: "Artisanal Cacao & Melon Seed Truffles",
    client: "The Cocoa Ritual",
    category: "food",
    coverImage: "/assets/food-chocolate-delight.jpeg",
    aspectRatio: "square",
    year: "2026",
    role: "Food Photographer & Colorist",
    camera: "Sony A7S III",
    lens: "90mm Macro f/2.8",
    specs: "1/250s · f/4.0 · ISO 160 · 4800K",
    lighting: "Overhead 120cm Octabox with Honeycomb Grid and Textured Ochre Canvas",
    description: "Gourmet dark cacao truffles crowned with melon seed florets arranged in a crystalline glass leaf, surrounded by scattered roasted makhanas and almonds on raw ochre backdrop.",
    deliverables: ["Social Media Hero Posts", "Packaging Cover", "Digital Billboard"],
    featured: true
  },
  {
    id: "granola-crunch-snack",
    title: "Handcrafted Multi-Seed Energy Crunch",
    client: "Nourish Botanics",
    category: "food",
    coverImage: "/assets/food-granola-chikki.jpeg",
    aspectRatio: "portrait",
    year: "2026",
    role: "Cinematographer & Macro Photographer",
    camera: "Sony FX3",
    lens: "85mm f/1.4 Art",
    specs: "1/400s · f/3.2 · ISO 250",
    lighting: "Rim Backlight with Soft Fill to emphasize sesame seed and almond textures",
    description: "Dynamic human-interaction shot highlighting the crisp layer fractures, golden honey binder, and multi-seed crunch of artisanal nutritional bars.",
    deliverables: ["Product Launch Campaign", "Short-Form Reel Series", "Packaging Assets"],
    featured: true
  },
  {
    id: "cinematic-reel-urban-pulse",
    title: "Urban Roam — 4K Cinematic Reel",
    client: "CineRoam Originals",
    category: "cinematography",
    coverImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    aspectRatio: "landscape",
    year: "2026",
    role: "Director, DP & Colorist",
    camera: "Sony FX3 (S-Log3 / 10-bit 4:2:2)",
    lens: "Sony 24-70mm f/2.8 GM II + Tiffen Black Pro-Mist 1/4",
    specs: "4K DCI · 24fps · Shutter 1/48s · ISO 800/12800 Dual Native",
    lighting: "Natural Golden Hour diffused + Aputure Amaran 200x fill",
    description: "High-octane visual poetry weaving together street vitality, neon reflections, and golden hour silhouettes into an immersive cinematic journey.",
    deliverables: ["Brand Anthem Film", "9:16 Social Cutdowns", "Cinematic Stills"],
    featured: true
  },
  {
    id: "coffee-alchemy-commercial",
    title: "The Golden Pour — Specialty Coffee",
    client: "Aura Brew Roasters",
    category: "cinematography",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    year: "2026",
    role: "Director of Photography",
    camera: "Sony FX3 High-Speed 120fps",
    lens: "Sony 90mm Macro f/2.8",
    specs: "4K 120fps Slow-Motion · Shutter 1/250s · f/2.8",
    lighting: "Dual Nanlite PavoTube II 30C with subtle warm steam kicker",
    description: "Sensory commercial film capturing the micro-foam swirl, extraction drip, and tactile warmth of premium single-origin roasts.",
    deliverables: ["Instagram Viral Reel (1.2M views)", "Website Video Header", "Menu Display Loop"],
    featured: false
  },
  {
    id: "luxury-fragrance-commercial",
    title: "Nocturne Noir — Eau de Parfum",
    client: "Atelier Scent Lab",
    category: "product",
    coverImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    year: "2025",
    role: "Commercial Photographer & Retoucher",
    camera: "Sony A7S III",
    lens: "85mm f/1.4",
    specs: "1/200s · f/9.0 · ISO 100",
    lighting: "Backlit acrylic riser with water droplet mist and dark gradient flags",
    description: "Mood-driven luxury perfume shoot evoking obsidian night, water ripples, and golden amber undertones.",
    deliverables: ["Magazine Double Spread", "Billboard Assets", "3D Motion Plate"],
    featured: false
  },
  {
    id: "reels-social-growth",
    title: "Viral Restaurant Hook Series",
    client: "Saffron & Smoke Bistro",
    category: "social",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    year: "2026",
    role: "Social Content Strategist & Filmmaker",
    camera: "Sony FX3 + DJI RS3 Pro Gimbal",
    lens: "Sony 35mm f/1.4 GM",
    specs: "4K 60fps · Rec.709 Custom LUT · 9:16 Vertical",
    lighting: "Run-and-gun wireless on-camera bi-color panel",
    description: "A fast-paced 10-part short-form video campaign designed specifically to maximize Instagram retention, sound design beats, and table bookings.",
    deliverables: ["10 Custom Reels", "Hook & Script Writing", "Sound Design & Color Grading"],
    featured: true
  }
];

export const colorGradingComparison = {
  title: "The Power of Color Science",
  subtitle: "From Flat S-Log3 RAW Sensor Data to Emotive CineRoam Film Grade",
  description: "Great cinematography is born in lighting and perfected in the color suite. We utilize customized film-print emulation LUTs, split-toning, and precise skin-tone qualification to give your brand footage a lush, cinematic aesthetic that stops thumbs.",
  beforeLabel: "RAW Flat S-Log3",
  afterLabel: "CineRoam Signature Grade",
  beforeImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=40&sat=-80&con=30", // simulated flat desaturated log
  afterImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=90",
  highlights: [
    "Rec.709 Kodak 2383 Film Print Emulation",
    "Dynamic Range Preserved in 10-bit 4:2:2",
    "Rich Golden Hour Highlights & Controlled Rolloff",
    "Clean Neutral Mid-Tones for Natural Skin"
  ]
};

export const services = [
  {
    id: "food-photography",
    icon: "Utensils",
    title: "Food & Culinary Photography",
    tagline: "Textures That Make Viewers Crave",
    description: "Artisan food styling, macro ingredient close-ups, and dramatic lighting designed specifically for restaurant menus, packaged foods, and delivery apps (Zomato/Swiggy).",
    deliverables: [
      "High-resolution hero food plates",
      "Dynamic pour & drizzle action shots",
      "Menu & aggregator optimized exports",
      "On-location or studio styling"
    ],
    popular: true
  },
  {
    id: "product-commercial",
    icon: "Box",
    title: "Product & E-Commerce Shoots",
    tagline: "Premium Visuals That Sell Instantly",
    description: "Clean high-key catalog packshots, creative lifestyle staging, and luxury beauty/skincare imagery (like our Mesaura campaign) with zero glare and flawless reflections.",
    deliverables: [
      "Pure white e-commerce catalog shots",
      "Creative textured podium & lifestyle setups",
      "Amazon A+ & Shopify banner assets",
      "High-precision composite retouching"
    ],
    popular: false
  },
  {
    id: "cinematography",
    icon: "Video",
    title: "Cinematography & Brand Films",
    tagline: "4K Motion That Commands Attention",
    description: "End-to-end video production from storyboard to final render. Commercial ads, founder documentaries, product promo videos, and cinematic music videos.",
    deliverables: [
      "4K 10-bit cinema camera production",
      "Gimbal & fluid-motion tracking shots",
      "Studio continuous lighting & audio capture",
      "Licensed cinema-grade soundtrack & mixing"
    ],
    popular: false
  },
  {
    id: "social-reels",
    icon: "Flame",
    title: "Social Media Reels & Growth",
    tagline: "Thumb-Stopping Organic Video Marketing",
    description: "Vertical video packages engineered for algorithmic success on Instagram and YouTube Shorts. Punchy hooks, rhythm edits, sound design, and color grading.",
    deliverables: [
      "Batched 9:16 vertical short-form reels",
      "Viral hook conceptualization & pacing",
      "Sound design, Foley & trendy audio sync",
      "Animated typography & captions"
    ],
    popular: true
  }
];

export const gearArsenal = [
  {
    category: "Cinema & Still Cameras",
    items: [
      { name: "Sony FX3 Cinema Line", detail: "4K 120fps, Dual Native ISO 800/12800, 10-Bit 4:2:2 All-I" },
      { name: "Sony A7S III", detail: "Ultra low-light beast, 4K HDR, 15+ stops dynamic range" },
      { name: "DJI Mini Pro Drone", detail: "4K 60fps vertical & landscape aerial cinematography" }
    ]
  },
  {
    category: "Optics & Glass",
    items: [
      { name: "Sony FE 90mm f/2.8 Macro G OSS", detail: "Ultimate micro-texture sharpness for food & beauty products" },
      { name: "Sony FE 50mm f/1.4 GM", detail: "Creamy cinematic bokeh and razor-sharp subject isolation" },
      { name: "Sony FE 24-70mm f/2.8 GM II", detail: "Workhorse commercial zoom with pristine resolving power" },
      { name: "Sigma 85mm f/1.4 DG DN Art", detail: "Portraits, commercial packaging and dramatic compression" }
    ]
  },
  {
    category: "Lighting & Modifiers",
    items: [
      { name: "Aputure & Godox Continuous Bowens", detail: "High-CRI 98+ continuous light for accurate color reproduction" },
      { name: "Nanlite PavoTube II RGBW Tubes", detail: "Atmospheric color washes, edge lighting, and cinematic accents" },
      { name: "120cm Octaboxes & Grid Softboxes", detail: "Wrap-around soft lighting and zero-hotspot diffusion" }
    ]
  },
  {
    category: "Grip & Post-Production",
    items: [
      { name: "DJI RS3 Pro Gimbal", detail: "Silky cinematic camera motion, car-rigging, and tracking passes" },
      { name: "DaVinci Resolve Studio", detail: "Full color science grading, ACES workflow, node-based film emulation" },
      { name: "Røde & DJI Mic Pro Audio", detail: "Broadcast 32-bit float audio capture with zero clipping" }
    ]
  }
];

export const clientReviews = [
  {
    quote: "Chandan's work on our Mesaura skincare product launch was transformative. The lighting on the white tube and gold accents was flawless. Our Amazon conversion jumped 38% after uploading his hero shots.",
    author: "Rohan Varma",
    role: "Brand Director",
    company: "Mesaura Skincare",
    project: "Commercial Product Shoot"
  },
  {
    quote: "Finding a photographer who understands both the soul of Indian heritage sweets and modern high-end editorial lighting is rare. The laddus with the miniature royal elephants looked like museum art.",
    author: "Pooja Singhania",
    role: "Founder",
    company: "Artisan Sweets & Confectionery",
    project: "Gourmet Food Shoot"
  },
  {
    quote: "CineRoam transformed our restaurant's social presence. In 60 days, our reels went from a few thousand views to over 1.4 million. The footfall increase was immediately noticeable.",
    author: "Chef K. Banerjee",
    role: "Executive Chef & Owner",
    company: "Bistro 1890",
    project: "Reels & Video Campaign"
  }
];

export const faqs = [
  {
    q: "Where is CineRoam Production based, and do you travel for shoots?",
    a: "We are based in India and travel nationally and internationally for on-location brand films, restaurant shoots, and commercial campaigns. For product shoots, you can easily courier the products directly to our studio."
  },
  {
    q: "How does the remote product shoot process work?",
    a: "Simply ship your products to our studio. We conduct an initial moodboarding call to align on aesthetics, lighting style, and deliverable ratios. We shoot, grade, and share an interactive proofing gallery for your sign-off before shipping your items back."
  },
  {
    q: "What is your typical delivery timeline?",
    a: "Standard delivery for commercial photography is 4 to 7 business days, including retouching and color mastering. For video campaigns and reels, turnarounds are typically 7 to 10 days. We also offer 48-hour rush turnaround for time-sensitive launches."
  },
  {
    q: "Do you provide RAW unedited files?",
    a: "Our signature value is in the complete visual craft — lighting, capture, and precise color grading. We deliver fully polished, color-calibrated high-resolution TIFF/JPEG and ProRes/H.265 files ready for billboard, print, or digital campaigns. RAW packages are available for agency clients upon agreement."
  }
];
