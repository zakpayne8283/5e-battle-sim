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
                    <div className='entity-name'>
                        {entity.name}
                    </div>
                    <div className='entity-health'>
                        {entity.currentHealth}/{entity.maxHealth}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default InitiativeTracker;