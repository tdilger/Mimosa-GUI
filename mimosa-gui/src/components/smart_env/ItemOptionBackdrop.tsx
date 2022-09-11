import Backdrop from "@suid/material/Backdrop"
import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import IconButton from "@suid/material/IconButton"
import { Component, createSignal, For } from "solid-js"
import { theme } from "../../App"
import { clicked_item, set_clicked_item } from "../../views/ItemDisplay"
import { ItemOption } from "./ItemOptions"

export const [selected_option, set_selected_option]: [() => ItemOption, (option: ItemOption) => void] = createSignal()

export function item_options_overlay_on() {
    document.getElementById("item-option-backdrop").style.display = "block";
}

export function item_options_overlay_off() {
    document.getElementById("item-option-backdrop").style.display = "none";
}

function ItemOptionBackdrop() {
    return (
        <div id="item-option-backdrop" class="z-30 absolute top-0 bottom-0 left-0 right-0 w-full h-full">
            <div id="overlay-background" class="w-full h-full z-10" onclick={ item_options_overlay_off }/>
            <Card id="item-option-backdrop-card" class="center flex-row" sx={{ zIndex: 20, minWidth: 275 }}>
                <CardContent>
                    <For each={ clicked_item()?.options }>{
                        (option: ItemOption) => 
                            <IconButton sx={{marginX: '10px'}} action={ option.action() }>
                                <p>Test</p>
                                <img src={ option.symbol_src } alt={ option.name } />
                            </IconButton>
                        }
                    </For>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemOptionBackdrop

export const ItemSpecificOptionBackdrop: Component = () => {
    /**
     * A specific ItemOption to regulate is displayed when clicked on an option in ItemOptionBackdrop.
     * Shows e.g. light color regulation by color picker tool
     */

    return <Backdrop id="item-option-specific-backdrop" class="flex-row" sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
            open={selected_option() != null}
            onClick={() => set_selected_option(null)}>
                { () => { if (selected_option() !== undefined) {return selected_option().name} } }
            </Backdrop>
}