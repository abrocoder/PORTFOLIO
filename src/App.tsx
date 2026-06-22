import { userData } from './data'
import { SkillsBreakdown } from './components/SkillsBreakdown'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <h1>{userData.name}</h1>
        <p className="subtitle">{userData.title}</p>
        <div className="tags">
          {userData.topSkills.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
      </header>

      <section className="about">
        <h2>About</h2>
        <p>{userData.about}</p>
      </section>

      {userData.modalities && userData.modalities.length > 0 && (
        <section className="modalities">
          <h2>Imaging Modalities</h2>
          <div className="modality-list">
            {userData.modalities.map((mod, index) => (
              <span key={index} className="modality">{mod}</span>
            ))}
          </div>
        </section>
      )}

      <SkillsBreakdown />

      {userData.projects && userData.projects.length > 0 && (
        <section className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {userData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                  <span className="project-tool">{project.tool}</span>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    {project.timeline && <span className="project-timeline">⏱️ {project.timeline}</span>}
                    {project.role && <span className="project-role">👤 {project.role}</span>}
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  {project.details && (
                    <ul className="project-details">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-technologies">
                      <strong>Technologies:</strong>
                      <div className="tech-tags">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.outcomes && project.outcomes.length > 0 && (
                    <div className="project-outcomes">
                      <strong>Key Outcomes:</strong>
                      <ul>
                        {project.outcomes.map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="experience">
        <h2>Experience</h2>
        {userData.experience.map((exp, index) => (
          <div key={index} className="exp-item">
            <div className="exp-header">
              <h3>{exp.role} @ {exp.company}</h3>
              <p className="period">{exp.period} | {exp.location}</p>
            </div>

            {/* Key Metrics */}
            {exp.keyMetrics && exp.keyMetrics.length > 0 && (
              <div className="metrics-grid">
                {exp.keyMetrics.map((metric, i) => (
                  <div key={i} className="metric-card">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    {metric.description && <div className="metric-desc">{metric.description}</div>}
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            <div className="highlights">
              <h4>Key Highlights</h4>
              <ul>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Detailed Responsibilities & Tasks */}
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div className="responsibilities">
                <h4>Detailed Responsibilities & Tasks</h4>
                {exp.responsibilities.map((resp, rIndex) => (
                  <div key={rIndex} className="responsibility-area">
                    <h5 className="area-title">{resp.area}</h5>
                    <div className="tasks-grid">
                      {resp.tasks.map((task, tIndex) => (
                        <div key={tIndex} className="task-card">
                          <div className="task-header">
                            <h6>{task.title}</h6>
                            <div className="task-badges">
                              <span className={`task-category ${task.category}`}>{task.category}</span>
                              <span className={`task-status ${task.status}`}>{task.status}</span>
                            </div>
                          </div>
                          <p className="task-description">{task.description}</p>
                          {task.impact && (
                            <div className="task-impact">
                              <strong>Impact:</strong> {task.impact}
                            </div>
                          )}
                          {task.metrics && task.metrics.length > 0 && (
                            <div className="task-metrics">
                              <strong>Metrics:</strong>
                              <ul>
                                {task.metrics.map((m, mIndex) => (
                                  <li key={mIndex}>{m}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {task.tools && task.tools.length > 0 && (
                            <div className="task-tools">
                              {task.tools.map((tool, toolIndex) => (
                                <span key={toolIndex} className="tool-tag">{tool}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="achievements">
                <h4>Key Achievements</h4>
                <div className="achievements-list">
                  {exp.achievements.map((achievement, aIndex) => (
                    <div key={aIndex} className="achievement-card">
                      <div className="achievement-header">
                        <h6>{achievement.title}</h6>
                        {achievement.date && <span className="achievement-date">{achievement.date}</span>}
                      </div>
                      <p>{achievement.description}</p>
                      {achievement.impact && (
                        <p className="achievement-impact"><strong>Impact:</strong> {achievement.impact}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Education</h2>
        {userData.education.map((edu, index) => (
          <div key={index} className="edu-item">
            <h3>{edu.degree}</h3>
            <p className="school">{edu.school} | {edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      {userData.volunteering && userData.volunteering.length > 0 && (
        <section className="volunteering">
          <h2>Volunteering</h2>
          {userData.volunteering.map((vol, index) => (
            <div key={index} className="vol-item">
              <h3>{vol.role} - {vol.organization}</h3>
              <p className="period">{vol.period}</p>
              <p>{vol.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications Section */}
      {userData.certifications && userData.certifications.length > 0 && (
        <section className="certifications">
          <h2>Certifications & Training</h2>
          <div className="certifications-grid">
            {userData.certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">🏅</div>
                <h4>{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.credentialId && (
                  <p className="cert-id">ID: {cert.credentialId}</p>
                )}
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                    View Credential →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Publications Section */}
      {userData.publications && userData.publications.length > 0 && (
        <section className="publications">
          <h2>Publications & Research</h2>
          <div className="publications-list">
            {userData.publications.map((pub, index) => (
              <div key={index} className="pub-card">
                <div className="pub-number">{index + 1}</div>
                <div className="pub-content">
                  <h4>{pub.title}</h4>
                  <p className="pub-authors">{pub.authors.join(', ')}</p>
                  <p className="pub-journal">
                    <em>{pub.journal}</em> ({pub.date})
                  </p>
                  <div className="pub-links">
                    {pub.doi && (
                      <span className="pub-doi">DOI: {pub.doi}</span>
                    )}
                    {pub.url && (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="pub-link">
                        View Publication →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="footer">
        <p>© 2026 {userData.name} - Professional Portfolio</p>
        <p className="footer-subtitle">AI Data Specialist | RLHF & SFT | Full-Stack Developer | Psychopharmacology Student</p>
        <div className="footer-contact">
          <p>📧 georgepalsgraf43@outlook.com</p>
          <p>📍 Las Vegas, Nevada, United States | Folsom, CA</p>
          <p>💼 AfterQuery | Handshake | Mercor | AiSignalGraph</p>
        </div>
      </footer>
    </div>
  )
}

export default App
