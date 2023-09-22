import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
export default function Features({icon,title,desc}){
    const src=`/images/icons/${icon}.png`
    return(
            <div className="feature">
                <Image src={src} className="icon" width={125} height={125} alt={title} />
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
    )
}