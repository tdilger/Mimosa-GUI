import { DEFAULT_ITEMS, Item } from "./items"

export class Location {
    /**
     * Container class for locations.
     * @property name: location (e.g. "kitchen")
     * @property width, height: size of the location (e.g. 3 x 4) set by standard values
     * @property items: items located in the location (e.g. [[3 lights], [1 power plug]])
     */
     /** Amount of fields to be displayed in a location unit (e.g. 1x1 bathroom)*/
     static readonly FIELDS_PER_UNIT = 3

     /** Defined in css as well, used to set aspect ratio of location view. */
     static readonly VIEW_RATIO = 2.8

     name: string
     width: number
     height: number
     items: Item[][]

     constructor(name: string, width: number, height: number, items: Item[][]) {
        this.name = name
        this.width = width
        this.height = height
        this.items = items
     }
}

/**
 * TODO: Create locations dynamically
 */
const kitchen: Location = new Location("Küche", 3, 2, DEFAULT_ITEMS.kitchen)
const livingRoom: Location = new Location("Wohnzimmer", 4, 3, DEFAULT_ITEMS.livingroom)
const bathroom: Location = new Location("Badezimmer", 2, 1, DEFAULT_ITEMS.bathroom)
const bedroom: Location = new Location("Schlafzimmer", 2, 2, [])
const home: Location = new Location("Haus", 6, 4, [])

export const DEFAULT_LOCATIONS: Location[] = [ kitchen, livingRoom, bathroom, bedroom, home ]