import type { UserData } from './types';

export const userData: UserData = {
  name: "Scott Hollen",
  title: "Sr. Programmer/Analyst | Multi-Discipline Technical Specialist",
  about: "Versatile technical specialist with 26+ years at University of Richmond and extensive expertise across multiple domains: Game Development (Godot, Defold, Unity, Unreal), Geospatial Analysis (QGIS, ArcGIS Pro), Medical Imaging (3D Slicer, ITK-SNAP), Scientific Visualization (ParaView, VisIt), Video Production (DaVinci Resolve, Premiere Pro), Digital Media (Blender, Maya, Adobe Creative Suite), Electronics Design (KiCAD, Altium), and CAD/Engineering (FreeCAD, SolidWorks, AutoCAD). Specialized in building digital assets for cutting-edge AI research projects. Available at $125/hour with rolling start dates.",
  topSkills: [
    "Game Development (Godot, Unity, Unreal)",
    "Geospatial Analysis (QGIS, ArcGIS)",
    "Medical Imaging (3D Slicer)",
    "Scientific Visualization (ParaView)",
    "Video Production (DaVinci Resolve)",
    "3D Modeling (Blender, Maya)",
    "Electronics Design (KiCAD, Altium)",
    "CAD/BIM (AutoCAD, SolidWorks, Revit)",
    "Data Analysis & Programming"
  ],
  modalities: [],
  projects: [
    {
      title: "Godot Engine Game Development",
      tool: "Godot",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      timeline: "5+ years experience",
      role: "Lead Developer",
      description: "Extensive experience developing games and interactive applications using Godot Engine",
      details: [
        "Built 2D and 3D game prototypes for AI research projects",
        "Created custom game mechanics and physics systems",
        "Developed modular asset systems for rapid iteration"
      ],
      technologies: ["Godot", "GDScript", "C#", "Game Design"],
      outcomes: [
        "Delivered production-ready game assets for AI training",
        "Optimized performance for real-time applications"
      ]
    },
    {
      title: "Defold & 2D Game Development",
      tool: "Defold",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      timeline: "3-5 years experience",
      role: "Game Developer",
      description: "Specialized in 2D game development using Defold and similar engines",
      details: [
        "Developed cross-platform 2D games using Defold engine",
        "Implemented game logic using Lua scripting",
        "Created reusable game components and systems"
      ],
      technologies: ["Defold", "Lua", "Cocos2d-x", "Love 2D"],
      outcomes: [
        "Built scalable 2D game architectures",
        "Reduced development time through component reusability"
      ]
    },
    {
      title: "Solar 2D Mobile Game Projects",
      tool: "Solar 2D",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&q=80",
      timeline: "2-3 years experience",
      role: "Mobile Developer",
      description: "Mobile game development using Solar 2D (formerly Corona SDK)",
      details: [
        "Built mobile games for iOS and Android platforms",
        "Optimized performance for mobile devices",
        "Integrated analytics and monetization systems"
      ],
      technologies: ["Solar 2D", "Lua", "Mobile Development"],
      outcomes: [
        "Successfully deployed cross-platform mobile games",
        "Achieved excellent performance metrics on mobile devices"
      ]
    },
    {
      title: "Panda 3D & Python Game Development",
      tool: "Panda 3D",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      timeline: "3-5 years experience",
      role: "3D Developer",
      description: "3D game and simulation development using Panda 3D engine",
      details: [
        "Developed 3D simulations and interactive experiences",
        "Implemented complex 3D rendering and physics",
        "Created educational and research-focused applications"
      ],
      technologies: ["Panda 3D", "Python", "3D Graphics", "Physics Simulation"],
      outcomes: [
        "Delivered immersive 3D experiences for research projects",
        "Built efficient rendering pipelines"
      ]
    },
    {
      title: "Stride (Xenko) Game Engine Projects",
      tool: "Stride",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      timeline: "2-3 years experience",
      role: "Engine Specialist",
      description: "Advanced game development using Stride (formerly Xenko) engine",
      details: [
        "Built high-fidelity 3D games and simulations",
        "Leveraged C# for game logic and systems programming",
        "Developed custom shaders and rendering techniques"
      ],
      technologies: ["Stride", "C#", ".NET", "HLSL Shaders"],
      outcomes: [
        "Created visually stunning game prototypes",
        "Implemented advanced rendering features"
      ]
    },
    {
      title: "AI Research Digital Assets",
      tool: "Multi-Engine",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      timeline: "Ongoing",
      role: "Technical Lead",
      description: "Building and refining digital assets for cutting-edge AI research projects",
      details: [
        "Develop game environments for AI training and testing",
        "Create procedural content generation systems",
        "Build data collection and analysis pipelines",
        "Collaborate with AI researchers on experimental designs"
      ],
      technologies: ["Multiple Game Engines", "Python", "Data Analysis", "Machine Learning"],
      outcomes: [
        "Delivered high-quality training environments for AI models",
        "Enabled novel AI research through interactive simulations"
      ]
    },
    {
      title: "Geospatial Analysis & GIS",
      tool: "QGIS",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
      timeline: "5+ years experience",
      role: "GIS Specialist",
      description: "Expert in geospatial analysis using QGIS, ArcGIS Pro, and other GIS platforms",
      details: [
        "Perform advanced spatial analysis and mapping",
        "Create custom cartographic visualizations",
        "Process and analyze satellite and aerial imagery",
        "Develop GIS workflows and automation scripts"
      ],
      technologies: ["QGIS", "ArcGIS Pro", "Esri ArcMap", "MapInfo Pro", "Python", "PostGIS"],
      outcomes: [
        "Delivered comprehensive geospatial analysis for research projects",
        "Created high-quality maps and spatial data visualizations"
      ]
    },
    {
      title: "Medical Imaging & 3D Slicer",
      tool: "3D Slicer",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      timeline: "3-5 years experience",
      role: "Medical Imaging Specialist",
      description: "Advanced medical imaging analysis using 3D Slicer, ITK-SNAP, and DICOM viewers",
      details: [
        "Process and analyze medical imaging data (CT, MRI, PET)",
        "Perform 3D segmentation and reconstruction",
        "Create volumetric measurements and analysis",
        "Develop custom imaging pipelines and workflows"
      ],
      technologies: ["3D Slicer", "ITK-SNAP", "OsiriX", "Horos", "DICOM", "Python"],
      outcomes: [
        "Enabled advanced medical image analysis for research",
        "Developed efficient workflows for clinical imaging studies"
      ]
    },
    {
      title: "Scientific Visualization - ParaView",
      tool: "ParaView",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      timeline: "3-5 years experience",
      role: "Visualization Specialist",
      description: "Scientific data visualization using ParaView, VisIt, and advanced visualization tools",
      details: [
        "Visualize complex scientific and engineering datasets",
        "Create custom rendering pipelines for simulation data",
        "Develop interactive 3D visualizations",
        "Process large-scale computational fluid dynamics (CFD) results"
      ],
      technologies: ["ParaView", "VisIt", "Tecplot", "EnSight", "FieldView", "VTK", "Python"],
      outcomes: [
        "Created stunning visualizations for scientific publications",
        "Enabled insights from complex simulation datasets"
      ]
    },
    {
      title: "Video Production & Editing",
      tool: "DaVinci Resolve",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      timeline: "5+ years experience",
      role: "Video Editor",
      description: "Professional video production using industry-standard editing software",
      details: [
        "Edit and produce professional video content",
        "Color grading and visual effects",
        "Audio mixing and sound design",
        "Multi-camera editing and post-production workflows"
      ],
      technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "Final Cut Pro", "Shotcut", "OpenShot", "Lightworks", "Kdenlive"],
      outcomes: [
        "Delivered broadcast-quality video productions",
        "Streamlined post-production workflows for efficiency"
      ]
    },
    {
      title: "2D & 3D Digital Media",
      tool: "Blender",
      image: "https://images.unsplash.com/photo-1618244972954-922cbd0db5f7?w=800&q=80",
      timeline: "5+ years experience",
      role: "3D Artist & Designer",
      description: "Digital media creation using Blender, GIMP, Inkscape, and Adobe Creative Suite",
      details: [
        "3D modeling, texturing, and animation",
        "2D graphic design and illustration",
        "Photo editing and manipulation",
        "Vector graphics and logo design"
      ],
      technologies: ["Blender", "GIMP", "Inkscape", "Krita", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Maya", "Cinema 4D"],
      outcomes: [
        "Created high-quality 3D assets for games and visualizations",
        "Delivered professional graphic design for various projects"
      ]
    },
    {
      title: "Electronics Design & Simulation",
      tool: "KiCAD",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      timeline: "3-5 years experience",
      role: "EDA Specialist",
      description: "PCB design and circuit simulation using KiCAD, LTspice, and professional EDA tools",
      details: [
        "Design custom printed circuit boards (PCBs)",
        "Perform SPICE circuit simulation and analysis",
        "Create schematic diagrams and PCB layouts",
        "Develop embedded electronics systems"
      ],
      technologies: ["KiCAD", "LTspice", "Eagle", "Altium Designer", "LibrePCB", "Ngspice", "Qucs-S", "OrCAD"],
      outcomes: [
        "Designed production-ready PCBs for hardware projects",
        "Validated circuit designs through detailed simulation"
      ]
    },
    {
      title: "CAD & Engineering Design",
      tool: "FreeCAD",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      timeline: "5+ years experience",
      role: "CAD Professional",
      description: "Mechanical and architectural CAD design using FreeCAD, SolidWorks, and AutoCAD",
      details: [
        "3D mechanical design and engineering",
        "Parametric modeling and assemblies",
        "2D technical drawings and documentation",
        "BIM (Building Information Modeling) for architecture"
      ],
      technologies: ["FreeCAD", "SolidWorks", "AutoCAD", "Fusion 360", "Rhino3D", "Revit", "CATIA", "Inventor", "OnShape"],
      outcomes: [
        "Delivered detailed engineering designs for manufacturing",
        "Created comprehensive architectural BIM models"
      ]
    }
  ],
  experience: [
    {
      role: "Sr. Programmer/Analyst",
      company: "University of Richmond",
      period: "December 1999 - Present (26 years 7 months)",
      location: "Richmond, Virginia, United States",
      highlights: [
        "26+ years of continuous service in higher education technology",
        "Specialized in data analysis and Microsoft Excel advanced applications",
        "Developed and maintained critical university systems and applications",
        "Expert in higher education business processes and workflows",
        "Strong background in database programming and data management",
        "Proven track record of delivering reliable, efficient solutions"
      ],
      responsibilities: [
        {
          area: "Systems Development & Data Analysis",
          tasks: [
            {
              id: "ur-001",
              title: "University Systems Development",
              description: "Design, develop, and maintain mission-critical university information systems",
              category: "technical",
              status: "recurring",
              impact: "Enabled efficient university operations through robust technical solutions",
              metrics: ["26+ years of systems", "High uptime", "User satisfaction"],
              tools: ["Database systems", "Programming languages", "Excel"]
            },
            {
              id: "ur-002",
              title: "Advanced Data Analysis",
              description: "Perform complex data analysis using Microsoft Excel and other analytical tools",
              category: "quality",
              status: "recurring",
              impact: "Provided actionable insights for university decision-making",
              metrics: ["Complex analyses", "Data-driven decisions", "Reporting accuracy"],
              tools: ["Microsoft Excel", "SQL", "Data visualization"]
            },
            {
              id: "ur-003",
              title: "Higher Education Business Processes",
              description: "Deep expertise in higher education workflows and business requirements",
              category: "coordination",
              status: "recurring",
              impact: "Optimized university processes through technology solutions",
              metrics: ["Process improvements", "Stakeholder satisfaction", "Efficiency gains"],
              tools: ["Business analysis", "Process mapping", "Requirements gathering"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Years of Service", value: "26+", description: "Continuous employment" },
        { label: "Specialty", value: "Data Analysis", description: "Excel & Analytics" },
        { label: "Domain", value: "Higher Education", description: "University systems" },
        { label: "Reliability", value: "Proven", description: "Long-term track record" }
      ]
    },
    {
      role: "Consultant",
      company: "CPI/Modis",
      period: "1995 - 1999 (4 years)",
      location: "Virginia, United States",
      highlights: [
        "Provided consulting services for various client projects",
        "Developed software solutions for diverse business requirements",
        "Gained broad experience across multiple industries",
        "Delivered projects on time and within budget"
      ],
      responsibilities: [
        {
          area: "Consulting & Software Development",
          tasks: [
            {
              id: "mod-001",
              title: "Client Project Delivery",
              description: "Delivered custom software solutions for consulting clients",
              category: "technical",
              status: "completed",
              impact: "Successfully completed multiple client engagements",
              metrics: ["Client satisfaction", "On-time delivery", "Quality solutions"],
              tools: ["Programming", "Project management", "Client relations"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Role", value: "Consultant", description: "Contract services" },
        { label: "Duration", value: "4 years", description: "1995-1999" },
        { label: "Focus", value: "Software Development", description: "Multiple clients" }
      ]
    },
    {
      role: "Programmer on Tomahawk ABL system",
      company: "Vitro Corp",
      period: "1989 - 1995 (6 years)",
      location: "Virginia, United States",
      highlights: [
        "Worked on Tomahawk missile ABL (Armament Bay Launcher) system",
        "Gained experience in defense/aerospace programming",
        "Developed software for mission-critical systems",
        "Worked with advanced technical requirements and specifications"
      ],
      responsibilities: [
        {
          area: "Defense Systems Programming",
          tasks: [
            {
              id: "vitro-001",
              title: "Tomahawk ABL System Development",
              description: "Programmed software for Tomahawk missile Armament Bay Launcher system",
              category: "technical",
              status: "completed",
              impact: "Contributed to defense systems development",
              metrics: ["System reliability", "Technical specifications met", "Quality assurance"],
              tools: ["Systems programming", "Defense protocols", "Testing"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "System", value: "Tomahawk ABL", description: "Defense system" },
        { label: "Duration", value: "6 years", description: "1989-1995" },
        { label: "Sector", value: "Defense/Aerospace", description: "Mission-critical" }
      ]
    }
  ],
  education: [
    {
      degree: "BS, Computer and Information Sciences",
      school: "Mary Washington College",
      period: "1985 - 1989",
      description: "Bachelor of Science in Computer and Information Sciences"
    }
  ],
  volunteering: [],
  certifications: [
    {
      name: "Game Development Specialist - Available for AI Research",
      issuer: "Professional Portfolio",
      date: "2026",
      credentialId: "linkedin.com/in/scotthollen"
    }
  ],
  publications: []
};
