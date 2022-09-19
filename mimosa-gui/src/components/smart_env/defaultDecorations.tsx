import { Position } from "../../utils/layout"
import { Decoration } from "../../views/fields"

namespace DefaultDecoration {

    /**
     * Currently supported items.
     */
    let deco_img_path: string = "src/assets/icons/google-material-icons/"
    const TABLE_HORIZONTAL: Decoration = new Decoration("tbl_h", "Tisch horizontal", deco_img_path + "table_horizontal.svg")
    const TABLE_VERTICAL: Decoration = new Decoration("tbl-v", "Tisch vertikal", deco_img_path + "table_vertical.svg")
    const FRIDGE: Decoration = new Decoration("fridge", "Kühlschrank", deco_img_path + "fridge.svg")
    const COOKER: Decoration = new Decoration("cooker", "Herd", deco_img_path + "cooker.svg")
    const TOILET: Decoration = new Decoration("toilet", "Toilette", deco_img_path + "toilet.svg")
    const CHAIR: Decoration = new Decoration("chair", "Stuhl", deco_img_path + "chair.svg")
    const TV: Decoration = new Decoration("tv", "Fernseher", deco_img_path + "tv.svg")
    const SINK: Decoration = new Decoration("sink", "Spüle", deco_img_path + "sink.svg")
    const SHOWER: Decoration = new Decoration("shower", "Dusche", deco_img_path + "shower.svg")
    const BED: Decoration = new Decoration("bed", "Bett", deco_img_path + "bed.svg")

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