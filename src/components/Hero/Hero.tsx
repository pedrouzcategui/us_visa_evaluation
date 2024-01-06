import Button from "../Button/Button";

type HeroProps = {
    title: string;
    description: string;
}

export function Hero() {
    return (
        <div className="h-[500px] bg-white grid grid-cols-3 justify-center items-center">
            <div className="col col-span-2">
                <h1 className="font-bold text-4xl">Conocer los Estados Unidos</h1>
                <p className="mb-4">Es tu sueño, y es posible con nosotros.</p>
                <Button type="secondary">Asesorarme</Button>
            </div>
            <div className="col">
                <p>Something made with Three.js like the visa or some shit like that</p>
            </div>
        </div>
    )
}
