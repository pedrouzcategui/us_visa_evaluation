// import Image from "next/image";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
type NavigationItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const NAVIGATION: NavigationItem[] = [
    {
        label: "Home",
        href: "/",
        icon: <></>,
    },
    {
        label: "Pricing",
        href: "#pricing",
        icon: <></>,
    },
    {
        label: "Contact",
        href: "/contact",
        icon: <></>,
    },
    {
        label: "Login",
        href: "/login",
        icon: <IoIosLogIn />,
    },
];

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <div>
                Asesoria De Visa Americana
            </div>
            <div>
                <ul className="flex gap-4">
                    {NAVIGATION.map(({ href, label, icon }, i) => {
                        return (
                            <li key={`${href}-${i}`}>
                                <Link href={href} className="flex items-center gap-2">{icon} {label}</Link>
                            </li>
                        );
                    })}
                    {/* <li>
                        Dark Mode Toggle
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}
