import { Component, For } from "solid-js"
import { Item } from "../components/smart_env/items"
import { LocationProps } from "../components/smart_env/locations"

export const LocationView: Component<LocationProps> = ({ location }) => {
    /**
     * View of location which is displayed in center.
     * Changed by LocationMenu by switching location via LocationCard
     */
    return (
        <div id="locationView" class="text-center">
            <h2 class="text-3xl text-green-800 py-5">{ location.name }</h2>
            <div class="outline-dashed w-full h-auto">
                <p>Location Image</p>
                <For each={ location.items }>
                    { (item: Item) => <p>{ item.name }</p>}
                </For>
            </div>
        </div>
    )
}