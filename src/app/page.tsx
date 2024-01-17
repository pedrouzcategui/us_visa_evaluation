import { Hero, Pricing, Testimonials, CTA } from "@/components";
import Container from "@/components/Container/Container";
import Grid from "@/components/Grid/Grid";
import Navbar from "@/components/Navbar/Navbar";
import Widget from "@/components/Widget/Widget";
import { IoIosPaper, IoIosCalendar, IoIosAirplane, IoIosBook, IoIosCafe, IoIosCheckbox, IoIosChatbubbles, IoIosCheckmarkCircle } from "react-icons/io";

type ProcessStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const metadata = {
  title: 'Asesoria de visa americana',
  description: 'Obten el mejor asesoramiento para visas de los estados unidos',
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: <IoIosPaper size={30} />,
    title: '1. Realiza el quiz gratuito',
    description: 'Realiza un test completo que devuelve un porcentaje del 1 al 100, el cual expresa el porcentaje de exito de tu perfil.',
  },
  {
    icon: <IoIosBook size={30} />,
    title: '2. Obten tus resultados',
    description: 'Te explicamos algunas de las cosas que puedes mejorar de tu perfil, totalmente gratis.',
  },
  {
    icon: <IoIosCalendar size={30} />,
    title: '3. Agenda una cita',
    description: '¿Tienes dudas? Agenda una cita con un asesor especializado en tu tipo de visa.',
  },
  {
    icon: <IoIosCafe size={30} />,
    title: '4. Preparamos tu caso',
    description: 'Una vez entendamos tu caso y tu tipo de visa, trabajaremos en conjunto para preparar tu DS-160.',
  },
  {
    icon: <IoIosCheckbox size={30} />,
    title: '5. Enviar el DS-160',
    description: 'Luego, tendrás que enviar el DS-160 y seleccionar la embajada en donde deseas realizar tu entrevista.',
  },
  {
    icon: <IoIosChatbubbles size={30} />,
    title: '6. Cita y Simulación de Entrevistas',
    description: 'Te ayudaremos a elegir fechas y mejores destinos adaptados a tu situación, y procederemos a practicar las posibles preguntas que te hagan en tu entrevista.',
  },
  {
    icon: <IoIosAirplane size={30} />,
    title: '7. Acompañamiento',
    description: 'Tendrás acceso a tu agente predeterminado mediante WhatsApp, en donde podrás preguntar cualquier inquietud que tengas y conversar con ellos en tu proceso de viaje.',
  },
  {
    icon: <IoIosCheckmarkCircle size={30} />,
    title: '8. Resultados',
    description: 'Si tu visa fue negada, te devolveremos el 70% de tu dinero, ya que solo tenemos éxito como empresa cuando TU tienes éxito. Si tu visa fue aprobada ¡Felicidades! Te daremos recomendaciones de como ser un buen visa-portante.',
  },
]

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <Hero />
        <ProcessSteps />
        <Pricing />
      </Container>
      <Testimonials />
      <CTA />
    </main>
  );
}

function ProcessSteps() {
  return (
    <Grid numberOfColumns={3}>
      {PROCESS_STEPS.map((processStep, i) => {
        return (
          <Grid.Column key={`${processStep.title}-${i}`}>
            <Widget
              {...processStep}
              extendedClassName="min-h-[250px] flex flex-col justify-center"
            />
          </Grid.Column>
        )
      })}
    </Grid>
  )
}
