import { Component, For } from 'solid-js';
import { Item, ItemCard } from '../smart_env/items';
import { Location, LocationCard } from '../smart_env/locations';


/** According to https://www.solidjs.com/tutorial/bindings_spreads */
function ItemMenu(location) {
    console.log("item menu, current location: ", location)
    return (
        <>
            <ul id="itemMenu" class="w-full relative">
                <li><LocationCard location={ location } /></li>
                <For each={ location.items }>
                    { (item: Item) => <li><ItemCard item={ item } /></li> }
                </For>
                <li class="absolute right-0 items-center">
                    <p>Settings</p> 
                </li>
            </ul>
        </>
    )
}

export default ItemMenu;