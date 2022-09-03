import { Component, createEffect, createMemo, createSignal, For, JSX } from 'solid-js';
import { Item } from '../components/smart_env/items';
import { Location } from '../components/smart_env/locations';
import { Position, Viewport } from '../utils/layout';

class Decoration {
    /**
     * Container for decoration images.
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
    
    /** width and height of field in rem */
    static readonly FIELD_SIZE = 5

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

function createFields(viewport: Viewport): Field[][] {
    /**
     * Initializes field matrix with GridView.
     * grid column and row are 50px x 50px (FIELD_SIZE)
     */
    let no_rows: number = viewport.width / Field.FIELD_SIZE
    let no_columns: number = viewport.height / Field.FIELD_SIZE
    console.log("location width: ", viewport.width, " location height: ", viewport.height, "rows: ", no_rows, " columns: ", no_columns)
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

export interface ItemDisplayProps {
    /**
     * @property viewport: boundaries of the locationView [width, height]
     * @property items: array of item, no. of item pairs
     */
    viewport: Viewport
    location: Location
}

const ItemDisplay: Component<ItemDisplayProps> = ( props ) => {
    /**
     * View for items inside the locationView.
     * Displays items across the location on specified places in GridView
     */
    var location: Location = props.location
    /** Fields to be allocated given location view size. */
    const fields = createMemo(() => {
        return createFields(props.viewport);
    })

    /** items to be refreshed when changing. */
    const [items, setItems] = createSignal(location.items)
    createEffect(() => {
        console.log("itemDisplay viewport: ", props.viewport)
    })
    
    return (
        <div id="itemDisplay" class="absolute top-0" 
        style={{'width': `${ props.viewport.width }%`, 'height': `${ props.viewport.height }%`,
        'display': 'grid', 
        'grid-template-columns': `repeat(auto-fill, ${ Field.FIELD_SIZE }rem`, 
        'grid-template-rows': `repeat(auto-fill, ${ Field.FIELD_SIZE }rem`}}>
            <For each={fields()}>
                { (row_fields: Field[], i) => 
                <For each={row_fields}>
                    {(field: Field, j) => 
                    <div class="field">i: {i()}, j: {j()}</div>
                    }
                </For> }
            </For>
        </div>
    )
}

export default ItemDisplay;