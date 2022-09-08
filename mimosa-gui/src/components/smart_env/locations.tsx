import { Viewport } from "../../utils/layout"
import { createFieldMatrix, Field } from "../../views/fields"
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
     fields: Field[][]

     constructor(name: string, items: Item[][], fields: Field[][]) {
        this.name = name
        this.items = items
        this.fields = fields
        this.width = fields[0].length
        this.height = fields.length
     }
}


const LOCATION_ITEM_MAPPINGS = {
   kitchen: [
      {pos:{x:2, y:0}, item: DEFAULT_ITEMS.kitchen[0][0]}],
   bathroom: [
      {pos:{x:2, y:0}, item: DEFAULT_ITEMS.bathroom[0][0]}, 
      {pos:{x:0, y:0}, item: DEFAULT_ITEMS.bathroom[1][0]}, 
      {pos:{x:2, y:2}, item: DEFAULT_ITEMS.bathroom[1][1]}],
   livingroom: [
      {pos:{x:2, y:2}, item: DEFAULT_ITEMS.livingroom[0][0]}, 
      {pos:{x:3, y:2}, item: DEFAULT_ITEMS.livingroom[0][1]}, 
      {pos:{x:1, y:0}, item: DEFAULT_ITEMS.livingroom[1][0]}
   ]
}

const LOCATION_DECORATION_MAPPINGS = {
   kitchen: [],
   bathroom: [],
   livingroom: []
}

const KITCHEN_SIZE: Viewport = {width: 4, height: 2}
const BATHROOM_SIZE: Viewport = {width: 3, height: 3}
const LIVINGROOM_SIZE: Viewport = {width: 6, height: 3}
const BEDROOM_SIZE: Viewport = {width: 3, height: 4}
const HOME_SIZE: Viewport = {width: 11, height: 8}

/**
 * DEFAULT field matrices.
 */
const KITCHEN_FIELD_MATRIX: Field[][] = createFieldMatrix(KITCHEN_SIZE, LOCATION_ITEM_MAPPINGS.kitchen, LOCATION_DECORATION_MAPPINGS.kitchen)
const BATHROOM_FIELD_MATRIX: Field[][] = createFieldMatrix(BATHROOM_SIZE, LOCATION_ITEM_MAPPINGS.bathroom, LOCATION_DECORATION_MAPPINGS.bathroom)
const LIVINGROOM_FIELD_MATRIX: Field[][] = createFieldMatrix(LIVINGROOM_SIZE, LOCATION_ITEM_MAPPINGS.livingroom, LOCATION_DECORATION_MAPPINGS.livingroom)
const BEDROOM_FIELD_MATRIX: Field[][] = createFieldMatrix(BEDROOM_SIZE, [], [])
const HOME_FIELD_MATRIX: Field[][] = createFieldMatrix(HOME_SIZE, [], [])

/**
 * TODO: Create locations dynamically
 * 
 */
const kitchen: Location = new Location("Küche", DEFAULT_ITEMS.kitchen, KITCHEN_FIELD_MATRIX)
const livingRoom: Location = new Location("Wohnzimmer", DEFAULT_ITEMS.livingroom, LIVINGROOM_FIELD_MATRIX)
const bathroom: Location = new Location("Badezimmer", DEFAULT_ITEMS.bathroom, BATHROOM_FIELD_MATRIX)
const bedroom: Location = new Location("Schlafzimmer", [], BEDROOM_FIELD_MATRIX)
const home: Location = new Location("Haus", [], HOME_FIELD_MATRIX)

export const DEFAULT_LOCATIONS: Location[] = [ kitchen, livingRoom, bathroom, bedroom, home ]