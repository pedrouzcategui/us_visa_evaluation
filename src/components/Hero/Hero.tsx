import Image from "next/image";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import Heading from "../Heading/Heading";
export function Hero() {
    return (
        <Grid numberOfColumns={2} className="h-[500px] items-center">
            <Grid.Column>
                <Heading className="font-bold mb-2" level={1}>Conocer los Estados Unidos</Heading>
                <p className="mb-4">Un sueño posible con nosotros.</p>
                <Button variant="secondary">Asesorarme</Button>
            </Grid.Column>
            <Grid.Column className="flex justify-center">
                <Image src={'/us-visa.png'} alt="US VISA" width={300} height={100} />
            </Grid.Column>
        </Grid >
    )
}
