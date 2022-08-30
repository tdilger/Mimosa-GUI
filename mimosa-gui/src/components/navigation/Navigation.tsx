import { Component, For } from 'solid-js';
import { Item, ItemCard } from '../smart_env/items';
import { Location, LocationCard } from '../smart_env/locations';
import './navigation.scss'

interface NavMenuCard {
    location: Location
    items: Item[]
}

const Navigation: Component<NavMenuCard> = ( {location, items} ) => {
    /**
     * Regular Menu with locationCard and itemCards
     */
    return (
        <nav class="z-10 relative h-32 w-full px-10">
            <ul class="w-full relative">
                <li><LocationCard location={ location } /></li>
                <For each={ items }>
                    { (item: Item) => <li><ItemCard item={ item } /></li> }
                </For>
                <li class="absolute right-0 items-center">
                    <p>Settings</p> 
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;