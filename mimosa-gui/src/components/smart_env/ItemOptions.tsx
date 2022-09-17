import { ItemActions } from "./itemActions"

export class ItemOption {
    /**
     * Option that can be executed by an item.
     * @param name: option name, e.g. "switch"
     * @param symbol_src: image symbol of item option
     * @param action: function to call when clicking the item option
     */

    name: string
    symbol_src?: string
    action: (item) => any

    constructor(name: string, action: (item) => any, symbol_src?: string) {
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

    let item_option_img_path = "src/assets/icons/google-material-icons/"

    export const NAMES = {
        switch: "Licht anschalten",
        change_brightness: "Helligkeit einstellen",
        change_color: "Farbe einstellen"
    }
    /**
     * Item Options.
     */
    const SWITCH: ItemOption = new ItemOption(NAMES.switch, ItemActions.ACTIONS.switch)
    const CHANGE_BRIGHTNESS: ItemOption = new ItemOption(NAMES.change_brightness, ItemActions.ACTIONS.change_brightness, item_option_img_path + "BrightnessOption.svg")
    const CHANGE_COLOR: ItemOption = new ItemOption(NAMES.change_color, ItemActions.ACTIONS.change_color, item_option_img_path + "ColorPalette.svg")
 
    /**
     * Default option assignment to items.
     * To be extended dynamically
     */
    export const LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS]
    export const COLORABLE_LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS, CHANGE_COLOR]
    export const PLUG_OPTIONS: ItemOption[] = [SWITCH]
}