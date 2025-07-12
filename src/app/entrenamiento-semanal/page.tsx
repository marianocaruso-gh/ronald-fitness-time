'use client';

import { useState } from 'react';

export default function EntrenamientoSemanalPage() {
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState<'inicial' | 'enviando' | 'enviado' | 'error'>('inicial');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado('enviando');

    try {
      const res = await fetch('https://sheetdb.io/api/v1/ks73dcvgzhdr8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: { email } })
      });

      if (res.ok) {
        setEstado('enviado');
        setEmail('');
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      setEstado('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-black">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-black font-semibold mb-2" htmlFor="email">
            Ingresá tu email:
          </label>
          <input
            type="email"
            name="data[email]"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@email.com"
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 w-full"
            disabled={estado === 'enviando'}
          >
            {estado === 'enviando' ? 'Enviando...' : 'Suscribirme al entrenamiento semanal'}
          </button>

          {estado === 'enviado' && (
            <p className="text-green-600 font-semibold text-center">
              ¡Gracias por suscribirte!
            </p>
          )}

          {estado === 'error' && (
            <p className="text-red-600 text-center">
              Ocurrió un error. Probá de nuevo en unos segundos.
            </p>
          )}
        </form>
      </div>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="mt-6 inline-block bg-gray-200 text-black py-2 px-4 rounded-xl text-center hover:bg-gray-300 transition"
      >
        ← Volver al inicio
      </a>
    </div>
  );
}
