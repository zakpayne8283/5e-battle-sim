// Local Imports
import { useGame } from '../../types/GameContext';

// CSS
import './TopLevelMenu.css';

function TopLevelMenu(){

    // Context setup
    const { dispatch } = useGame();

    return(
        <div id="TopLevelMenu">
            <button id="AddEntity" onClick={() => dispatch({ type: 'ADD_ENTITY' })}>
                Add Entity
            </button>
            <button id="StartCombat" onClick={() => dispatch({ type: 'START_COMBAT' })}>
                Start Combat
            </button>
        </div>
    )
}

export default TopLevelMenu;