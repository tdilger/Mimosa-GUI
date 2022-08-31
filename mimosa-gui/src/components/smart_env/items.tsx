import { Component, JSX } from "solid-js"
import { locationMenuOpen, setLocationMenuOpen } from "../navigation/Navigation"

export class Item {
    id: string
    name: string
    img: string
}

export interface ItemProps {
    item: Item
}
  
export const ItemIcon: Component<ItemProps> = ({ item }) => {
    /**
     * Display light icon.
     */
    return (
        <div>ItemIcon</div>
    )
}

export const ItemCard: Component<ItemProps> = ({ item }) => {
    /**
     * Card to display location in LocationMenu.
     */
    let img_alt: string = "Symbol " + item.name
    return (
        <button class="card itemCard" 
        onclick={ () => { setLocationMenuOpen(false) } }>
            <div class="cardContent">
                <img src="$item.img" alt={ img_alt } />
                <p>{ item.name }</p>
            </div>
        </button>
    )
}

export const item_light: Item = {id:"1", name:"Licht", img:""}
export const item_plug: Item = {id:"2", name:"Steckdose", img:""}
/**
 * TODO: Create items dynamically
 */
 export const DEFAULT_ITEMS: Item[] = [item_light, item_plug]