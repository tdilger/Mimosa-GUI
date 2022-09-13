import DefaultItem from "./defaultItems"
import ItemOption from "./ItemOptions"


export class Item {
    /**
     * Container for basic item properties.
     */
    readonly id: string
    readonly type: DefaultItem.Type
    name: string
    readonly img?: string
    readonly img_enabled?: string
    readonly options?: ItemOption[]
    state: boolean = false

    constructor(id: string, type: DefaultItem.Type, name: string) {
        this.id = id
        this.type = type
        this.name = name
        let item_map = DefaultItem.ItemMapper(type)
        this.img = item_map.img
        this.options = item_map.options
    }

    switch_on() {
        this.state = true
    }

    switch_off() {
        this.state = false
    }
}

export default Item