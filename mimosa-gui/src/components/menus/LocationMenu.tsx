import { Component, For } from 'solid-js';
import { locations } from '../../views/LocationView';
import { Location } from '../smart_env/locations';
import { LocationCard } from '../smart_env/LocationCard';


const LocationMenu: Component = () => {
    /**
     * LocationMenu
     */
    return (
        <ul id="locationMenu" class="w-full relative">
            <For each={ locations() }>
                { (location: Location) => <li><LocationCard location={ location } /></li> }
            </For>
        </ul>
    )
}

export default LocationMenu;