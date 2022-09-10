import Backdrop from "@suid/material/Backdrop"
import Card from "@suid/material/Card"
import CardContent from "@suid/material/CardContent"
import CircularProgress from "@suid/material/CircularProgress"
import IconButton from "@suid/material/IconButton"
import { Component, createSignal, For } from "solid-js"
import { theme } from "../../App"
import { clicked_item, set_clicked_item } from "../../views/ItemDisplay"
import { ItemOption } from "./ItemOptions"

export const [selected_option, set_selected_option]: [() => ItemOption, (option: ItemOption) => void] = createSignal()

const ItemOptionBackdrop: Component = () => {
    /**
     * ItemOptions displayed when item in itemDisplay is clicked.
     * Shows e.g. light options: switch (on / off), change brightness and change color
     */
	return <Backdrop id="item-option-backdrop" sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    open={clicked_item() != null}
    onClick={() => set_clicked_item(null)}>
            <p>Text</p>
            <CircularProgress style={{ color: 'white' }} />
            <Card class="center flex-row" sx={{ minWidth: 275 }}>
                <CardContent>
                    <For each={ clicked_item().options }>{
                        (option: ItemOption) => 
                            <IconButton sx={{marginX: '10px'}} action={ option.action() }>
                                <p>Test</p>
                                <img src={ option.symbol_src } alt={ option.name } />
                            </IconButton>
                        }
                    </For>
                </CardContent>
            </Card>
    </Backdrop>
}

export default ItemOptionBackdrop

export const ItemSpecificOptionBackdrop: Component = () => {
    /**
     * A specific ItemOption to regulate is displayed when clicked on an option in ItemOptionBackdrop.
     * Shows e.g. light color regulation by color picker tool
     */

    return <Backdrop id="item-option-specific-backdrop" class="flex-row" sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
            open={selected_option() != null}
            onClick={() => set_selected_option(null)}>
                { () => { if (selected_option() !== undefined) {return selected_option().name} } }
            </Backdrop>
}
