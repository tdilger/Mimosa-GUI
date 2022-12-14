import ImprintModal from "./impressum";
import { settings } from "./SettingOptions";

export function settings_overlay_on() {
    document.getElementById("overlay").style.display = "block";
}

export function settings_overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

function openImprintModal() {
    settings_overlay_off()
    let imprintDialog: HTMLDialogElement = document.getElementById("imprint-modal")
    let cancelButton = document.getElementById("cancel");
    imprintDialog.showModal();
    cancelButton.addEventListener("click", () => {
        imprintDialog.close();
    });
}

function SettingsMenu() {
    return (
        <>
            <div id="overlay" class="z-30 absolute top-0 bottom-0 left-0 right-0 w-full h-full">
                <div id="overlay-background" class="w-full h-full z-10" onclick={ settings_overlay_off }/>
                <div id="settings-menu" class="z-20">
                    <ul>
                        <li onClick={ settings.user.option }><div class="settings-symbol"><img src={settings.user.img} alt={settings.user.name} /></div></li>
                        <li onClick={ settings.color.option }><div class="settings-symbol"><img src={settings.color.img} alt={settings.color.name} /></div></li>
                        <li onClick={ settings.typography.option }><div class="settings-symbol"><img src={settings.typography.img} alt={settings.typography.name} /></div></li>
                        <li onClick={ settings.power_off.option }><div class="settings-symbol"><img src={settings.power_off.img} alt={settings.power_off.name} /></div></li>
                    </ul>
                    <p id="impressum" class="text-m settings-symbol mx-auto flex w-full relative align-middle justify-center" onClick={openImprintModal}>Impressum</p>
                </div>
            </div>
            <ImprintModal />
        </>
    )
}

export default SettingsMenu;