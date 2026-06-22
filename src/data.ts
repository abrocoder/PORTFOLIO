import type { UserData } from './types';

export const userData: UserData = {
  name: "Korie Myers",
  title: "Healthcare AI Consultant | Physician-Scientist | Medical Imaging AI",
  about: "I believe in science with soul, AI with empathy, and always asking, 'What if we could make this better?' As a physician-scientist with expertise in healthcare AI, medical imaging, and clinical research, I bridge the gap between cutting-edge technology and compassionate patient care. My work spans AI evaluation, medical imaging analysis, and clinical informatics, with experience at Cleveland Clinic and leading healthcare AI initiatives.",
  topSkills: [
    "Prompt Engineering",
    "AI for Healthcare",
    "Large Language Models (LLM)",
    "Medical Imaging AI",
    "Clinical AI",
    "3D Slicer",
    "Python",
    "Deep Learning",
    "Health Informatics"
  ],
  modalities: [],
  projects: [
    {
      title: "Healthcare AI Evaluation & LLM Validation",
      tool: "LLM",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      timeline: "May 2026 - Present",
      role: "Healthcare AI Consultant",
      description: "Evaluating and validating LLM outputs across healthcare domains for AI training and benchmarking",
      details: [
        "Designed prompts, rubrics, and evaluation frameworks for model accuracy assessment",
        "Expert review of AI-generated clinical and analytical content",
        "Developed domain-specific scenarios for medical imaging with 3D Slicer",
        "Applied HITL (Human-in-the-Loop) AI evaluation methodology"
      ],
      technologies: ["LLMs", "Prompt Engineering", "3D Slicer", "Healthcare AI", "Clinical Reasoning"],
      outcomes: [
        "Improved model performance through structured feedback",
        "Enhanced AI reliability in clinical contexts"
      ]
    },
    {
      title: "Quantitative Neuroimaging Analysis - Cleveland Clinic",
      tool: "Medical Imaging",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      timeline: "June 2025 - May 2026",
      role: "Research Engineer - Biomedical Imaging",
      description: "Leading quantitative neuroimaging analysis across 350+ DaT SPECT and amyloid PET cases",
      details: [
        "Processed 200+ DaT SPECT and 150+ amyloid PET (Centiloid) cases",
        "Developed regression-based cross-calibration models in Python",
        "Implemented SPM-based PET workflows for SUVR and Centiloid computation",
        "Architected automated CT attenuation pipelines (80% efficiency gain)",
        "Reduced volumetric pipeline runtime from 48 hours to 4 hours"
      ],
      technologies: ["VIA", "DaTQUANT", "SPM", "Python", "NumPy", "Pandas", "Docker", "MIM"],
      outcomes: [
        "Standardized biomarker extraction across 350+ cases",
        "80% reduction in manual profiling effort (1200+ studies)",
        "48h→4h pipeline optimization with parallelization"
      ]
    },
    {
      title: "Deep Learning for Pancreatic & Brain MRI",
      tool: "Deep Learning",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
      timeline: "June 2024 - June 2025",
      role: "Data Scientist",
      description: "Engineered deep-learning pipelines for automated MRI analysis using 3D U-Net architectures",
      details: [
        "Automated SQ-MRI scoring for pancreatic MRI",
        "Robust perivascular space detection in brain MRI",
        "Deployed Dockerized workflows across multi-institutional datasets",
        "Reduced manual ROI delineation by up to 90%"
      ],
      technologies: ["3D U-Net", "Deep Learning", "Docker", "Python", "Medical Imaging", "MRI Analysis"],
      outcomes: [
        "90% reduction in manual ROI delineation",
        "Reproducible inference across multiple institutions"
      ]
    },
    {
      title: "Human-AI Collaboration in Surgery Outcomes",
      tool: "Clinical AI",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      timeline: "January 2023 - May 2024",
      role: "Clinical Data Analyst",
      description: "Multi-institutional studies analyzing 170,000+ surgical cases with AI collaboration",
      details: [
        "Led large-scale time-series analyses on 170,000+ surgical cases",
        "Improved 30-day mortality prediction accuracy by 30%",
        "Presented findings at AMIA and IEEE ISBI conferences",
        "Human-AI collaboration research in clinical decision-making"
      ],
      technologies: ["Machine Learning", "Time-Series Analysis", "Python", "Clinical Analytics", "Predictive Modeling"],
      outcomes: [
        "30% improvement in mortality prediction accuracy",
        "Research presented at AMIA and IEEE ISBI"
      ]
    },
    {
      title: "Hospital Workflow Optimization & Analytics",
      tool: "Healthcare Analytics",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      timeline: "April 2021 - November 2022",
      role: "Clinical Data Analyst",
      description: "Managed and analyzed 10,000+ patient records to improve hospital efficiency",
      details: [
        "Optimized workflows, reducing wait times by 30%",
        "Improved treatment efficacy by 15%",
        "Developed real-time dashboards in Tableau",
        "Applied statistical modeling using SPSS for clinical trends"
      ],
      technologies: ["Tableau", "SPSS", "Statistical Modeling", "Healthcare Analytics", "Data Visualization"],
      outcomes: [
        "30% reduction in patient wait times",
        "15% improvement in treatment efficacy",
        "Real-time patient outcome tracking"
      ]
    },
    {
      title: "COVID-19 Critical Care Management",
      tool: "Clinical Medicine",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
      timeline: "April 2020 - March 2021",
      role: "Clinical Intern (House Surgeon)",
      description: "Provided critical care during pandemic at leading COVID-19 referral center",
      details: [
        "Managed 100+ patients daily in ICU and emergency settings",
        "Coordinated oxygen therapy and critical interventions",
        "Handled emergency triage and minor procedures",
        "Collaborated with specialists on treatment strategies",
        "Maintained medical documentation for continuity and research"
      ],
      technologies: ["Critical Care", "Emergency Medicine", "ICU Management", "COVID-19 Treatment"],
      outcomes: [
        "Provided care for 100+ patients daily",
        "Developed rapid decision-making in high-pressure environments"
      ]
    }
  ],
  experience: [
    {
      role: "Healthcare AI Consultant",
      company: "Mercor | Outlier AI | Scale AI",
      period: "May 2026 - Present (2 months)",
      location: "Seattle, WA",
      highlights: [
        "Evaluating and validating LLM outputs across healthcare, clinical reasoning, biostatistics, and ML domains",
        "Designing prompts, rubrics, and evaluation frameworks for AI model assessment",
        "Developing medical imaging scenarios using 3D Slicer for AI training",
        "Conducting expert review of AI-generated clinical content",
        "Applying expertise in medicine, health informatics, and healthcare analytics"
      ],
      responsibilities: [
        {
          area: "AI Evaluation & Validation",
          tasks: [
            {
              id: "ai-001",
              title: "LLM Healthcare Evaluation",
              description: "Evaluate LLM outputs for accuracy, reasoning quality, and clinical consistency",
              category: "quality",
              status: "recurring",
              impact: "Improved AI model reliability in healthcare applications",
              metrics: ["Model accuracy", "Clinical consistency", "Reasoning quality"],
              tools: ["LLMs", "Prompt Engineering", "Evaluation Frameworks"]
            },
            {
              id: "ai-002",
              title: "3D Slicer Workflow Development",
              description: "Design domain-specific medical imaging workflows for AI training",
              category: "technical",
              status: "recurring",
              impact: "Enhanced AI training for medical imaging applications",
              metrics: ["Workflow scenarios", "Task execution", "Quality control"],
              tools: ["3D Slicer", "Medical Imaging", "AI Training"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Domain", value: "Healthcare AI", description: "LLM evaluation" },
        { label: "Expertise", value: "Clinical + AI", description: "Physician-scientist" },
        { label: "Focus", value: "Medical Imaging", description: "3D Slicer workflows" }
      ]
    },
    {
      role: "Research Engineer - Biomedical Imaging",
      company: "Cleveland Clinic",
      period: "June 2025 - May 2026 (1 year)",
      location: "Cleveland, OH",
      highlights: [
        "Led quantitative neuroimaging analysis across 200+ DaT SPECT and 150+ amyloid PET cases",
        "Developed Python-based cross-calibration models (NumPy, Pandas, StatsModels)",
        "Implemented SPM-based PET workflows for SUVR and Centiloid computation",
        "Architected automated CT pipelines reducing manual effort by 80% (1200+ studies)",
        "Reduced pipeline runtime from 48 hours to 4 hours with Docker parallelization"
      ],
      responsibilities: [
        {
          area: "Quantitative Neuroimaging",
          tasks: [
            {
              id: "cc-001",
              title: "DaT SPECT & Amyloid PET Analysis",
              description: "Process and analyze 350+ neuroimaging cases for biomarker extraction",
              category: "technical",
              status: "completed",
              impact: "Standardized neuroimaging biomarker analysis at Cleveland Clinic",
              metrics: ["200+ SPECT cases", "150+ PET cases", "Cross-validated results"],
              tools: ["VIA", "DaTQUANT", "Hermes", "SPM", "Python"]
            },
            {
              id: "cc-002",
              title: "Automated CT Pipeline",
              description: "Architected TotalSegmentator-based CT attenuation pipelines",
              category: "technical",
              status: "completed",
              impact: "80% reduction in manual profiling effort across 1200+ studies",
              metrics: ["80% efficiency gain", "1200+ studies", "Automated processing"],
              tools: ["TotalSegmentator", "Python", "Docker", "MIM"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Cases Analyzed", value: "350+", description: "SPECT & PET" },
        { label: "Efficiency Gain", value: "80%", description: "CT automation" },
        { label: "Speed Up", value: "12x faster", description: "48h → 4h" }
      ],
      achievements: [
        {
          title: "Pipeline Optimization",
          description: "Reduced volumetric analysis runtime from 48 hours to 4 hours",
          impact: "12x speed improvement with Dockerized parallelization",
          date: "2025"
        }
      ]
    },
    {
      role: "Data Scientist",
      company: "Luddy School of Informatics, Computing, and Engineering",
      period: "June 2024 - June 2025 (1 year 1 month)",
      location: "Indianapolis, Indiana",
      highlights: [
        "Engineered deep-learning pipelines for pancreatic and brain MRI",
        "Automated SQ-MRI scoring using 3D U-Net architectures",
        "Deployed Dockerized workflows across multi-institutional datasets",
        "Reduced manual ROI delineation by up to 90%"
      ],
      responsibilities: [
        {
          area: "Deep Learning for Medical Imaging",
          tasks: [
            {
              id: "luddy-001",
              title: "3D U-Net Development",
              description: "Develop multimodal 3D U-Net for automated MRI analysis",
              category: "technical",
              status: "completed",
              impact: "90% reduction in manual segmentation workload",
              metrics: ["90% automation", "Multi-institutional deployment", "Reproducible inference"],
              tools: ["3D U-Net", "Python", "Docker", "Deep Learning"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Automation", value: "90%", description: "ROI delineation" },
        { label: "Architecture", value: "3D U-Net", description: "Deep learning" },
        { label: "Deployment", value: "Multi-institution", description: "Scalable workflows" }
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "Luddy School of Informatics, Computing, and Engineering",
      period: "January 2024 - May 2025 (1 year 5 months)",
      location: "Indianapolis, Indiana",
      highlights: [
        "Supported graduate-level health informatics courses",
        "Mentored students in data science and healthcare analytics",
        "Facilitated lab sessions and grading"
      ],
      responsibilities: [],
      keyMetrics: []
    },
    {
      role: "Clinical Data Analyst",
      company: "Luddy School of Informatics, Computing, and Engineering",
      period: "January 2023 - May 2024 (1 year 5 months)",
      location: "Indianapolis, Indiana",
      highlights: [
        "Led multi-institutional Human-AI collaboration studies",
        "Analyzed 170,000+ surgical cases using time-series methods",
        "Improved 30-day mortality prediction accuracy by 30%",
        "Presented findings at AMIA and IEEE ISBI conferences"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Dataset Size", value: "170,000+", description: "Surgical cases" },
        { label: "Accuracy Gain", value: "+30%", description: "Mortality prediction" },
        { label: "Conferences", value: "AMIA, ISBI", description: "Research presentations" }
      ]
    },
    {
      role: "Clinical Data Analyst",
      company: "RM Hospital",
      period: "April 2021 - November 2022 (1 year 8 months)",
      location: "Hyderabad, Telangana, India",
      highlights: [
        "Managed and analyzed 10,000+ patient records",
        "Reduced patient wait times by 30%",
        "Improved treatment efficacy by 15%",
        "Developed real-time Tableau dashboards",
        "Applied SPSS for statistical modeling and predictive analytics"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Wait Time", value: "-30%", description: "Process optimization" },
        { label: "Treatment", value: "+15%", description: "Efficacy improvement" },
        { label: "Records", value: "10,000+", description: "Patient data" }
      ]
    },
    {
      role: "Clinical Intern (House Surgeon)",
      company: "Gandhi Hospital, Secunderabad",
      period: "April 2020 - March 2021 (1 year)",
      location: "Secunderabad, Telangana, India",
      highlights: [
        "Provided critical care at leading COVID-19 referral center",
        "Managed 100+ patients daily in ICU and emergency settings",
        "Coordinated oxygen therapy and critical interventions",
        "Handled emergency triage and procedures",
        "Developed rapid decision-making in high-pressure environments"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Patient Load", value: "100+/day", description: "COVID-19 center" },
        { label: "Setting", value: "ICU & ER", description: "Critical care" },
        { label: "Duration", value: "1 year", description: "Pandemic response" }
      ]
    }
  ],
  education: [
    {
      degree: "Master's in Health Informatics",
      school: "Indiana University Indianapolis",
      period: "January 2023 - May 2025",
      description: "Graduate studies in health informatics with focus on medical imaging AI, clinical data science, and healthcare analytics"
    },
    {
      degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      school: "Gandhi Medical College",
      period: "September 2015 - March 2021",
      description: "Medical degree with clinical training and internship at Gandhi Hospital (COVID-19 referral center)"
    }
  ],
  volunteering: [],
  certifications: [
    {
      name: "Learning Excel: Data Analysis",
      issuer: "LinkedIn Learning",
      date: "2023"
    },
    {
      name: "SAS® 9.4 Cert Prep: Part 01 SAS Programming Essentials",
      issuer: "LinkedIn Learning",
      date: "2023"
    },
    {
      name: "Advanced SQL for Data Scientists",
      issuer: "LinkedIn Learning",
      date: "2024"
    },
    {
      name: "GCP – Social and Behavioral Research Best Practices for Clinical Research",
      issuer: "CITI Program",
      date: "2023"
    },
    {
      name: "Conflicts of Interest",
      issuer: "CITI Program",
      date: "2023"
    },
    {
      name: "SIIM NIIC Alumni Scholarship 2025",
      issuer: "Society for Imaging Informatics in Medicine",
      date: "2025",
      credentialId: "Scholarship Award"
    },
    {
      name: "IUI Luddy MS Student Scholarship",
      issuer: "Indiana University Indianapolis",
      date: "2024",
      credentialId: "Scholarship Award"
    },
    {
      name: "BioHealth Informatics Research Travel Grant",
      issuer: "Indiana University",
      date: "2024",
      credentialId: "Travel Grant"
    },
    {
      name: "Ruth Walker Health Informatics Scholarship",
      issuer: "Indiana University",
      date: "2023",
      credentialId: "Scholarship Award"
    },
    {
      name: "The SIM Indy Leading the Future Scholarship",
      issuer: "Society for Imaging Informatics in Medicine",
      date: "2023",
      credentialId: "Scholarship Award"
    }
  ],
  publications: []
};
