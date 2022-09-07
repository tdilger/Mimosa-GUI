import { JSX } from "solid-js"
import { For } from "solid-js"
import { Item } from "../components/smart_env/items"
import { Position } from "../utils/layout"

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
    object_on: object | {}

    constructor(pos: Position, object_on?: object | {}) {
        if (object_on instanceof Item) {
            console.log("This is an item!")
        } else if (object_on instanceof Decoration) {
            console.log("This is only deco.")
        } else {
            console.log("Here is nothing on it.")
        }
    }
}

export function createFields(fields: Field[][]): JSX.Element {
    /** JSX representation of the field matrix. */
    
    return <For each={fields}>
                { (row_fields: Field[], i) => 
                <For each={row_fields}>
                    {(field: Field, j) => 
                    <div class="field">i: {i()}, j: {j()} </div>
                    }
                </For> }
            </For>
}

export function createFieldMatrix(no_rows: number, no_columns: number): Field[][] {
    /**
     * Initializes field matrix with GridView.
     * grid column and row are 50px x 50px (FIELD_SIZE)
     */
    console.log("createFieldMatrix - no rows: ", no_rows, " columns: ", no_columns)
    var fields: Field[][] = []
    for(let i=0; i<no_rows; ++i) {
        fields[i] = []
        for(let j=0; j<no_columns; ++j) {
            let pos: Position = {x:i, y:j}
            fields[i][j] = new Field(pos)
        }
    }
    return fields
}