import { Component, For, JSX } from "solid-js"
import { Item } from "./items"


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
     items: Item[]

     constructor(name: string, width: number, height: number, items: Item[]) {
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

export const LocationCard: Component<LocationProps> = ({ location }) => {
    /**
     * Card view to display location in LocationMenu.
     */
    return (
        <div class="card locationCard">
            <div class="cardContent">
                <p>Bild</p>
                <p>{ location.name }</p>
            </div>
        </div>
    )
}

/**
 * TODO: Create locations dynamically
 */
const kitchen: Location = new Location("Küche", 3, 2, [{id:"", name:"", img:""}])
const livingRoom: Location = new Location("Wohnzimmer", 4, 3, [{id:"", name:"", img:""}])
const bathroom: Location = new Location("Badezimmer", 1, 2, [{id:"", name:"", img:""}])
const bedroom: Location = new Location("Schlafzimmer", 1, 2, [{id:"", name:"", img:""}])
const home: Location = new Location("Haus", 4, 6, [{id:"", name:"", img:""}])

 export const DEFAULT_LOCATIONS: Location[] = [ kitchen,livingRoom, bathroom, bedroom, home ]