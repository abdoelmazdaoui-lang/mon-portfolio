import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, DownloadIcon, GithubIcon, ChevronsRightIcon, CpuIcon, CodeIcon, SchoolIcon, LanguagesIcon } from './components/Icons';
import { professionalExperience, skills, projects, education } from './constants';
import { Reveal } from './components/Reveal';

const App: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

  const handleDownloadCV = () => {
    // In a real app, ensure this file exists in public/
    const link = document.createElement('a');
    link.href = '/CV_Abdelhakim_El_Mazdaoui.pdf';
    link.download = 'CV_Abdelhakim_El_Mazdaoui.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-300 selection:bg-brand-500/30 selection:text-brand-200 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <Reveal>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
                  Disponible pour opportunités
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Abdelhakim <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-500">
                    El Mazdaoui
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-8">
                  ECU Software Leader & <br />
                  <span className="text-slate-200">Embedded Systems Expert</span>
                </h2>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                  Ingénieur passionné spécialisé dans l'industrie automobile. 
                  Expert en validation logicielle, architectures ECU complexes et intégration système.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={handleDownloadCV}
                    className="flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-brand-900/40 hover:shadow-brand-600/20 hover:-translate-y-1"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Télécharger CV</span>
                  </button>
                  <a 
                    href="#contact"
                    className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700 hover:border-slate-500 hover:-translate-y-1"
                  >
                    <MailIcon className="w-5 h-5" />
                    <span>Me contacter</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="mt-12 flex items-center gap-6 text-slate-500">
                  <a href="https://www.linkedin.com/in/abdelhakim-el-mazdaoui/" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                  <a href="mailto:abdel.elmazdaoui@gmail.com" className="hover:text-brand-400 transition-colors">
                    <MailIcon className="w-6 h-6" />
                  </a>
                  <div className="h-1 w-12 bg-slate-700 rounded-full"></div>
                  <span className="text-sm font-medium">Paris, France</span>
                </div>
              </Reveal>
            </div>

            <div className="hidden lg:block relative">
              <Reveal delay={0.3}>
                <div className="relative z-10 glass-card p-8 rounded-2xl border border-slate-700/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
                      <div className="text-4xl font-bold text-brand-400 mb-1">5+</div>
                      <div className="text-sm text-slate-400 font-medium">Années d'expérience</div>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
                      <div className="text-4xl font-bold text-indigo-400 mb-1">30+</div>
                      <div className="text-sm text-slate-400 font-medium">Projets Réalisés</div>
                    </div>
                    <div className="col-span-2 bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         <div className="text-sm font-bold text-slate-200">Expertise Clé</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['HIL Testing', 'ADAS', 'CAN/LIN', 'Python', 'ECU'].map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-slate-700/50 rounded text-slate-300">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              {/* Decorative elements behind */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-4 bg-dark-800/50">
          <div className="max-w-6xl mx-auto">
             <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400">
                  <ChevronsRightIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Expérience Professionnelle</h2>
              </div>
            </Reveal>

            <div className="relative space-y-12">
              <div className="absolute top-0 bottom-0 left-8 md:left-[8.5rem] w-px bg-slate-800"></div>
              
              {professionalExperience.map((exp, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
                    {/* Period Timeline */}
                    <div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end md:text-right">
                       <div className="absolute left-8 md:left-[8.5rem] -translate-x-1/2 w-4 h-4 rounded-full border-4 border-dark-900 bg-slate-600 group-hover:bg-brand-500 group-hover:scale-125 transition-all z-10"></div>
                       <span className="text-sm font-bold text-brand-400 py-1 px-3 rounded-full bg-brand-900/20 border border-brand-900/30 md:bg-transparent md:border-0 md:p-0 md:text-slate-400 md:group-hover:text-brand-400 transition-colors">
                        {exp.period}
                       </span>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1">
                      <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-slate-800/50 transition-colors border border-slate-700/30 group-hover:border-brand-500/30">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">{exp.role}</h3>
                            <div className="text-lg text-slate-300 font-medium">{exp.company}</div>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full">
                            <MapPinIcon className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {exp.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills?.map(skill => (
                            <span key={skill} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-900 text-slate-400 border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS & EDUCATION SECTION */}
        <section id="competences" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* Skills */}
              <div className="lg:col-span-2">
                <Reveal>
                  <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400">
                      <CpuIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Compétences Techniques</h2>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-brand-500/30 transition-all hover:-translate-y-1 h-full">
                        <h3 className="text-lg font-semibold text-brand-300 mb-4 pb-2 border-b border-slate-700/50">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map(item => (
                            <span key={item} className="px-2.5 py-1 text-sm bg-slate-900/60 text-slate-300 rounded hover:text-white transition-colors cursor-default">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Education & Languages */}
              <div className="space-y-12">
                 {/* Education */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400">
                        <SchoolIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Formation</h2>
                    </div>
                  </Reveal>
                  <div className="space-y-6">
                    {education.map((edu, idx) => (
                      <Reveal key={idx} delay={idx * 0.1}>
                        <div className="relative pl-6 border-l-2 border-slate-700">
                          <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand-500"></div>
                          <h4 className="text-white font-bold text-lg leading-tight">{edu.degree}</h4>
                          <p className="text-brand-400 text-sm mt-1">{edu.institution}</p>
                          <div className="flex justify-between items-center mt-2 text-xs text-slate-500">
                            <span>{edu.period}</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                   <Reveal>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400">
                        <LanguagesIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Langues</h2>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
                      <div className="space-y-4">
                        {[
                          { lang: 'Français', level: 'Professionnel', pct: '100%' },
                          { lang: 'Anglais', level: 'Professionnel', pct: '90%' },
                          { lang: 'Arabe', level: 'Natif', pct: '100%' },
                        ].map((l, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-200 font-medium">{l.lang}</span>
                              <span className="text-slate-500">{l.level}</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-500" style={{ width: l.pct }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projets" className="py-24 px-4 bg-dark-800/50">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-500/10 text-brand-400 mb-4">
                  <CodeIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Projets Réalisés</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Une sélection de projets académiques, personnels et professionnels démontrant mon expertise technique.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project, index) => (
                <Reveal key={index} delay={index % 3 * 0.1}>
                  <div className="group h-full bg-dark-900 border border-slate-800 hover:border-brand-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-2 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-500 bg-brand-900/10 px-2 py-1 rounded">
                        {project.context}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 bg-transparent border border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white rounded-lg font-semibold transition-all duration-300"
              >
                {showAllProjects ? 'Voir Moins' : `Voir Tous les Projets (${projects.length})`}
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 blur-[100px] rounded-full -z-10"></div>
          
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="glass-card rounded-3xl p-8 md:p-12 border border-slate-700/50 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à collaborer ?</h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                  Je suis toujours ouvert aux discussions sur le développement de systèmes embarqués, 
                  l'industrie automobile ou les nouvelles technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <a href="mailto:abdel.elmazdaoui@gmail.com" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl hover:bg-brand-600/20 hover:border-brand-500/50 border border-transparent transition-all group cursor-pointer">
                    <MailIcon className="w-8 h-8 text-brand-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">Email</span>
                    <span className="text-xs text-slate-400 mt-1">abdel.elmazdaoui@gmail.com</span>
                  </a>
                  <a href="tel:+33748901207" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl hover:bg-brand-600/20 hover:border-brand-500/50 border border-transparent transition-all group cursor-pointer">
                    <PhoneIcon className="w-8 h-8 text-brand-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">Téléphone</span>
                    <span className="text-xs text-slate-400 mt-1">+33 7 48 90 12 07</span>
                  </a>
                  <a href="https://www.linkedin.com/in/abdelhakim-el-mazdaoui/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl hover:bg-brand-600/20 hover:border-brand-500/50 border border-transparent transition-all group cursor-pointer">
                    <LinkedinIcon className="w-8 h-8 text-brand-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">LinkedIn</span>
                    <span className="text-xs text-slate-400 mt-1">Connectons-nous</span>
                  </a>
                </div>

                <form className="max-w-xl mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase ml-1">Nom</label>
                      <input type="text" id="name" className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase ml-1">Email</label>
                      <input type="email" id="email" className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase ml-1">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none" placeholder="Comment puis-je vous aider ?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-brand-900/20 transform transition hover:-translate-y-1">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-dark-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white tracking-tighter">
            AE<span className="text-brand-500">.</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Abdelhakim El Mazdaoui. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/your-github" className="text-slate-500 hover:text-white transition-colors"><GithubIcon className="w-5 h-5"/></a>
            <a href="https://www.linkedin.com/in/abdelhakim-el-mazdaoui/" className="text-slate-500 hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;