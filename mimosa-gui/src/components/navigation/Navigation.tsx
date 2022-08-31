import { Component, createEffect, createSignal, For, Match, Suspense, Switch } from 'solid-js';
import { locations } from '../../pages/LocationView';
import ItemMenu from '../menus/ItemMenu';
import LocationMenu from '../menus/LocationMenu';
import { settings_overlay_on } from '../menus/SettingsMenu';

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
        <nav id="mainNavigation" class="z-20 relative w-full px-10">
            <Suspense fallback={<div class="loader">Lädt...</div>}>
                <Switch fallback={<ItemMenu />}>
                    <Match when={ locationMenuOpen() }>
                        <LocationMenu />
                    </Match>
                    <Match when={ !locationMenuOpen() }>
                        <ItemMenu />
                    </Match>
                </Switch>
            </Suspense>
            <div id="settings-icon" class="absolute right-6 items-center border-dashed border-2 cursor-pointer" onclick={ settings_overlay_on }>
                <p>Settings</p> 
            </div>
        </nav>
    )
}

export default Navigation;