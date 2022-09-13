import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import IconButton from "@suid/material/IconButton"
import Switch from "@suid/material/Switch"
import Typography from "@suid/material/Typography"
import { Component, createEffect, createSignal, For } from "solid-js"
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

interface FieldItemSwitchProps {
    /**
     * Offers item to be enabled / disabled via switch.
     */
    item: Item
}

const ItemOptionModalSwitch: Component<FieldItemSwitchProps> = ( props ) => {
    /**
     * Switch in ItemCardMenu to turn on / off all selected items.
     */
    const [checked, setChecked] = createSignal(false);
  
    createEffect (
      /**
       * if checked, switch items on, otherwise switch items off.
       */
      () => {
        if (checked()) {
            props.item.switch_off()
        }
      }
    )
  
    return (
        <Switch sx={{transform: 'translateY(-50%) scale(1.5)'}}
        checked={checked()}
        onChange={(event, value) => {
          setChecked(value);
        }}
        inputProps={{ "aria-label": "controlled" }}
      />
    );
}

interface ItemOptionModalViewProps {
    item: Item
    option: ItemOption
}

const ItemOptionModalView: Component<ItemOptionModalViewProps> = ( props ) => {
    if (props.option.name == ItemOption.NAMES.switch) {
        return <div class="item-option mx-2"><ItemOptionModalSwitch item={ props.item } /></div>
    }
    return (
        <IconButton sx={{minWidth: '60px', maxWidth: '100px', aspectRatio: '1/1', margin: '10px 25px'}}>
            <img src={ props.option.symbol_src } onClick={ () => props.option?.action() } alt={ props.option.name } />
        </IconButton>
    )
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
                            <ItemOptionModalView item={props.item} option={option} />
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