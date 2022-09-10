import { Component, createSignal, Match, Suspense, Switch } from 'solid-js';
import { settings_overlay_on } from '../menus/settings_menu/SettingsMenu';
import ItemMenu from './menus/ItemMenu';
import LocationMenu from './menus/LocationMenu';

export const [locationMenuOpen, setLocationMenuOpen] = createSignal(false)


const Navigation: Component = () => {
    /**
     * Regular Menu with locationCard and itemCards.
     * Switches between menus when clicking on locationCard
     * Use of Suspense i.o. to reveal async content needs to be loaded
     */
    return (
        <nav id="mainNavigation" class="z-30 relative w-full px-10">
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
            <div id="settings-icon" class="absolute right-6 items-center cursor-pointer outline-dashed" 
            onclick={ settings_overlay_on }>
                <img src="src/assets/elements/settings.svg" alt="Einstellungen" />
            </div>
        </nav>
    )
}

export default Navigation;