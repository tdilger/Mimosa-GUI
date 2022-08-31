import { Component, For } from 'solid-js';
import { locations } from '../../pages/LocationView';
import { Location, LocationCard } from '../smart_env/locations';

interface LocationMenuProps {
    locations: Location[]
}

function LocationMenu () {
    /**
     * LocationMenu
     */
    console.log("location menu, locations: ", (locations()))
    return (
        <ul id="locationMenu" class="w-full relative">
            <For each={ locations() }>
                { (location: Location) => <li><LocationCard location={ location } /></li> }
            </For>
        </ul>
    )
}

export default LocationMenu;