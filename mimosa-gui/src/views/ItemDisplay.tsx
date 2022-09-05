import { Component, createEffect, createMemo, createSignal, For, JSX } from 'solid-js';
import { Item } from '../components/smart_env/items';
import { Location } from '../components/smart_env/locations';
import { Position, Viewport } from '../utils/layout';
import { current_location } from './LocationView';

class Decoration {
    /**
     * Container for decoration images that can be placed on fields.
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
    static readonly FIELD_GAP = 12

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

function createFields(fields: Field[][]): JSX.Element {
    /** Fields to be allocated given location view size. */
    
    return <For each={fields}>
                { (row_fields: Field[], i) => 
                <For each={row_fields}>
                    {(field: Field, j) => 
                    <div class="field">i: {i()}, j: {j()} </div>
                    }
                </For> }
            </For>
}

function createFieldMatrix(no_rows: number, no_columns: number): Field[][] {
    /**
     * Initializes field matrix with GridView.
     * grid column and row are 50px x 50px (FIELD_SIZE)
     */
    console.log("createFieldMatrix - no rows: ", no_rows, " columns: ", no_columns)
    var fields: Field[][] = []
    for(let i=0; i<no_columns; ++i) {
        fields[i] = []
        for(let j=0; j<no_rows; ++j) {
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
}

const ItemDisplay: Component<ItemDisplayProps> = ( props ) => {
    /**
     * View for items inside the locationView.
     * Displays items across the location on specified places in GridView
     */

    /** items to be refreshed when changing. */
    const [items, setItems] = createSignal(current_location().items)

    /** Field size adjusted by size of location. */
    const [field_size, set_field_size] = createSignal(Field.FIELD_SIZE)

    /** Amount of fields to be displayed. */
    const [row_field_no, set_row_field_no] = createSignal(current_location().width * Location.FIELDS_PER_UNIT)
    const [column_field_no, set_column_field_no] = createSignal(current_location().height * Location.FIELDS_PER_UNIT)

    const fields = createMemo(() => {
        return createFieldMatrix(row_field_no(), column_field_no());
    })

    function on_location_change(location: Location) {
        set_row_field_no(location.width * Location.FIELDS_PER_UNIT);
        set_column_field_no(location.height * Location.FIELDS_PER_UNIT)
        set_field_size((1/(1.2^location.width)) * Field.FIELD_SIZE);
    }

    createEffect(() => {
        /** Location changed. */
        console.log("viewport: ", props.viewport);
        on_location_change(current_location())
    })

    return (
        <div id="itemDisplay" class="m-auto bg-blue" 
        style={{
        'aspect-ratio': `${ current_location().width / current_location().height}`,
        'display': 'grid', 
        'grid-template-columns': `repeat(${ row_field_no() }, ${ field_size() }px`, 
        'grid-template-rows': `repeat(${ column_field_no() }, ${ field_size() }px`,
        'gap': `${ Field.FIELD_GAP }px ${ Field.FIELD_GAP }px`}}>
            { createFields( fields() ) }
        </div>
    )
}

export default ItemDisplay;