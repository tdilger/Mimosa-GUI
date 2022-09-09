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

export namespace ItemOption {
    /**
     * Default options.
     * To be extended dynamically
     * name convention: starting with "item_option_"
     */

    let item_option_img_path = "src/assets/icons/google-material-icons/"

    const SWITCH: ItemOption = new ItemOption("Licht anschalten", item_option_img_path + "", () => {})
    const CHANGE_BRIGHTNESS: ItemOption = new ItemOption("Helligkeit einstellen", item_option_img_path + "BrightnessOption.svg", () => {})
    const CHANGE_COLOR: ItemOption = new ItemOption("Farbe einstellen", item_option_img_path + "", () => {})
 
    /**
     * Default option assignment to items.
     * To be extended dynamically
     */
    export const LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS]
    export const COLORABLE_LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS, CHANGE_COLOR]
    export const PLUG_OPTIONS: ItemOption[] = [SWITCH]
}

