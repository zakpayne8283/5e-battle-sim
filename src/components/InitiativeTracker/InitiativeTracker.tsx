// Local Imports
import { useGame } from '../../types/GameContext'

// CSS
import './InitiativeTracker.css';

function InitiativeTracker(){
    const { state } = useGame();

    // Sort entities by the turn order

    return(
        <div id="InitiativeTracker">
            {state.entities.map(entity => (
                <div key={entity.id}>
                {entity.id} - {entity.initiative}
                </div>
            ))}
        </div>
    );
}

export default InitiativeTracker;