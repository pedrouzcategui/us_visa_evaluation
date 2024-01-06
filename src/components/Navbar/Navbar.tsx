import Image from "next/image";
import Link from "next/link";

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
        href: "#contact",
        icon: <></>,
    },
];

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <div>
                Some Image
            </div>
            <div>
                <ul className="flex gap-4">
                    {NAVIGATION.map(({ href, label }, i) => {
                        return (
                            <li key={`${href}-${i}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
