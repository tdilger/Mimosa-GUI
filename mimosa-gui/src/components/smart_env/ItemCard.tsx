import { Component, JSX } from 'solid-js'
import { locationMenuOpen, setLocationMenuOpen } from '../navigation/Navigation'
import Badge, { BadgeProps } from '@suid/material/Badge'
import styled from "@suid/system/styled";
import { Item } from "./items"

export interface ItemProps {
    item: Item
}
  
export const ItemIcon: Component<ItemProps> = ({ item }) => {
    /**
     * Display item icon (light, power plugger...).
     */
    let img_alt = "Symbol " + item.name
    let icon_src = item.img
    return (
        <div class="ItemIcon">
            <img src={ icon_src } alt={ img_alt } />
        </div>
    )
}

export const ItemCard = ( props ) => {
    /**
     * Card to display item in itemMenu.
     * @param props.item: item the card should display by icon
     * @param props.amount: amount of items to be displayed as a small badge
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

    return (
        <ItemCardBadge badgeContent={props.amount} color="primary" 
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <button class="card itemCard" 
            onclick={ () => { setLocationMenuOpen(false) } }>
                
                    <div class="cardContent">
                        <ItemIcon item={ props.item } />
                        <p>{ props.item.name }</p>
                    </div>
            </button>
        </ItemCardBadge>
    )
}