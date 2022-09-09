import Box from "@suid/material/Box";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import CardMedia from "@suid/material/CardMedia";
import Typography from "@suid/material/Typography";
import Switch from "@suid/material/Switch";
import { Component, For, createSignal } from "solid-js";
import { ItemOption } from "../../smart_env/ItemOptions";
import { Item } from "../../smart_env/items";


interface ItemSelectorCardProps {
  /**
   * Offers items of one type to be handed to ItemSelectorCard.
   */
  items: Item[]
}

const ControlledSwitch: Component = () => {
  const [checked, setChecked] = createSignal(false);

  return (
    <Switch
      sx={{transform: 'translateY(-50%) scale(1.5)'}}
      checked={checked()}
      onChange={(event, value) => {
        setChecked(value);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

function handle_item_selection(event: Event) {
  console.log("handle item selection target: ", event.currentTarget)
}

const ItemSelectorCard: Component<ItemSelectorCardProps> = ( props ) => {
  /**
   * Card in ItemMenu to select each item of specific type in current location.
   */
  return <For each={ props.items }>{
    (item: Item) => 
    <div class="relative text-center m-5 flex-col">
      <CardMedia
        component="img"
        sx={{ width: 90, height: 90, marginBottom: '5px' }}
        image={ item.img }
        alt={ item.type + " " + item.name }
        onClick={ handle_item_selection }
      />
      <p>{ item.name }</p>
    </div>
    }</For>
}

export interface ItemCardMenuProps {
    /**
     * Make location accessible to components.
     */
    item_type: Item.Type
    items: Item[]
}

const ItemCardMenu: Component<ItemCardMenuProps> = ( props ) => {
  /**
   * Menu displayed when clicking on ItemCard in ItemMenu.
   * Displays items of the specified type to adjust at once
   */
  let item_options = () => {
    return Item.ItemMapper(props.item_type).options
  }
  console.log("item options: ", item_options())
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
            { props.item_type }
          </Typography>
          <Box sx={{ position: "relative", textAlign: "center", alignContent: "center", alignItems: "center", display: "flex", flexDirection: "row"}}>
            <ItemSelectorCard items={ props.items } />
            <For each={ item_options() }>{
              (item_option: ItemOption, i) => 
                { 
                  if (i()==0) {
                  // Switch option
                  return <div class="item-option mx-2"><ControlledSwitch /></div>
                } else {
                  return <div class="item-option mx-2"><img src={ item_option.symbol_src } alt={ item_option.name} /></div>
                }}
            }</For>
          </Box>
        </CardContent>
    </Card>
  );
}

export default ItemCardMenu;