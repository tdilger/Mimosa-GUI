import { set_selected_option } from "../../views/ItemDisplay"
import { show_item_clicked_modal } from "./ItemClickedModal"
import { show_item_option_selection_modal } from "./ItemOptionSelectionModal"

export class ItemOption {
    /**
     * Option that can be executed by an item.
     * @param name: option name, e.g. "switch"
     * @param symbol_src: image symbol of item option
     * @param action: function to call when clicking the item option
     */

    name: string
    symbol_src: string
    action: Function

    constructor(name: string, symbol_src: string, action: Function) {
        this.name = name
        this.symbol_src = symbol_src
        this.action = action
    }
}

export default ItemOption

export namespace ItemOption {
    /**
     * Default options.
     * To be extended dynamically
     * name convention: starting with "item_option_"
     */

    /** Functions when setting an option with ItemOptionBackdrop. */
    function handle_option_switch() {
        console.log("handle switch")
    }
    
    function handle_option_change_brightness() {
        console.log("handle change brightness")
    }
    
    function handle_option_change_color() {
        console.log("handle change color")
        set_selected_option(this)
    }

    /** Mapper for item options. */
    export const handle_option = {
        switch: handle_option_switch,
        change_brightness: handle_option_change_brightness,
        change_color: handle_option_change_color
    }

    let item_option_img_path = "src/assets/icons/google-material-icons/"

    const SWITCH: ItemOption = new ItemOption("Licht anschalten", item_option_img_path + "", handle_option_switch)
    const CHANGE_BRIGHTNESS: ItemOption = new ItemOption("Helligkeit einstellen", item_option_img_path + "BrightnessOption.svg", handle_option_change_brightness)
    const CHANGE_COLOR: ItemOption = new ItemOption("Farbe einstellen", item_option_img_path + "", handle_option_change_color)
 
    /**
     * Default option assignment to items.
     * To be extended dynamically
     */
    export const LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS]
    export const COLORABLE_LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS, CHANGE_COLOR]
    export const PLUG_OPTIONS: ItemOption[] = [SWITCH]
}