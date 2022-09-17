import IconButton from '@suid/material/IconButton';
import MicIcon from "@suid/icons-material/Mic";
import { Component } from 'solid-js';

const SpeechInput: Component = () => {
    return (
        <div id="speechInput" class="absolute bottom-8 m-auto left-0 right-0 text-center align-middle">
            <div class="bg-white b w-full h-full rounded-3xl">
                <div id="speechInputContent">
                    <IconButton aria-label="speech-input" color="primary">
                            <MicIcon sx={{ fontSize: 50, fill: 'var(--color-secondary)' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SpeechInput;