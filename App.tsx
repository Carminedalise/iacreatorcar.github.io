
import React, { useState } from 'react';
import { translations } from './translations';
import { Language, Project } from './types';

const ProjectCard: React.FC<{ project: Project; lang: Language }> = ({ project, lang }) => {
  const t = translations[lang].projects[project.id];
  
  const borderClass = project.color === 'accent' 
    ? 'border-t-orange-500 bg-orange-500/5' 
    : project.color === 'primary'
    ? 'border-t-sky-400 bg-sky-400/5'
    : project.color === 'secondary'
    ? 'border-t-green-500 bg-green-500/5'
    : 'border-t-slate-700 bg-slate-800/20';

  return (
    <div className={`group glass border border-slate-800/50 p-6 rounded-2xl flex flex-col card-hover border-t-4 ${borderClass}`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-white font-bold text-lg leading-tight group-hover:text-sky-400 transition-colors">{t.title}</h4>
      </div>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
        {t.description}
      </p>
      
      {project.credsNote && (
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2 mb-4">
          <p className="text-[10px] text-orange-400 font-bold text-center">
            {translations[lang].credsNote}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 ${
              link.primary 
                ? 'bg-sky-400 border-sky-400 text-slate-950 hover:bg-sky-300' 
                : link.accent 
                ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-slate-950' 
                : link.secondary
                ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-slate-950'
                : 'border-slate-700 text-slate-400 hover:border-sky-400 hover:text-sky-400'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('it');
  const t = translations[lang];

  const projects: Project[] = [
    {
      id: 'hotelflow',
      color: 'primary',
      links: [
        { label: 'Live Demo →', url: 'https://hotelflow-manager.vercel.app', primary: true },
        { label: 'GitHub', url: 'https://iacreatorcar.github.io/hotelflow-manager/' }
      ]
    },
    {
      id: 'cms',
      color: 'primary',
      links: [
        { label: 'Live Project →', url: 'https://sea-services.emergent.host' },
        { label: 'GitHub Repo', url: 'https://iacreatorcar.github.io/cruise-hospitality-cms/' }
      ]
    },
    {
      id: 'canva',
      color: 'accent',
      links: [
        { label: 'View Portfolio →', url: 'https://www.canva.com/design/DAGFNejoyL4/MHkiG61sTBJYGzgKQS8NKQ/view?utm_content=DAGFNejoyL4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb65f161acf', accent: true }
      ]
    },
    {
      id: 'menu',
      color: 'primary',
      credsNote: true,
      links: [
        { label: 'Live Demo', url: 'https://smart-menu-qr.vercel.app' }
      ]
    },
    {
      id: 'kiwi',
      color: 'secondary',
      links: [
        { label: 'Live QA Demo', url: 'https://iacreatorcar.github.io/Kiwi-Automation-Project/' }
      ]
    },
    {
      id: 'petstyle',
      color: 'accent',
      links: [
        { label: 'View Demo', url: 'https://iacreatorcar.github.io/PetStyle/' }
      ]
    },
    {
      id: 'quiz',
      color: 'neutral',
      links: [
        { label: 'Take Quiz', url: 'https://iacreatorcar.github.io/cms-quiz/' }
      ]
    },
    {
      id: 'jira',
      color: 'secondary',
      links: [
        { label: 'Workflow Demo', url: 'https://iacreatorcar.github.io/mini-jira-demo/' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-800/50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex gap-4">
           <a href="https://linkedin.com/in/iacreatorcar" target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors">
              <span className="text-sm font-bold tracking-tighter">LINKEDIN</span>
           </a>
           <a href="https://github.com/iacreatorcar" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <span className="text-sm font-bold tracking-tighter">GITHUB</span>
           </a>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setLang('en')} 
            className={`px-3 py-1 text-[10px] font-black rounded-md border transition-all ${lang === 'en' ? 'border-sky-400 text-sky-400 bg-sky-400/10' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('it')} 
            className={`px-3 py-1 text-[10px] font-black rounded-md border transition-all ${lang === 'it' ? 'border-sky-400 text-sky-400 bg-sky-400/10' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
          >
            IT
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <header className="max-w-6xl mx-auto pt-20 pb-12 text-center px-6">
        <div className="relative inline-block mb-10 group">
          <div className="absolute inset-0 bg-sky-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-br from-sky-400 to-green-500">
            <div className="w-full h-full rounded-full bg-slate-900 p-1">
              <img 
                src="https://picsum.photos/seed/carmine/400/400" 
                alt="Carmine D'Alise" 
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase italic">
          Carmine D'Alise
        </h1>
        <p className="text-xl md:text-2xl font-light text-slate-400 tracking-wide max-w-3xl mx-auto">
          {t.subtitle.split('|')[0]} <span className="text-sky-400 font-bold">|</span> {t.subtitle.split('|')[1]}
        </p>
      </header>

      {/* Mission & Experience */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 border border-slate-800/50 rounded-3xl p-10 md:p-14 text-center">
            <h3 className="text-sky-400 uppercase tracking-[0.2em] font-black text-xs mb-8">{t.missionTitle}</h3>
            <p className="text-slate-200 text-xl md:text-2xl font-medium leading-relaxed italic">
              {t.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white italic">{t.secSkills}</h2>
          <div className="h-px bg-slate-800 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Matrix Row 1 */}
           <div className="glass border border-slate-800/50 rounded-3xl p-8 hover:border-sky-400/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-400/10 flex items-center justify-center text-sky-400 text-2xl font-bold">01</div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Department Lead</h4>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['Aroya App', 'Interactive TV', 'Starlink', 'Revenue Ops'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-sky-400 rounded-full text-[10px] font-black uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{t.s1}</p>
              </div>
           </div>
           {/* Matrix Row 2 */}
           <div className="glass border border-slate-800/50 rounded-3xl p-8 hover:border-green-500/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 text-2xl font-bold">02</div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Technical Operations</h4>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['React 19', 'FastAPI', 'MongoDB', 'Docker', 'Vercel'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-green-400 rounded-full text-[10px] font-black uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{t.s2}</p>
              </div>
           </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white italic">{t.secProjects}</h2>
          <div className="h-px bg-slate-800 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 text-center py-20 bg-gradient-to-b from-transparent to-slate-900/30 rounded-[3rem]">
        <h3 className="text-sky-400 text-sm font-black uppercase tracking-[0.3em] mb-6">{t.contactTitle}</h3>
        <p className="text-slate-300 text-2xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
          {t.contactMsg}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:c.dalise@live.com" 
            className="group relative inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            <span>📧 EMAIL ME</span>
          </a>
          <a 
            href="https://linkedin.com/in/iacreatorcar" 
            target="_blank"
            className="inline-flex items-center gap-3 border border-slate-700 hover:border-sky-400 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all"
          >
            <span>LINKEDIN</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-16 text-center px-6 border-t border-slate-800/50">
        <div className="flex justify-center gap-6 mb-8 text-slate-500">
           <a href="https://github.com/iacreatorcar" className="hover:text-white transition-colors">GITHUB</a>
           <a href="https://linkedin.com/in/iacreatorcar" className="hover:text-sky-400 transition-colors">LINKEDIN</a>
        </div>
        <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase">{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;
