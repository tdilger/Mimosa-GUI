import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/Nav';

const [username, setUsername] = createSignal('admin')
const [locations, setLocations] = createSignal([])
const [items, setItems] = createSignal([])

const App: Component = () => {
  createEffect(async () => {
    const res = await fetch('')
    setLocations(await res.json())
  })

  return (
    <div class="w-full">
      <Nav />
      <div class="container mx-auto">
        <p class="text-5xl text-green-800 text-center py-20">Hello tailwind!</p>
      </div>
    </div>
  );
};

export default App;
