import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import IconButton from "@suid/material/IconButton"
import Typography from "@suid/material/Typography"
import { Component, For } from "solid-js"
import { ModalCloseButton, ItemDeleteChip, show_item_option_overlay } from "./ItemOptionOverlay"
import ItemOption from "./ItemOptions"
import Item from "./items"

const item_clicked_modal_id: string = "item-clicked-modal"

export function show_item_clicked_modal( show: boolean ) {
    /**
     * Shows or hides backdrop menu displaying options of clicked item on field.
     */
    console.log("show or hide item clicked modal")
    let display: string = "none"
    if ( show == true ) {
        display = "block"
    }
    let item_clicked_modal = document.getElementById(item_clicked_modal_id)
    if (item_clicked_modal == null) {
        show_item_option_overlay(false)
        return
    }
    show_item_option_overlay(true)
    item_clicked_modal.style.display = display
}

interface ItemClickedModalProps {
    item: Item
}

export const ItemClickedModal: Component<ItemClickedModalProps> = ( props ) => {
    /**
     * Displays options of clicked item on field.
     */

    return (
        <Card id={ item_clicked_modal_id }>
            <CardContent sx={{ flex: "1 0 auto" }}>
                <ModalCloseButton />
                <div class="title text-center">
                    <Typography variant="h3">
                        { props.item?.type + " " + props.item?.name }
                    </Typography>
                </div>
                <div class="items-center justify-center m-auto flex">{
                    <For each={ props.item?.options }>{
                        (option: ItemOption) => 
                            <IconButton sx={{marginX: '10px'}}>
                                <img src={ option.symbol_src } onClick={ () => option?.action() } alt={ option.name } />
                            </IconButton>
                        }
                    </For>
                }
                </div>
                <div class="delete-chip items-center text-center justify-center flex">
                    { ItemDeleteChip( props.item ) }
                </div>
            </CardContent>
        </Card>
    )
}