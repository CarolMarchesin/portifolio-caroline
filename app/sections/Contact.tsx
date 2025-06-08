import { Card } from "@/components/Card";
import { itemsContact } from "@/app/utils/contact";

export function Contact() {
    
  const renderContactInfo = () => {
    return (
      <>
        {itemsContact.map((item) => (
          <div
            key={item.title}
            className="flex flex-col md:flex-row items-center gap-6 mt-5"
          >
            <div className="rounded-full border-pink-900 border-1 p-2 bg-pink-500/10">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold">{item.title}</span>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="contact" className="container my-32 xl:max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl font-bold text-pink-600">Entre em Contato</p>
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Para mais informações ou colaborações, sinta-se à vontade para entrar
          em contato comigo.
        </p>
      </div>

      <div className="mt-10 items-center flex flex-col">
        <Card title="Informações de Contato">
          <div className="text-muted-foreground text-md flex flex-col items-center md:items-start gap-4">
            {renderContactInfo()}
          </div>
        </Card>
      </div>
    </section>
  );
}
