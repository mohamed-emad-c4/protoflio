import Image from "next/image";
import MiniStack from "../components/MiniStack";
import ProjectShot from "../components/ProjectShot";
import Reveal from "../components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  GitHub,
  GooglePlayColor,
  AppStore,
  Globe,
  LinkedIn,
  Mail,
  Phone,
  ProjectGlyph,
  TechIcon,
  techIcons,
} from "../components/Icons";
import { education, experience, moreWork, profile, projects, skills } from "../lib/data";

function SectionHead({ title, id }: { title: string; id: string }) {
  return (
    <header className="section-head" data-reveal>
      <h2 id={id}>{title}</h2>
      <span className="rule" aria-hidden="true" />
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <a className="skip" href="#work">Skip to projects</a>

      <nav className="nav" aria-label="Main">
        <div className="nav-inner">
          <a href="#top" className="mark" aria-label="Mohamed Emad, back to top">
            <span className="mark-slash">//</span>
            <span className="mark-dot">.</span>
          </a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Mohamed Emad</h1>
            <span className="rule" aria-hidden="true" />
            <p className="hero-sub">
              Software Engineer.
              <br />
              I build products end to end.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#work">
                View projects <ArrowRight />
              </a>
              <a className="btn btn-outline" href={profile.cv} download="Mohamed_Emad_Software_Engineer_CV.pdf">
                Download CV <Download />
              </a>
            </div>
            <ul className="tech-row" aria-label="Main technologies">
              {techIcons.map((t) => (
                <li key={t.name} title={t.name}>
                  <TechIcon path={t.path} />
                  <span className="sr-only">{t.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="hero-stack" aria-label="The layers I build: PostgreSQL, SQL and Redis databases; Node.js, Laravel and Go (Gin) backends; React dashboards; Flutter apps shipped to Google Play">
            <div className="plate-wrap">
              <Image
                src="/plates/stack-plate.jpg"
                alt=""
                width={1200}
                height={1500}
                priority
                className="plate"
              />
            </div>
            <ul className="callouts callouts-r" aria-hidden="true">
              <li style={{ top: "17%" }}><span><b>Database</b>PostgreSQL · SQL · Redis</span></li>
              <li style={{ top: "37%" }}><span><b>Backend</b>Node.js · Laravel · Go / Gin</span></li>
              <li style={{ top: "57.5%" }}><span><b>Dashboard</b>React</span></li>
              <li style={{ top: "78%" }}><span><b>Mobile</b>Flutter · Google Play</span></li>
            </ul>
            <ul className="callouts callouts-l" aria-hidden="true">
              <li style={{ top: "40%" }}><span>JWT · RBAC</span></li>
              <li style={{ top: "61%" }}><span>Socket.IO</span></li>
              <li style={{ top: "81%" }}><span>Firebase push</span></li>
            </ul>
          </figure>
        </section>

        {/* ---------- Work ---------- */}
        <section className="section" aria-labelledby="work">
          <div className="wrap">
            <SectionHead title="What I built on each product." id="work" />
            <p className="legend" data-reveal>
              <span className="legend-swatch" aria-hidden="true" /> Highlighted layers are the parts I built.
            </p>

            <ol className="projects">
              {projects.map((p) => (
                <li key={p.id} className="project" data-reveal>
                  <div className="project-body">
                    <div className="project-head">
                      {p.logo ? (
                        <span className="glyph glyph-logo">
                          <Image src={p.logo.src} alt={p.logo.alt} width={64} height={64} />
                        </span>
                      ) : (
                        <span className={`glyph glyph-${p.icon}`}>
                          <ProjectGlyph kind={p.icon} />
                        </span>
                      )}
                      <div>
                        <h3>{p.name}</h3>
                        <p className="tagline">{p.tagline}</p>
                      </div>
                    </div>
                    {(p.links || p.image) && (
                      <div className="project-actions">
                        {p.links?.map((l) => (
                          <a key={l.kind} className={`store store-${l.kind}`} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.kind === "android" ? <GooglePlayColor size={16} /> : l.kind === "ios" ? <AppStore size={16} /> : <Globe size={16} />}
                            {l.label}
                            <ArrowUpRight size={14} />
                          </a>
                        ))}
                        {p.image && <ProjectShot shot={p.image} name={p.name} />}
                      </div>
                    )}
                    <ul className="built">
                      {p.built.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <ul className="chips" aria-label={`${p.name} technologies`}>
                      {p.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <MiniStack layers={p.layers} name={p.name} />
                </li>
              ))}
            </ol>

            <div className="more" data-reveal>
              <h3 className="more-title">Also built</h3>
              <ul className="more-grid">
                {moreWork.map((m) => (
                  <li key={m.name} className="more-card">
                    <h4>{m.name}</h4>
                    <p className="tagline">{m.tagline}</p>
                    <ul className="built built-sm">
                      {m.built.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {m.stack.length > 0 && (
                      <ul className="chips">
                        {m.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="section section-alt" aria-labelledby="skills">
          <div className="wrap">
            <SectionHead title="The stack, layer by layer." id="skills" />
            <dl className="skills" data-reveal>
              {skills.map((s) => (
                <div key={s.group} className="skill-row">
                  <dt>{s.group}</dt>
                  <dd>
                    <ul className="chips chips-lg">
                      {s.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" aria-labelledby="experience">
          <div className="wrap">
            <SectionHead title="Where I build." id="experience" />
            <div className="xp" data-reveal>
              <article className="xp-item">
                <div className="xp-when">
                  <p className="xp-period">{experience.period}</p>
                  <p className="xp-place">{experience.place}</p>
                </div>
                <div className="xp-what">
                  <h3>
                    {experience.title} <span className="at">at {experience.company}</span>
                  </h3>
                  <ul className="built">
                    {experience.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="xp-item">
                <div className="xp-when">
                  <p className="xp-period">{education.period}</p>
                  <p className="xp-place">{education.place}</p>
                </div>
                <div className="xp-what">
                  <h3>
                    {education.degree} <span className="at">at {education.school}</span>
                  </h3>
                  <p className="xp-note">Education</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- Contact + CV ---------- */}
        <section className="section contact" aria-labelledby="contact">
          <div className="wrap contact-inner" data-reveal>
            <div>
              <h2 id="contact">Let’s build your next product.</h2>
              <p className="contact-sub">
                Hiring a software engineer, or need a team for a web, mobile or SaaS product? Get in touch.
              </p>
              <a className="btn btn-primary btn-lg" href={profile.cv} download="Mohamed_Emad_Software_Engineer_CV.pdf">
                Download CV <Download />
              </a>
            </div>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>
                  <Mail /> <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={profile.phoneHref}>
                  <Phone /> <span>{profile.phone}</span>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <GitHub /> <span>github.com/mohamed-emad-c4</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn /> <span>linkedin.com/in/mohamed-emad-c4</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Mohamed Emad</span>
          <span>Minya, Egypt</span>
        </div>
      </footer>
    </>
  );
}
