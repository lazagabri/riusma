import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('Envoi en cours...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/lazagabriel75@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Nouveau message depuis votre site',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi');
      }

      setStatus('success');
      setFeedback('Merci ! Votre message a bien été envoyé.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setFeedback('Désolé, une erreur est survenue. Réessayez plus tard.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Prêt à collaborer ?</h2>
      <p className="text-gray-400 mb-12">Discutons de votre prochain projet. Je réponds généralement sous 24h.</p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl space-y-6 text-left"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Nom</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
              placeholder="Votre nom"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700"
              placeholder="Votre email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-700 resize-none"
            placeholder="Votre message ici"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors tracking-wide uppercase text-sm"
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {feedback && (
          <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : 'text-red-400'} mt-2`}>
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
