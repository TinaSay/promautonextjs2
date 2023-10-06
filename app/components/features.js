import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Features({icon,title,desc}){
    return(
            <div className="feature">
                <FontAwesomeIcon icon={icon} className="icon"/>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
    )
}