import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import IconButton from "@suid/material/IconButton"
import Typography from "@suid/material/Typography"
import { Component, createSignal, For } from "solid-js"
import { clicked_item, set_clicked_item } from "../../views/ItemDisplay"
import { ItemOption } from "./ItemOptions"
import { Item } from "./items"

export const [selected_option, set_selected_option]: [() => ItemOption, (option: ItemOption) => void] = createSignal(null)

function hide_item_option_backdrop() {
    /**
     * Hides backdrop menu displaying options of clicked item on field.
     */
    console.log("hide item option backdrop")
    let item_option_backdrop = document.getElementById("item-option-backdrop-card")
    item_option_backdrop.style.display = "none"
}

function hide_specific_item_option_backdrop() {
    /**
     * Hides backdrop menu displaying a selected item option (e.g. brightness adjustment).
     */
     console.log("hide item specific option backdrop")
     let item_specific_option_backdrop = document.getElementById("item-specific-option-backdrop-card")
     item_specific_option_backdrop.style.display = "none"
}

export function item_options_overlay_on() {
    /**
     * Display overlay with either item options menu or specific item option selection settings.
     */
    let item_option_backdrop = document.getElementById("item-option-backdrop")
    let item_option_backdrop_card = document.getElementById("item-option-backdrop-card")
    let item_specific_option_backdrop_card = document.getElementById("item-specific-option-backdrop-card")
    console.log("clicked item: ", clicked_item(), " selected option: ", selected_option())
    item_option_backdrop.style.display = "block"
    if (clicked_item() != null) {
        item_option_backdrop_card.style.display = "block"
        if (selected_option() != null) {
            hide_item_option_backdrop()
            item_specific_option_backdrop_card.style.display = "block"
        }
    }
}

export function item_options_overlay_off() {
    /**
     * Closes overlay and hides all menus.
     */
    let item_option_backdrop = document.getElementById("item-option-backdrop")
    console.log("hide item options overlay")
    item_option_backdrop.style.display = "none"
    console.log(document.getElementById("item-option-backdrop"))
    set_clicked_item(null)
    set_selected_option(null)
    hide_item_option_backdrop()
    hide_specific_item_option_backdrop()
}

export const ItemOptionOverlay: Component = () => {
    /**
     * Overlay when item on field has been clicked.
     * Opens item options or, when option in menu selected, specific option settings in ItemSpecificOptionBackdrop
     */
    return (
        <div id="item-option-backdrop" class="z-30 fixed top-0 bottom-0 left-0 right-0 w-full h-full">
            <div id="overlay-background" class="w-full h-full z-10" onclick={ item_options_overlay_off }/>
            <ItemOptionBackdrop item={ clicked_item() } />
            <ItemSpecificOptionBackdrop item_option={ selected_option() } />
        </div>
    )
}

export default ItemOptionOverlay

function list_items(): () => {} {
    /**
     * Displays all item options.
     * If only one option is available, the option action has been triggered before and backdrop not displayed
     */
    return
}

interface ItemOptionBackdropProps {
    item: Item
}

const ItemOptionBackdrop: Component<ItemOptionBackdropProps> = ( props ) => {
    /**
     * Displays options of clicked item on field.
     */
    return (
        <Card id="item-option-backdrop-card">
            <CardContent sx={{ flex: "1 0 auto" }}>
                <div class="title text-center">
                <Typography variant="h3">
                    { props.item?.type + " " + props.item?.name }
                </Typography>
                </div>
                <div class="items-center justify-center m-auto flex">
                    {
                        () => {return <div>Test</div>}
                    }
                    <For each={ props.item?.options.reverse() }>{
                        (option: ItemOption) => 
                            <IconButton sx={{marginX: '10px'}} action={ option?.action() }>
                                <img src={ option.symbol_src } alt={ option.name } />
                            </IconButton>
                        }
                    </For>
                </div>
            </CardContent>
        </Card>
    )
}

interface ItemSpecificOptionBackdropProps {
    item_option: ItemOption
}

const ItemSpecificOptionBackdrop: Component<ItemSpecificOptionBackdropProps> = ( props ) => {
    /**
     * A specific ItemOption to regulate is displayed when clicked on an option in ItemOptionBackdrop.
     * Shows e.g. light color regulation by color picker tool
     */

    return (
        <Card id="item-specific-option-backdrop-card">
            <CardContent sx={{ flex: "1 0 auto" }}>
                <p>Option:</p>
                { props.item_option?.name }
            </CardContent>
        </Card>
    )
}