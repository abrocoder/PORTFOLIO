import type { UserData } from './types';

export const userData: UserData = {
  name: "Sharon Jeptoo Sang",
  title: "Support Worker | Mental Health & Learning Disabilities Specialist",
  about: "Compassionate and dedicated Support Worker with experience supporting individuals with mental health conditions, learning disabilities, autism, and complex care needs across residential, community, and educational settings. Skilled in delivering person-centred care, supporting individuals with activities of daily living (ADLs), and promoting independence, dignity, and wellbeing. Experienced in hospital discharge and community transition support, working collaboratively with multidisciplinary teams to achieve positive outcomes. Committed to safeguarding, equality, and providing high-quality, responsive care.",
  topSkills: [
    "Person-centred care & support planning",
    "Mental health support",
    "Autism & learning disabilities",
    "Safeguarding & duty of care",
    "Activities of Daily Living (ADLs)",
    "Medication support",
    "Behaviour management",
    "Risk assessments",
    "Communication & emotional support"
  ],
  modalities: [],
  experience: [
    {
      role: "Specialist Support Worker",
      company: "Prosperity Health Care",
      period: "June 2025 - Present",
      location: "Gloucester, England",
      highlights: [
        "Support individuals transitioning from hospital to community settings",
        "Deliver person-centred care plans for clients with complex mental health and clinical needs",
        "Promote independence, recovery, and community integration",
        "Work collaboratively with multidisciplinary teams, families, and external professionals",
        "Conduct risk assessments and monitor changes in physical and mental health",
        "Maintain accurate care records and reports in line with safeguarding policies"
      ],
      responsibilities: [
        {
          area: "Hospital Discharge & Community Transition",
          tasks: [
            {
              id: "psh-001",
              title: "Hospital to Community Transition Support",
              description: "Support individuals transitioning from hospital settings to community-based living arrangements",
              category: "coordination",
              status: "recurring",
              impact: "Successfully supported smooth transitions for individuals with complex mental health needs",
              metrics: ["Smooth community transitions", "Reduced readmission rates", "Enhanced community integration"],
              tools: ["Care plans", "MDT meetings", "Risk assessments"]
            },
            {
              id: "psh-002",
              title: "Person-Centred Care Delivery",
              description: "Deliver individualized care plans tailored to complex mental health and clinical needs",
              category: "quality",
              status: "recurring",
              impact: "Enhanced client wellbeing and promoted independence through personalized care approaches",
              metrics: ["Individualized care plans", "Improved client outcomes", "Positive feedback from families"],
              tools: ["Care documentation", "Support plans", "Progress reports"]
            },
            {
              id: "psh-003",
              title: "Multidisciplinary Team Collaboration",
              description: "Work collaboratively with healthcare professionals, families, and external services",
              category: "coordination",
              status: "recurring",
              impact: "Achieved comprehensive care coordination and positive client outcomes",
              metrics: ["Regular MDT meetings", "Effective communication", "Holistic care delivery"],
              tools: ["MDT meetings", "Care coordination systems", "Professional networks"]
            }
          ]
        },
        {
          area: "Care & Support Services",
          tasks: [
            {
              id: "psh-004",
              title: "Risk Assessment & Monitoring",
              description: "Conduct comprehensive risk assessments and monitor changes in physical and mental health",
              category: "quality",
              status: "recurring",
              impact: "Early identification of health concerns and proactive intervention",
              metrics: ["Regular risk assessments", "Health monitoring", "Incident prevention"],
              tools: ["Risk assessment forms", "Health monitoring tools", "Care records"]
            },
            {
              id: "psh-005",
              title: "Safeguarding & Documentation",
              description: "Maintain accurate care records and reports in line with safeguarding policies",
              category: "regulatory",
              status: "recurring",
              impact: "100% compliance with safeguarding requirements and quality documentation",
              metrics: ["Comprehensive documentation", "Safeguarding compliance", "Audit readiness"],
              tools: ["Electronic care records", "Safeguarding protocols", "Reporting systems"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Care Setting", value: "Hospital to Community", description: "Specialized transition support" },
        { label: "Client Focus", value: "Complex Mental Health", description: "Advanced care needs" },
        { label: "Team Collaboration", value: "Multidisciplinary", description: "Integrated care approach" },
        { label: "Compliance", value: "100%", description: "Safeguarding standards" }
      ],
      achievements: [
        {
          title: "Successful Community Transitions",
          description: "Supported multiple successful transitions from hospital to community settings",
          impact: "Enabled individuals to achieve greater independence and quality of life",
          date: "2025"
        }
      ]
    },
    {
      role: "Support Worker",
      company: "Futures Care",
      period: "Jan 2025 - Present",
      location: "Gloucester, England",
      highlights: [
        "Provide day-to-day support to individuals with mental health needs and learning disabilities",
        "Assist with personal care, medication, and daily living activities (ADLs)",
        "Encourage independence, choice, and community participation",
        "Follow safeguarding procedures and organisational policies",
        "Maintain detailed documentation and care records"
      ],
      responsibilities: [
        {
          area: "Daily Care & Support",
          tasks: [
            {
              id: "fc-001",
              title: "Personal Care & ADL Support",
              description: "Provide comprehensive support with activities of daily living including personal care",
              category: "quality",
              status: "recurring",
              impact: "Enhanced client dignity and independence in daily activities",
              metrics: ["Daily ADL support", "Personal care assistance", "Dignity maintained"],
              tools: ["Care plans", "Personal care protocols", "Mobility aids"]
            },
            {
              id: "fc-002",
              title: "Medication Support",
              description: "Support individuals with medication administration and observation",
              category: "quality",
              status: "recurring",
              impact: "Ensured medication compliance and safety",
              metrics: ["Medication administration", "Accurate documentation", "Safety protocols followed"],
              tools: ["MAR charts", "Medication systems", "Care records"]
            },
            {
              id: "fc-003",
              title: "Community Participation",
              description: "Encourage and support community engagement and social activities",
              category: "coordination",
              status: "recurring",
              impact: "Improved social inclusion and quality of life",
              metrics: ["Community activities", "Social engagement", "Enhanced wellbeing"],
              tools: ["Activity plans", "Community resources", "Transport arrangements"]
            }
          ]
        },
        {
          area: "Safeguarding & Documentation",
          tasks: [
            {
              id: "fc-004",
              title: "Safeguarding Compliance",
              description: "Follow safeguarding procedures and maintain compliance with organizational policies",
              category: "regulatory",
              status: "recurring",
              impact: "Maintained high standards of safeguarding and duty of care",
              metrics: ["Safeguarding adherence", "Policy compliance", "Zero incidents"],
              tools: ["Safeguarding procedures", "Organizational policies", "Reporting systems"]
            },
            {
              id: "fc-005",
              title: "Care Documentation",
              description: "Maintain detailed and accurate care records and documentation",
              category: "quality",
              status: "recurring",
              impact: "Ensured comprehensive record-keeping and care continuity",
              metrics: ["Accurate records", "Timely documentation", "Quality audits passed"],
              tools: ["Electronic care systems", "Daily logs", "Progress reports"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Support Type", value: "Mental Health & LD", description: "Dual specialization" },
        { label: "Care Approach", value: "Person-Centred", description: "Individualized support" },
        { label: "Documentation", value: "Detailed", description: "Comprehensive records" },
        { label: "Compliance", value: "100%", description: "Safeguarding standards" }
      ]
    },
    {
      role: "Bank Learning Support Worker",
      company: "Take Five Health Care",
      period: "Sept 2024 - Present",
      location: "Gloucester, England",
      highlights: [
        "Provide flexible support across college environments, supported living, and community-based services",
        "Support students with learning disabilities, autism, mental health conditions, and complex clinical needs",
        "Assist with ADLs including personal care, mobility, and classroom engagement",
        "Promote independence, dignity, and social inclusion",
        "Work with teaching staff and multidisciplinary teams to support EHCPs",
        "Manage behaviour that challenges using de-escalation techniques",
        "Follow safeguarding, risk assessments, and duty of care procedures",
        "Maintain accurate care documentation and reports",
        "Adapt to different environments and individual needs"
      ],
      responsibilities: [
        {
          area: "Educational Support",
          tasks: [
            {
              id: "tfhc-001",
              title: "College & Classroom Support",
              description: "Support students in college environments with learning and engagement activities",
              category: "training",
              status: "recurring",
              impact: "Enhanced educational outcomes and student participation",
              metrics: ["Classroom engagement", "Learning support", "Academic progress"],
              tools: ["Educational materials", "Support plans", "Communication aids"]
            },
            {
              id: "tfhc-002",
              title: "EHCP Implementation",
              description: "Work with multidisciplinary teams to support Education, Health and Care Plans",
              category: "coordination",
              status: "recurring",
              impact: "Comprehensive support aligned with individual educational needs",
              metrics: ["EHCP compliance", "Team collaboration", "Goal achievement"],
              tools: ["EHCP documents", "MDT meetings", "Progress tracking"]
            },
            {
              id: "tfhc-003",
              title: "Personal Care & Mobility Support",
              description: "Assist with personal care, mobility, and activities of daily living in educational settings",
              category: "quality",
              status: "recurring",
              impact: "Maintained dignity and independence in educational environments",
              metrics: ["Personal care support", "Mobility assistance", "Dignity preserved"],
              tools: ["Mobility aids", "Personal care equipment", "Care protocols"]
            }
          ]
        },
        {
          area: "Behaviour Management & Complex Needs",
          tasks: [
            {
              id: "tfhc-004",
              title: "Behaviour Management",
              description: "Manage behaviour that challenges using positive behaviour support and de-escalation techniques",
              category: "quality",
              status: "recurring",
              impact: "Reduced incidents and promoted positive behaviour outcomes",
              metrics: ["Effective de-escalation", "Reduced incidents", "Positive behaviour support"],
              tools: ["De-escalation techniques", "PBS plans", "Incident reporting"]
            },
            {
              id: "tfhc-005",
              title: "Autism & Complex Clinical Needs Support",
              description: "Provide specialized support for individuals with autism and complex clinical needs",
              category: "quality",
              status: "recurring",
              impact: "Enhanced quality of life through specialized understanding and support",
              metrics: ["Autism-aware support", "Clinical needs management", "Individualized approaches"],
              tools: ["Autism strategies", "Clinical protocols", "Sensory tools"]
            },
            {
              id: "tfhc-006",
              title: "Multi-Environment Adaptation",
              description: "Adapt support approaches across different environments and individual needs",
              category: "coordination",
              status: "recurring",
              impact: "Flexible and responsive care delivery across various settings",
              metrics: ["Environment adaptability", "Flexible approach", "Consistent quality"],
              tools: ["Environment assessments", "Adaptable strategies", "Communication methods"]
            }
          ]
        },
        {
          area: "Safeguarding & Risk Management",
          tasks: [
            {
              id: "tfhc-007",
              title: "Risk Assessments & Safety",
              description: "Conduct risk assessments and follow duty of care procedures",
              category: "regulatory",
              status: "recurring",
              impact: "Maintained safe environments and proactive risk management",
              metrics: ["Regular risk assessments", "Safety maintained", "Proactive interventions"],
              tools: ["Risk assessment forms", "Safety protocols", "Monitoring systems"]
            },
            {
              id: "tfhc-008",
              title: "Safeguarding & Documentation",
              description: "Follow safeguarding procedures and maintain accurate documentation",
              category: "regulatory",
              status: "recurring",
              impact: "100% safeguarding compliance and comprehensive record-keeping",
              metrics: ["Safeguarding compliance", "Accurate documentation", "Audit readiness"],
              tools: ["Safeguarding procedures", "Electronic records", "Reporting systems"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Settings Supported", value: "Multiple", description: "College, supported living, community" },
        { label: "Client Groups", value: "Diverse", description: "LD, autism, mental health, complex needs" },
        { label: "Flexibility", value: "High", description: "Bank/flexible support model" },
        { label: "Safeguarding", value: "100%", description: "Full compliance" }
      ],
      achievements: [
        {
          title: "Multi-Setting Excellence",
          description: "Successfully adapted support across diverse environments and client needs",
          impact: "Demonstrated versatility and high-quality care delivery",
          date: "2024-Present"
        }
      ]
    },
    {
      role: "Health Care Assistant",
      company: "Royale Health Care",
      period: "Sept 2023 - Feb 2025",
      location: "Gloucester, England",
      highlights: [
        "Delivered care to elderly clients including dementia and mobility needs",
        "Supported personal care, feeding, continence, and medication",
        "Used hoists and mobility aids safely",
        "Maintained hygiene and infection control standards",
        "Provided emotional support and companionship",
        "Reported changes in condition to senior staff"
      ],
      responsibilities: [
        {
          area: "Elderly Care & Dementia Support",
          tasks: [
            {
              id: "rhc-001",
              title: "Dementia Care",
              description: "Provide specialized care and support for elderly clients with dementia",
              category: "quality",
              status: "completed",
              impact: "Enhanced quality of life for clients with cognitive impairments",
              metrics: ["Person-centred dementia care", "Emotional support", "Dignity maintained"],
              tools: ["Dementia care strategies", "Communication techniques", "Activity plans"]
            },
            {
              id: "rhc-002",
              title: "Personal Care & ADLs",
              description: "Support with personal care, feeding, continence, and daily living activities",
              category: "quality",
              status: "completed",
              impact: "Maintained client dignity and independence in daily activities",
              metrics: ["Comprehensive personal care", "Continence management", "Feeding support"],
              tools: ["Personal care equipment", "Continence aids", "Feeding protocols"]
            },
            {
              id: "rhc-003",
              title: "Mobility & Hoisting Support",
              description: "Safely use hoists and mobility aids to support client movement",
              category: "technical",
              status: "completed",
              impact: "Ensured safe mobility and reduced risk of falls and injuries",
              metrics: ["Safe hoisting", "Mobility assistance", "Zero incidents"],
              tools: ["Hoists", "Mobility aids", "Moving and handling equipment"]
            }
          ]
        },
        {
          area: "Medication & Health Monitoring",
          tasks: [
            {
              id: "rhc-004",
              title: "Medication Support",
              description: "Support medication administration and observation for elderly clients",
              category: "quality",
              status: "completed",
              impact: "Ensured medication compliance and safety for elderly residents",
              metrics: ["Medication administration", "Accurate records", "Safety maintained"],
              tools: ["MAR charts", "Medication systems", "Documentation"]
            },
            {
              id: "rhc-005",
              title: "Health Condition Monitoring",
              description: "Monitor and report changes in client condition to senior staff",
              category: "quality",
              status: "completed",
              impact: "Early identification of health concerns and timely interventions",
              metrics: ["Regular monitoring", "Timely reporting", "Health improvements"],
              tools: ["Observation charts", "Communication systems", "Reporting protocols"]
            }
          ]
        },
        {
          area: "Infection Control & Companionship",
          tasks: [
            {
              id: "rhc-006",
              title: "Hygiene & Infection Control",
              description: "Maintain high standards of hygiene and infection control",
              category: "quality",
              status: "completed",
              impact: "Protected vulnerable clients from infections and maintained safe environments",
              metrics: ["Infection control compliance", "High hygiene standards", "Zero outbreaks"],
              tools: ["PPE", "Cleaning protocols", "Infection control procedures"]
            },
            {
              id: "rhc-007",
              title: "Emotional Support & Companionship",
              description: "Provide emotional support, companionship, and social engagement",
              category: "quality",
              status: "completed",
              impact: "Improved client wellbeing and reduced feelings of isolation",
              metrics: ["Regular companionship", "Social engagement", "Enhanced wellbeing"],
              tools: ["Communication skills", "Activity engagement", "Emotional support techniques"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Care Focus", value: "Elderly & Dementia", description: "Specialized elderly care" },
        { label: "Safety Record", value: "Excellent", description: "Zero major incidents" },
        { label: "Infection Control", value: "High Standards", description: "Full compliance" },
        { label: "Client Satisfaction", value: "Positive", description: "Excellent feedback" }
      ],
      achievements: [
        {
          title: "Outstanding Care Delivery",
          description: "Consistently delivered high-quality care to elderly clients with complex needs",
          impact: "Received positive feedback from clients, families, and management",
          date: "2023-2025"
        }
      ]
    }
  ],
  education: [
    {
      degree: "MSc Applied Data Science",
      school: "Anglia Ruskin University, Cambridge",
      period: "Completed Nov 2024",
      description: "Advanced studies in data science methodologies and applications"
    },
    {
      degree: "Certified Public Accountant (CPA)",
      school: "KASNEB",
      period: "Completed Aug 2023",
      description: "Professional accounting certification"
    },
    {
      degree: "BSc Applied Statistics with IT",
      school: "Maseno University",
      period: "Completed",
      description: "Undergraduate degree in applied statistics and information technology"
    }
  ],
  volunteering: [],
  projects: [],
  certifications: [],
  publications: []
};
