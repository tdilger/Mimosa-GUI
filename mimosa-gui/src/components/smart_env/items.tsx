import { Position } from "../../utils/layout"
import { ItemOption } from "./ItemOptions"


export class Item {
    /**
     * Container for basic item properties.
     */
    readonly id: string
    readonly type: Item.Type
    name: string
    readonly img?: string
    readonly options?: ItemOption[]

    constructor(id: string, type: Item.Type, name: string) {
        this.id = id
        this.type = type
        this.name = name
        let item_map = Item.ItemMapper(type)
        this.img = item_map.img
        this.options = item_map.options
    }
}

export namespace Item {
    /**
    * Currently supported item types.
    */
    export const enum Type {
        light = "Lampe", 
        colorable_light = "Farbige Lampe", 
        plug = "Steckdose"
    }

    /**
     * Currently supported items.
     */
    const LIGHT = {type: Type.light, img: "", options: ItemOption.LIGHT_OPTIONS}
    const COLORABLE_LIGHT = {type: Type.colorable_light, img: "", options: ItemOption.COLORABLE_LIGHT_OPTIONS}
    const PLUG = {type: Type.plug, img: "", options: ItemOption.PLUG_OPTIONS}
    const ITEM_MAP = [ LIGHT, COLORABLE_LIGHT, PLUG ]

    export function ItemMapper(item_type: Type): {type: Type, img: string, options: ItemOption[]} {
        /**
         * Provides item img and options given ItemType.
         * @param item_type: type of item (e.g. light)
         * @returns item_map: map of specific item type values.
         */
        let items_map: {type: Type, img: string, options: ItemOption[]}[] = ITEM_MAP
        let item_map: {type: Type, img: string, options: ItemOption[]}
        console.log("item map: ", items_map)
        items_map.forEach(item => {
            if (item.type == item_type) {
                console.log("item: ", item.type, " item_type: ", item_type)
                item_map = item
            }
        });
        return item_map
    }
}
 
/**
 * Default Items.
 * To be extended dynamically
 */
const item_light_bl_1: Item = {id:"cl-1", type:Item.Type.colorable_light, name:"BL-1"}
const item_light_kl_1: Item = {id:"l-1", type:Item.Type.light, name:"KL-1"}
const item_light_wl_1: Item = {id:"l-2", type:Item.Type.light, name:"WL-1"}
const item_light_wl_2: Item = {id:"l-3", type:Item.Type.light, name:"WL-2"}
const item_plug_bs_1: Item = {id:"p-1", type:Item.Type.plug, name:"BS-1"}
const item_plug_bs_2: Item = {id:"p-2", type:Item.Type.plug, name:"BS-2"}
const item_plug_ws_1: Item = {id:"p-3", type:Item.Type.plug, name:"WS-1"}

/**
 * Expendable item list for the application
 * TODO: Create items dynamically
 */
export const DEFAULT_ITEMS = {
    bathroom: [[item_light_bl_1], [item_plug_bs_1, item_plug_bs_2]], 
    kitchen: [[item_light_kl_1]], 
    livingroom: [[item_light_wl_1, item_light_wl_2], [item_plug_ws_1]]
}