import type { ServiceCategory, Doctor, Testimonial, FAQItem, TechEquipment } from '../types';

export const CLINIC_INFO = {
  name: 'SmileCare Dental',
  tagline: 'Modern Dentistry. Personal Care.',
  positioning: 'A modern dental clinic focused on preventive, cosmetic and restorative dental care with a patient-first experience.',
  address: 'Plot No. 42, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033, India',
  phone: '+91 40 2980 4455',
  emergencyPhone: '+91 98490 12345',
  whatsapp: '+91 98490 12345',
  email: 'care@smilecaredental.in',
  hours: {
    weekdays: 'Mon - Sat: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 2:00 PM (By Appointment)',
    emergency: '24/7 Emergency Support via Phone/WhatsApp'
  },
  mapCoordinates: {
    lat: 17.4319,
    lng: 78.4072
  }
};

export const TRUST_STATS = [
  { value: '15+', label: 'Years Experience', subtext: 'Dedicated to patient comfort' },
  { value: '10,000+', label: 'Patients Treated', subtext: 'Families across Hyderabad' },
  { value: 'Modern', label: 'Dental Tech', subtext: 'Digital imaging & 3D scans' },
  { value: 'Patient-First', label: 'Care Model', subtext: 'Gentle & transparent approach' }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    iconName: 'ShieldCheck',
    shortDescription: 'Comprehensive checkups, cavity fillings, cleanings, and routine oral healthcare for all ages.',
    category: 'preventive',
    overview: 'Our general dentistry services form the bedrock of lifelong oral health. We focus on gentle routine examinations, thorough cleans, and early detection of potential dental issues.',
    benefits: [
      'Comprehensive digital oral assessment',
      'Minimally invasive decay treatments',
      'Smooth, stress-free routine cleanings',
      'Personalized oral hygiene counseling'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Initial Assessment', description: 'Visual inspection and digital intraoral screening.' },
      { stepNumber: 2, title: 'Cleaning & Scaling', description: 'Removal of plaque, tartar, and surface stains.' },
      { stepNumber: 3, title: 'Polishing & Care', description: 'Application of protective fluoride and guidance.' }
    ],
    consultationFlow: 'During your 30-40 minute consultation, our dentist discusses your dental history, performs a gentle exam, and shares visual findings before recommending any preventative measures.',
    faqs: [
      { question: 'How often should I get a routine dental checkup?', answer: 'We recommend visiting us every 6 months for a routine checkup and professional cleaning to maintain optimal oral health.' },
      { question: 'Is dental scaling safe for tooth enamel?', answer: 'Yes, modern ultrasonic scaling gently removes plaque without damaging enamel.' }
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    iconName: 'Sparkles',
    shortDescription: 'Permanent, natural-looking solutions for missing teeth using biocompatible titanium implants.',
    category: 'restorative',
    overview: 'Dental implants provide a stable, long-lasting replacement for single or multiple missing teeth, restoring both natural bite strength and aesthetics.',
    benefits: [
      'Looks, feels, and functions like natural teeth',
      'Preserves jawbone density and facial structure',
      'High long-term success rate with proper care',
      'Eliminates discomfort of removable dentures'
    ],
    processSteps: [
      { stepNumber: 1, title: '3D Imaging & Planning', description: 'Precision CBCT scan to evaluate jawbone structure.' },
      { stepNumber: 2, title: 'Implant Placement', description: 'Precise placement of the biocompatible post.' },
      { stepNumber: 3, title: 'Crown Restoration', description: 'Fitting a custom-crafted ceramic tooth crown.' }
    ],
    consultationFlow: 'We evaluate bone density, take digital 3D scans, and explain treatment steps clearly so you can make an informed decision without feeling rushed.',
    faqs: [
      { question: 'Are dental implants painful?', answer: 'The procedure is performed under local anesthesia. Most patients experience minimal discomfort during recovery.' },
      { question: 'How long do dental implants last?', answer: 'With good oral hygiene and routine dental visits, implants can last a lifetime.' }
    ]
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    iconName: 'Smile',
    shortDescription: 'Smile design, porcelain veneers, tooth contouring, and aesthetic restorations.',
    category: 'cosmetic',
    overview: 'Enhance the beauty and symmetry of your smile with tailored cosmetic solutions crafted to blend harmoniously with your natural features.',
    benefits: [
      'Digital Smile Design preview before treatment',
      'Correction of chips, gaps, and discolored teeth',
      'Natural translucency and shade matching',
      'Minimal tooth structure modification'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Smile Design Analysis', description: 'Facial aesthetic evaluation and digital mockup.' },
      { stepNumber: 2, title: 'Preparation & Trial', description: 'Custom shaping and temporary fitting for review.' },
      { stepNumber: 3, title: 'Final Bonding', description: 'Precision placement of porcelain veneers or bonding.' }
    ],
    consultationFlow: 'We discuss your aesthetic goals, capture high-resolution photos, and demonstrate potential smile outcomes before commencing any cosmetic work.',
    faqs: [
      { question: 'Will my veneers look natural?', answer: 'Yes. We use premium translucent ceramic materials tailored to your skin tone and tooth shape.' },
      { question: 'Do veneers damage natural teeth?', answer: 'Modern cosmetic techniques require minimal enamel preparation to preserve your natural tooth foundation.' }
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    iconName: 'Sun',
    shortDescription: 'Safe, in-office laser whitening and customized home whitening kits for a brighter smile.',
    category: 'cosmetic',
    overview: 'Lift tough tea, coffee, and age-related stains quickly and comfortably under professional dental supervision.',
    benefits: [
      'Visibly brighter teeth in a single 45-minute visit',
      'Formulated with desensitizing agents for sensitive teeth',
      'Enamel-safe professional whitening gels',
      'Includes custom maintenance trays'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Shade Assessment', description: 'Recording initial tooth shade and gum protection.' },
      { stepNumber: 2, title: 'Gel Application', description: 'Application of professional whitening gel.' },
      { stepNumber: 3, title: 'Light Activation', description: 'Gentle light activation for optimal stain breakdown.' }
    ],
    consultationFlow: 'We examine your enamel health, check existing restorations, and select the safest whitening concentration for your specific tooth sensitivity level.',
    faqs: [
      { question: 'How long do whitening results last?', answer: 'Results typically last 12-24 months depending on diet, lifestyle, and oral care habits.' },
      { question: 'Does professional whitening cause tooth sensitivity?', answer: 'Transient sensitivity is mild and resolves quickly. We use soothing desensitizing agents.' }
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics & Aligners',
    iconName: 'Layers',
    shortDescription: 'Clear aligners and modern braces to straighten misaligned teeth for adults and teens.',
    category: 'specialized',
    overview: 'Achieve properly aligned teeth and an optimal bite using comfortable clear aligners or discreet modern braces.',
    benefits: [
      'Near-invisible removable aligner trays',
      '3D treatment timeline preview',
      'Easier oral hygiene maintenance compared to traditional braces',
      'Customized digital alignment trajectory'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Digital 3D Scan', description: 'Impression-free intraoral 3D camera scan.' },
      { stepNumber: 2, title: 'Virtual Simulation', description: 'Interactive step-by-step movement mapping.' },
      { stepNumber: 3, title: 'Aligner Trays', description: 'Receiving aligners with periodic progress checkups.' }
    ],
    consultationFlow: 'Our specialist performs a 3D scan, shows a 3D simulation of your expected movement plan, and explains clear aligner wear schedules.',
    faqs: [
      { question: 'Are clear aligners suitable for adults?', answer: 'Absolutely. A large percentage of our aligner patients are working professionals.' },
      { question: 'How many hours a day should aligners be worn?', answer: 'Aligners should be worn 20-22 hours daily, removing only for meals and brushing.' }
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    iconName: 'HeartHandshake',
    shortDescription: 'Gentle, friendly dental care tailored specifically for infants, children, and teenagers.',
    category: 'preventive',
    overview: 'Creating positive, happy dental experiences early in life helps children develop healthy habits and fear-free visits.',
    benefits: [
      'Warm, child-friendly clinic environment',
      'Preventative dental sealants and fluoride shields',
      'Early guidance on jaw development and habits',
      'Patient, soft-spoken pediatric specialists'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Fun Intro Visit', description: 'Getting comfortable with the dentist and equipment.' },
      { stepNumber: 2, title: 'Gentle Exam', description: 'Quick check for healthy tooth growth and bite.' },
      { stepNumber: 3, title: 'Protective Care', description: 'Application of fluoride varnish or pit sealants.' }
    ],
    consultationFlow: 'We introduce children to the clinic through play and soft explanations, ensuring they feel safe and excited about taking care of their teeth.',
    faqs: [
      { question: 'When should a child first visit a dentist?', answer: 'We recommend a child’s first visit around their first birthday or when their first tooth appears.' },
      { question: 'Are pit and fissure sealants painful?', answer: 'Not at all. Sealants are painted onto chew surfaces quickly without any drilling or pain.' }
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    iconName: 'Activity',
    shortDescription: 'Painless microscopic root canal therapy to save infected teeth and eliminate toothache.',
    category: 'restorative',
    overview: 'Modern endodontics allows us to relieve acute toothache comfortably in a single or two visits while preserving your original natural tooth structure.',
    benefits: [
      'Microscopic precision endodontics',
      'Instant relief from deep tooth pain',
      'High preservation rate of natural tooth root',
      'Virtually painless with modern numbing techniques'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Digital X-Ray', description: 'Pinpointing infection depth and root anatomy.' },
      { stepNumber: 2, title: 'Gentle Cleaning', description: 'Removing infected nerve tissue and disinfecting.' },
      { stepNumber: 3, title: 'Sealing & Crown', description: 'Biocompatible root filling and structural crown.' }
    ],
    consultationFlow: 'We perform a quick localized x-ray, pinpoint the exact source of sensitivity or pain, and administer gentle anesthesia before beginning treatment.',
    faqs: [
      { question: 'Is a root canal painful?', answer: 'With effective modern anesthesia, a root canal feels very similar to receiving a standard dental filling.' },
      { question: 'Why is a crown necessary after a root canal?', answer: 'A crown protects the treated tooth from future fracture by restoring its natural structural integrity.' }
    ]
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care & Hygiene',
    iconName: 'CheckCircle2',
    shortDescription: 'Gum care, night guards, sports mouthguards, and early diagnostic screenings.',
    category: 'preventive',
    overview: 'Proactive protection designed to prevent cavities, periodontitis, and teeth grinding issues before they cause damage.',
    benefits: [
      'Periodontal screening and deep gum care',
      'Custom night guards for bruxism (grinding)',
      'Custom protective sports guards',
      'Oral cancer screening for risk reduction'
    ],
    processSteps: [
      { stepNumber: 1, title: 'Gum Health Index', description: 'Measuring pocket depths and tissue firmness.' },
      { stepNumber: 2, title: 'Targeted Therapy', description: 'Gentle subgingival cleaning if required.' },
      { stepNumber: 3, title: 'Custom Appliances', description: 'Digital scanning for custom night or sports guards.' }
    ],
    consultationFlow: 'We review your daily habits, check gum health, and formulate a customized home care regimen tailored to your risk factors.',
    faqs: [
      { question: 'What causes morning jaw soreness?', answer: 'Jaw soreness often stems from night-time teeth grinding, which can be effectively mitigated with a custom night guard.' }
    ]
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-ananya-rao',
    name: 'Dr. Ananya Rao',
    qualification: 'BDS, MDS (Prosthodontics & Implantology)',
    specialization: 'Senior Implantologist & Restorative Specialist',
    experienceYears: 15,
    bio: 'Dr. Ananya Rao specializes in complex smile rehabilitation and precision dental implants. Trained at leading dental institutions, she combines clinical skill with a compassionate bedside manner to give patients comfortable, lasting dental restorations.',
    areasOfExpertise: ['Dental Implants', 'Full Mouth Rehabilitation', 'Porcelain Veneers', 'Crown & Bridge Work'],
    image: '/images/dr_ananya.jpg',
    registrationNumber: 'A-14982 (Telangana State Dental Council - Demo)'
  },
  {
    id: 'dr-vikram-reddy',
    name: 'Dr. Vikram Reddy',
    qualification: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)',
    specialization: 'Consultant Orthodontist & Aligner Specialist',
    experienceYears: 12,
    bio: 'Dr. Vikram Reddy has transformed over 3,000 smiles using clear aligners and modern self-ligating braces. He believes in conservative, non-extraction orthodontic philosophy whenever possible, ensuring natural facial aesthetics.',
    areasOfExpertise: ['Clear Aligners (Invisalign)', 'Adult Orthodontics', 'Child Malocclusion', 'Surgical Orthodontics'],
    image: '/images/dr_vikram.jpg',
    registrationNumber: 'A-18234 (Telangana State Dental Council - Demo)'
  },
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    qualification: 'BDS, MDS (Pediatric & Preventive Dentistry)',
    specialization: 'Pediatric Dental Specialist',
    experienceYears: 9,
    bio: 'Dr. Priya Sharma is dedicated to making dental visits joyful and stress-free for kids. Her gentle demeanor, patience, and child-centered communication help young patients feel completely safe and confident in the chair.',
    areasOfExpertise: ['Child Oral Health', 'Preventive Fluoride & Sealants', 'Child Habit Correction', 'Behavior Management'],
    image: 'https://images.unsplash.com/photo-1594824813566-78a9c84e1b8b?auto=format&fit=crop&q=80&w=600',
    registrationNumber: 'A-21045 (Telangana State Dental Council - Demo)'
  }
];

export const PATIENT_JOURNEY_STEPS = [
  {
    step: 1,
    title: 'Easy Online Booking',
    subtitle: 'Step 1',
    description: 'Select your preferred date, time, and service through our seamless digital booking portal or via a quick WhatsApp chat.',
    iconName: 'CalendarCheck'
  },
  {
    step: 2,
    title: 'Comprehensive Consultation',
    subtitle: 'Step 2',
    description: 'Relax in our tranquil reception. Meet your dentist for an unhurried, gentle discussion and digital intraoral evaluation.',
    iconName: 'Stethoscope'
  },
  {
    step: 3,
    title: 'Personalized Care Plan',
    subtitle: 'Step 3',
    description: 'Receive a transparent, step-by-step treatment road map with zero unexpected costs and clear explanation of all options.',
    iconName: 'FileText'
  },
  {
    step: 4,
    title: 'Treatment & Follow-up',
    subtitle: 'Step 4',
    description: 'Experience painless treatment using modern equipment, followed by proactive post-care checkups to ensure lasting health.',
    iconName: 'Smile'
  }
];

export const TECH_EQUIPMENT_DATA: TechEquipment[] = [
  {
    id: 'digital-imaging',
    title: 'Digital 3D CBCT & Low-Dose X-Rays',
    iconName: 'Scan',
    description: 'High-definition 3D volumetric scans providing millimeter-precise views of bone, nerves, and roots.',
    patientBenefit: 'Reduces radiation exposure by up to 80% compared to traditional dental X-rays while enhancing diagnostic accuracy.'
  },
  {
    id: 'digital-scanning',
    title: 'Intraoral Digital Scanner',
    iconName: 'Laptop',
    description: 'Painless 3D optical wand that creates precise digital impressions of your teeth in under 3 minutes.',
    patientBenefit: 'Eliminates uncomfortable, messy physical putty molds for crowns, veneers, and clear aligners.'
  },
  {
    id: 'modern-treatment',
    title: 'Painless Micro-Endodontic Gear',
    iconName: 'Zap',
    description: 'Operating microscopes and rotary instruments designed for gentle, whisper-quiet root canal therapy.',
    patientBenefit: 'Allows faster treatment times, minimal discomfort, and maximum preservation of healthy tooth structure.'
  },
  {
    id: 'sterilization-standards',
    title: 'Hospital-Grade Autoclave Sterilization Suite',
    iconName: 'ShieldAlert',
    description: 'Multi-stage ultrasonic cleaning, pouch sealing, and Class-B vacuum autoclave sterilization protocols.',
    patientBenefit: 'Guarantees 100% sterile instruments for every single patient encounter with pouch verification indicators.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    patientName: 'Rajesh Kumar V.',
    location: 'Jubilee Hills, Hyderabad',
    treatment: 'Dental Implants & Crown',
    comment: 'I was extremely nervous about getting an implant. Dr. Ananya explained the entire 3D planning process beforehand. The procedure was smooth, virtually pain-free, and my bite feels 100% natural now.',
    rating: 5
  },
  {
    id: '2',
    patientName: 'Sneha Reddy',
    location: 'Gachibowli, Hyderabad',
    treatment: 'Clear Aligners',
    comment: 'The 3D scan meant no messy dental molds! Dr. Vikram mapped out my clear aligner journey clearly. 10 months later, my teeth are perfectly aligned without anyone noticing I was wearing aligners.',
    rating: 5
  },
  {
    id: '3',
    patientName: 'Kavitha & Ahaan',
    location: 'Banjara Hills, Hyderabad',
    treatment: 'Pediatric Care',
    comment: 'Finding a dentist my 6-year-old actually looks forward to visiting was a game changer. Dr. Priya is so patient and gentle. The clinic environment is calm, welcoming, and reassuring.',
    rating: 5
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book directly using our online booking form on this website, call our front desk at +91 40 2980 4455, or send us a message on WhatsApp at +91 98490 12345.'
  },
  {
    question: 'What should I bring to my first visit?',
    answer: 'Please bring a valid photo ID, any recent dental X-rays or medical records (if available), and a list of current medications or health conditions.'
  },
  {
    question: 'Do you accept emergency appointments?',
    answer: 'Yes! We reserve daily appointment slots for dental emergencies like acute tooth pain, chipped teeth, or facial swelling. Contact our emergency helpline for immediate assistance.'
  },
  {
    question: 'How long does a typical consultation take?',
    answer: 'A comprehensive first consultation usually takes 30 to 45 minutes, allowing ample time for a thorough exam, digital imaging, and a friendly discussion of findings.'
  },
  {
    question: 'How often should I visit a dentist?',
    answer: 'We recommend visiting us twice a year (every 6 months) for routine cleaning and preventative oral exams to catch minor issues before they become complex.'
  }
];
