import { Component, createSignal, Match, Suspense, Switch } from 'solid-js';
import { settings_overlay_on } from '../settings/SettingsMenu';
import ItemMenu from './menus/ItemMenu';
import LocationMenu from './menus/LocationMenu';

import settingsIcon from "../../assets/elements/settings.svg"

export const [locationMenuOpen, setLocationMenuOpen] = createSignal(false)


const Navigation: Component = () => {
    /**
     * Regular Menu with locationCard and itemCards.
     * Switches between menus when clicking on locationCard
     * Use of Suspense i.o. to reveal async content needs to be loaded
     */
    return (
        <nav id="mainNavigation" class="z-30 relative w-full px-10 bg-secondary">
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
            <div id="settings-icon" class="absolute right-6 items-center cursor-pointer" 
            onclick={ settings_overlay_on }>
                <img src={ settingsIcon } alt="Einstellungen" />
            </div>
        </nav>
    )
}

export default Navigation;