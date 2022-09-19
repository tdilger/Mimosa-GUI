import { Viewport } from "../../utils/layout"
import { createFieldMatrix, Field } from "../../views/fields"
import { DEFAULT_DECORATIONS } from "./defaultDecorations"
import { DEFAULT_ITEMS } from "./defaultItems"
import { Item } from "./items"

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
     readonly img: string

     constructor(name: string, img: string, items: Item[][], fields: Field[][]) {
        this.name = name
        this.img = img
        this.items = items
        this.fields = fields
        this.width = fields[0].length
        this.height = fields.length
     }
}