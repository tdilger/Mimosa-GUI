/**
 * Concrete actions to take.
 */

import { set_selected_option } from "../../views/ItemDisplay"

export namespace ItemActions {
    export function handle_option_switch() {
        console.log("handle switch")
        // set item.enabled to true or false respectively
    }
    
    export function handle_option_change_brightness() {
        console.log("handle change brightness")
        set_selected_option(this)
    }
    
    export function handle_option_change_color() {
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