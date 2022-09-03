
export function settings_overlay_on() {
    document.getElementById("overlay").style.display = "block";
}

export function settings_overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

function SettingsMenu() {
    return (
        <div id="overlay" class="z-30 absolute top-0 bottom-0 left-0 right-0 w-full h-full" onclick={ settings_overlay_off }>
            <div id="settings-menu">
                <ul>
                    <li><div class="settings-symbol">Benutzer</div></li>
                    <li><div class="settings-symbol">Farben</div></li>
                    <li><div class="settings-symbol">Typographie</div></li>
                    <li><div class="settings-symbol">Ausschalten</div></li>
                </ul>
                <small class="settings-symbol mx-auto flex w-full relative align-middle justify-center">Impressum</small>
            </div>
        </div>
    )
}

export default SettingsMenu;