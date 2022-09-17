import { Component, For } from 'solid-js';
import { locations } from '../../../views/LocationView';
import { LocationCard } from '../LocationCard';
import { Location } from '../../smart_env/locations';


const LocationMenu: Component = () => {
    /**
     * LocationMenu displaying location cards.
     */
    return (
        <ul id="locationMenu" class="relative py-2 rounded-lg bg-secondary-dark">
            <For each={ locations() }>
                { (location: Location) => <li><LocationCard location={ location } /></li> }
            </For>
        </ul>
    )
}

export default LocationMenu;