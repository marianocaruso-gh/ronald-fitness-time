import Link from "next/link";

export default function EntrenamientosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link
        href="/"
        className="mt-6 inline-block bg-gray-200 text-black py-2 px-4 rounded-xl text-center hover:bg-gray-300 transition"
      >
        ← Volver al inicio
      </Link>
      {children}
    </>
  );
}
