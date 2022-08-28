import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/navigation/Nav';
import SpeechInput from './components/SpeechInput';

const [username, setUsername] = createSignal('admin')
const [locations, setLocations] = createSignal([])
const [items, setItems] = createSignal([])

const current_location = "Test"

const App: Component = () => {
  createEffect(async () => {
    const res = await fetch('')
    setLocations(await res.json())
  })

  return (
    <div class="w-full h-full">
      <Nav />
      <div class="container mx-auto">
        <p class="text-3xl text-green-800 text-center py-20">{ current_location }</p>
        <div>
          <p>Location</p>
        </div>
      </div>
      <SpeechInput />
    </div>
  );
};

export default App;
