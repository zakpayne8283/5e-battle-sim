// Libraries

// Local imports
import InitiativeTracker from './components/InitiativeTracker/InitiativeTracker';
import CombatPanel from './components/CombatPanel/CombatPanel';
import TopLevelMenu from './components/TopLevelMenu/TopLevelMenu';
import { GameProvider } from './types/GameContext';

// CSS
import "./App.css"

function App() {
  return (
    <>
      <h1>5E Battle Sim</h1>
      <GameProvider>
        <InitiativeTracker />
        <CombatPanel />
        <TopLevelMenu />
      </GameProvider>
    </>
  )
}

export default App
