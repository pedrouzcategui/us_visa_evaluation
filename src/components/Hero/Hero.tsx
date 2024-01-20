import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import Heading from "../Heading/Heading";
export function Hero() {
    return (
        <Grid numberOfColumns={1} className="h-[550px] items-center">
            <Grid.Column className="text-center">
                <Heading className="font-bold mb-2" level={1}>Conocer los Estados Unidos</Heading>
                <p className="mb-4">Un sueño posible con nosotros.</p>
                <Button variant="secondary">Asesorarme</Button>
            </Grid.Column>
        </Grid >
    )
}
