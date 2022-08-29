import { Component, For, JSX } from "solid-js"
import { ItemType, ItemIcon } from "./items"


export type LocationType = {
    /**
     * @property width, height: size in [m]
     */
    name: string
    width: number
    height: number
    items: [ItemType]
}

export interface LocationProps {
    location: LocationType
}

export class Location {
    /**
     * Container class for locations.
     */
    card: JSX.Element
    view: JSX.Element

    constructor(card: JSX.Element, view: JSX.Element) {
        this.card = card 
        this.view = view
    }
}

export const LocationCard: Component<LocationProps> = ({ location }) => {
    /**
     * Card to display location in LocationMenu.
     */
    return (
        <div class="locationCard text-center align-middle">
            <p>{ location.name }</p>
        </div>
    )
}

export const LocationView: Component<LocationProps> = ({ location }) => {
    /**
     * View of location which is displayed in center.
     */
    return (
        <div id="locationView" class="text-center">
            <h3 class="text-3xl text-green-800 text-center py-10">{ location.name }</h3>
            <div class="outline-dashed w-full h-auto">
                <For each={ location.items }>
                    { (item: ItemType) => <p>{ item.name }</p>}
                </For>
            </div>
        </div>
    )
}

/**
 * TODO: Create locations dynamically
 */
const kitchen: LocationType = {name:"Küche", width:3, height:2, items:[{id:"", name:"", img:""}]}
const kitchenCard = <LocationCard location={ kitchen } />
const kitchenView = <LocationView location={ kitchen } />

const livingRoom: LocationType = {name:"Wohnzimmer", width:4, height:3, items:[{id:"", name:"", img:""}]}
const livingRoomCard = <LocationCard location={ livingRoom } />
const livingRoomView = <LocationView location={ livingRoom } />

const bathroom: LocationType = {name:"Badezimmer", width:1, height:2, items:[{id:"", name:"", img:""}]}
const bathroomCard = <LocationCard location={ bathroom } />
const bathroomView = <LocationView location={ bathroom } />

const bedroom: LocationType = {name:"Badezimmer", width:1, height:2, items:[{id:"", name:"", img:""}]}
const bedroomCard = <LocationCard location={ bedroom } />
const bedroomView = <LocationView location={ bedroom } />

const home: LocationType = {name:"Badezimmer", width:1, height:2, items:[{id:"", name:"", img:""}]}
const homeCard = <LocationCard location={ home } />
const homeView = <LocationView location={ home } />

 export const DEFAULT_LOCATIONS: Location[] = [
    new Location(kitchenCard, kitchenView), 
    new Location(livingRoomCard, livingRoomView),
    new Location(bathroomCard, bathroomView),
    new Location(bedroomCard, bedroomView),
    new Location(homeCard, homeView),
]