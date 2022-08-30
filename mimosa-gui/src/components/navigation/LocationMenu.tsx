import { Component, For } from 'solid-js';
import { Location, LocationCard } from '../smart_env/locations';
import './navigation.scss'


const LocationMenu: Component = ( locations: Location[] ) => {
    /**
     * LocationMenu
     */
    return (
        <div class="nav flex relative items-center h-32 w-full bg-slate-500 px-4">
            <ul>
                <For each={ locations }>
                    {(location: Location) => <li><LocationCard location={ location } /></li>}
                </For>
            </ul>
            <div class="absolute right-0 mx-20">
               Settings 
            </div>
        </div>
    )
}

export default LocationMenu;