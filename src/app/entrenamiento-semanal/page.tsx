export default function EntrenamientoSemanal() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Unite semanalmente a los entrenamientos</h1>
      <form action="https://formspree.io/f/mayvlkge" method="POST" className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="p-2 rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-2 rounded text-black"
        />
        <button type="submit" className="bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 transition">
          Enviar
        </button>
      </form>
    </main>
  );
}
