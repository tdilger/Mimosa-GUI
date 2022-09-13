import { Item } from "../components/smart_env/items"
import { Position, Viewport } from "../utils/layout"

export class Decoration {
    /**
     * Container for decoration images that can be placed on fields.
     * Used for better recognition of the current location
     */
     id: string
     name: string
     img: string
}

export class Field {
    /**
     * Representation of field in locationDisplay.
     * items and decoration can be placed on field
     * @property pos: position in grid as indices (e.g. x=2, y=4)
     */
    
    /** 
     * width and height of field in px on scale 1.
     * With growing no. of fields (location.width), the size needs to be shrinked.
     * Scale down by factor 1/(location.width) with 1/10 * FIELD_SIZE as smallest scale of field
     */
    static readonly FIELD_SIZE = 100

    /** Gap (x, y) between fields in px */
    static readonly FIELD_GAP = 6

    pos: Position
    object_on: Item | Decoration | {}

    constructor(pos: Position, object_on?: (Item | Decoration | {})) {
        this.pos = pos
        // console.log("Field init, ", object_on, " type: ", typeof object_on)
        if (object_on instanceof Item) {
            // console.log("This is an item!")
            this.object_on = object_on as Item
        } else if (object_on instanceof Decoration) {
            // console.log("This is only deco.")
            this.object_on = object_on as Decoration
        } else {
            // console.log("Here is nothing on it.")
            this.object_on = {}
        }
    }
}

export function createFieldMatrix(
    viewport: Viewport, 
    items?: {pos: Position, item: Item}[],
    decorations?: {pos: Position, decoration: Decoration}[]): Field[][] {
    /**
     * Initializes field matrix with GridView.
     * @param viewport: width and height, no. of grid rows / columns
     * @param items: item positions, e.g. ({x:3, y:2}, light-1)
     * @param decorations: decoration positions, e.g. ({x: 2, y: 6}, deco-2)
     */
    // console.log("createFieldMatrix - no rows: ", viewport.width, " columns: ", viewport.height)
    var fields: Field[][] = []
    for(let i=0; i<viewport.height; ++i) {
        fields[i] = []
        for(let j=0; j<viewport.width; ++j) {
            let pos: Position = {x:i, y:j}
            fields[i][j] = new Field(pos)
        }
    }
    console.log("items: ", items, " decorations: ", decorations)
    items.forEach(item => {
        console.log("item: ", item)
        let { x, y } = item.pos
        fields[y][x] = new Field(item.pos, item.item)
    });
    decorations.forEach(deco => {
        console.log("decoration: ", deco)
        let {x, y} = deco.pos
        fields[y][x] = new Field(deco.pos, deco.decoration)
    })
    return fields
}