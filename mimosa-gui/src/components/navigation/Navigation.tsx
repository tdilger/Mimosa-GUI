import { Component, createEffect, createSignal, For, Match, Suspense, Switch } from 'solid-js';
import { current_location, items, locations } from '../../App';
import ItemMenu from './ItemMenu';
import LocationMenu from './LocationMenu';
import './navigation.scss'

export const [locationMenuOpen, setLocationMenuOpen] = createSignal(false)
createEffect(() => {
    if (locationMenuOpen()) {
        /** TODO: open Menu */
        return
    }
    /** TODO: close Menu */
})

const Navigation: Component = () => {
    /**
     * Regular Menu with locationCard and itemCards.
     * Switches between menus when clicking on locationCard
     * Use of Suspense i.o. to reveal async content needs to be loaded
     */
    console.log("locations: ", locations())
    return (
        <nav id="mainNavigation" class="z-10 relative h-32 w-full px-10">
            <Suspense fallback={<div class="loader">Lädt...</div>}>
                <Switch fallback={<ItemMenu location={ current_location() } />}>
                    <Match when={ locationMenuOpen() }>
                        <LocationMenu locations={ locations() } />
                    </Match>
                    <Match when={ !locationMenuOpen() }>
                        <ItemMenu location={ current_location() }/>
                    </Match>
                </Switch>
            </Suspense>
        </nav>
    )
}

export default Navigation;