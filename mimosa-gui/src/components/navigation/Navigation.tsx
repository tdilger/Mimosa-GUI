import { Component, createEffect, createSignal, For } from 'solid-js';
import { current_location, items, locations } from '../../App';
import { Item, ItemCard } from '../smart_env/items';
import { Location, LocationCard } from '../smart_env/locations';
import ItemMenu from './ItemMenu';
import LocationMenu from './LocationMenu';
import './navigation.scss'

const navigation: HTMLElement = document.getElementById('mainNavigation')
const locationMenu: HTMLElement = document.getElementById('locationMenu')
const itemMenu = document.getElementById('itemMenu')

const [menu, setMenu] = createSignal(ItemMenu.name)
createEffect(() => {
    let locationMenuOpen = (menu.name == LocationMenu.name)
    if (locationMenuOpen) {
        setMenu(ItemMenu.name)
        locationMenu.style.visibility = "hidden"
        itemMenu.style.visibility = "visible"
        return
    }
    setMenu(LocationMenu.name)
    locationMenu.style.visibility = "visible"
    itemMenu.style.visibility = "hidden"
})

const Navigation: Component = () => {
    /**
     * Regular Menu with locationCard and itemCards
     */
    return (
        <nav id="mainNavigation" class="z-10 relative h-32 w-full px-10">
            <ItemMenu location={ current_location } items={ items() }/>
            <LocationMenu locations={ locations() } />
        </nav>
    )
}

export default Navigation;