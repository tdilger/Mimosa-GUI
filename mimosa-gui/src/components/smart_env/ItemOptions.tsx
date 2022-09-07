export class ItemOption {
    /**
     * Option that can be executed by an item.
     * @param name: option name, e.g. "switch"
     * @param 
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
    const SWITCH: ItemOption = new ItemOption("Licht anschalten", "", () => {})
    const CHANGE_BRIGHTNESS: ItemOption = new ItemOption("Helligkeit einstellen", "", () => {})
    const CHANGE_COLOR: ItemOption = new ItemOption("Farbe einstellen", "", () => {})
 
    /**
     * Default option assignment to items.
     * To be extended dynamically
     */
    export const LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS]
    export const COLORABLE_LIGHT_OPTIONS: ItemOption[] = [SWITCH, CHANGE_BRIGHTNESS, CHANGE_COLOR]
    export const PLUG_OPTIONS: ItemOption[] = [SWITCH]
}

