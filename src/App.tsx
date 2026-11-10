import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, Check, ChevronDown, Code2, Database, ExternalLink, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Menu, Moon, Server, Sun, X } from 'lucide-react';
import { projects } from './data/projects';

// CONFIGURE YOUR VERIFIED CONTACT DETAILS BEFORE DEPLOYING.
const profile = { github: 'https://github.com/Azole-Sipika', linkedin: 'https://www.linkedin.com/in/azole-sipika', email: 'sipikamalizole@gmail.com', phone: '+27 67 124 6128', portfolio: 'https://azole-sipika-dev.netlify.app/' };
const sections = [ ['home','Home'], ['about','About'], ['projects','Projects'], ['education','Certificates'], ['skills','Skills'], ['contact','Contact'] ] as const;
const skillGroups = [
  {title:'Frontend',icon:Layers3,items:['React','TypeScript','JavaScript','HTML5','CSS3','Responsive Design']},
  {title:'Backend',icon:Server,items:['C#','ASP.NET Core','REST APIs','Entity Framework Core','Java']},
  {title:'Databases & Tools',icon:Database,items:['PostgreSQL','SQL','Git & GitHub','VS Code','Vite','Tailwind CSS']}
];
function ProjectPreview({project}:{project:typeof projects[number]}) {
 const [selected,setSelected]=useState(0);
 const screenshots=project.screenshots;

 return <div className={`preview screenshot-preview ${project.accent}`}>
  {screenshots.length===0 ? (
   <div className="autotest-preview-art">
    <div className="autotest-preview-header">
     <span>SOFTWARE AUTOTEST</span>
     <span className="autotest-live-indicator">â— IN DEVELOPMENT</span>
    </div>
    <div className="autotest-preview-content">
     <div className="autotest-preview-sidebar">
      <span>OVERVIEW</span>
      <span>PROJECTS</span>
      <span>TEST RUNS</span>
      <span>REPORTS</span>
     </div>
     <div className="autotest-preview-dashboard">
      <span className="autotest-preview-eyebrow">QUALITY ASSURANCE PLATFORM</span>
      <strong>Software testing workspace</strong>
      <div className="autotest-preview-stats">
       <div><span>PROJECTS</span><strong>01</strong></div>
       <div><span>TEST REPORTS</span><strong>CSV</strong></div>
       <div><span>STATUS</span><strong>BUILDING</strong></div>
      </div>
      <div className="autotest-preview-report">
       <span>REPORT GENERATION</span>
       <div className="autotest-preview-progress"><span></span></div>
       <small>Structured results Â· Detailed findings Â· Stack traces</small>
      </div>
     </div>
    </div>
    <div className="autotest-preview-caption">PROJECT PREVIEW Â· IN DEVELOPMENT</div>
   </div>
  ) : (
   <>
    <img src={screenshots[selected].src} alt={screenshots[selected].alt} loading="lazy"/>
    <div className="screenshot-controls">
     <span>REAL PROJECT SCREENSHOT</span>
     {screenshots.length>1&&<div className="screenshot-switcher" aria-label="Choose project screenshot">{screenshots.map((shot,i)=><button key={shot.src} type="button" onClick={()=>setSelected(i)} className={selected===i?'active':''} aria-label={`Show screenshot ${i+1}`} aria-pressed={selected===i}>{i+1}</button>)}</div>}
    </div>
   </>
  )}
 </div>
}
function ProjectCard({project}:{project:typeof projects[number]}){return <article className="project-card slide-from-right"><ProjectPreview project={project}/><div className="project-info"><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={19}/></div><p>{project.summary}</p><div className="pills">{project.stack.slice(0,4).map(x=><span key={x}>{x}</span>)}</div><details className="case-details"><summary>Explore case study <ChevronDown size={16}/></summary><div className="case-body"><h4>The challenge</h4><p>{project.problem}</p><h4>My approach</h4><p>{project.solution}</p><h4>Key features</h4><ul>{project.features.map(f=><li key={f}>{f}</li>)}</ul><h4>Architecture</h4><p>{project.architecture.join(' â†’ ')}</p><p className="muted">{project.status}</p></div></details><div className="project-links">{project.github?<a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>:<span>Repository link coming soon</span>}{project.demo?<a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a>:<span>Local project</span>}</div></div></article>}
function ContactLink({kind,url}:{kind:'github'|'linkedin'|'email';url:string}){const Icon=kind==='github'?Github:kind==='linkedin'?Linkedin:Mail;const label=kind==='github'?'GitHub':kind==='linkedin'?'LinkedIn':'Email';if(!url)return <div className="social-link muted"><Icon size={19}/><span>{label} â€” add your link</span></div>;return <a className="social-link" href={kind==='email'?`mailto:${url}`:url} target={kind==='email'?undefined:'_blank'} rel={kind==='email'?undefined:'noreferrer'}><Icon size={19}/><span>{label}</span><ArrowUpRight size={16}/></a>}
export default function App(){
 const [theme,setTheme]=useState<'dark'|'light'>(()=>{try{return localStorage.getItem('azole-theme')==='light'?'light':'dark'}catch{return'dark'}});
 const [menu,setMenu]=useState(false);const [active,setActive]=useState('home');
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('azole-theme',theme)}catch{}},[theme]);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal, .slide-from-right').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:'-28% 0px -60% 0px'});sections.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el)});return()=>observer.disconnect()},[]);
 const close=()=>setMenu(false);
 return <div className="site"><header className="header"><div className="wrap header-inner"><a href="#home" className="brand" onClick={close}><span className="brand-badge">AS</span><span>Azole Sipika<span className="dot">.</span></span></a><nav className={`nav ${menu?'open':''}`} aria-label="Main navigation">{sections.map(([id,label])=><a className={active===id?'selected':''} href={`#${id}`} key={id} onClick={close}>{label}</a>)}</nav><div className="header-right"><button className="icon-button" aria-label={theme==='dark'?'Enable light mode':'Enable dark mode'} onClick={()=>setTheme(x=>x==='dark'?'light':'dark')}>{theme==='dark'?<Sun size={19}/>:<Moon size={19}/>}</button><a href="#contact" className="button primary header-cta">Let's Connect <ArrowUpRight size={16}/></a><button className="icon-button menu-button" onClick={()=>setMenu(!menu)} aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu}>{menu?<X/>:<Menu/>}</button></div></div></header>
 <main>
 <section id="home" className="hero section-anchor"><div className="wrap hero-grid"><div className="hero-copy reveal"><div className="eyebrow pill-label"><span className="pulse"/> FULL-STACK DEVELOPER</div><h1>Azole Sipika<span className="hero-role">Full-Stack <em>Developer.</em></span></h1><p>I design and build modern web applications with <strong>React, TypeScript, ASP.NET Core and PostgreSQL.</strong> From beautiful interfaces to dependable APIs and databases.</p><div className="actions"><a className="button primary" href="#projects">View Projects <ArrowRight size={17}/></a><a className="button secondary" href="/resume.pdf" download="Azole-Sipika-Resume.pdf">Download Resume <ArrowDown size={17}/></a></div></div><div className="hero-art reveal"><div className="art-glow"/><div className="desktop"><div className="desktop-screen"><div className="screen-bar"><i/><i/><i/><span>workspace / developer.ts</span></div><div className="screen-content"><div className="code-lines"><span>01&nbsp; <b>const</b> developer = {'{'}</span><span>02&nbsp;&nbsp; name: <em>'Azole Sipika'</em>,</span><span>03&nbsp;&nbsp; role: <em>'Full-Stack'</em>,</span><span>04&nbsp;&nbsp; skills: [</span><span>05&nbsp;&nbsp;&nbsp; <em>'React'</em>, <em>'C#'</em>,</span><span>06&nbsp;&nbsp;&nbsp; <em>'PostgreSQL'</em></span><span>07&nbsp;&nbsp; ],</span><span>08&nbsp;&nbsp; passion: <em>'Build'</em></span><span>09&nbsp; {'}'}</span></div><div className="screen-words">Code<br/>Build<br/>Solve<br/><span>Create</span></div></div></div><div className="desktop-stand"/></div><div className="desk"><div className="keyboard"/><div className="mug">AS</div></div></div></div></section>
 <section id="about" className="section section-anchor"><div className="wrap"><div className="section-head reveal"><h2>More than <span>just code.</span></h2><p>A developer focused on turning ideas and real-world challenges into useful software.</p></div><div className="about-grid"><div className="about-card reveal"><span className="about-monogram">AS<span>.</span></span><div className="about-bottom"><MapPin size={18}/> Based in Cape Town, South Africa</div></div><div className="about-text reveal"><h3>Hello, I'm Azole.</h3><p>I'm a developer with a strong interest in building complete applications, from intuitive interfaces to backend services and database design.</p><p>My hands-on projects include an application for analysing and modernising legacy code and a multi-portal service management platform. I also study business analysis, which helps me think about requirements, processes and the people using software.</p><div className="about-points"><span><Check size={17}/> User-focused development</span><span><Check size={17}/> API and database integration</span><span><Check size={17}/> Continuous learning</span></div><a href="#contact" className="text-link">Let's work together <ArrowUpRight size={17}/></a></div></div></div></section>
 <section id="projects" className="section section-anchor section-tinted"><div className="wrap"><div className="section-head reveal"><h2>Projects that <span>show the work.</span></h2><p>Explore the problem, architecture and key features behind each application.</p></div><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><p className="project-disclaimer">Screenshots show the projects running locally. Public live demos are not yet available.</p></div></section>
 <section id="education" className="section section-anchor"><div className="wrap">
 <div className="section-head reveal"><h2>Education &amp; <span>Certificates.</span></h2><p>Academic background, practical learning and verified professional credentials.</p></div>
 <div className="education-grid">
 <article className="info-card slide-from-right"><div className="info-icon"><GraduationCap/></div><h3>National Certificate (NQF Level 5): IT Systems Development</h3><p>CTU · 2022</p><div className="info-note">As listed on my resume.</div></article>
 <article className="info-card slide-from-right"><div className="info-icon"><Code2/></div><h3>FET Certificate (NQF Level 4): IT Technical Support</h3><p>Atvance Academy · 2020</p><div className="info-note">As listed on my resume.</div></article>
 <article className="info-card slide-from-right"><div className="info-icon"><Award/></div><h3>National Senior Certificate (Matric)</h3><p>Eester River High School · 2020</p><div className="info-note"><BookOpen size={15}/> Academic qualification.</div></article>
 </div>
 <div className="certificate-heading"><div><span className="kicker">PROFESSIONAL DEVELOPMENT</span><h3>Certificates &amp; Badges</h3><p>Learning that keeps growing.</p></div><span className="certificate-count">7 Achievements</span></div>
 <div className="certificate-grid">
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Award/></div><span className="certificate-provider">Google · AI</span></div><h4>Stay Ahead of the AI Curve</h4><p>Google AI learning credential.</p><a className="certificate-link" href="https://www.coursera.org/account/accomplishments/verify/57P5IN3NSFOT" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></article>
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Award/></div><span className="certificate-provider">Google · AI</span></div><h4>Maximize Productivity With AI Tools</h4><p>Google AI learning credential.</p><a className="certificate-link" href="https://www.coursera.org/account/accomplishments/verify/MZGCM4EU0X7W" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></article>
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Award/></div><span className="certificate-provider">Google · AI</span></div><h4>Introduction to AI</h4><p>Google AI learning credential.</p><a className="certificate-link" href="https://www.coursera.org/account/accomplishments/verify/HZ9BTAXBAHIF" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></article>
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Award/></div><span className="certificate-provider">Google · AI</span></div><h4>Discover the Art of Prompting</h4><p>Google AI learning credential.</p><a className="certificate-link" href="https://www.coursera.org/account/accomplishments/verify/33LGYVJ2ZV10" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></article>
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Award/></div><span className="certificate-provider">Google · AI</span></div><h4>Google AI Essentials</h4><p>Google AI learning credential.</p><a className="certificate-link" href="https://www.coursera.org/account/accomplishments/specialization/UB72X9FL1HYV" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></article>
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Award/></div><span className="certificate-provider">Google · AI</span></div><h4>Use AI Responsibly</h4><p>Google AI learning credential.</p><a className="certificate-link" href="https://coursera.org/verify/9L2TDK3LBXZL" target="_blank" rel="noreferrer">View certificate <ExternalLink size={15}/></a></article>
 <article className="certificate-card slide-from-right"><div className="certificate-card-top"><div className="info-icon"><Code2/></div><span className="certificate-provider">Alison · Web Development</span></div><h4>Diploma in HTML5, CSS3 and JavaScript</h4><p>Alison professional learning achievement.</p><span className="certificate-link certificate-unavailable">Verification link not provided</span></article>
 </div>
 </div></section>
 <section id="skills" className="section section-anchor section-tinted"><div className="wrap"><div className="section-head reveal"><h2>Skills &amp; <span>Technologies.</span></h2><p>Technologies I've used in my projects and development practice.</p></div><div className="skills-grid">{skillGroups.map(group=><article className="skill-card reveal" key={group.title}><div className="skill-card-title"><group.icon size={23}/><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></div></section>
 <section id="contact" className="section section-anchor"><div className="wrap"><div className="section-head reveal"><h2>Let's build something <span>amazing.</span></h2><p>Open to software development opportunities, collaboration and meaningful projects.</p></div><div className="contact-layout"><div className="contact-hero reveal"><div className="contact-circle"><Mail size={29}/></div><h3>Have an idea or opportunity?</h3><p>I'd love to hear about it. Reach out by email or connect with me on GitHub and LinkedIn.</p>{profile.email?<a className="button white" href={`mailto:${profile.email}`}>Send an email <ArrowUpRight size={18}/></a>:<span className="contact-note">Add your email in src/App.tsx to activate the email button.</span>}</div><div className="contact-social reveal"><h3>Find me online</h3><ContactLink kind="github" url={profile.github}/><ContactLink kind="linkedin" url={profile.linkedin}/><ContactLink kind="email" url={profile.email}/><p className="muted">Phone: {profile.phone}</p><a className="portfolio-contact-link" href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio <ArrowUpRight size={16}/></a></div></div></div></section>
 </main></div>;
}
