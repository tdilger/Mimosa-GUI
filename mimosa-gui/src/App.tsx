import { Route, Routes } from '@solidjs/router';
import { Component, createEffect, createSignal, For } from 'solid-js';
import SettingsMenu from './components/menus/SettingsMenu';
import Navigation from './components/navigation/Navigation';
import SpeechInput from './components/SpeechInput';
import { LocationView } from './pages/LocationView';
import HomeLocationView from './views/HomeLocationView';
import './style.scss'

/**
 * TODO: Create users dynamically
 */
const DEFAULT_USER = 'admin'

/**
 * All locations and items fetched from api.
 */
export const [username, setUsername] = createSignal(DEFAULT_USER)

const App: Component = () => {
  return (
    <div style="width: 100vw; height: 100vh;">
      <Navigation />
      <SettingsMenu />
      <div class="z-0 relative container outline-dashed mx-auto" style="width: 80%; height: calc(100% - 20em);">
        <Routes>
          <Route path='/' element={<LocationView />} />
        </Routes>
      </div>
      <SpeechInput />
    </div>
  );
};

export default App;
