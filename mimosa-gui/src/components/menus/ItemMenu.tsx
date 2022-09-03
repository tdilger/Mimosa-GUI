import { Component, For } from 'solid-js';
import { current_location } from '../../views/LocationView';
import { Item } from '../smart_env/items';
import { ItemCard } from '../smart_env/ItemCard'
import { LocationCard } from '../smart_env/LocationCard';


export const ItemMenu: Component = () => {
    /**
     * Menu displaying itemCards in current location.
     * ItemCards are clickable with a badge displaying the amount of the items in location
     * With the ItemMenu a user can select various items at once
     */
    return (
        <>
            <ul id="itemMenu" class="w-full relative">
                <li><LocationCard location={ current_location() } /></li>
                <For each={ current_location().items }>
                    { (item: [Item, number]) => <li><ItemCard item={ item[0] } amount={ item[1] } /></li> }
                </For>
            </ul>
        </>
    )
}

export default ItemMenu;