import { Component, createEffect, createSignal, For } from 'solid-js';
import { current_location, items, locations } from '../../App';
import ItemMenu from './ItemMenu';
import LocationMenu from './LocationMenu';
import './navigation.scss'

export const [locationMenuOpen, setLocationMenuOpen] = createSignal(false)
createEffect(() => {
    if (locationMenuOpen) {
        /** TODO: open Menu */
        return
    }
    /** TODO: close Menu */
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