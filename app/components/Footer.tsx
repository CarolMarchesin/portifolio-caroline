export function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-md opacity-70">
          © {new Date().getFullYear()} Caroline Marchesin. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
