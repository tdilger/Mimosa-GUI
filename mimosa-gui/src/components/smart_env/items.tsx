import { Component, JSX } from "solid-js"

export type ItemType = {
    id: string
    name: string
    img: string
}

export interface ItemProps {
    item: ItemType
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
        <div class="itemCard text-center align-middle">
            <p>{ item.name }</p>
        </div>
    )
}

export class Item {
    icon: JSX.Element
    itemCard: JSX.Element

    constructor (icon: JSX.Element, itemCard: JSX.Element) {
        this.icon = icon
        this.itemCard = itemCard
    }
}

const light: ItemType = {id:"1", name:"Licht", img:""}
const plug: ItemType = {id:"2", name:"Steckdose", img:""}
const lightIcon = <ItemIcon item={ light }/>
const lightCard = <ItemCard item={ light }/>
const plugIcon = <ItemIcon item={ plug }/>
const plugCard = <ItemCard item={ plug }/>

/**
 * TODO: Create items dynamically
 */
 export const DEFAULT_ITEMS: Item[] = [
    new Item(lightIcon, lightCard),
    new Item(plugIcon, plugCard)
 ]