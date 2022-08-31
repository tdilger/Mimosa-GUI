import { Component, createSignal, For, JSX } from "solid-js"
import { current_location, setCurrentLocation } from "../../pages/LocationView"
import { locationMenuOpen, setLocationMenuOpen } from "../navigation/Navigation"
import { Item, item_light, item_plug } from "./items"

export class Location {
    /**
     * Container class for locations.
     * @property name: location (e.g. "kitchen")
     * @property width, height: size of the location (e.g. 3 x 4) set by standard values
     * @property items: items located in the location (e.g. 3 lights, 1 power plug)
     */
     name: string
     width: number
     height: number
     items: [Item, number][]

     constructor(name: string, width: number, height: number, items: [Item, number][]) {
        this.name = name
        this.width = width
        this.height = height
        this.items = items
     }
}

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

/**
 * TODO: Create locations dynamically
 */
const kitchen: Location = new Location("Küche", 3, 2, [[item_light, 1]])
const livingRoom: Location = new Location("Wohnzimmer", 4, 3, [[item_light, 2], [item_plug, 1]])
const bathroom: Location = new Location("Badezimmer", 1, 2, [[item_light, 1], [item_plug, 2]])
const bedroom: Location = new Location("Schlafzimmer", 1, 2, [[item_light, 2], [item_plug, 1]])
const home: Location = new Location("Haus", 4, 6, [[item_light, 6], [item_plug, 4]])

 export const DEFAULT_LOCATIONS: Location[] = [ kitchen,livingRoom, bathroom, bedroom, home ]