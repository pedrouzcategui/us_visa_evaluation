import { Hero, Pricing, Testimonials, CTA } from "@/components";
import Container from "@/components/Container/Container";
import Grid from "@/components/Grid/Grid";
import Navbar from "@/components/Navbar/Navbar";
import Widget from "@/components/Widget/Widget";
import { IoIosPaper } from "react-icons/io";

type ProcessStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: <IoIosPaper size={30} />,
    title: '1. Realiza el quiz gratuito',
    description: 'Obten tu calificacion de perfil de visa, obten insights, y si crees que es necesario que te asesoremos, mejoraremos tu puntuacion usando las mejores practicas de nuestros participantes aprobados.',
  },
  {
    icon: <IoIosPaper size={30} />,
    title: '1. Realiza el quiz gratuito',
    description: 'Obten tu calificacion de perfil de visa, obten insights, y si crees que es necesario que te asesoremos, mejoraremos tu puntuacion usando las mejores practicas de nuestros participantes aprobados.',
  },
  {
    icon: <IoIosPaper size={30} />,
    title: '1. Realiza el quiz gratuito',
    description: 'Obten tu calificacion de perfil de visa, obten insights, y si crees que es necesario que te asesoremos, mejoraremos tu puntuacion usando las mejores practicas de nuestros participantes aprobados.',
  },
]

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <Hero />
        <Grid numberOfColumns={3} gap={2}>
          {PROCESS_STEPS.map((processStep, i) => {
            return (
              <Grid.Column key={`${processStep.title}-${i}`}>
                <Widget
                  {...processStep}
                />
              </Grid.Column>
            )
          })}
        </Grid>
        {/* <Pricing /> */}
      </Container>
      <Testimonials />
      <CTA />
    </main>
  );
}
