import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return(
        <header>
            <Link href="/"><Image
                src="/images/logo.png"
                height={61}
                width={387}
                alt="Promautomatika logo"/></Link>
            <div className="requisites">
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="icon"/>
                    <a href="https://maps.app.goo.gl/ajh4YH1VU1fUaa7GA" target="_blank">Ташкент, Чиланзарский
                        р-он<br/>
                        Домбробад 4 тор куча, 23/2</a></div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                    <div>
                        <a href="tel:+998974415494">+99897 441-54-94</a><br/>
                        <a href="tel:+998935433211">+99893 543-32-11</a></div>
                </div>
                <div className="mail">
                    <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    <a href="mailto:info@prom-automatika.com" target="_blank">info@prom-automatika.com</a></div>
            </div>
        </header>
    )
}