import { Route, Routes } from 'solid-app-router';
import { Component, createEffect, createSignal, For } from 'solid-js';
import Navigation from './components/navigation/Navigation';
import { Location, DEFAULT_LOCATIONS } from './components/smart_env/locations';
import { DEFAULT_ITEMS } from './components/smart_env/items';
import SpeechInput from './components/SpeechInput';

/**
 * TODO: Create users dynamically
 */
const DEFAULT_USER = 'admin'

const [username, setUsername] = createSignal({ DEFAULT_USER })
const [locations, setLocations] = createSignal(DEFAULT_LOCATIONS)
const [items, setItems] = createSignal(DEFAULT_ITEMS)

const current_location = locations[0]

const App: Component = () => {
  createEffect(async () => {
    /**
     * fetch data from smart env api.
     */
    const res = await fetch('')
    setLocations(await res.json())
  })

  return (
    <div style="width: 100vw; height: 100vh;">
      <Navigation location={ current_location } items={ items() } />
      <div class="container outline-dashed mx-auto" style="height: calc(100% - 20em);">
        <Routes>
          <Route path='/' element='<locationView>' />
          <For each={ locations() }>
            {(location: Location) => <Route path='/${location}' element={ location.view } />}
          </For>
        </Routes>
      </div>
      <SpeechInput />
    </div>
  );
};

export default App;
