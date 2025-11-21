import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulation
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nom complet</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-bg/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-600"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-bg/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-600"
              placeholder="email@exemple.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sujet</label>
          <input
            type="text"
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-bg/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-600"
            placeholder="Sujet de votre message"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-bg/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-slate-600"
            placeholder="Votre message..."
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'submitting' || status === 'success'}
          className={`w-full py-4 px-6 rounded-lg text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all transform active:scale-[0.98]
            ${status === 'success' ? 'bg-green-600' : 'bg-primary hover:bg-blue-600'}
            disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === 'submitting' ? 'Envoi en cours...' : status === 'success' ? 'Message Envoyé !' : 'Envoyer le message'}
        </button>
      </form>
    </div>
  );
}
