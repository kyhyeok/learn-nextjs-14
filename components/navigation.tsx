"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Movie</Link> {path === "/" || path.includes("movie") ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/books">Book</Link> {path.includes("book") ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}