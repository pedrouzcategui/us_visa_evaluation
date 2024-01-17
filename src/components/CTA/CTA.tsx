import Button from '../Button/Button';
import Heading from '../Heading/Heading';
export function CTA() {
    return (
        <div className="w-full text-center h-[300px] flex flex-col justify-center items-center">
            <Heading level={3} className='mb-2 font-bold'>Listo para solicitar tu visa?</Heading>
            <Button variant='secondary'>Take me somewhere</Button>
        </div>
    )
}
