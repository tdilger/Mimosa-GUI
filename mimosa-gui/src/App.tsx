import { Route, Routes } from '@solidjs/router';
import { Component, createEffect, createSignal, For } from 'solid-js';
import Navigation from './components/navigation/Navigation';
import { Location, DEFAULT_LOCATIONS } from './components/smart_env/locations';
import { DEFAULT_ITEMS } from './components/smart_env/items';
import SpeechInput from './components/SpeechInput';
import { LocationView } from './pages/LocationView';
import HomeLocationView from './components/HomeLocationView';

/**
 * TODO: Create users dynamically
 */
const DEFAULT_USER = 'admin'

/**
 * All locations and items fetched from api.
 */
const [username, setUsername] = createSignal({ DEFAULT_USER })
const [locations, setLocations] = createSignal(DEFAULT_LOCATIONS)
const [items, setItems] = createSignal(DEFAULT_ITEMS)

var current_location = locations()[0]

createEffect(async () => {
  /**
   * fetch data from smart env api.
   */
  const res = await fetch('')
  setLocations(await res.json())
})

const App: Component = () => {
  return (
    <div style="width: 100vw; height: 100vh;">
      <Navigation location={ current_location } items={ items() } />
      <div class="z-0 relative container outline-dashed mx-auto" style="width: 80%; height: calc(100% - 20em);">
        <Routes>
          <Route path='/' element={<LocationView location={current_location} />} />
        </Routes>
      </div>
      <SpeechInput />
    </div>
  );
};

export default App;
