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

/**
 * TODO: Create locations dynamically
 */
const kitchen: Location = new Location("Küche", 3, 2, [[item_light, 1]])
const livingRoom: Location = new Location("Wohnzimmer", 4, 3, [[item_light, 2], [item_plug, 1]])
const bathroom: Location = new Location("Badezimmer", 2, 1, [[item_light, 1], [item_plug, 2]])
const bedroom: Location = new Location("Schlafzimmer", 2, 2, [[item_light, 2], [item_plug, 1]])
const home: Location = new Location("Haus", 6, 4, [[item_light, 6], [item_plug, 4]])

 export const DEFAULT_LOCATIONS: Location[] = [ kitchen,livingRoom, bathroom, bedroom, home ]