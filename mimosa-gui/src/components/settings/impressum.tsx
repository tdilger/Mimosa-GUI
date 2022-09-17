import { Component } from 'solid-js';

const ImprintModal: Component = () => {
    return (
        <dialog id="imprint-modal" class="modal relative overflow-hidden p-4 rounded-md text-center">
            <h2 class="text-xxl my-5">Impressum</h2>
            <div class="my-5">
                <p>Die Mimosa Smart Home Assistenz steht unter einer Apache 2.0 Lizenz.<br />
                    Copyright by Tim Dilger.<br />
                    Manche Icons die verwendet wurden sind von <a href="https://icons8.com" target="_blank">icons8</a>.
                </p>
            </div>
            <div class="m-auto my-5 items-center">
                <button value="cancel">Schließen</button>
            </div>
        </dialog>
    )
}

export default ImprintModal;