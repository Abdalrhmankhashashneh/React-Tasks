import { useContext } from "react";
import { context } from "../routes";
export default function Contact() {
    const abood = useContext(context);

    return (

        <div className="Contact">
            <h1>Contact it's work {abood.abood.name}</h1>
        </div>
    );
}