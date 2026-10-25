import ContactForm from "./ContactForm";

const CASE_STUDY_URL =
  "https://muse.ai/s/gohighlevel-case-study-metro-realty-gh6bxun7pxmxrxq/0wSeQLIGX0_h2REncII_hZevYVyq3mlT-8kG9X_d3wc";
const REVA_URL =
  "https://muse.ai/s/reva-training-activities-xdxh5xxg3asxqxuxz/uAqcZGdV9p-0g9YzOsjUxc6kqTYm1fgIs5e9UYqZVkc";
const MILO_URL = "https://milos-space-adventure.netlify.app";
const LINKTREE_URL = "https://linktr.ee/deyb.cii";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/dave-brian-quinzon-9a24a4240";

const skills = [
  "GoHighLevel",
  "n8n",
  "Funnels",
  "Pipelines",
  "Workflow Automation",
  "CRM Setup",
  "Lead Capture",
  "Canva",
  "CapCut",
  "Google Workspace",
  "TikTok Ads",
  "AI Tools",
];

const projects = [
  {
    num: "01",
    title: "Metro Realty Group GoHighLevel System",
    tag: "GoHighLevel demo build, October 2026",
    desc: "A full lead-to-viewing system: 6-stage sales pipeline, lead capture form, 2-page funnel with a Price Guide lead magnet, Property Viewing calendar, a Day 1/3/7 follow-up workflow, and an Appointment Booked viewing reminder workflow, all live tested.",
    honesty:
      "Demo build with sample data. Metro Realty Group is a sample business I created for practice, not a client.",
    link: CASE_STUDY_URL,
    linkLabel: "Read the case study",
    image: "/ghl-pipeline.png",
    imageAlt: "Metro Realty Group sales pipeline board in GoHighLevel",
  },
  {
    num: "02",
    title: "My Reply Tracker",
    tag: "n8n demo build",
    desc: "An n8n workflow that watches Gmail replies, filters for interview and application messages, and logs them to Google Sheets, so no application reply ever gets missed.",
    honesty: "Demo build, built end to end.",
    link: null,
    linkLabel: null,
    image: "/reply-tracker-canvas.png",
    imageAlt: "My Reply Tracker n8n workflow canvas",
  },
  {
    num: "03",
    title: "Metro Realty Lead Capture",
    tag: "n8n demo build",
    desc: "A webhook lead form that writes every lead to Google Sheets and emails the owner instantly. Tested end to end with 3 sample leads.",
    honesty: "Demo build, tested with sample leads.",
    link: null,
    linkLabel: null,
    image: "/lead-capture-canvas.png",
    imageAlt: "Metro Realty Lead Capture n8n workflow canvas",
  },
  {
    num: "04",
    title: "REVA Coursework Projects",
    tag: "Real estate virtual assistant coursework",
    desc: "Six hands-on coursework projects covering real estate VA work: listings, CRM records, outreach, and transaction coordination documents.",
    honesty:
      "Completed 6 hands-on coursework projects. This is coursework, not a completed training program.",
    link: REVA_URL,
    linkLabel: "View the project portfolio",
    image: null,
    imageAlt: null,
  },
  {
    num: "05",
    title: "Milo's Space Adventure",
    tag: "Coloring book, built and sold",
    desc: "A 17-page story coloring book for toddlers, ages 2 to 5: Milo the little astronaut blasts off, lands on the moon, and chases a runaway star balloon. Colored front and back covers, print-ready PDF, sold on Raket and Gumroad.",
    honesty: "My own product, built with AI prompting and design.",
    link: MILO_URL,
    linkLabel: "Visit the book page",
    image: "/milo-cover.jpg",
    imageAlt: "Milo's Space Adventure colored front cover",
  },
];

const socials = [
  { name: "Threads", handle: "@deyb.cii", url: "https://www.threads.net/@deyb.cii" },
  { name: "LinkedIn", handle: "Dave Brian Quinzon", url: LINKEDIN_URL },
  { name: "Instagram", handle: "via Linktree", url: LINKTREE_URL },
  { name: "TikTok", handle: "via Linktree", url: LINKTREE_URL },
  { name: "Facebook", handle: "via Linktree", url: LINKTREE_URL },
  { name: "X", handle: "via Linktree", url: LINKTREE_URL },
  { name: "YouTube", handle: "via Linktree", url: LINKTREE_URL },
  { name: "Telegram", handle: "via Linktree", url: LINKTREE_URL },
  { name: "WhatsApp", handle: "Chat on WhatsApp", url: LINKTREE_URL },
  { name: "Upwork", handle: "Hire me on Upwork", url: LINKTREE_URL },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="nav-name">Dave Brian Quinzon</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#findme">Find me</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <img src="/dave-headshot.png" alt="Dave Brian Quinzon" className="hero-photo" />
        <p className="hero-kicker">Hi, I am Dave Brian Quinzon</p>
        <h1>Real Estate and E-commerce Virtual Assistant</h1>
        <p className="hero-sub">
          I build automation with GoHighLevel and n8n: funnels, pipelines,
          and follow-up systems that turn leads into booked viewings.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View my projects</a>
          <a href="#contact" className="btn-secondary">Contact me</a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          I am a work-from-home virtual assistant from the Philippines,
          focused on real estate and e-commerce. Before VA work, I spent two
          years as a marketing strategist, admin, and team leader for a
          TikTok Shop beauty products business, running ad campaigns and
          day-to-day operations.
        </p>
        <p>
          I studied BS Electronics Engineering at National University Manila.
          My degree is on hold after I completed a 400-hour OJT at Sunvantage,
          so I could work full time. What I enjoy most now is the automation
          lane: GoHighLevel funnels, pipelines, calendars, and workflows, plus
          n8n systems that connect forms, sheets, and email without manual work.
        </p>
        <p>
          I learn a tool properly first, build a working demo, test it end to
          end, and only then offer it as a service. Everything on this page is
          work I actually built.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="skill-chip">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((p) => (
            <article key={p.num} className="project-card">
              <div className="project-media">
                {p.image ? (
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                ) : (
                  <div className="project-placeholder">
                    <span>REVA</span>
                    <p>Coursework projects</p>
                  </div>
                )}
              </div>
              <div className="project-text">
                <p className="project-num">{p.num}</p>
                <h3>{p.title}</h3>
                <p className="project-tag">{p.tag}</p>
                <p>{p.desc}</p>
                <p className="project-honesty">{p.honesty}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {p.linkLabel} &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="findme" className="section">
        <h2>Find me</h2>
        <div className="social-grid">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <strong>{s.name}</strong>
              <span>{s.handle}</span>
            </a>
          ))}
          <div className="social-card social-text">
            <strong>Discord</strong>
            <span>adifindzu_41243</span>
          </div>
        </div>
        <p className="section-note">
          Threads and LinkedIn open directly. Other profiles open through my
          Linktree hub, where each profile lives.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Hiring for a real estate or e-commerce VA role, or need a funnel,
          pipeline, or workflow built? Send me a message.
        </p>
        <ContactForm />
        <p className="section-note">
          Or email me directly at{" "}
          <a href="mailto:quinzondavebrian.2499@gmail.com">
            quinzondavebrian.2499@gmail.com
          </a>
          , or reach me through WhatsApp on my Linktree.
        </p>
      </section>

      <footer className="footer">
        <p>Built by Dave Brian Quinzon, 2026.</p>
      </footer>
    </main>
  );
}
