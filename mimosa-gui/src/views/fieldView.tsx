import IconButton from "@suid/material/IconButton"
import { Component, For, JSX } from "solid-js"
import Item from "../components/smart_env/items"
import { Decoration, Field } from "./fields"
import { set_clicked_item } from "./ItemDisplay"

interface ItemOnFieldProps {
    item: Item
}

const ItemOnField: Component<ItemOnFieldProps> = ( props ) => {
    let img_alt: string = props.item.type + " " + props.item.name
    
    return (
        <IconButton onClick={ () => set_clicked_item(props.item) } 
            sx={{width: '60%', height: '60%', padding: '10% 10%'}} >
            <img src={props.item.img} class="w-full h-full" alt={img_alt} />
        </IconButton>
    )
}

interface FieldViewProps {
    field: Field
}

const FieldView: Component<FieldViewProps> = ( props ) => {
    return (
        <div class="field">
            <div class="fieldContent">
                { () => {
                    // console.log("Field ", field, " object on: ", field.object_on as Item)
                    if (props.field.object_on instanceof Item) {
                        let item_on: Item = props.field.object_on as Item
                        return <ItemOnField item={ item_on } />
                    } else if(props.field.object_on instanceof Decoration) {
                        let deco_on: Decoration = props.field.object_on as Decoration
                        let img_alt: string = deco_on.name
                        return <img src={deco_on.img} class="w-full" style="padding: 0 30%" alt={img_alt} />
                    }
                }}
            </div>
        </div>
    )
}

export function createFields(fields: Field[][]): JSX.Element {
    /** 
     * JSX representation of the field matrix. 
     * @param fields: field matrix with objects (items and decorations) on
     * */
    
    return (
        <For each={fields}>
            { (row_fields: Field[], i) => 
            <For each={row_fields}>
                {(field: Field, j) => 
                <FieldView field={field} />
                }
            </For> }
        </For>
    )
}