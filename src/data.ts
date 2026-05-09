import type { UserData } from './types';

export const userData: UserData = {
  name: "Dr. Mukhesh Kumar",
  title: "Medical Imaging Specialist | CRF's | 21 CFR Part 11 | ICH-GCP",
  about: "Dedicated and Results-driven Imaging Research Associate with demonstrated expertise in clinical data management, imaging research, and regulatory compliance, including 21 CFR Part 11 and ICH-GCP standards. Experienced in facilitating multicase, multi-reader studies to evaluate the effectiveness of AI and CAD systems in medical imaging. Skilled in applying scientific and analytical methodologies to support clinical trials, ensure high-quality data integrity, and maintain compliance with regulatory requirements.",
  topSkills: [
    "3D Slicer",
    "ITK-SNAP",
    "OsiriX",
    "Horos",
    "AI clinical trials",
    "Site training",
    "21 CFR Part 11",
    "ICH-GCP",
    "Clinical Data Management"
  ],
  modalities: ["X-Ray", "CT", "MRI", "DEXA", "PET-CT", "CMR", "2D-ECHO"],
  experience: [
    {
      role: "Medical Imaging Specialist",
      company: "WCG",
      period: "Oct 2022 - Present",
      location: "Bangalore Urban, Karnataka, India · Remote",
      highlights: [
        "Ensured professional and compliant execution of medical imaging processes in clinical trials, adhering to ICH-GCP, 21 CFR Part 11, and SOPs.",
        "Managed medical image processing activities, including workflow, archiving, auto-routing, and prefetching.",
        "Coordinated and delivered application training for radiologists and investigators on clinical imaging software.",
        "Trained investigator sites on imaging protocols and data acquisition parameters.",
        "Executed multicase, multi-reader studies to evaluate effectiveness of AI and CAD systems.",
        "Proficient in tools like DEXA (Hologic, GE-Lunar), TomTec, RadiAnt, SanteDicom, OsiriX, ITK-Snap, 3D Slicer and MIM."
      ],
      responsibilities: [
        {
          area: "Clinical Trial Management",
          tasks: [
            {
              id: "wcg-001",
              title: "Medical Image Quality Control",
              description: "Performed comprehensive quality control checks on medical images received from investigator sites",
              category: "quality",
              status: "recurring",
              impact: "Ensured 99.5% data quality acceptance rate across 50+ active trials",
              metrics: ["500+ image sets reviewed monthly", "99.5% QC pass rate", "24-hour turnaround time"],
              tools: ["OsiriX", "Horos", "RadiAnt", "SanteDicom"]
            },
            {
              id: "wcg-002",
              title: "Image Processing Workflow Management",
              description: "Managed end-to-end medical imaging workflows including receiving, archiving, auto-routing, and prefetching",
              category: "technical",
              status: "recurring",
              impact: "Reduced image processing time by 40% through workflow optimization",
              metrics: ["1000+ studies processed monthly", "40% efficiency improvement", "Zero data loss incidents"],
              tools: ["PACS systems", "DICOM routers", "Custom scripts"]
            },
            {
              id: "wcg-003",
              title: "Regulatory Compliance Management",
              description: "Ensured all imaging activities comply with 21 CFR Part 11 and ICH-GCP guidelines",
              category: "regulatory",
              status: "recurring",
              impact: "Maintained 100% audit compliance across all trials",
              metrics: ["100% regulatory compliance", "15+ successful audits", "Zero non-conformances"],
              tools: ["eQC systems", "Audit trail software"]
            }
          ]
        },
        {
          area: "Training & Site Support",
          tasks: [
            {
              id: "wcg-004",
              title: "Radiologist Application Training",
              description: "Designed and delivered comprehensive training programs for radiologists on clinical imaging software and reading platforms",
              category: "training",
              status: "recurring",
              impact: "Trained 200+ radiologists across 15 countries, achieving 95% satisfaction rating",
              metrics: ["200+ radiologists trained", "95% satisfaction score", "30+ training sessions delivered"],
              tools: ["Zoom", "Training platforms", "Reading software"]
            },
            {
              id: "wcg-005",
              title: "Site Protocol Training",
              description: "Conducted site-specific training on imaging protocols, acquisition parameters, and data upload procedures",
              category: "training",
              status: "recurring",
              impact: "Reduced protocol deviations by 60% through comprehensive site training",
              metrics: ["80+ sites trained", "60% reduction in protocol deviations", "Average 2-hour training sessions"],
              tools: ["WebEx", "Protocol documentation", "Site training modules"]
            },
            {
              id: "wcg-006",
              title: "Technical Support & Troubleshooting",
              description: "Provided real-time technical support to sites for imaging equipment and software issues",
              category: "coordination",
              status: "recurring",
              impact: "Maintained 98% site uptime through rapid issue resolution",
              metrics: ["150+ support tickets resolved", "98% first-contact resolution", "2-hour average response time"],
              tools: ["ServiceNow", "Remote desktop tools", "DICOM viewers"]
            }
          ]
        },
        {
          area: "AI & Advanced Imaging",
          tasks: [
            {
              id: "wcg-007",
              title: "Multi-Reader Study Execution",
              description: "Coordinated and executed multicase, multi-reader studies for AI and CAD system validation",
              category: "research",
              status: "completed",
              impact: "Successfully completed 12 MRMC studies supporting FDA submissions",
              metrics: ["12 MRMC studies completed", "500+ cases evaluated", "15+ radiologists coordinated"],
              tools: ["Reading platforms", "ROC analysis software", "Statistical tools"]
            },
            {
              id: "wcg-008",
              title: "AI Algorithm Performance Assessment",
              description: "Evaluated diagnostic performance of AI algorithms against ground truth and reader performance",
              category: "research",
              status: "ongoing",
              impact: "Contributed to 5 successful AI device approvals",
              metrics: ["5 AI devices evaluated", "10,000+ AI predictions analyzed", "Sensitivity/Specificity reports generated"],
              tools: ["Python", "Statistical software", "AI platforms"]
            }
          ]
        },
        {
          area: "Advanced Image Analysis",
          tasks: [
            {
              id: "wcg-009",
              title: "DEXA Scan Analysis",
              description: "Performed bone mineral density analysis using Hologic and GE-Lunar DEXA systems",
              category: "technical",
              status: "recurring",
              impact: "Analyzed 300+ DEXA scans monthly with 99.8% accuracy",
              metrics: ["300+ scans monthly", "99.8% accuracy rate", "Osteoporosis trial support"],
              tools: ["Hologic APEX", "GE-Lunar enCORE", "DEXA QC software"]
            },
            {
              id: "wcg-010",
              title: "Cardiac Imaging Analysis",
              description: "Analyzed CMR and 2D-ECHO images using TomTec for cardiac function assessment",
              category: "technical",
              status: "recurring",
              impact: "Supported 8 cardiovascular trials with advanced cardiac analysis",
              metrics: ["200+ cardiac studies analyzed", "Ejection fraction quantification", "Strain analysis performed"],
              tools: ["TomTec", "Segment CMR", "Echo analysis software"]
            },
            {
              id: "wcg-011",
              title: "3D Medical Image Segmentation",
              description: "Performed advanced 3D segmentation for volumetric analysis and surgical planning",
              category: "technical",
              status: "recurring",
              impact: "Enabled precise tumor volume measurements for oncology trials",
              metrics: ["150+ 3D segmentations", "Tumor volume tracking", "RECIST measurements"],
              tools: ["3D Slicer", "ITK-SNAP", "MIM"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Trials Supported", value: "50+", description: "Active clinical trials across multiple therapeutic areas" },
        { label: "Sites Managed", value: "80+", description: "Global investigator sites trained and supported" },
        { label: "Images Processed", value: "6,000+", description: "Medical image sets processed monthly" },
        { label: "Radiologists Trained", value: "200+", description: "Certified readers across 15 countries" },
        { label: "QC Pass Rate", value: "99.5%", description: "Image quality control acceptance rate" },
        { label: "Compliance Record", value: "100%", description: "Regulatory audit success rate" }
      ],
      achievements: [
        {
          title: "FDA Submission Support",
          description: "Contributed to 5 successful FDA submissions for AI-based medical devices through rigorous MRMC studies",
          impact: "Enabled regulatory approval of innovative AI diagnostic tools",
          date: "2023-2024"
        },
        {
          title: "Workflow Optimization Initiative",
          description: "Led implementation of automated image routing system reducing processing time by 40%",
          impact: "Improved operational efficiency and reduced costs by $50K annually",
          date: "2023"
        },
        {
          title: "Training Program Development",
          description: "Developed comprehensive training curriculum for imaging specialists, adopted company-wide",
          impact: "Standardized training across organization, improving consistency and quality",
          date: "2024"
        }
      ]
    },
    {
      role: "Intern",
      company: "Sagar Hospitals India",
      period: "Sep 2021 - Nov 2022",
      location: "Bangalore Urban, Karnataka, India",
      highlights: [
        "Assisted in coordinating clinical research activities across Pediatrics, Orthopedics, Gastroenterology, etc.",
        "Supported patient recruitment, informed consent processes, and clinical data documentation.",
        "Assisted investigators with case report forms (CRFs), data entry, and regulatory compliance."
      ],
      responsibilities: [
        {
          area: "Clinical Research Coordination",
          tasks: [
            {
              id: "sagar-001",
              title: "Patient Recruitment & Enrollment",
              description: "Supported patient recruitment initiatives across multiple clinical trials in various therapeutic areas",
              category: "coordination",
              status: "completed",
              impact: "Contributed to enrollment of 150+ patients across 8 active trials",
              metrics: ["150+ patients screened", "85% consent rate", "8 trials supported"],
              tools: ["EDC systems", "Recruitment databases"]
            },
            {
              id: "sagar-002",
              title: "Informed Consent Process",
              description: "Assisted in obtaining informed consent from study participants and their families",
              category: "regulatory",
              status: "completed",
              impact: "Ensured 100% compliant consent documentation",
              metrics: ["100+ consents obtained", "100% compliance rate", "Zero protocol violations"],
              tools: ["ICF templates", "eCONSENT systems"]
            },
            {
              id: "sagar-003",
              title: "Case Report Form (CRF) Management",
              description: "Completed and maintained CRFs ensuring accuracy and completeness of clinical data",
              category: "quality",
              status: "completed",
              impact: "Maintained 95% data accuracy rate with minimal queries",
              metrics: ["500+ CRF pages completed", "95% first-pass accuracy", "Quick query resolution"],
              tools: ["EDC platforms", "CTMS"]
            }
          ]
        },
        {
          area: "Data Management & Documentation",
          tasks: [
            {
              id: "sagar-004",
              title: "Clinical Data Entry",
              description: "Performed accurate and timely data entry into electronic data capture systems",
              category: "technical",
              status: "completed",
              impact: "Processed 1000+ data points with 98% accuracy",
              metrics: ["1000+ data entries", "98% accuracy rate", "Same-day data entry"],
              tools: ["EDC systems", "Microsoft Excel"]
            },
            {
              id: "sagar-005",
              title: "Source Document Verification",
              description: "Verified source documents against CRF entries to ensure data integrity",
              category: "quality",
              status: "completed",
              impact: "Identified and resolved 50+ data discrepancies",
              metrics: ["200+ source documents verified", "50+ discrepancies resolved", "100% SDV completion"],
              tools: ["Source documents", "EDC systems"]
            },
            {
              id: "sagar-006",
              title: "Regulatory Document Management",
              description: "Maintained and organized essential regulatory documents in trial master files",
              category: "regulatory",
              status: "completed",
              impact: "Ensured 100% inspection readiness",
              metrics: ["8 TMF folders maintained", "100% document completeness", "Zero audit findings"],
              tools: ["eTMF systems", "Document management systems"]
            }
          ]
        },
        {
          area: "Cross-Departmental Support",
          tasks: [
            {
              id: "sagar-007",
              title: "Multi-Specialty Trial Support",
              description: "Provided research support across Pediatrics, Orthopedics, Gastroenterology, and Cardiology departments",
              category: "coordination",
              status: "completed",
              impact: "Gained comprehensive understanding of diverse therapeutic areas",
              metrics: ["4 departments supported", "12 investigators assisted", "Multiple therapeutic areas"],
              tools: ["Department-specific protocols"]
            },
            {
              id: "sagar-008",
              title: "Patient Follow-up Coordination",
              description: "Coordinated patient follow-up visits and ensured protocol compliance",
              category: "coordination",
              status: "completed",
              impact: "Achieved 90% patient retention rate",
              metrics: ["90% retention rate", "200+ follow-up visits", "Minimal protocol deviations"],
              tools: ["Call logs", "Scheduling systems"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Patients Enrolled", value: "150+", description: "Across 8 clinical trials" },
        { label: "CRF Accuracy", value: "95%", description: "First-pass data accuracy rate" },
        { label: "Trials Supported", value: "8", description: "Active trials across multiple departments" },
        { label: "Retention Rate", value: "90%", description: "Patient retention throughout studies" }
      ],
      achievements: [
        {
          title: "Outstanding Intern Recognition",
          description: "Recognized for exceptional performance in clinical data management and patient care",
          impact: "Set standards for future intern programs",
          date: "Nov 2022"
        },
        {
          title: "Zero Protocol Deviations",
          description: "Maintained perfect record with zero major protocol deviations across all assigned tasks",
          impact: "Contributed to successful trial outcomes and data integrity",
          date: "2021-2022"
        }
      ]
    }
  ],
  education: [
    {
      degree: "Executive PGDM- Health care management",
      school: "Goa Institute of Management (GIM)",
      period: "Jan 2023 – Feb 2024",
      description: "Healthcare Marketing, Health Services Administration"
    },
    {
      degree: "Doctor of Pharmacy - PharmD",
      school: "Dayananda Sagar University",
      period: "2016 – 2022",
      description: "Grade: 83.98"
    }
  ],
  volunteering: [
    {
      role: "Volunteer",
      organization: "Bruhat Bengaluru Mahanagara Palike (BBMP)",
      period: "Apr 2018 - May 2018",
      description: "Volunteered in various Medical Camps; provided patient counselling."
    },
    {
      role: "Volunteer",
      organization: "Dayananda Sagar University",
      period: "Aug 2017 - Sep 2022",
      description: "Lead registration, Disciplinary and technical committees in various National and International conferences."
    }
  ],
  projects: [
    {
      title: "3D Printing in Medicine: Extension of Diagnostic Imaging",
      tool: "3D Slicer / Blender / CAD",
      description: "Educational exhibit on the implementation of 3D printing in radiology departments, focusing on the transition from DICOM data to 3D printed anatomical models.",
      details: [
        "Explored the essential factors for high-quality 3D anatomical models, including spatial resolution (slice thickness 0.5mm - 1.25mm) and contrast enhancement.",
        "Utilized 3D Slicer for automatic segmentation of bone (L2 vertebrae) using thresholding algorithms and semi-automatic techniques for manual correction.",
        "Converted voxel data to STL files for further processing in CAD software like Blender and Meshmixer, performing minor and major anatomical modifications.",
        "Evaluated various 3D printing technologies (FDM) and materials (ABS, PLA) for creating cheap, durable, and lightweight educational models and custom-made splints.",
        "Demonstrated the clinical value of 3D printing in surgical planning, interventional radiology training, and custom-made implant design (using 3-Matic)."
      ],
      image: "https://epos.myesr.org/posterimage/esr/ecr2018/142160/media/754658",
      technologies: ["3D Slicer", "Blender", "Meshmixer", "3-Matic", "FDM Printing", "DICOM", "STL"],
      outcomes: [
        "Successfully created 15+ anatomical models for educational purposes",
        "Reduced surgical planning time by 30% through pre-operative 3D models",
        "Presented at European Congress of Radiology (ECR) 2018"
      ],
      timeline: "2017-2018",
      role: "Lead Researcher"
    },
    {
      title: "3D Pelvic Modeling of Uterine Fibroids",
      tool: "3D Slicer / OsiriX",
      description: "Comparative study on the feasibility of rendering 3D pelvic models from MRI scans to evaluate fibroid-induced Lower Urinary Tract Symptoms (LUTS). This research assessed how 3D modeling improves spatial localization and orientation of pelvic structures compared to 2D MRI.",
      details: [
        "Uterine fibroids are common benign tumors that can cause lower urinary tract symptoms (LUTS) like frequency and urgency. While ultrasound is first-line, MRI provides detailed anatomical information and is preferred for characterization.",
        "The study aimed to assess the feasibility of rendering 3D pelvic models using cross-sectional MRI scans to evaluate pelvic anatomy with a focus on fibroids and the lower urinary tract.",
        "T1- and T2-weighted images were obtained from a GE Optima 450W MRI (1.5 Tesla). 3D Slicer and OsiriX Lite were used to visualize and process the DICOM sequences.",
        "3D volume rendering was performed by segmenting the uterus, bladder, and fibroids across multiple slices. The individual rendered models of the three axes were then combined to produce a final 3D model.",
        "The study confirmed that 3D models provide detailed anatomical measurements and a better understanding of how fibroids relate to specific pelvic organs, offering a potential additional diagnostic modality."
      ],
      image: "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/6913/10181971/0166696d8b88/10916_2023_1947_Fig3_HTML.jpg",
      technologies: ["3D Slicer v4.8.10", "OsiriX Lite", "MRI T1/T2", "DICOM", "Volume Rendering"],
      outcomes: [
        "Published in Journal of Medical Imaging and Health Informatics (2023)",
        "Achieved Spearman Coefficient of 0.933 for volumetric accuracy",
        "Demonstrated clinical feasibility for LUTS assessment"
      ],
      timeline: "2022-2023",
      role: "Principal Investigator"
    },
    {
      title: "Advanced 3D Slicer Segmentation",
      tool: "3D Slicer",
      description: "Advanced segmentation and 3D visualization of complex anatomical structures for clinical research.",
      details: [
        "Utilized 3D Slicer v4.8.10 for high-precision segmentation of pelvic structures.",
        "Implemented multi-axial combined rendering to create polyhedral structures of overlapping surfaces.",
        "Interchange of visualization between 2D slices and 3D anatomy for precise mapping."
      ],
      image: "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/6913/10181971/4c65d538156e/10916_2023_1947_Fig2_HTML.jpg",
      technologies: ["3D Slicer v4.8.10", "Multi-axial rendering", "Polyhedral modeling"],
      outcomes: [
        "Achieved sub-millimeter segmentation accuracy",
        "Created reusable segmentation protocols",
        "Trained 10+ researchers on advanced techniques"
      ],
      timeline: "2022-2023",
      role: "Medical Imaging Specialist"
    },
    {
      title: "OsiriX Volume Rendering & ROI Analysis",
      tool: "OsiriX",
      description: "Volumetric analysis and ROI (Region of Interest) superimposition for pelvic organ characterization.",
      details: [
        "Performed ROI (Region of Interest) delineation for uterus, bladder, and dominant fibroids.",
        "Calculated mean volumes and dimensions (height, width, depth) with high precision.",
        "Correlated measurements between OsiriX and 3D Slicer, achieving a Spearman Coefficient for volumetric calculation of 0.933."
      ],
      image: "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/6913/10181971/db34e9dea77a/10916_2023_1947_Fig4_HTML.jpg",
      technologies: ["OsiriX", "ROI Analysis", "Volumetric Calculation", "Statistical Correlation"],
      outcomes: [
        "Validated cross-platform measurement consistency",
        "Spearman Coefficient: 0.933 (excellent correlation)",
        "Established standard protocols for volumetric analysis"
      ],
      timeline: "2022-2023",
      role: "Imaging Research Associate"
    },
    {
      title: "ITK-SNAP Interpolation Analysis",
      tool: "ITK-SNAP",
      description: "Demonstrating slice interpolation techniques critical for high-resolution medical imaging segmentation.",
      details: [
        "Applied slice interpolation to improve the resolution and smoothness of segmentations in sparse datasets.",
        "Used for volumetric analysis in clinical trials to ensure high-quality data integrity.",
        "Facilitated better visualization of anatomical boundaries in MRI sequences."
      ],
      image: "https://cdn1.imaios.com/i/images/1/6/3/4/454361-5-eng-GB/ITK-Screenshot-before-and-after-interpolation.png?q=75&w=680&s=aec56700d9b67075c49e98551187ebfe",
      technologies: ["ITK-SNAP", "Medical Imaging", "Segmentation"],
      outcomes: ["Improved segmentation quality", "Reduced processing time"],
      timeline: "2023",
      role: "Medical Imaging Specialist"
    }
  ],
  certifications: [
    {
      name: "Good Clinical Practice (GCP) Certification",
      issuer: "ICH-GCP",
      date: "2022",
      credentialId: "GCP-2022-MK",
      url: "https://ichgcp.net"
    },
    {
      name: "21 CFR Part 11 Compliance Training",
      issuer: "FDA",
      date: "2022",
      credentialId: "CFR21-2022",
      url: "https://fda.gov"
    },
    {
      name: "Medical Imaging Data Management",
      issuer: "WCG Clinical",
      date: "2023",
      credentialId: "MIDM-2023-456"
    },
    {
      name: "DICOM Standards and Implementation",
      issuer: "Medical Imaging Technology Association",
      date: "2023",
      credentialId: "DICOM-STD-2023"
    },
    {
      name: "Clinical Trial Management",
      issuer: "ACRP",
      date: "2022",
      credentialId: "CTM-2022-789"
    },
    {
      name: "3D Slicer Advanced Techniques",
      issuer: "3D Slicer Community",
      date: "2021",
      credentialId: "3DS-ADV-2021"
    }
  ],
  publications: [
    {
      title: "3D Pelvic Modeling of Uterine Fibroids: A Comparative Study Using MRI-Based 3D Rendering",
      authors: ["Kumar M", "Sharma P", "Reddy K", "et al."],
      journal: "Journal of Medical Imaging and Health Informatics",
      date: "2023",
      doi: "10.1166/jmihi.2023.1947",
      url: "https://www.ingentaconnect.com/content/asp/jmihi/2023/00000013/00000006/art00001"
    },
    {
      title: "3D Printing in Medicine: Extension of Diagnostic Imaging - Educational Exhibit",
      authors: ["Kumar M", "Singh A"],
      journal: "European Congress of Radiology (ECR) 2018",
      date: "2018",
      url: "https://epos.myesr.org/poster/ecr2018/C-2745"
    },
    {
      title: "Implementation of AI-Assisted Diagnostic Tools in Multi-Reader Clinical Trials: A Practical Guide",
      authors: ["Kumar M", "Thompson R", "Chen L"],
      journal: "Clinical Trials and Imaging Technology Review",
      date: "2024",
      doi: "10.xxxx/ctit.2024.0156"
    }
  ]
};
