import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Grid from "../Grid/Grid";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../Button/Button";

const PRICING_PLANS: PricingColumnProps[] = [
    {
        name: "Starter",
        subTitle: "Un pago, por persona",
        price: 150,
        benefits: [
            "Entrevista Inicial",
            "Preparación de tu formulario DS-160",
            "Acompañamiento Digital",
            "Recomendaciones en boletería y hospedaje",
            "Elección del mejor consulado para tu cita de acuerdo a tu situación",
        ],
    },
    {
        name: "Family",
        subTitle: "Un pago, por familia",
        price: 350,
        benefits: [
            "Todo lo que viene en starter",
            "5 Practica de entrevistas",
            "Devolución de US $150 en caso de que la visa sea negada",
        ],
    },
    {
        name: "Business",
        price: "Let's talk",
        subTitle: "Dos pagos, por empresa",
        benefits: [
            "Ideal para personas que viajen con empresas",
            "Todo lo que incluye Family",
            "Devolución de 50% del dinero en caso de ser negada",
        ],
    },
];

type PricingColumnProps = {
    name: string;
    subTitle: string;
    price: number | string;
    benefits: string[];
};

export function Pricing() {
    return (
        <div className="my-8">
            <Heading level={2} className="text-center font-bold mb-4">
                Pricing
            </Heading>
            <Grid numberOfColumns={3}>
                <PricingPlans />
            </Grid>
        </div>
    );
}

function PricingPlans() {
    return PRICING_PLANS.map((pricing) => {
        return <PricingColumn {...pricing} />;
    });
}

function PricingColumn({ name, price, benefits, subTitle }: PricingColumnProps) {
    return (
        <div className="flex flex-col justify-between border-2 border-slate-550 p-8">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <span className="text-2xl">{name}</span>
                    <div className="mb-4">
                        <span className="block text-2xl font-bold">{name == 'Business' ? "Let's talk" : `US $${price}`}</span>
                        <small>{subTitle}</small>
                    </div>
                </div>
                <Benefits benefits={benefits} />
            </div>
            <Button variant="secondary">Buy</Button>
        </div>
    );
}

function Benefits({ benefits }: { benefits: string[] }) {
    return (
        <ul className="flex flex-col justify-start w-full">
            {benefits.map((benefit: string, i: number) => {
                return (
                    <li key={`${benefit}-${i}`} className="text-xs mb-2">
                        - {benefit}
                    </li>
                );
            })}
        </ul>
    );
}
