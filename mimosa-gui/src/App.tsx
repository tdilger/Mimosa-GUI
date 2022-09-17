import { Route, Routes } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import Navigation from './components/navigation/Navigation';
import SpeechInput from './components/SpeechInput';
import { LocationView } from './views/LocationView';
import './style.scss'
import ItemOptionOverlay from './components/smart_env/ItemOptionOverlay';
import { useTheme } from '@suid/material';
import SettingsMenu from './components/settings/SettingsMenu';

/**
 * TODO: Create users dynamically
 */
const DEFAULT_USER = 'admin'

/**
 * All locations and items fetched from api.
 */
export const [username, setUsername] = createSignal(DEFAULT_USER)

/**
 * Site-wide theme.
 */
export const theme = useTheme();

const App: Component = () => {
  return (
    <div class="overflow-hidden bg-primary" style="width: 100vw; height: 100vh;">
      <Navigation />
      <SettingsMenu />
      <Routes>
        <Route path='/' element={<LocationView />} />
      </Routes>
      <SpeechInput />
      <ItemOptionOverlay />
    </div>
  );
};

export default App;
