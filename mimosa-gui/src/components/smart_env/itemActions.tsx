/**
 * Concrete actions to take.
 */

import { set_item_changed } from "../../views/fieldView"
import { set_selected_option } from "../../views/ItemDisplay"
import Item from "./items"

export namespace ItemActions {
    export function handle_option_switch(item: Item) {
        console.log("handle switch")
        // set item.enabled to true or false respectively
        console.log("ItemActions: ", item)
        item.switch()
        set_item_changed(item)
    }
    
    export function handle_option_change_brightness(item: Item) {
        console.log("handle change brightness")
        set_selected_option(this)
    }
    
    export function handle_option_change_color(item: Item) {
        console.log("handle change color")
        set_selected_option(this)
    }

    /** Mapper for action functions. */
    export const ACTIONS = {
        switch: handle_option_switch,
        change_brightness: handle_option_change_brightness,
        change_color: handle_option_change_color
    }
}