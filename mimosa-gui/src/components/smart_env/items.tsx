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
    return (
        <button class="card itemCard" 
        onclick={ () => { setLocationMenuOpen(!locationMenuOpen()) } }>
            <div class="cardContent">
                <p>item menu</p>
                <p>{ item.name }</p>
            </div>
        </button>
    )
}

const light: Item = {id:"1", name:"Licht", img:""}
const plug: Item = {id:"2", name:"Steckdose", img:""}
/**
 * TODO: Create items dynamically
 */
 export const DEFAULT_ITEMS: Item[] = [light, plug]