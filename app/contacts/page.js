import Nav from "../components/nav";
import Image from "next/image";

export default function Contacts(){
    return(
        <>
            <Nav />
            <div className="spacer"/>
            <div className="wrapper-small">

                <h2>Как нас найти</h2>

                <p>Телефон:<br/>
                    +99897 441-54-94<br/></p>

                <p>Адрес:<br/>
                    Ташкент, Чиланзарский р-он,<br/>
                    Домбробад 4 тор куча, 23/2</p>


                <p>Email:<br/>
                    info.promautomatika@gmail.com<br/></p>

                <a href="https://maps.app.goo.gl/ajh4YH1VU1fUaa7GA" target="_blank">
                    <Image src="/images/map.png" alt="map" width={1199} height={633} /></a>

                <div className="spacer"/>

            </div>
        </>
    )
}