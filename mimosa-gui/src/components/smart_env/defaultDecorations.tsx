import { Decoration } from "../../views/fields"

import table_horizontal from "../../assets/icons/google-material-icons/table_horizontal.svg"
import table_vertical from "../../assets/icons/google-material-icons/table_vertical.svg"
import tv from "../../assets/icons/google-material-icons/tv.svg"
import fridge from "../../assets/icons/google-material-icons/fridge.svg"
import cooker from "../../assets/icons/google-material-icons/cooker.svg"
import chair from "../../assets/icons/google-material-icons/chair.svg"
import shower from "../../assets/icons/google-material-icons/shower.svg"
import sink from "../../assets/icons/google-material-icons/sink.svg"
import bed from "../../assets/icons/google-material-icons/bed.svg"

namespace DefaultDecoration {

    /**
     * Currently supported items.
     */
    const TABLE_HORIZONTAL: Decoration = new Decoration("tbl_h", "Tisch horizontal", table_horizontal)
    const TABLE_VERTICAL: Decoration = new Decoration("tbl-v", "Tisch vertikal", table_vertical)
    const FRIDGE: Decoration = new Decoration("fridge", "Kühlschrank", fridge)
    const COOKER: Decoration = new Decoration("cooker", "Herd", cooker)
    const TOILET: Decoration = new Decoration("toilet", "Toilette", "")
    const CHAIR: Decoration = new Decoration("chair", "Stuhl", chair)
    const TV: Decoration = new Decoration("tv", "Fernseher", tv)
    const SINK: Decoration = new Decoration("sink", "Spüle", sink)
    const SHOWER: Decoration = new Decoration("shower", "Dusche", shower)
    const BED: Decoration = new Decoration("bed", "Bett", bed)

    export const DECO_MAP = {
        tbl_h: TABLE_HORIZONTAL, 
        tbl_v: TABLE_VERTICAL, 
        fridge: FRIDGE, 
        cooker: COOKER, 
        toilet: TOILET, 
        chair: CHAIR, 
        tv: TV, 
        sink: SINK, 
        shower: SHOWER, 
        bed: BED
    }
}

export default DefaultDecoration

 
 /**
  * Expendable decoration list for the application
  * TODO: Create decorations dynamically
  */
export const DEFAULT_DECORATIONS = {
    bathroom: [
        {pos: {x:1, y:1}, decoration: DefaultDecoration.DECO_MAP.shower}, 
        {pos: {x:2, y:1}, decoration: DefaultDecoration.DECO_MAP.toilet}
    ], 
    kitchen: [
        {pos: {x:1, y:0}, decoration: DefaultDecoration.DECO_MAP.cooker}, 
        {pos: {x:3, y:0}, decoration: DefaultDecoration.DECO_MAP.fridge}
    ], 
    livingroom: [
        {pos: {x:2, y:0}, decoration: DefaultDecoration.DECO_MAP.tv},
        {pos: {x:2, y:1}, decoration: DefaultDecoration.DECO_MAP.chair},
        {pos: {x:3, y:0}, decoration: DefaultDecoration.DECO_MAP.tbl_h}
    ],
    bedroom: [
        {pos: {x:0, y:1}, decoration: DefaultDecoration.DECO_MAP.bed}
    ]
 }