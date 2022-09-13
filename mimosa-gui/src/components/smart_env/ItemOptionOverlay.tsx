import HighlightOff from "@suid/icons-material/HighlightOff";
import Chip from "@suid/material/Chip"
import Stack from "@suid/material/Stack"
import { Component, createEffect, createSignal } from "solid-js"
import { clicked_item, selected_option, set_clicked_item, set_selected_option } from "../../views/ItemDisplay"
import ItemOption from "./ItemOptions"
import Item from "./items"
import { ItemOptionSelectionModal, show_item_option_selection_modal } from "./ItemOptionSelectionModal";
import { ItemClickedModal } from "./ItemClickedModal";

interface ItemOptionOverlayProps {
    clicked?: Item
}

export const ItemOptionOverlay: Component<ItemOptionOverlayProps> = ( props ) => {
    let item_option_overlay_id: string = "item-options-overlay"
    /**
     * Overlay when item on field has been clicked.
     * Opens item options or, when option in menu selected, specific option settings in ItemSpecificOptionBackdrop
     */
    return (
        <div id={ item_option_overlay_id } class="z-30 fixed top-0 bottom-0 left-0 right-0 w-full h-full">
            <div id="overlay-background" class="w-full h-full z-10" onclick={ () => show_item_option_overlay(false) }/>
            <ItemClickedModal item={ clicked_item() } />
            <ItemOptionSelectionModal item_option={ selected_option() } />
        </div>
    )
}

export default ItemOptionOverlay

export function show_item_option_overlay( show: boolean ) {
    /**
     * Display overlay with either item options menu or specific item option selection settings.
     */
    let item_option_overlay_id: string = "item-options-overlay"
    let display: string = "none"
     if ( show == true ) {
        display = "block"
     } else {
        set_clicked_item(null)
        set_selected_option(null)
     }
     let item_option_overlay = document.getElementById(item_option_overlay_id)
     if (item_option_overlay == null) {
        return
     }
     item_option_overlay.style.display = display
}

function list_items(): () => {} {
    /**
     * Displays all item options.
     * If only one option is available, the option action has been triggered before and backdrop not displayed
     */
    return
}

export function ItemDeleteChip( item: Item ) {
    /**
     * Small button under the item options to delete item.
     */
    const handleDeleteItem = () => {
        console.info("You clicked the delete icon for: ", item.name);
    };

    return (
        <Stack direction="row" spacing={1}>
        <Chip label={ item?.type + " entfernen" } variant="outlined" onDelete={handleDeleteItem} />
        </Stack>
    );
}

export const ModalCloseButton: Component = () => {
    /**
     * Modal closing button.
     */
    return (
        <div class="modal-close-button" onclick={ () => show_item_option_overlay(false) }>
            <HighlightOff />
        </div>
    )
}