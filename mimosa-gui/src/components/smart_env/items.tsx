
export class Item {
    /**
     * Container for basic item properties.
     */
    id: string
    name: string
    img: string
}

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