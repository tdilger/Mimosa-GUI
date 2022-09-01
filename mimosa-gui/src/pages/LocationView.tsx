import { Component, createEffect, createSignal, For } from "solid-js"
import { DEFAULT_ITEMS, Item } from "../components/smart_env/items"
import { DEFAULT_LOCATIONS } from "../components/smart_env/locations"

export const [locations, setLocations] = createSignal(DEFAULT_LOCATIONS)
export const [items, setItems] = createSignal(DEFAULT_ITEMS)

export const [current_location, setCurrentLocation] = createSignal(locations()[0])

createEffect(async () => {
    /**
     * fetch data from smart env api to change when locations change.
     */
    const res = await fetch('')
    setLocations(await res.json())
    })
    
    createEffect(() => {
        /**
         * Side-effect when current location changes.
         */
    console.log("current location is: ", current_location())
    })

export const LocationView: Component = () => {
    /**
     * View of location which is displayed in center.
     * Changed by LocationMenu by switching location via LocationCard
     */
    return (
        <div id="locationView" class="text-center">
            <h2 class="text-3xl py-5">{ current_location().name }</h2>
            <div class="outline-dashed w-full h-auto">
                <p>Location Image</p>
                <For each={ current_location().items }>
                    { (item: [Item, number]) => <p>{ item[0].name }</p>}
                </For>
            </div>
        </div>
    )
}