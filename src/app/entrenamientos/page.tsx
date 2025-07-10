// app/entrenamientos/page.tsx

export default function Entrenamientos() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Entrenamientos</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Entrenamiento 1 */}
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Cardio explosivo 🔥</h2>
          <p className="mb-4">Duración: 20 min · Nivel: Intermedio</p>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/dpHjK-RRAqA"
            title="Cardio explosivo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>

        {/* Entrenamiento 2 */}
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Fuerza sin pesas 💪</h2>
          <p className="mb-4">Duración: 30 min · Nivel: Principiante</p>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/UItWltVZZmE"
            title="Fuerza sin pesas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
