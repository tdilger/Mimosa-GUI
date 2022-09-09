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

let settings_img_path = "src/assets/icons/google-material-icons/"
let user_settings = new Settings("Benutzer", settings_img_path + "UserSettings.svg", handle_user_settings)
let color_settings = new Settings("Farbe", settings_img_path + "ColorSettings.svg", handle_color_settings)
let typography_settings = new Settings("Typographie", settings_img_path + "TypographySettings.svg", handle_typography_settings)
let power_off_settings = new Settings("Ausschalten", settings_img_path + "PowerOffSettings.svg", power_off)

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