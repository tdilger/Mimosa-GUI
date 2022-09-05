import { Component, createEffect, createSignal } from "solid-js"
import { DEFAULT_ITEMS } from "../components/smart_env/items"
import { DEFAULT_LOCATIONS, Location } from "../components/smart_env/locations"
import ItemDisplay from "./ItemDisplay";

export const [locations, setLocations] = createSignal(DEFAULT_LOCATIONS)
export const [items, setItems] = createSignal(DEFAULT_ITEMS)

export const [current_location, setCurrentLocation] = createSignal(locations()[0])

/** width and height of LocationView, initialized with provisory numbers */
const [viewWidth, setViewWidth] = createSignal(10)
const [viewHeight, setViewHeight] = createSignal(10)

createEffect(async () => {
    /**
     * fetch data from smart env api to change when locations change.
     * API format:
     *  name: string
     *  width: number
     *  height: number
     *  items: [Item, number][]
     */
    const res = await fetch('')
    setLocations(await res.json())
})
    
createEffect(() => {
    /**
     * Side-effects when current location changes.
     * Change location field by size.
     * 
     * TODO: Probably replace with createMemo() ?
     */
    calcLocationSize(current_location())
})

function calcLocationSize(location: Location) {
    /**
     * Calculate location size to fit into LocationView.
     * @returns width and height in % of view
     * Either width or height should be 100% of the view and the other <=100% accordingly
     * height is intended to fill the view apart from width equally scaled is above 100%
     * In this case width is set to 100% of the view and height scaled accordingly
     */
    let max_view_width: number = 100
    let max_view_height: number = 100

    let scale_factor = max_view_height / location.height
    let view_width = location.width * scale_factor
    let view_height = max_view_height
    if (view_width > max_view_width) {
        scale_factor = max_view_width / location.width
        view_width = max_view_width
        view_height = location.height * scale_factor
    }

    setViewWidth(view_width)
    setViewHeight(view_height)
}

export const LocationView: Component = () => {
    /**
     * View of location which is displayed in center.
     * Changed by LocationMenu by switching location via LocationCard
     */
    return (
        <div id="locationView" class="z-0 relative text-center object-center items-center  m-auto overflow-hidden outline-dashed">
            <div id="locationDisplayName"><h2 class="text-3xl py-5">{ current_location().name }</h2></div>
            <div id="locationDisplay" class="relative m-auto outline-dashed" 
            style={{ 'aspect-ratio': `${ current_location().width / current_location().height }` }}>
                <ItemDisplay viewport={ {width:viewWidth(), height:viewHeight()} } />
            </div>
        </div>
    )
}