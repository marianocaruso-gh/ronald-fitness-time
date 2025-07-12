// app/clase-gratis/page.tsx
import Script from 'next/script';

export default function ClaseGratis() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">
        Agendá tu clase gratuita con Ronald
      </h1>

      <div
        className="calendly-inline-widget mx-auto"
        data-url="https://calendly.com/marito-dev/ronald-clase-gratis"
        style={{ minWidth: '320px', height: '700px' }}
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="mt-6 inline-block bg-gray-200 text-black py-2 px-4 rounded-xl text-center hover:bg-gray-300 transition"
      >
        ← Volver al inicio
      </a>
    </>
  );
}
