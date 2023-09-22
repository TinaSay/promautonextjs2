import Link from "next/link";

export default function Nav(){
    return(
        <nav>
            <ul className="navbar">
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/about">О нас</Link></li>
                <li><Link href="/projects">Проекты</Link></li>
                <li><Link href="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    )
}