
export class Item {
    /**
     * Container for basic item properties.
     */
    id: string
    name: string
    img: string
    options: ItemOption[]
}

export class Light implements Item {
    /**
     * Light item that can be switched on / off.
     */
    id: string
    name: string
    img: string
    options: ItemOption[]
    enabled: boolean
    color: String
}

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

/**
 * Default options.
 * To be extended dynamically
 * name convention: starting with "item_option_"
 */
let item_option_switch: ItemOption = new ItemOption("", "", () => {})
let item_option_brightness: ItemOption = new ItemOption("", "", () => {})
let item_option_color: ItemOption = new ItemOption("", "", () => {})

/**
 * Default option assignment to items.
 * To be extended dynamically
 */
let light_options: ItemOption[] = [item_option_switch, item_option_brightness, item_option_switch]
let plug_options: ItemOption[] = [item_option_switch]

/**
 * Default items.
 * To be extended dynamically
 */
export const item_light: Item = {id:"1", name:"Licht", img:"", options:light_options}
export const item_plug: Item = {id:"2", name:"Steckdose", img:"", options:plug_options}
/**
 * Expendable item list for the application
 * TODO: Create items dynamically
 */
 export const DEFAULT_ITEMS: Item[] = [item_light, item_plug]