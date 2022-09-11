import IconButton from "@suid/material/IconButton"
import { createSignal, JSX } from "solid-js"
import { For } from "solid-js"
import { Item } from "../components/smart_env/items"
import { Position, Viewport } from "../utils/layout"
import { set_clicked_item } from "./ItemDisplay"

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

export function createFields(fields: Field[][]): JSX.Element {
    /** 
     * JSX representation of the field matrix. 
     * @param fields: field matrix with objects (items and decorations) on
     * */

     const [open, setOpen] = createSignal(false);
    
    return <For each={fields}>
                { (row_fields: Field[], i) => 
                <For each={row_fields}>
                    {(field: Field, j) => 
                    <div class="field">
                        <div class="fieldContent">
                            { () => {
                                // console.log("Field ", field, " object on: ", field.object_on as Item)
                                if (field.object_on instanceof Item) {
                                    let item_on: Item = field.object_on as Item
                                    let img_alt: string = item_on.type + " " + item_on.name
                                    return <IconButton onClick={ () => set_clicked_item(item_on) } 
                                    sx={{width: '60%', height: '60%', padding: '10% 10%'}} >
                                        <img src={item_on.img} class="w-full h-full" alt={img_alt} />
                                        </IconButton>
                                } else if(field.object_on instanceof Decoration) {
                                    let deco_on: Decoration = field.object_on as Decoration
                                    let img_alt: string = deco_on.name
                                    return <img src={deco_on.img} class="w-full" style="padding: 0 30%" alt={img_alt} />
                                }
                            }}
                        </div>
                    </div>
                    }
                </For> }
            </For>
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