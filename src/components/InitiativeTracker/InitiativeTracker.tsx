// Local Imports
import { useGame } from '../../types/GameContext'

// CSS
import './InitiativeTracker.css';

function InitiativeTracker(){
    const { state } = useGame();

    // Sort entities by the turn order
    const sortedEntities = [...state.entities].sort((a, b) => b.initiative - a.initiative)

    return(
        <div id="InitiativeTracker">
            {sortedEntities.map(entity => (
                <div key={entity.id}>
                    <div className='entity-name'>
                        {entity.name}
                    </div>
                    <div className='entity-health'>
                        {entity.currentHealth}/{entity.maxHealth}
                    </div>
                    <div className='entity-initiative'>
                        Initiative: {entity.initiative}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default InitiativeTracker;