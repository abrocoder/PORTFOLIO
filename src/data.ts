import type { UserData } from './types';

export const userData: UserData = {
  name: "George Palsgraf",
  title: "AI Data Specialist | Machine Learning & Big Data",
  about: "Forward-thinking psychopharmacology student and full-stack developer specializing in Human-in-the-Loop (HITL) AI model evaluation. Bridging the gap between psychopharmacology and artificial intelligence by applying academic rigor to Reinforcement Learning with Human Feedback (RLHF) and Supervised Fine-Tuning (SFT). Proven ability to engineer agentic AI workflows and independently architect full-stack applications. Seeking to leverage dual expertise in behavioral science and software engineering in elite AI safety fellowships, localized applied research, and clinical tech environments.",
  topSkills: [
    "Claude Skills",
    "OpenSCAD",
    "Mechanical Engineering",
    "Python",
    "Java",
    "C++",
    "TypeScript",
    "Machine Learning",
    "RLHF & SFT"
  ],
  modalities: [],
  projects: [
    {
      title: "AiSignalGraph - Production AI Ecosystem",
      tool: "Full-Stack",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      timeline: "November 2025 - Present (8 months)",
      role: "Founder | Lead Designer",
      description: "Leading the design and architecture of a production-grade software ecosystem optimized for advanced AI workflows",
      details: [
        "End-to-end full-stack development",
        "User experience design and optimization",
        "Cloud infrastructure deployment",
        "Advanced AI workflow integration"
      ],
      technologies: ["Python", "TypeScript", "Node.js", "MongoDB", "Docker", "Tailwind CSS", "Flask"],
      outcomes: [
        "Built production-grade AI workflow platform",
        "Optimized cloud infrastructure for scalability"
      ]
    },
    {
      title: "AI Model Evaluation & RLHF",
      tool: "Machine Learning",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
      timeline: "Ongoing",
      role: "AI Data Specialist",
      description: "Human-in-the-Loop AI model evaluation specializing in RLHF and Supervised Fine-Tuning",
      details: [
        "Reviewed reasoning, coding, and instruction-following outputs",
        "Delivered detailed feedback on accuracy and response quality",
        "Code review evaluation and preference ranking",
        "Advanced prompt engineering and adversarial red-teaming"
      ],
      technologies: ["RLHF", "SFT", "Prompt Engineering", "Red-Teaming", "Model Evaluation"],
      outcomes: [
        "Identified and corrected model hallucinations",
        "Improved AI alignment through targeted feedback"
      ]
    },
    {
      title: "CAD Blueprint Design",
      tool: "AutoCAD",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      timeline: "June 2026 - Present",
      role: "CAD Blueprint Expert",
      description: "Expert-level CAD blueprint design and mechanical engineering documentation",
      details: [
        "Technical blueprint creation and documentation",
        "Mechanical design using AutoCAD and Fusion360",
        "OpenSCAD parametric modeling",
        "Engineering specification development"
      ],
      technologies: ["AutoCAD", "Fusion360", "OpenSCAD", "Mechanical Engineering"],
      outcomes: [
        "Delivered precision engineering blueprints",
        "Streamlined CAD workflow processes"
      ]
    },
    {
      title: "Quality Assurance for AI Vision Models",
      tool: "Computer Vision",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      timeline: "May 2026 - Present",
      role: "Quality Assurance Analyst",
      description: "High-fidelity alignment analysis for AI vision models and descriptive captioning",
      details: [
        "Analyzed descriptive captions for visual action alignment",
        "Identified micro-discrepancies in spatial tracking",
        "Ensured temporal accuracy in real-time visual processing",
        "Quality control for computer vision outputs"
      ],
      technologies: ["Computer Vision", "Quality Assurance", "Image Analysis", "Data Validation"],
      outcomes: [
        "Improved caption-to-visual alignment accuracy",
        "Enhanced spatial and temporal tracking precision"
      ]
    },
    {
      title: "Full-Stack Development Portfolio",
      tool: "Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      timeline: "Ongoing",
      role: "Full-Stack Developer",
      description: "Independent full-stack application architecture and development",
      details: [
        "Built applications using modern tech stacks",
        "Implemented responsive UI/UX designs",
        "Database architecture and optimization",
        "Cloud deployment and DevOps"
      ],
      technologies: ["Python", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Docker", "Bash"],
      outcomes: [
        "Delivered production-ready applications",
        "Optimized performance and scalability"
      ]
    },
    {
      title: "Psychopharmacology & AI Integration",
      tool: "Research",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      timeline: "Academic Focus",
      role: "Researcher",
      description: "Bridging behavioral science and AI through psychopharmacology research",
      details: [
        "Applied cognitive psychology to AI model behavior",
        "Dissected model hallucinations and anomalies",
        "Behavioral anomaly identification",
        "Targeted AI alignment strategies"
      ],
      technologies: ["Behavioral Science", "Cognitive Psychology", "AI Alignment", "Research Methodology"],
      outcomes: [
        "Novel insights into AI-human interaction",
        "Improved model alignment through behavioral science"
      ]
    }
  ],
  experience: [
    {
      role: "AI Data Specialist",
      company: "AfterQuery",
      period: "May 2026 - Present (2 months)",
      location: "Las Vegas, Nevada, United States",
      highlights: [
        "Lead high-complexity evaluation and instruction-tuning tasks for next-generation generative AI models",
        "Apply hybrid background in tech stacks and cognitive psychology to dissect model hallucinations",
        "Identify behavioral anomalies and execute targeted alignment strategies",
        "CAD Blueprint Expert focusing on technical design and engineering"
      ],
      responsibilities: [
        {
          area: "AI Model Evaluation & Training",
          tasks: [
            {
              id: "aq-001",
              title: "Generative AI Model Evaluation",
              description: "Lead high-complexity evaluation and instruction-tuning for next-gen AI models",
              category: "quality",
              status: "recurring",
              impact: "Improved model performance through rigorous evaluation protocols",
              metrics: ["Model accuracy improvements", "Hallucination detection", "Alignment optimization"],
              tools: ["RLHF", "SFT", "Prompt Engineering"]
            },
            {
              id: "aq-002",
              title: "Behavioral Anomaly Detection",
              description: "Apply cognitive psychology to identify and resolve AI behavioral anomalies",
              category: "quality",
              status: "recurring",
              impact: "Enhanced AI safety through behavioral science integration",
              metrics: ["Anomaly detection rate", "Correction accuracy", "Safety improvements"],
              tools: ["Cognitive Psychology", "Model Analysis", "Red-Teaming"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Role Type", value: "Specialist", description: "AI Data & CAD" },
        { label: "Focus", value: "Model Evaluation", description: "Next-gen AI" },
        { label: "Expertise", value: "HITL", description: "Human-in-the-Loop" }
      ]
    },
    {
      role: "Quality Assurance Analyst",
      company: "Handshake",
      period: "May 2026 - Present (2 months)",
      location: "Remote",
      highlights: [
        "Analyzed descriptive captions for high-fidelity alignment with complex, real-time visual actions",
        "Identified and resolved micro-discrepancies in spatial tracking and temporal accuracy",
        "Quality assurance for computer vision and AI captioning systems"
      ],
      responsibilities: [
        {
          area: "Visual AI Quality Assurance",
          tasks: [
            {
              id: "hs-001",
              title: "Caption-Visual Alignment Analysis",
              description: "Ensure high-fidelity alignment between AI-generated captions and visual content",
              category: "quality",
              status: "recurring",
              impact: "Significantly improved caption accuracy and relevance",
              metrics: ["Alignment accuracy", "Discrepancy resolution", "Quality scores"],
              tools: ["Computer Vision", "Quality Analysis", "Data Validation"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Focus Area", value: "Computer Vision", description: "AI captioning QA" },
        { label: "Precision", value: "Micro-level", description: "Spatial & temporal" }
      ]
    },
    {
      role: "Artificial Intelligence Specialist/Fellowship",
      company: "Handshake",
      period: "August 2025 - Present (11 months)",
      location: "Remote",
      highlights: [
        "11-month AI fellowship program focusing on advanced AI applications",
        "Specialized in AI model evaluation and alignment",
        "Contributed to cutting-edge AI research and development"
      ],
      responsibilities: [
        {
          area: "AI Research & Development",
          tasks: [
            {
              id: "hsf-001",
              title: "AI Fellowship Research",
              description: "Advanced AI research and practical applications",
              category: "training",
              status: "recurring",
              impact: "Developed expertise in AI safety and alignment",
              metrics: ["Research contributions", "Skills acquired", "Project completions"],
              tools: ["AI Research", "Model Evaluation", "Safety Protocols"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Program Type", value: "Fellowship", description: "11 months" },
        { label: "Focus", value: "AI Specialist", description: "Research & development" }
      ]
    },
    {
      role: "Artificial Intelligence Researcher",
      company: "Mercor",
      period: "January 2026 - Present (6 months)",
      location: "Remote",
      highlights: [
        "Reviewed reasoning, coding, and instruction-following outputs for model training",
        "Caught errors in logic, tone, and scope across multiple AI models",
        "Delivered detailed written feedback on accuracy, instruction adherence, and response quality",
        "Applied advanced prompt engineering and adversarial red-teaming techniques"
      ],
      responsibilities: [
        {
          area: "AI Model Training & Evaluation",
          tasks: [
            {
              id: "mer-001",
              title: "Model Output Review",
              description: "Review and evaluate AI model outputs across reasoning, coding, and instruction-following",
              category: "quality",
              status: "recurring",
              impact: "Improved model training data quality through detailed feedback",
              metrics: ["Error detection rate", "Feedback quality", "Model improvements"],
              tools: ["Code Review", "Prompt Engineering", "Quality Analysis"]
            },
            {
              id: "mer-002",
              title: "Red-Teaming & Hallucination Detection",
              description: "Apply adversarial techniques to identify model weaknesses and cognitive biases",
              category: "quality",
              status: "recurring",
              impact: "Enhanced model robustness and reduced hallucinations",
              metrics: ["Vulnerabilities found", "Hallucination reduction", "Bias identification"],
              tools: ["Red-Teaming", "Adversarial Testing", "Bias Analysis"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Expertise", value: "RLHF", description: "Reinforcement learning" },
        { label: "Skills", value: "Red-Teaming", description: "Adversarial testing" },
        { label: "Focus", value: "Model Safety", description: "AI alignment" }
      ]
    },
    {
      role: "Founder | Lead Designer",
      company: "AiSignalGraph",
      period: "November 2025 - Present (8 months)",
      location: "Remote",
      highlights: [
        "Leading the design and architecture of production-grade software ecosystem",
        "Optimized for advanced AI workflows",
        "Overseeing end-to-end full-stack development",
        "User experience design and cloud infrastructure deployment"
      ],
      responsibilities: [
        {
          area: "Product Development & Architecture",
          tasks: [
            {
              id: "asg-001",
              title: "Full-Stack Development Leadership",
              description: "Lead end-to-end development of production AI platform",
              category: "technical",
              status: "recurring",
              impact: "Built scalable AI workflow ecosystem from ground up",
              metrics: ["Platform development", "User adoption", "Feature delivery"],
              tools: ["Python", "TypeScript", "Node.js", "MongoDB", "Docker"]
            }
          ]
        }
      ],
      keyMetrics: [
        { label: "Role", value: "Founder", description: "Lead Designer" },
        { label: "Product", value: "AI Platform", description: "Production-grade" },
        { label: "Scope", value: "Full-Stack", description: "End-to-end" }
      ]
    },
    {
      role: "Shift Lead & Lead Cook",
      company: "Habit Burger & Grill",
      period: "October 2025 - Present (9 months)",
      location: "Folsom, CA",
      highlights: [
        "Manage shift operations and lead cross-functional teams in fast-paced environment",
        "Reduced service times and optimized workflows",
        "Apply analytical problem-solving to identify process bottlenecks",
        "Ensure rigorous quality control and transaction accuracy"
      ],
      responsibilities: [],
      keyMetrics: [
        { label: "Leadership", value: "Team Lead", description: "Fast-paced ops" },
        { label: "Skills", value: "Process Optimization", description: "Problem-solving" }
      ]
    }
  ],
  education: [
    {
      degree: "Transferring, Psychopharmacology",
      school: "Folsom Lake College",
      period: "August 2024 - December 2026",
      description: "Specialized studies in psychopharmacology with focus on behavioral science and AI integration"
    },
    {
      degree: "Sophomore, Mechanical Engineering",
      school: "Sacramento City College",
      period: "August 2025",
      description: "Mechanical engineering coursework"
    },
    {
      degree: "Sophomore Undergraduate, Mechanical Engineering",
      school: "Folsom Lake College",
      period: "August 2024 - December 2025",
      description: "Undergraduate mechanical engineering studies"
    }
  ],
  volunteering: [],
  certifications: [
    {
      name: "Claude 101",
      issuer: "Anthropic",
      date: "2024"
    },
    {
      name: "AI Fluency: Framework & Foundations",
      issuer: "Professional Training",
      date: "2024"
    },
    {
      name: "Introduction to Agent Skills",
      issuer: "AI Training Program",
      date: "2024"
    },
    {
      name: "CS50X - Introduction to Computer Science",
      issuer: "Harvard University (Online)",
      date: "2023"
    }
  ],
  publications: []
};
