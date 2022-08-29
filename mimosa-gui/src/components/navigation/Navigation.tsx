import { NavLink } from 'solid-app-router';
import { Component, For } from 'solid-js';
import { Item, ItemCard } from '../smart_env/items';
import { Location } from '../smart_env/locations';
import './navigation.scss'

interface NavMenuCard {
    location: Location
    items: Item[]
}

const Navigation: Component<NavMenuCard> = ({ location, items }) => {
    /**
     * Regular Menu with locationCard and itemCards
     */
    return (
        <div class="nav flex relative items-center h-32 w-full bg-slate-500 px-4">
            <ul>
                <li><NavLink href="/">{ location.card }</NavLink></li>
                <For each={items}>
                    { (item: Item) => item.itemCard }
                </For>
                <li><NavLink href="">Item</NavLink></li>
            </ul>
            <div class="absolute right-0 mx-20">
               Settings 
            </div>
        </div>
    )
}

export default Navigation;