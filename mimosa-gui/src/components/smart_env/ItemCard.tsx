import { Component, createSignal } from 'solid-js'
import Badge, { BadgeProps } from '@suid/material/Badge'
import styled from "@suid/system/styled";
import { Item } from "./items"
import ItemCardMenu from '../navigation/menus/ItemCardMenu';
import Slide from '@suid/material/Slide';
import CardMedia from '@suid/material/CardMedia';
import Popover from '@suid/material/Popover';

export interface ItemProps {
    item_type: Item.Type
}
  
export const ItemIcon: Component<ItemProps> = ( props ) => {
    /**
     * Display item icon (light, power plugger...).
     */
    console.log("icon item type: ", props.item_type)
    let { type, img, options } = Item.ItemMapper(props.item_type)
    let img_alt = "Symbol " + type
    return (
        <div class="ItemIcon">
            <CardMedia
              component="img"
              sx={{ width: '100%', paddingX: '20%' }}
              image={ img }
              alt={ img_alt }
            />
        </div>
    )
}

interface ItemCardProps {
    item_type: Item.Type
    items: Item[]
}

export const ItemCard: Component<ItemCardProps> = ( props ) => {
    /**
     * Card to display item in itemMenu.
     * @param props.item_type: type of item the card should display by icon img
     * @param props.items: list of items (length to be displayed as a small badge)
     */

    /**
     * Position: Calculated [bottom, right] - (dist_edge)
     * dist_edge: padding + (1/2 * d - r_c)
     * d = a * sqrt(2) with a: side length of the square container
     * r_c = 1/2 * a
     */
    let p = 10
    let d = 2
    let r_c = 2
    let dist_edge: number = p + (1/2 * d - r_c);

    console.log("itemcard, item: ", props.item_type, " amount: ", props.items.length)

    const ItemCardBadge = styled(Badge)<BadgeProps>(() => ({
        /** 
         * Customized Badge.
         */
        '& .MuiBadge-badge': {
          bottom: dist_edge,
          right: dist_edge,
          border: `2px solid gray`,
          background: 'rgba(0,0,0,0.4)',
          color: '#ffffff',
          padding: '0 4px',
        },
      }))

    /** open and anchor signals to open ItemCardMenu at proper place. */
    const open = () => Boolean(anchorEl());
    const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);
    const canBeOpen = () => open() && !!anchorEl();
    const id = () => (canBeOpen() ? "transition-popover" : undefined);

    const handleClick = (
        event: MouseEvent & { currentTarget: HTMLButtonElement }
      ) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    console.log( "card items: ", props.items )
    const item_type = props.item_type
    const items = props.items
    return (
        <>
            <ItemCardBadge badgeContent={ items.length } color="primary" 
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <button class="card itemCard" type="button" onClick={ handleClick }>
                    <div class="cardContent">
                        <ItemIcon item_type={ item_type } />
                    </div>
                </button>
            </ItemCardBadge>
            <Popover id={id()} open={open()} onClose={handleClose} 
            anchorEl={anchorEl()} anchorOrigin={{ vertical: "bottom", horizontal: "left"}}>
                <Slide direction="down" in={open()} container={anchorEl()}>
                    <ItemCardMenu item_type={ item_type } items={ items } />
                </Slide>
            </Popover>
        </>
    )
}