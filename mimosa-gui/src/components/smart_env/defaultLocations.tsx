import { Viewport } from "../../utils/layout"
import { createFieldMatrix, Field } from "../../views/fields"
import { DEFAULT_DECORATIONS } from "./defaultDecorations"
import { DEFAULT_ITEMS } from "./defaultItems"

import kitchenCard from "../../assets/elements/icons8-icons/kitchenCardContent.svg"
import bathroomCard from "../../assets/elements/icons8-icons/bathroomCardContent.svg"
import livingroomCard from "../../assets/elements/icons8-icons/livingroomCardContent.svg"
import bedroomCard from "../../assets/elements/icons8-icons/bedroomCardContent.svg"
import homeCard from "../../assets/elements/icons8-icons/homeCardContent.svg"
import { Location } from "./locations"

namespace DefaultLocation {
    const LOCATION_ITEM_MAPPINGS = {
        kitchen: [
           {pos:{x:2, y:0}, item: DEFAULT_ITEMS.kitchen[0][0]}],
        bathroom: [
           {pos:{x:2, y:0}, item: DEFAULT_ITEMS.bathroom[0][0]}, 
           {pos:{x:0, y:0}, item: DEFAULT_ITEMS.bathroom[1][0]}, 
           {pos:{x:2, y:2}, item: DEFAULT_ITEMS.bathroom[1][1]}],
        livingroom: [
           {pos:{x:2, y:2}, item: DEFAULT_ITEMS.livingroom[0][0]}, 
           {pos:{x:3, y:2}, item: DEFAULT_ITEMS.livingroom[0][1]}, 
           {pos:{x:1, y:0}, item: DEFAULT_ITEMS.livingroom[1][0]}]
     }
     
     const KITCHEN_SIZE: Viewport = {width: 4, height: 2}
     const BATHROOM_SIZE: Viewport = {width: 3, height: 3}
     const LIVINGROOM_SIZE: Viewport = {width: 6, height: 3}
     const BEDROOM_SIZE: Viewport = {width: 3, height: 4}
     const HOME_SIZE: Viewport = {width: 11, height: 8}
     
     /**
      * DEFAULT field matrices.
      */
     const KITCHEN_FIELD_MATRIX: Field[][] = createFieldMatrix(KITCHEN_SIZE, LOCATION_ITEM_MAPPINGS.kitchen, DEFAULT_DECORATIONS.kitchen)
     const BATHROOM_FIELD_MATRIX: Field[][] = createFieldMatrix(BATHROOM_SIZE, LOCATION_ITEM_MAPPINGS.bathroom, DEFAULT_DECORATIONS.bathroom)
     const LIVINGROOM_FIELD_MATRIX: Field[][] = createFieldMatrix(LIVINGROOM_SIZE, LOCATION_ITEM_MAPPINGS.livingroom, DEFAULT_DECORATIONS.livingroom)
     const BEDROOM_FIELD_MATRIX: Field[][] = createFieldMatrix(BEDROOM_SIZE, [], DEFAULT_DECORATIONS.bedroom)
     const HOME_FIELD_MATRIX: Field[][] = createFieldMatrix(HOME_SIZE, [], [])

    /**
     * TODO: Create locations dynamically
     * 
     */
    const kitchen: Location = new Location("Küche", kitchenCard, DEFAULT_ITEMS.kitchen, KITCHEN_FIELD_MATRIX)
    const livingRoom: Location = new Location("Wohnzimmer", livingroomCard, DEFAULT_ITEMS.livingroom, LIVINGROOM_FIELD_MATRIX)
    const bathroom: Location = new Location("Badezimmer", bathroomCard, DEFAULT_ITEMS.bathroom, BATHROOM_FIELD_MATRIX)
    const bedroom: Location = new Location("Schlafzimmer", bedroomCard, [], BEDROOM_FIELD_MATRIX)
    const home: Location = new Location("Haus", homeCard, [], HOME_FIELD_MATRIX)
    
    export const DEFAULT_LOCATIONS: Location[] = [ kitchen, livingRoom, bathroom, bedroom, home ]
}

export default DefaultLocation