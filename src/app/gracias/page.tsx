export default function GraciasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por reservar!</h1>
      <p className="text-lg max-w-md text-center">
        Tu sesión con Ronald está confirmada. Te llegará un correo con los detalles.
        Si querés aprovechar al máximo la sesión, preparate con esta guía previa 👇
      </p>
      <a
        href="https://tu-guia-o-video.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
      >
        Ver guía previa a la sesión
      </a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="mt-6 inline-block bg-gray-200 text-black py-2 px-4 rounded-xl text-center hover:bg-gray-300 transition"
      >
        ← Volver al inicio
      </a>
    </main>
  );
}
