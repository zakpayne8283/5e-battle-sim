// Libraries

// Local imports

// CSS
import "./App.css"
import InitiativeTracker from './components/InitiativeTracker/InitiativeTracker';
import TopLevelMenu from './components/TopLevelMenu/TopLevelMenu';
import { GameProvider } from './types/GameContext';

function App() {
  return (
    <>
      <h1>5E Battle Sim</h1>
      <GameProvider>
        <InitiativeTracker />
        <TopLevelMenu />
      </GameProvider>
    </>
  )
}

export default App
