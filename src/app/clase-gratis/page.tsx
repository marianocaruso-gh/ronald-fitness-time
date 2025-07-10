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
    </>
  );
}
