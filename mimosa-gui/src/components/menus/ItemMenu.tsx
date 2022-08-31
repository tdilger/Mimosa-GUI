import { Component, For } from 'solid-js';
import { current_location } from '../../pages/LocationView';
import { Item, ItemCard } from '../smart_env/items';
import { Location, LocationCard } from '../smart_env/locations';


/** According to https://www.solidjs.com/tutorial/bindings_spreads */
function ItemMenu() {
    console.log("item menu, current location: ", location)
    return (
        <>
            <ul id="itemMenu" class="w-full relative">
                <li><LocationCard location={ current_location() } /></li>
                <For each={ current_location().items }>
                    { (item: [Item, number]) => <li><ItemCard item={ item[0] } /></li> }
                </For>
            </ul>
        </>
    )
}

export default ItemMenu;