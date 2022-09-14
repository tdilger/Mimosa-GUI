import ItemOption from "./ItemOptions"
import Item from "./items"

namespace DefaultItem {
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
    let item_img_path: string = "src/assets/icons/google-material-icons/"
    const LIGHT = {type: Type.light, img: item_img_path + "lightbulb.svg", img_enabled: item_img_path + "lightbulb_enabled.svg", options: ItemOption.LIGHT_OPTIONS}
    const COLORABLE_LIGHT = {type: Type.colorable_light, img: item_img_path + "lightbulb.svg", img_enabled: item_img_path + "lightbulb_enabled.svg", options: ItemOption.COLORABLE_LIGHT_OPTIONS}
    const PLUG = {type: Type.plug, img: item_img_path + "power.svg", img_enabled: item_img_path + "power_enabled.svg", options: ItemOption.PLUG_OPTIONS}
    const ITEM_MAP = [ LIGHT, COLORABLE_LIGHT, PLUG ]

    export function ItemMapper(item_type: Type): {type: Type, img: string, img_enabled: string, options: ItemOption[]} {
        /**
         * Provides item img and options given ItemType.
         * @param item_type: type of item (e.g. light)
         * @returns item_map: map of specific item type values.
         */
        let items_map: {type: Type, img: string, img_enabled: string, options: ItemOption[]}[] = ITEM_MAP
        let item_map: {type: Type, img: string, img_enabled: string, options: ItemOption[]}
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

export default DefaultItem

/**
 * Default Items.
 * To be extended dynamically
 */
 const item_light_bl_1: Item = new Item("cl-1", DefaultItem.Type.colorable_light, "BL-1")
 const item_light_kl_1: Item = new Item("l-1", DefaultItem.Type.light, "KL-1")
 const item_light_wl_1: Item = new Item("l-2", DefaultItem.Type.light, "WL-1")
 const item_light_wl_2: Item = new Item("l-3", DefaultItem.Type.light, "WL-2")
 const item_plug_bs_1: Item = new Item("p-1", DefaultItem.Type.plug, "BS-1")
 const item_plug_bs_2: Item = new Item("p-2", DefaultItem.Type.plug, "BS-2")
 const item_plug_ws_1: Item = new Item("p-3", DefaultItem.Type.plug, "WS-1")
 
 /**
  * Expendable item list for the application
  * TODO: Create items dynamically
  */
 export const DEFAULT_ITEMS = {
     bathroom: [[item_light_bl_1], [item_plug_bs_1, item_plug_bs_2]], 
     kitchen: [[item_light_kl_1]], 
     livingroom: [[item_light_wl_1, item_light_wl_2], [item_plug_ws_1]]
 }