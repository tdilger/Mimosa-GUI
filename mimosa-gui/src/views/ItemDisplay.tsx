import { Component, createEffect, createSignal } from 'solid-js';
import { createFields, Field } from './fields';
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

    /** Amount of fields to be displayed. */
    const [row_field_no, set_row_field_no] = createSignal()
    const [column_field_no, set_column_field_no] = createSignal()
    

    /** Refresh row and column no. and scale field size according to location size.
    function on_location_change(location: Location) {
        set_row_field_no(location.height * Location.FIELDS_PER_UNIT)
        set_column_field_no(location.width * Location.FIELDS_PER_UNIT)
    }
    */

    /** Location changed. 
    createEffect(() => {
        
        console.log("viewport: ", props.viewport);
        on_location_change(current_location())
    })
    */
    createEffect(() => {
        /** Change row and column for grid template when location changes. */
        set_row_field_no(current_location().fields.length)
        set_column_field_no(current_location().fields[0].length)
        console.log("row fields: ", row_field_no, ", column fields: ", column_field_no)
        console.log(current_location().name, " fields: ", current_location().fields)
    })
    
    return (
        <div id="itemDisplay" class="m-auto bg-blue" 
        style={{
        'aspect-ratio': `${ current_location().width / current_location().height}`,
        'display': 'grid', 
        'grid-template-rows': `repeat(${ row_field_no() }, calc(100% / ${ row_field_no() } - (2 * ${ Field.FIELD_GAP }px)))`, 
        'grid-template-columns': `repeat(${ column_field_no() }, calc(100% / ${ column_field_no() } - (2 * ${ Field.FIELD_GAP }px)))`,
        'gap': `${ Field.FIELD_GAP }px`}}>
            { createFields(current_location().fields) }
        </div>
    )
}

export default ItemDisplay;