
export interface Item {
    /**
     * Container for basic item properties.
     */
    id: string
    name: string
    img: string
}

export class Light<Item> {
    /**
     * Light item that can be switched on / off.
     */
    enabled: boolean
    color: String
}

export class ItemOption {
    /**
     * Light item that can be switched on / off.
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

let light_options: ItemOption[] = [new ItemOption("", "", () => {})]

/**
 * Default items.
 * To be extended dynamically
 */
export const item_light: Item = {id:"1", name:"Licht", img:""}
export const item_plug: Item = {id:"2", name:"Steckdose", img:""}
/**
 * Expendable item list for the application
 * TODO: Create items dynamically
 */
 export const DEFAULT_ITEMS: Item[] = [item_light, item_plug]