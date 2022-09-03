import { Component } from "solid-js"
import { current_location, setCurrentLocation } from "../../views/LocationView"
import { locationMenuOpen, setLocationMenuOpen } from "../navigation/Navigation"
import { Location } from "../smart_env/locations"

export interface LocationProps {
    /**
     * Make location accessible to components.
     */
    location: Location
}

export const LocationCard: Component<LocationProps> = (props) => {
    /**
     * Card view to display location in LocationMenu.
     */
    console.log("location menu open: ", locationMenuOpen(), " location: ", props.location)
    return (
        <>
            <button class="card locationCard" 
            onclick={ () => { 
                setLocationMenuOpen(!locationMenuOpen()) 
                if (props.location != current_location()) {
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