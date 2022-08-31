import { Component, For } from 'solid-js';
import { Location, LocationCard } from '../smart_env/locations';
import './navigation.scss'

interface LocationMenuProps {
    locations: Location[]
}

function LocationMenu<LocationMenuProps> ( { locations } ) {
    /**
     * LocationMenu
     */
    console.log("location menu, locations: ", locations)
    return (
        <ul id="locationMenu" class="w-full relative">
            <For each={ locations }>
                { (location: Location) => <li><LocationCard location={ location } /></li> }
            </For>
            <li class="absolute right-0 items-center">
                <p>Settings</p> 
            </li>
        </ul>
    )
}

export default LocationMenu;