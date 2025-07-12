'use client';
import { useState } from 'react';
import Script from 'next/script';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-4 relative">
        <h1 className="text-4xl font-bold text-center mb-8">Ronald Fitness Time</h1>

        <img
          src="/fitness-cover.png"
          alt="Ronald entrenando"
          className="rounded-xl mb-8 w-full max-w-md"
        />

        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          <a href="/entrenamientos" className="bg-gray-200 text-black py-3 rounded-xl text-center">
            Ver entrenamientos
          </a>
          <a href="/reservar" className="bg-gray-200 text-black py-3 rounded-xl text-center">
            Reservar horario
          </a>
          <a href="/suscribirme" className="bg-gray-200 text-black py-3 rounded-xl text-center">
            Unirme semanalmente
          </a>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-400 text-black py-3 rounded-xl text-center hover:bg-yellow-300 transition"
          >
            Clase gratuita 💪
          </button>
        </div>
      </div>

      {/* Pop-up Calendly */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-2xl w-full relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-3 text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-center text-xl font-bold text-black mb-4">
              Agendá tu clase gratuita con Ronald
            </h2>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/marito-dev/ronald-clase-gratis"
              style={{ minWidth: '320px', height: '650px' }}
            />
          </div>

          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      )}
    </>
  );
}
