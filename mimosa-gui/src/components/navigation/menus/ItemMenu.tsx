import { Component, For } from 'solid-js';
import { current_location } from '../../../views/LocationView';
import { ItemCard } from '../ItemCard';
import { Item } from '../../smart_env/items';
import { LocationCard } from '../LocationCard';


export const ItemMenu: Component = () => {
    /**
     * Menu displaying itemCards in current location.
     * ItemCards are clickable with a badge displaying the amount of the items in location
     * With the ItemMenu a user can select various items at once
     */
    console.log("location items: ", current_location().items)
    return (
        <>
            <ul id="itemMenu" class="w-full relative">
                <li><LocationCard location={ current_location() } /></li>
                <For each={ current_location().items }>
                    { (item_list: Item[]) => <li><ItemCard item_type={ item_list[0].type } items={ item_list } /></li> }
                </For>
            </ul>
        </>
    )
}

export default ItemMenu;