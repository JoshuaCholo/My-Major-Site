/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Layers, 
  Smartphone, 
  Bot, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Code2,
  Workflow,
  BarChart3,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  Activity,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Chatbot } from './components/Chatbot';

// --- Shared Components ---

const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-accent/5 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-violet-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
    <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-rose-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="group cursor-pointer">
          <span className="font-bold text-2xl tracking-tighter uppercase text-white group-hover:text-[#FFFFF0] transition-colors">JoshuAI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.href ? 'text-white' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-white text-[#020229] text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-[#D3D3D3] transition-all"
          >
            Let's Build
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-4 right-4 glass rounded-3xl p-8 md:hidden flex flex-col gap-6 mt-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-2xl font-bold ${location.pathname === link.href ? 'text-white' : 'text-zinc-100'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="w-full py-4 bg-white text-[#020229] text-center font-bold rounded-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Build
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-24 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <Link to="/" className="group cursor-pointer">
          <span className="font-bold text-2xl tracking-tighter uppercase text-white group-hover:text-[#FFFFF0] transition-colors">JoshuAI</span>
        </Link>
        
        <div className="flex gap-12">
          <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Home</Link>
          <Link to="/expertise" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Expertise</Link>
          <Link to="/portfolio" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Portfolio</Link>
        </div>
        
        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
          © {new Date().getFullYear()} Joshua Fasanya
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <BackgroundBlobs />
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden atmosphere">
      <div className="noise absolute inset-0" />
      <div className="absolute top-0 left-0 w-full h-full dots opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Systems Architect
            </motion.div>
            <h1 className="text-6xl md:text-[110px] font-bold leading-[0.85] mb-10 tracking-tighter">
              I Build <br/>
              <span className="text-gradient">Intelligent</span> <br/>
              Systems.
            </h1>
            <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed font-light">
              Custom business applications and AI automation workflows designed to streamline processes and scale operations predictably.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="px-10 py-5 bg-white hover:bg-[#D3D3D3] text-[#020229] font-black uppercase tracking-widest text-xs rounded-full flex items-center gap-3 transition-all group shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Start Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 px-6 py-5 glass rounded-full">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020229] bg-zinc-800 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">$300K+ Revenue Influenced</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-[40px] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#020229] via-[#020229]/20 to-transparent z-10" />
            <img 
              src="https://i.imgur.com/xtaZ4g5.jpeg" 
              alt="Joshua Fasanya" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <div className="text-4xl font-serif italic mb-2 text-white drop-shadow-lg">Joshua Fasanya</div>
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-accent">Founder & Architect</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
    {/* Brief Systems Section */}
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Manual", value: "0%", color: "bg-emerald-accent/20 text-emerald-accent" },
              { label: "Automated", value: "100%", color: "bg-amber-accent/20 text-amber-accent" },
              { label: "Uptime", value: "24/7", color: "bg-violet-accent/20 text-violet-accent" },
              { label: "Growth", value: "Scalable", color: "bg-ivory/20 text-ivory" }
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-[32px] premium-border">
                <div className={`w-full h-1 rounded-full mb-6 ${stat.color.split(' ')[0]}`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold mb-10 leading-tight tracking-tighter">Scale without the <span className="italic font-serif">chaos.</span></h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-light">
              Most businesses fail because their systems can't scale. I engineer the infrastructure that handles the heavy lifting.
            </p>
            <Link to="/expertise" className="text-white font-bold flex items-center gap-2 hover:underline">
              Explore My Expertise <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* New Section: The Process */}
    <section className="py-32 bg-white/[0.01] relative overflow-hidden">
      <div className="absolute inset-0 dots opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-4">Methodology</div>
          <h2 className="text-5xl font-bold tracking-tighter">How We Build.</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Audit & Strategy", desc: "We map your current workflows and identify bottlenecks that are costing you time and revenue." },
            { step: "02", title: "System Engineering", desc: "I build custom applications and automations using best-in-class tools like FlutterFlow and n8n." },
            { step: "03", title: "Scale & Optimize", desc: "We launch your system and continuously optimize it for maximum efficiency and growth." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-10 glass rounded-[40px] premium-border group"
            >
              <div className="text-6xl font-serif italic text-white/5 absolute top-6 right-10 group-hover:text-white/10 transition-colors">{item.step}</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* New Section: Why Choose Me */}
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass p-16 md:p-24 rounded-[64px] premium-border grid lg:grid-cols-2 gap-20 items-center"
        >
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">Why engineered <br/> systems <span className="italic font-serif">win.</span></h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
              Generic tools solve generic problems. I build specific solutions for your unique business logic, ensuring your tech stack is an asset, not a liability.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-emerald-accent mb-2">10x</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Faster Deployment</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-3xl font-bold text-amber-accent mb-2">85%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Manual Work Reduction</div>
              </motion.div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass rounded-[40px] flex items-center justify-center p-12">
              <div className="relative w-full h-full border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-xl flex items-center justify-center text-emerald-accent shadow-2xl">
                  <Cpu size={24} />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-xl flex items-center justify-center text-amber-accent shadow-2xl">
                  <Workflow size={24} />
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 glass rounded-xl flex items-center justify-center text-violet-accent shadow-2xl">
                  <Bot size={24} />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 glass rounded-xl flex items-center justify-center text-ivory shadow-2xl">
                  <Database size={24} />
                </div>
                <div className="w-1/2 h-1/2 bg-emerald-accent/10 rounded-full blur-3xl animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold tracking-tighter uppercase">Scale</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

const ExpertisePage = () => {
  const categories = [
    { title: "Development", tools: ["FlutterFlow", "Bubble", "Lovable", "Replit"], icon: <Smartphone />, color: "text-emerald-accent", bg: "bg-emerald-accent/10", border: "border-emerald-accent/20" },
    { title: "Automation", tools: ["n8n", "Make.com", "Zapier"], icon: <Workflow />, color: "text-amber-accent", bg: "bg-amber-accent/10", border: "border-amber-accent/20" },
    { title: "Intelligence", tools: ["AI Agents", "Receptionists", "LLMs"], icon: <Bot />, color: "text-violet-accent", bg: "bg-violet-accent/10", border: "border-violet-accent/20" },
    { title: "Architecture", tools: ["CRM Design", "Pipelines", "Product"], icon: <Database />, color: "text-cyan-accent", bg: "bg-cyan-accent/10", border: "border-cyan-accent/20" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-40 pb-32 relative overflow-hidden">
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-4">Capabilities</div>
          <h2 className="text-6xl font-bold tracking-tighter mb-8">Engineered Stack.</h2>
          <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
            I leverage the most advanced no-code and AI platforms to deliver production-grade applications and workflows at 10x the speed of traditional development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-10 rounded-[40px] border ${cat.border} group hover:bg-white/[0.05] transition-all`}
            >
              <div className={`mb-10 ${cat.color} transition-colors p-4 rounded-2xl ${cat.bg} w-fit`}>
                {React.cloneElement(cat.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Section: Integration Ecosystem */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">The Connected <br/> <span className="italic font-serif">Ecosystem.</span></h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
              Your business doesn't run on a single tool. I specialize in creating a seamless flow of data between your CRM, communication channels, and custom applications.
            </p>
            <div className="space-y-6">
              {[
                { title: "API-First Approach", desc: "Every system I build is designed to talk to other tools via REST APIs and Webhooks." },
                { title: "Real-time Sync", desc: "No more stale data. Changes in one system reflect across your entire stack instantly." },
                { title: "Error Handling", desc: "Robust logging and retry logic built into every automation to ensure 99.9% reliability." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-1 h-12 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ y: "100%" }}
                      whileInView={{ y: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="w-full h-full bg-white" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-[48px] premium-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10 grid grid-cols-3 gap-6">
              {[
                { name: "Flutterflow", url: "https://i.imgur.com/UxkyURH.png" },
                { name: "Zapier", url: "https://i.imgur.com/lSND5AH.png" },
                { name: "n8n", url: "https://i.imgur.com/5fL9VTF.png" },
                { name: "Firebase", url: "https://i.imgur.com/Oz3HIfg.png" },
                { name: "GoHighLevel", url: "https://i.imgur.com/hejTEKq.jpeg" },
                { name: "Make.com", url: "https://i.imgur.com/97BKcmm.png" },
                { name: "Adalo", url: "https://i.imgur.com/O4eLK2b.png" },
                { name: "Bubble.io", url: "https://i.imgur.com/nkTarLJ.png" },
                { name: "AI Bot", url: "https://i.imgur.com/xMQcGij.jpeg" }
              ].map((tool, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="aspect-square glass rounded-2xl flex items-center justify-center p-6 group/tool transition-all hover:bg-white/5 border border-white/5 hover:border-white/20"
                >
                  <img 
                    src={tool.url} 
                    alt={tool.name} 
                    className="w-full h-full object-contain opacity-60 group-hover/tool:opacity-100 transition-all filter grayscale group-hover/tool:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* New Section: Future-Proofing */}
        <div className="glass p-16 md:p-24 rounded-[64px] premium-border text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-8">Built for the AI Era.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            I don't just build for today. Every system is architected with scalability and AI-readiness in mind, ensuring you can easily integrate new models and capabilities as they emerge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["GPT-4o", "Claude 3.5", "Gemini 1.5 Pro", "Llama 3"].map((model, i) => (
              <span key={i} className="px-6 py-3 glass rounded-full text-xs font-bold uppercase tracking-widest text-white">
                {model} Ready
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      title: "Real Estate AI CRM", 
      category: "Automation", 
      desc: "Automated lead qualification and follow-up system for a top real estate firm.", 
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&w=800&q=80", // CRM Dashboard UI
      details: "A comprehensive automation suite that captures leads from multiple sources, qualifies them using AI based on specific criteria, and routes them to the appropriate agent. Includes automated SMS and email follow-ups.",
      tools: ["n8n", "GoHighLevel", "OpenAI", "Twilio"],
      results: ["40% increase in lead response time", "25% higher conversion rate", "15+ hours saved per week"]
    },
    { 
      title: "SaaS Subscription App", 
      category: "Development", 
      desc: "Full-featured mobile app built with FlutterFlow for a fitness startup.", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", // Mobile App Interface
      details: "A high-performance cross-platform mobile application featuring subscription management, workout tracking, and a community social feed. Built with a focus on smooth UX and scalable backend architecture.",
      tools: ["FlutterFlow", "Firebase", "Stripe", "RevenueCat"],
      results: ["10k+ Active Users", "4.8 Star App Store Rating", "Seamless multi-platform sync"]
    },
    { 
      title: "AI Customer Support", 
      category: "Intelligence", 
      desc: "Custom AI agent handling 90% of customer inquiries for an e-commerce brand.", 
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", // Support System UI
      details: "An intelligent support system that integrates directly with Shopify and Zendesk. It handles order tracking, returns, and general product questions with human-like accuracy and tone.",
      tools: ["OpenAI", "n8n", "Shopify API", "Zendesk"],
      results: ["90% automated resolution rate", "Instant 24/7 support", "Significant reduction in support costs"]
    },
    { 
      title: "Inventory Management", 
      category: "Architecture", 
      desc: "Complex database and workflow system for a logistics company.", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", // Inventory/Warehouse visual
      details: "A custom-built internal tool for tracking thousands of SKUs across multiple warehouses. Features real-time stock alerts, automated reordering, and detailed analytics dashboards.",
      tools: ["Bubble.io", "Firebase", "Make.com", "Google Cloud"],
      results: ["Zero inventory discrepancies", "Automated reordering system", "Real-time warehouse visibility"]
    },
    { 
      title: "Booking Marketplace", 
      category: "Development", 
      desc: "Web marketplace for service providers with automated scheduling.", 
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", // Scheduling UI
      details: "A two-sided marketplace connecting customers with local service providers. Features include a robust booking engine, secure payment processing, and an automated notification system.",
      tools: ["Adalo", "Zapier", "Stripe", "Google Calendar"],
      results: ["500+ service providers onboarded", "Automated scheduling & payments", "Mobile-first responsive design"]
    },
    { 
      title: "Marketing Automation", 
      category: "Automation", 
      desc: "Multi-channel marketing workflow connecting n8n, Slack, and HubSpot.", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // Marketing Analytics UI
      details: "A sophisticated marketing engine that synchronizes data across the entire sales stack. It triggers personalized campaigns based on user behavior and provides real-time Slack alerts for high-intent actions.",
      tools: ["n8n", "HubSpot", "Slack", "Mailchimp"],
      results: ["3x increase in marketing ROI", "Unified customer data view", "Automated lead scoring"]
    },
    { 
      title: "FinTech Dashboard", 
      category: "Architecture", 
      desc: "Operational dashboard for a fintech company to track global transactions.", 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", // Financial Data UI
      details: "A high-density data visualization platform for monitoring cross-border payments. Built to handle millions of data points with sub-second latency and bank-grade security protocols.",
      tools: ["Bubble.io", "D3.js", "AWS", "Plaid API"],
      results: ["Real-time fraud detection", "99.99% system uptime", "Automated regulatory reporting"]
    },
    { 
      title: "AI Content Engine", 
      category: "Intelligence", 
      desc: "Automated content generation and distribution system using GPT-4.", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", // AI Interface UI
      details: "An end-to-end content pipeline that researches topics, generates SEO-optimized articles, and distributes them across social media and CMS platforms without human intervention.",
      tools: ["OpenAI", "Make.com", "WordPress API", "Buffer"],
      results: ["50+ articles per week", "80% reduction in content costs", "Consistent multi-channel presence"]
    },
    { 
      title: "Health Tracking App", 
      category: "Development", 
      desc: "Cross-platform mobile app for patient health monitoring.", 
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", // Medical Dashboard UI
      details: "A HIPAA-compliant mobile application for tracking vital signs and medication adherence. Includes real-time alerts for healthcare providers and a secure patient-doctor messaging portal.",
      tools: ["FlutterFlow", "Firebase Auth", "Cloud Functions", "Twilio"],
      results: ["Improved patient outcomes", "Secure data encryption", "Automated medication reminders"]
    },
    { 
      title: "E-commerce Pipeline", 
      category: "Automation", 
      desc: "End-to-end automation from order placement to shipping notifications.", 
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80", // E-commerce Backend UI
      details: "A robust backend system that synchronizes inventory, processes payments, generates shipping labels, and sends real-time tracking updates to customers across multiple sales channels.",
      tools: ["n8n", "Shopify", "ShipStation", "Klaviyo"],
      results: ["Zero manual order entry", "Real-time sync across 5 channels", "Improved customer satisfaction"]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-40 pb-32 relative overflow-hidden">
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-4">Portfolio</div>
          <h2 className="text-6xl font-bold tracking-tighter mb-8">Past Projects.</h2>
          <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
            A selection of engineered systems and applications built for clients across various industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group glass rounded-[40px] overflow-hidden premium-border flex flex-col cursor-pointer ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
            >
              <div className="aspect-video overflow-hidden bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title}/800/600`;
                  }}
                />
              </div>
              <div className="p-10">
                <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${
                  project.category === 'Automation' ? 'text-amber-accent' :
                  project.category === 'Development' ? 'text-emerald-accent' :
                  project.category === 'Intelligence' ? 'text-violet-accent' :
                  'text-ivory'
                }`}>{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed mb-8">{project.desc}</p>
                <div className="mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-white transition-colors flex items-center gap-2">
                    View Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#020229]/90 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl glass rounded-[48px] overflow-hidden premium-border shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#020229] transition-all"
                >
                  <X size={24} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-zinc-900">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${selectedProject.title}/800/600`;
                    }}
                  />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">{selectedProject.category}</div>
                  <h2 className="text-4xl font-bold tracking-tighter mb-8">{selectedProject.title}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-4">The Challenge</h4>
                      <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.details}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool: string, i: number) => (
                          <span key={i} className="px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-4">Key Results</h4>
                      <div className="space-y-3">
                        {selectedProject.results.map((result: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                            <CheckCircle2 className="text-emerald-accent w-4 h-4" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Link 
                      to="/contact" 
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-5 bg-white text-[#020229] text-center font-black uppercase tracking-widest text-xs rounded-full block hover:bg-[#D3D3D3] transition-all"
                    >
                      Build Something Similar
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* New Section: Project Methodology */}
        <div className="glass p-16 md:p-24 rounded-[64px] premium-border">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">How I deliver <br/> <span className="italic font-serif">excellence.</span></h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
                Every project follows a rigorous engineering process to ensure the final system is not just functional, but high-performing and maintainable.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Discovery Phase", desc: "Deep dive into your business logic and existing technical infrastructure." },
                  { title: "Prototyping", desc: "Rapid iteration of core features to validate the solution early." },
                  { title: "Rigorous Testing", desc: "Stress-testing automations and apps to ensure they handle edge cases." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white flex-shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square glass rounded-[40px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&q=80" alt="Excellence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10">
                <div className="text-2xl font-bold tracking-tighter uppercase">Quality First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is your typical project timeline?", a: "Most automation projects take 2-4 weeks, while full custom application builds typically range from 6-10 weeks depending on complexity." },
    { q: "Do you provide post-launch support?", a: "Yes, I offer monthly maintenance and optimization packages to ensure your systems continue to run smoothly as your business grows." },
    { q: "Can you integrate AI into my existing CRM?", a: "Absolutely. I specialize in connecting LLMs (like GPT-4) to existing CRMs like HubSpot, Salesforce, or Pipedrive via custom automations." },
    { q: "What is the difference between No-Code and traditional development?", a: "No-Code allows for much faster iteration and lower maintenance costs, while still delivering production-grade performance for 95% of business use cases." },
    { q: "Do I own the system after the project is finished?", a: "Yes, you have full ownership of all applications, automation workflows, and accounts created during the project." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-40 pb-32 relative overflow-hidden">
      <BackgroundBlobs />
      <div className="absolute top-0 right-0 w-1/2 h-full dots opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFFFF0] mb-4">Contact</div>
            <h2 className="text-7xl font-bold tracking-tighter mb-10 leading-[0.9]">Let's <br/> <span className="italic font-serif">build</span> <br/> together.</h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12 max-w-md">
              Ready to automate your operations or build your next product? Choose your preferred way to connect.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { href: "mailto:joshuafasanya100@gmail.com", icon: <Mail size={28} />, label: "Email", value: "joshuafasanya100@gmail.com", color: "text-emerald-accent", bg: "bg-emerald-accent/10" },
              { href: "https://www.linkedin.com/in/joshua-fasanya-a947b8217/", icon: <Linkedin size={28} />, label: "LinkedIn", value: "Joshua Fasanya", color: "text-amber-accent", bg: "bg-amber-accent/10" },
              { href: "https://wa.me/2349074989290", icon: <Phone size={28} />, label: "WhatsApp", value: "Chat with me", color: "text-violet-accent", bg: "bg-violet-accent/10" }
            ].map((item, i) => (
              <motion.a 
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="flex items-center justify-between p-10 glass rounded-[40px] premium-border group hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:bg-white group-hover:text-[#020229] transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">{item.label}</div>
                    <div className="text-xl font-bold">{item.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="text-zinc-700 group-hover:text-white transition-colors" size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* New Section: FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-4">Questions</div>
            <h2 className="text-5xl font-bold tracking-tighter">Frequently Asked.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-[32px] premium-border overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold tracking-tight">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeFaq === i ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-zinc-500 font-light leading-relaxed pt-4 border-t border-white/5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="font-sans selection:bg-white/30 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

