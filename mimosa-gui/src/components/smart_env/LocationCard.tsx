import { current_location, setCurrentLocation } from "../../pages/LocationView"
import { locationMenuOpen, setLocationMenuOpen } from "../navigation/Navigation"

export interface LocationProps {
    /**
     * Make location accessible to components.
     */
    location: Location
}

export const LocationCard = (props) => {
    /**
     * Card view to display location in LocationMenu.
     */
    console.log("location menu open: ", locationMenuOpen(), " location: ", props.location)
    return (
        <>
            <button class="card locationCard" 
            onclick={ () => { 
                setLocationMenuOpen(!locationMenuOpen()) 
                if (props.location != props.current_location) {
                    setCurrentLocation(props.location)
                }
                } }>
                <div class="cardContent">
                    <p>Bild</p>
                    <p>{ props.location.name }</p>
                </div>
            </button>
        </>
    )
}