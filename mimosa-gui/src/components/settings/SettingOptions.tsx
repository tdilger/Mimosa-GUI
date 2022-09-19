import userSettings from "../../assets/icons/google-material-icons/UserSettings.svg"
import colorSettings from "../../assets/icons/google-material-icons/ColorSettings.svg"
import typogrphySettings from "../../assets/icons/google-material-icons/TypographySettings.svg"
import powerOffSettings from "../../assets/icons/google-material-icons/PowerOffSettings.svg"

export class Settings {
    name: string
    img: string
    option: () => void

    constructor(name: string, img: string, option: () => void) {
        this.name = name
        this.img = img
        this.option = option
    }
}

let user_settings = new Settings("Benutzer", userSettings, handle_user_settings)
let color_settings = new Settings("Farbe", colorSettings, handle_color_settings)
let typography_settings = new Settings("Typographie", typogrphySettings, handle_typography_settings)
let power_off_settings = new Settings("Ausschalten", powerOffSettings, power_off)

export var settings = { 
    user: user_settings, 
    color: color_settings, 
    typography: typography_settings, 
    power_off: power_off_settings
}


function handle_user_settings() {
    console.log("handling user settings...")
}

function handle_color_settings() {
    console.log("handling color settings...")
}

function handle_typography_settings() {
    console.log("handling typography settings...")
}

function power_off() {
    console.log("power off")
}