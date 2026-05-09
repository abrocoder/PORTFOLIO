interface SkillCategory {
  name: string;
  skills: { name: string; level: number; description?: string }[];
  icon: string;
}

export const SkillsBreakdown = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Medical Imaging Software",
      icon: "🖥️",
      skills: [
        { name: "3D Slicer", level: 95, description: "Advanced segmentation & 3D visualization" },
        { name: "ITK-SNAP", level: 90, description: "Slice interpolation & volumetric analysis" },
        { name: "OsiriX / Horos", level: 92, description: "DICOM viewing & ROI analysis" },
        { name: "MIM", level: 85, description: "Radiation oncology imaging" },
        { name: "TomTec", level: 88, description: "Cardiac imaging analysis" },
        { name: "RadiAnt", level: 90, description: "DICOM viewer & measurements" },
      ]
    },
    {
      name: "Clinical Trial Management",
      icon: "📋",
      skills: [
        { name: "ICH-GCP Compliance", level: 95, description: "Good Clinical Practice standards" },
        { name: "21 CFR Part 11", level: 93, description: "Electronic records compliance" },
        { name: "CTMS Systems", level: 85, description: "Clinical trial management software" },
        { name: "EDC Platforms", level: 87, description: "Electronic data capture" },
        { name: "eTMF Management", level: 82, description: "Trial master file systems" },
        { name: "CRF Management", level: 90, description: "Case report forms" },
      ]
    },
    {
      name: "Medical Imaging Modalities",
      icon: "🔬",
      skills: [
        { name: "CT Imaging", level: 92, description: "Computed tomography analysis" },
        { name: "MRI Imaging", level: 94, description: "Magnetic resonance imaging" },
        { name: "DEXA Scanning", level: 88, description: "Bone density analysis (Hologic, GE-Lunar)" },
        { name: "PET-CT", level: 85, description: "Positron emission tomography" },
        { name: "CMR", level: 87, description: "Cardiac MRI" },
        { name: "2D-ECHO", level: 86, description: "Echocardiography" },
        { name: "X-Ray", level: 90, description: "Radiographic imaging" },
      ]
    },
    {
      name: "Technical & Data Skills",
      icon: "⚙️",
      skills: [
        { name: "DICOM Standards", level: 93, description: "Medical imaging format expertise" },
        { name: "Image Quality Control", level: 95, description: "QC protocols & validation" },
        { name: "Statistical Analysis", level: 80, description: "ROC analysis, correlation studies" },
        { name: "3D Printing", level: 85, description: "Medical model creation (STL, FDM)" },
        { name: "Data Management", level: 88, description: "Clinical data integrity" },
        { name: "Python (Basic)", level: 65, description: "Scripting for image processing" },
      ]
    },
    {
      name: "AI & Advanced Technologies",
      icon: "🤖",
      skills: [
        { name: "AI Clinical Trials", level: 90, description: "Multi-reader MRMC studies" },
        { name: "CAD Systems", level: 87, description: "Computer-aided diagnosis evaluation" },
        { name: "AI Performance Assessment", level: 88, description: "Algorithm validation" },
        { name: "Machine Learning (Basic)", level: 70, description: "Understanding ML in healthcare" },
      ]
    },
    {
      name: "Training & Communication",
      icon: "👥",
      skills: [
        { name: "Site Training", level: 93, description: "Protocol & software training" },
        { name: "Radiologist Training", level: 90, description: "Reading platform instruction" },
        { name: "Technical Documentation", level: 88, description: "SOPs & training materials" },
        { name: "Presentation Skills", level: 85, description: "Conference presentations" },
        { name: "Cross-functional Collaboration", level: 92, description: "Multi-department coordination" },
      ]
    }
  ];

  return (
    <section className="skills-breakdown">
      <h2>Skills & Expertise Breakdown</h2>
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    {skill.description && (
                      <span className="skill-description">{skill.description}</span>
                    )}
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
