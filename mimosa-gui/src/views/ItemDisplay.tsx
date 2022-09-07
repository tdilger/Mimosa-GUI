import { Component, createEffect, createMemo, createSignal } from 'solid-js';
import { Location } from '../components/smart_env/locations';
import { createFieldMatrix, createFields, Field } from './fields';
import { Viewport } from '../utils/layout';
import { current_location } from './LocationView';

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

    /** Create new fieldMatrix when row or column no changes. */
    const fields = createMemo(() => {
        return createFieldMatrix(row_field_no(), column_field_no());
    })

    /** Refresh row and column no. and scale field size according to location size. */
    function on_location_change(location: Location) {
        set_row_field_no(location.height * Location.FIELDS_PER_UNIT)
        set_column_field_no(location.width * Location.FIELDS_PER_UNIT)
        set_field_size( 100 / row_field_no() )
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
        'grid-template-rows': `repeat(${ row_field_no() }, calc(100% / ${ row_field_no() } - (2 * ${ Field.FIELD_GAP }px)))`, 
        'grid-template-columns': `repeat(${ column_field_no() }, calc(100% / ${ column_field_no() } - (2 * ${ Field.FIELD_GAP }px)))`,
        'gap': `${ Field.FIELD_GAP }px`}}>
            { createFields( fields() ) }
        </div>
    )
}

export default ItemDisplay;