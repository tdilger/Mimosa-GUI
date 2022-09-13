import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import Typography from "@suid/material/Typography"
import { Component } from "solid-js"
import { ModalCloseButton } from "./ItemOptionOverlay"
import ItemOption from "./ItemOptions"

export function show_item_option_selection_modal( show: boolean ) {
    /**
     * Shows or hides backdrop menu displaying a selected item option (e.g. brightness adjustment).
     */
     let item_option_selection_modal_id: string = "item-option-selection-modal"
     console.log("Show or hide selected item option modal")
     let display: string = "none"
     if ( show == true ) {
        display = "block"
     }
     let item_option_selection_modal = document.getElementById(item_option_selection_modal_id)
     if (item_option_selection_modal == null) {
        return
     }
     item_option_selection_modal.style.display = display
}

interface ItemOptionSelectionProps {
    item_option: ItemOption
}

export const ItemOptionSelectionModal: Component<ItemOptionSelectionProps> = ( props ) => {
    /**
     * A specific ItemOption to regulate is displayed when clicked on an option in ItemOptionBackdrop.
     * Shows e.g. light color regulation by color picker tool
     */
    let item_option_selection_modal_id: string = "item-option-selection-modal"
    return (
        <Card id={ item_option_selection_modal_id }>
            <CardContent sx={{ flex: "1 0 auto" }}>
            <ModalCloseButton />
                <div class="title text-center">
                <Typography variant="h3">
                    { props.item_option?.name }
                </Typography>
                </div>
            </CardContent>
        </Card>
    )
}