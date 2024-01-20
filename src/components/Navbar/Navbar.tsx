'use client'
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./styles.module.css"
import { useState } from "react";
type NavigationItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
    children?: NavigationItem[];
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
        label: "Resources",
        href: "/resources",
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    return (
        <>
            <nav className={styles.nav}>
                <div className="w-4/5 mx-auto flex justify-between items-center">
                    <div>
                        Logo
                    </div>
                    <div className={styles.menu_items}>
                        <ul className="flex gap-4">
                            {NAVIGATION.map(({ href, label, icon }, i) => {
                                return (
                                    <li key={`${href}-${i}`}>
                                        <Link href={href} className="flex items-center gap-2">{icon} {label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.hamburguer_menu}>
                        <RxHamburgerMenu onClick={() => setIsMobileMenuOpen(true)} />
                    </div>
                    <div className={styles.mobile_menu} style={{
                        display: isMobileMenuOpen ? "block" : "none"
                    }}>
                        fdsafads
                    </div>
                </div>
            </nav>
        </>

    );
}
