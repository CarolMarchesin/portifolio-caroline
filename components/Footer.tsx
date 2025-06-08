import moment from "moment";

export function Footer() {
  return (
    <footer className="py-6 border-t text-center text-muted-foreground text-md">
      <div className="container mx-auto flex flex-col items-center text-center">
        © {moment().year()} Caroline Marchesin. Todos os direitos reservados.
      </div>
    </footer>
  );
}
