import type { UserData } from './types';

export const userData: UserData = {
  name: "Ryan Travon McDowell",
  title: "Senior Mechanical Engineer | SolidWorks Expert",
  about: "I am a certified Engineer in Training with a BS in Mechanical Engineering and Physics minor from Milwaukee School of Engineering (2018) and an MSME from Stanford (2020). I have been interested in math and science since grade school, but first knew that I really wanted to be an engineer after participating in my middle school's Future City competition. In high school I took many upper level math and science classes as well as Project Lead the Way engineering classes. The PLTW classes first introduced me to 3D modeling on Inventor as well as the basics of the engineering design process. In college, being a member of the MSOE Formula Hybrid and Stanford Solar Car teams has helped me apply the concepts I have learned in my classes to solve real world engineering problems through designing and building different race cars to take to competitions all over the world. I made either the Honor's List or Dean's List with High Honors every term at MSOE. In my free time I like tinkering with my 3D Printer, playing board games, and fan-packing.",
  topSkills: [
    "SolidWorks",
    "3D Printing",
    "ANSYS",
    "Mechanical Engineering",
    "FEA Analysis",
    "Product Design",
    "CAD Modeling",
    "Patent Development",
    "Engineering Design"
  ],
  modalities: [],
  projects: [
    {
      title: "UL 891 Deadfront Switchboards",
      tool: "SolidWorks",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      timeline: "September 2025 - Present",
      role: "Senior Mechanical Engineer",
      description: "Designing components related to UL 891 Deadfront Switchboards at FTI",
      details: [
        "Component design for electrical switchboards",
        "Compliance with UL 891 safety standards",
        "3D modeling and technical drawings",
        "Manufacturing specifications and documentation"
      ],
      technologies: ["SolidWorks", "UL 891", "Electrical Components", "Manufacturing"],
      outcomes: [
        "Delivered compliant switchboard components",
        "Met stringent safety and quality standards"
      ]
    },
    {
      title: "Commercial Zero-Turn Lawn & Garden Equipment",
      tool: "ANSYS",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      timeline: "January 2024 - September 2025",
      role: "Senior Engineer",
      description: "Deck development and component/linkage development for commercial lawn equipment",
      details: [
        "Deck lift mechanism design and optimization",
        "Steering and chassis component development",
        "FEA analysis for strength validation",
        "Created design guides and calculators for knowledge repository"
      ],
      technologies: ["SolidWorks", "ANSYS", "FEA", "Mechanical Design"],
      outcomes: [
        "Issued US Patent: US 11,917,944 B2 - Footrest For Outdoor Power Equipment",
        "Optimized component strength and performance"
      ]
    },
    {
      title: "Stanford Solar Car - Battery & Mechanical Systems",
      tool: "ANSYS Fluent",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      timeline: "September 2018 - June 2020",
      role: "Battery & Mechanical Team Member",
      description: "Designed and built solar-powered vehicle for World Solar Challenge in Australia",
      details: [
        "Modeled thermal event of Li-ion batteries (Ansys Fluent)",
        "Designed battery module components (collector plates, clamshells)",
        "Fabricated tie rods, sway bars, and structural supports",
        "Analyzed structural integrity of driver's cell (Ansys Mechanical)",
        "Secured $20k+ in product donations as Gear Sponsorship Lead"
      ],
      technologies: ["SolidWorks", "ANSYS Fluent", "ANSYS Mechanical", "Carbon Fiber", "Battery Systems"],
      outcomes: [
        "Competed at World Solar Challenge in Australia, Oct 2019",
        "Secured over $20k in sponsorship donations"
      ]
    },
    {
      title: "Tesla Battery Module Development",
      tool: "Testing & Analysis",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80",
      timeline: "October 2019 - January 2020",
      role: "Mechanical Engineering Intern",
      description: "Supported development of batteries for EV and energy product lines at Tesla",
      details: [
        "Developed coupons and tested wire bond electrical endurance",
        "Unlocked $30k weekly cost savings through material optimization",
        "Performed 200+ pull tests to evaluate structural materials",
        "Designed and assembled custom test fixtures"
      ],
      technologies: ["Testing", "Material Analysis", "Fixture Design", "Battery Technology"],
      outcomes: [
        "$30k weekly cost savings through material efficiency",
        "Validated structural material viability for production"
      ]
    },
    {
      title: "Autonomous Wheelchair Securing Robot - VW Group",
      tool: "Prototyping",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      timeline: "October 2018 - June 2019",
      role: "ME310 Design Team Member",
      description: "Designed robotic solution for securing wheelchairs in autonomous taxi vehicles",
      details: [
        "Collaborated with Stanford and UNAM Mexico grad students",
        "Designed and fabricated final prototype components",
        "Robot drives user up ramp, positions, and secures wheelchair",
        "Conducted need finding, benchmarking, and prototyping"
      ],
      technologies: ["SolidWorks", "Robotics", "Prototyping", "Fabrication"],
      outcomes: [
        "Delivered functional autonomous wheelchair securing system",
        "International collaboration with Mexican university"
      ]
    },
    {
      title: "Formula Hybrid Battery Cooling System",
      tool: "Thermal Analysis",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      timeline: "Senior Design Project 2018",
      role: "Project Lead & Designer",
      description: "Researched and designed battery cooling system for Formula Hybrid race car",
      details: [
        "Senior design project for MSOE Formula Hybrid team",
        "Thermal management for Li-ion batteries",
        "Led 5-person design team",
        "Acted as liaison between senior design and Formula Hybrid teams"
      ],
      technologies: ["Thermal Analysis", "Battery Cooling", "SolidWorks", "Heat Transfer"],
      outcomes: [
        "Designed functional cooling system for race car",
        "Improved battery performance and safety"
      ]
    }
  ],
  experience: [
    {
      role: "Senior Mechanical Engineer",
      company: "FTI",
      period: "September 2025 - Present (10 months)",
      location: "Menasha, WI",
      highlights: [
        "Designing components related to UL 891 Deadfront Switchboards",
        "Compliance with electrical safety standards",
        "Advanced CAD modeling and manufacturing specifications"
      ],
      responsibilities: [
        {
          area: "Electrical Component Design",
          tasks: [
            {
              id: "fti-001",
              title: "UL 891 Switchboard Components",
              description: "Design and develop components for UL 891 compliant deadfront switchboards",
              category: "technical",
              status: "recurring",
              impact: "Delivering safe, compliant electrical infrastructure components",
              metrics: ["Component designs", "UL 891 compliance", "Manufacturing ready"],
              tools: ["SolidWorks", "Technical Drawings", "Manufacturing Specs"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Role", value: "Senior Engineer", description: "Electrical components" },
        { label: "Standard", value: "UL 891", description: "Safety compliance" },
        { label: "Focus", value: "Switchboards", description: "Deadfront design" }
      ]
    },
    {
      role: "Senior Engineer",
      company: "AriensCo",
      period: "January 2024 - September 2025 (1 year 9 months)",
      location: "Brillion, WI",
      highlights: [
        "Member of commercial zero-turn lawn and garden team",
        "Focus on deck development and component/linkage development",
        "Issued US Patent: US 11,917,944 B2 - Footrest For Outdoor Power Equipment",
        "Used FEA to design, iterate, and optimize components",
        "Created design guides and knowledge repository documentation"
      ],
      responsibilities: [
        {
          area: "Product Development & Design",
          tasks: [
            {
              id: "ariens-001",
              title: "Deck & Chassis Development",
              description: "Develop deck lifts, steering, and chassis components for commercial zero-turn equipment",
              category: "technical",
              status: "completed",
              impact: "Advanced commercial lawn equipment performance and durability",
              metrics: ["Component designs", "FEA validations", "Test procedures"],
              tools: ["SolidWorks", "ANSYS", "FEA", "Testing"]
            },
            {
              id: "ariens-002",
              title: "Patent Development",
              description: "Developed and secured US Patent for Footrest innovation",
              category: "quality",
              status: "completed",
              impact: "Intellectual property development and product innovation",
              metrics: ["Patent granted", "Product improvement", "Market differentiation"],
              tools: ["Patent Documentation", "Product Design", "Innovation"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Patent", value: "US 11,917,944 B2", description: "Footrest design" },
        { label: "Focus", value: "Commercial Equipment", description: "Zero-turn lawn" },
        { label: "Expertise", value: "FEA & Testing", description: "Validation" }
      ],
      achievements: [
        {
          title: "US Patent Granted",
          description: "US 11,917,944 B2 - Footrest For Outdoor Power Equipment",
          impact: "Product innovation and intellectual property development",
          date: "2024"
        }
      ]
    },
    {
      role: "Engineer II",
      company: "AriensCo",
      period: "April 2022 - January 2024 (1 year 10 months)",
      location: "Brillion, Wisconsin, United States",
      highlights: [
        "Progressed from Engineer I to Engineer II",
        "Continued work on commercial lawn and garden equipment",
        "Component design and validation"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Progression", value: "Engineer II", description: "Career advancement" }
      ]
    },
    {
      role: "Engineer I",
      company: "AriensCo",
      period: "June 2020 - April 2022 (1 year 11 months)",
      location: "Brillion, Wisconsin, United States",
      highlights: [
        "Entry-level engineering position post-graduate school",
        "Foundation in commercial equipment design",
        "CAD modeling and component development"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Starting Role", value: "Engineer I", description: "Post-Stanford" }
      ]
    },
    {
      role: "Battery & Mechanical Team Member, Safety Officer",
      company: "Stanford Solar Car Project",
      period: "September 2018 - June 2020 (1 year 10 months)",
      location: "Stanford, CA",
      highlights: [
        "Designed and built solar-powered vehicle for World Solar Challenge",
        "Modeled thermal event of Li-ion batteries (Ansys Fluent)",
        "Designed battery module components (SolidWorks)",
        "Analyzed structural integrity of driver's cell (Ansys Mechanical)",
        "Secured $20k+ in product donations as Gear Sponsorship Lead"
      ],
      responsibilities: [
        {
          area: "Battery & Mechanical Systems",
          tasks: [
            {
              id: "solar-001",
              title: "Battery Thermal Modeling",
              description: "Model thermal events and determine optimal cell pitch for Li-ion batteries",
              category: "technical",
              status: "completed",
              impact: "Optimized battery safety and performance for solar car",
              metrics: ["Thermal models", "Cell pitch optimization", "Safety validation"],
              tools: ["ANSYS Fluent", "Thermal Analysis", "Battery Design"]
            },
            {
              id: "solar-002",
              title: "Sponsorship & Fundraising",
              description: "Secured product donations from 15 companies totaling over $20k",
              category: "coordination",
              status: "completed",
              impact: "Enabled team to acquire necessary gear and equipment",
              metrics: ["$20k+ raised", "15 companies", "Product donations"],
              tools: ["Sponsorship", "Fundraising", "Partnership Development"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Competition", value: "World Solar Challenge", description: "Australia 2019" },
        { label: "Sponsorship", value: "$20k+", description: "15 companies" },
        { label: "Role", value: "Safety Officer", description: "Team leadership" }
      ]
    },
    {
      role: "Mechanical Engineering Intern",
      company: "Tesla",
      period: "October 2019 - January 2020 (4 months)",
      location: "Palo Alto, CA",
      highlights: [
        "Worked on Battery Module team for EV and energy products",
        "Unlocked $30k weekly cost savings through material optimization",
        "Performed 200+ pull tests on structural materials",
        "Designed custom test fixtures"
      ],
      responsibilities: [
        {
          area: "Battery Development & Testing",
          tasks: [
            {
              id: "tesla-001",
              title: "Cost Optimization",
              description: "Investigated and documented material changes for $30k weekly savings",
              category: "quality",
              status: "completed",
              impact: "$30k weekly cost savings on production critical timeline",
              metrics: ["$30k/week savings", "Material efficiency", "Production timeline"],
              tools: ["Material Analysis", "Documentation", "Process Optimization"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Savings", value: "$30k/week", description: "Cost reduction" },
        { label: "Testing", value: "200+ samples", description: "Pull tests" },
        { label: "Team", value: "Battery Module", description: "EV & energy" }
      ]
    },
    {
      role: "Mechanical Engineering Intern",
      company: "Lumentum",
      period: "June 2019 - August 2019 (3 months)",
      location: "Milpitas, CA",
      highlights: [
        "Designed components for 2 R&D test stations for VCSELs (Lasers)",
        "Created CNC machining drawings",
        "Specified off-the-shelf components for test fixtures"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Focus", value: "VCSEL Testing", description: "Laser R&D" }
      ]
    },
    {
      role: "ME310 Design Project Team Member",
      company: "Stanford University - VW Group Future Center",
      period: "October 2018 - June 2019 (9 months)",
      location: "Stanford, CA",
      highlights: [
        "International collaboration with UNAM Mexico students",
        "Designed wheelchair securing robot for autonomous taxis",
        "Fabricated functional prototype",
        "Conducted comprehensive design research and prototyping"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Sponsor", value: "VW Group", description: "Future Center CA" },
        { label: "Collaboration", value: "International", description: "Stanford & UNAM" }
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science (MS), Mechanical Engineering",
      school: "Stanford University",
      period: "2018 - 2020",
      description: "Graduate studies in mechanical engineering with focus on battery systems, solar vehicles, and autonomous systems"
    },
    {
      degree: "Bachelor's Degree, Mechanical Engineering (Physics Minor)",
      school: "Milwaukee School of Engineering (MSOE)",
      period: "2014 - 2018",
      description: "Honors List or Dean's List with High Honors every term. Member of SAE Formula Hybrid team. Senior design project: Battery cooling system for Formula Hybrid race car"
    }
  ],
  volunteering: [],
  certifications: [
    {
      name: "Engineer in Training (EIT)",
      issuer: "Professional Certification",
      date: "2018"
    },
    {
      name: "SolidWorks Certified Associate",
      issuer: "SolidWorks",
      date: "2017"
    },
    {
      name: "Decision-Making Strategies",
      issuer: "Professional Development",
      date: "2020"
    },
    {
      name: "Learning Microsoft Project",
      issuer: "LinkedIn Learning",
      date: "2021"
    },
    {
      name: "Learning VBA in Excel",
      issuer: "LinkedIn Learning",
      date: "2021"
    }
  ],
  publications: [
    {
      title: "US Patent 11,917,944 B2: Footrest For Outdoor Power Equipment",
      authors: ["Ryan Travon McDowell", "AriensCo Team"],
      journal: "United States Patent and Trademark Office",
      date: "2024",
      doi: "US 11,917,944 B2"
    }
  ]
};
