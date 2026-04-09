export interface KitItem {
  name: string;
  purpose: string;
  behavioralPrinciple: string;
  price: number;
  buyLink: string;
}

export interface Kit {
  id: string;
  name: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  setupTime: string;
  description: string;
  shortDescription: string;
  researchBacking: string;
  items: KitItem[];
  totalCost: number;
  successRate: number;
  userCount: number;
  icon: string;
  color: string;
}

export const categories = [
  "All",
  "Healthy Eating",
  "Morning Routine",
  "Deep Work",
  "Fitness",
  "Better Sleep",
  "Digital Detox",
] as const;

export const kits: Kit[] = [
  {
    id: "morning-momentum",
    name: "Morning Momentum Kit",
    category: "Morning Routine",
    difficulty: "Easy",
    setupTime: "15 min",
    description: "Transform your mornings from chaotic to automatic. This kit reduces morning decisions from 20+ to near-zero, making your wake-up an effortless sequence instead of a willpower battle.",
    shortDescription: "Reduce morning decisions to near-zero with strategic environmental cues.",
    researchBacking: "Based on James Clear's concept of 'habit stacking' and BJ Fogg's research on reducing friction for desired behaviors.",
    items: [
      { name: "Philips Wake-Up Light", purpose: "Simulates natural sunrise to wake you gently", behavioralPrinciple: "Creates a natural cue that aligns with circadian rhythm", price: 35, buyLink: "#" },
      { name: "Outfit Rack", purpose: "Tomorrow's clothes laid out and visible", behavioralPrinciple: "Removes decision friction — no choosing required", price: 25, buyLink: "#" },
      { name: "Programmable Coffee Maker", purpose: "Fresh coffee ready when you wake", behavioralPrinciple: "Immediate reward that reinforces waking up", price: 40, buyLink: "#" },
      { name: "Phone Charging Station", purpose: "Charges phone in a different room", behavioralPrinciple: "Removes distraction by adding friction to phone use", price: 15, buyLink: "#" },
      { name: "5-Minute Journal", purpose: "Quick gratitude and intention setting", behavioralPrinciple: "Clear next action visible on bedside table", price: 12, buyLink: "#" },
    ],
    totalCost: 127,
    successRate: 89,
    userCount: 2340,
    icon: "☀️",
    color: "warm",
  },
  {
    id: "deep-work",
    name: "Deep Work Kit",
    category: "Deep Work",
    difficulty: "Easy",
    setupTime: "10 min",
    description: "Create an environment that makes focused work the default. By removing digital distractions and adding visual focus cues, you'll enter deep work states faster and maintain them longer.",
    shortDescription: "Eliminate distractions and enter flow states effortlessly.",
    researchBacking: "Inspired by Cal Newport's 'Deep Work' and research on environmental cues for cognitive performance.",
    items: [
      { name: "Phone Lockbox", purpose: "Physically lock away your phone during work", behavioralPrinciple: "Adds massive friction to distraction checking", price: 30, buyLink: "#" },
      { name: "Noise-Canceling Headphones", purpose: "Block ambient noise and signal 'do not disturb'", behavioralPrinciple: "Creates a sensory cue for focus mode", price: 80, buyLink: "#" },
      { name: "Visual Timer (Time Timer)", purpose: "See time passing to maintain urgency", behavioralPrinciple: "Makes abstract time concrete and visible", price: 25, buyLink: "#" },
      { name: "Desk Organizer", purpose: "Clear workspace with only essentials", behavioralPrinciple: "Reduces visual clutter that fragments attention", price: 20, buyLink: "#" },
    ],
    totalCost: 155,
    successRate: 92,
    userCount: 3100,
    icon: "🎯",
    color: "primary",
  },
  {
    id: "healthy-eating",
    name: "Healthy Eating Kit",
    category: "Healthy Eating",
    difficulty: "Easy",
    setupTime: "20 min",
    description: "Reshape your kitchen to make healthy choices automatic. Research shows that food visibility and container size dramatically influence what and how much we eat.",
    shortDescription: "Make healthy food choices the path of least resistance.",
    researchBacking: "Based on Brian Wansink's 'Slim by Design' research on how plate size and food visibility affect eating behavior.",
    items: [
      { name: "9-inch Plates (Set of 4)", purpose: "Smaller plates naturally reduce portion sizes", behavioralPrinciple: "Delboeuf illusion — food looks more satisfying on smaller plates", price: 25, buyLink: "#" },
      { name: "Clear Fruit Bowl", purpose: "Keep healthy snacks visible on counter", behavioralPrinciple: "Visual cue — we eat what we see first", price: 18, buyLink: "#" },
      { name: "Portion Control Containers", purpose: "Pre-portioned meals remove guesswork", behavioralPrinciple: "Defaults — pre-set the right portion size", price: 15, buyLink: "#" },
      { name: "Opaque Snack Containers", purpose: "Hide unhealthy snacks from sight", behavioralPrinciple: "Out of sight, out of mind — reduces temptation", price: 12, buyLink: "#" },
      { name: "Water Bottle Stations (3-pack)", purpose: "Place water bottles in every room", behavioralPrinciple: "Proximity effect — we consume what's nearest", price: 20, buyLink: "#" },
    ],
    totalCost: 90,
    successRate: 85,
    userCount: 1890,
    icon: "🥗",
    color: "sage",
  },
  {
    id: "better-sleep",
    name: "Better Sleep Kit",
    category: "Better Sleep",
    difficulty: "Medium",
    setupTime: "30 min",
    description: "Transform your bedroom into a sleep sanctuary. By controlling light, removing stimulants, and adding sleep-promoting cues, falling asleep becomes effortless.",
    shortDescription: "Turn your bedroom into a sleep sanctuary with science-backed tools.",
    researchBacking: "Based on Matthew Walker's 'Why We Sleep' and research on light exposure's impact on melatonin production.",
    items: [
      { name: "Blue Light Blocking Glasses", purpose: "Filter stimulating blue light after sunset", behavioralPrinciple: "Removes environmental factor that suppresses melatonin", price: 20, buyLink: "#" },
      { name: "Blackout Curtains", purpose: "Complete darkness for optimal sleep", behavioralPrinciple: "Controls light cue that signals sleep time", price: 35, buyLink: "#" },
      { name: "Book + Book Light", purpose: "Analog wind-down activity", behavioralPrinciple: "Replaces screen habit with sleep-promoting alternative", price: 22, buyLink: "#" },
      { name: "Lavender Pillow Spray", purpose: "Scent association with sleep", behavioralPrinciple: "Olfactory cue that triggers relaxation response", price: 12, buyLink: "#" },
    ],
    totalCost: 89,
    successRate: 87,
    userCount: 2780,
    icon: "🌙",
    color: "secondary",
  },
  {
    id: "fitness-starter",
    name: "Fitness Starter Kit",
    category: "Fitness",
    difficulty: "Easy",
    setupTime: "10 min",
    description: "Make movement the default by strategically placing fitness cues throughout your home. When workout gear is visible and accessible, exercise becomes automatic.",
    shortDescription: "Strategic placement of fitness cues makes movement automatic.",
    researchBacking: "Research by Wendy Wood shows that 43% of daily behaviors are habitual, driven by environmental cues rather than conscious decisions.",
    items: [
      { name: "Workout Clothes Hook (by door)", purpose: "Visible workout clothes you pass every day", behavioralPrinciple: "Visual cue that triggers exercise intention", price: 10, buyLink: "#" },
      { name: "Foam Roller (by door)", purpose: "Easy micro-exercise when entering/leaving", behavioralPrinciple: "Reduces friction — no setup required", price: 20, buyLink: "#" },
      { name: "Resistance Bands Set", purpose: "Exercise possible in any room, any time", behavioralPrinciple: "Eliminates the 'need to go to gym' barrier", price: 15, buyLink: "#" },
      { name: "Water Bottle Stations", purpose: "Hydration always within reach", behavioralPrinciple: "Proximity effect on healthy behavior", price: 18, buyLink: "#" },
    ],
    totalCost: 63,
    successRate: 82,
    userCount: 1560,
    icon: "💪",
    color: "warm",
  },
  {
    id: "digital-detox",
    name: "Digital Detox Kit",
    category: "Digital Detox",
    difficulty: "Medium",
    setupTime: "25 min",
    description: "Reclaim your attention by redesigning your relationship with technology. This kit adds friction to mindless scrolling and replaces digital habits with analog alternatives.",
    shortDescription: "Add friction to digital distractions, embrace analog alternatives.",
    researchBacking: "Based on Tristan Harris's research on technology design and Nir Eyal's 'Indistractable' framework for managing attention.",
    items: [
      { name: "Outlet Timer", purpose: "Auto-shut off WiFi router at bedtime", behavioralPrinciple: "Removes the option entirely — no willpower needed", price: 12, buyLink: "#" },
      { name: "Analog Alarm Clock", purpose: "No need for phone in bedroom", behavioralPrinciple: "Removes excuse to keep phone by bed", price: 18, buyLink: "#" },
      { name: "Charging Station (in closet)", purpose: "Phone charges out of sight and reach", behavioralPrinciple: "Adds friction to impulsive phone checking", price: 15, buyLink: "#" },
      { name: "Board Game Collection", purpose: "Analog entertainment alternative", behavioralPrinciple: "Replaces digital dopamine with social connection", price: 35, buyLink: "#" },
      { name: "Physical Notebook", purpose: "Capture thoughts without unlocking phone", behavioralPrinciple: "Breaks the 'check phone for notes' habit loop", price: 10, buyLink: "#" },
    ],
    totalCost: 90,
    successRate: 78,
    userCount: 1230,
    icon: "📵",
    color: "earth",
  },
];

export const getKitById = (id: string) => kits.find(k => k.id === id);
export const getKitsByCategory = (category: string) =>
  category === "All" ? kits : kits.filter(k => k.category === category);
