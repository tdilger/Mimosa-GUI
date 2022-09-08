import { Component } from "solid-js"
import { current_location, setCurrentLocation } from "../../views/LocationView"
import { setLocationMenuOpen } from "../navigation/Navigation"
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
    return (
        <>
            <button class="card locationCard" 
            onclick={ () => { 
                setLocationMenuOpen((previousOpen) => !previousOpen) 
                if (props.location != current_location()) {
                    setCurrentLocation(props.location)
                }
                } }>
                <div class="cardContent">
                    <img src={ props.location.img } alt={ props.location.name } />
                </div>
            </button>
        </>
    )
}