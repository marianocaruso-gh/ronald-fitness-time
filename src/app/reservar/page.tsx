import Script from 'next/script';

export default function Reservar() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">
        Reservá tu sesión con Ronald
      </h1>

      {/* Calendly inline widget */}
      <div className="max-w-md w-full mx-auto px-4">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/marito-dev/sesion-personal-60"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
