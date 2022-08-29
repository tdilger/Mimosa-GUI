import { Component, For } from "solid-js"
import { ItemType } from "../components/smart_env/items"
import { LocationProps } from "../components/smart_env/locations"

const LocationView: Component<LocationProps> = ({ location }) => {
    /**
     * View of location which is displayed in center.
     */
    return (
        <div id="locationView" class="text-center">
            <h3 class="text-3xl text-green-800 text-center py-10">{ location.name }</h3>
            <div class="outline-dashed w-full h-auto">
                <For each={ location.items }>
                    { (item: ItemType) => <p>{ item.name }</p>}
                </For>
            </div>
        </div>
    )
}