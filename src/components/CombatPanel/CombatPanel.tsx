// Local Imports
import { useGame } from '../../types/GameContext'
import ActionsPanel from '../ActionsPanel/ActionsPanel';

// CSS
import './CombatPanel.css';

function CombatPanel(){
    const { state } = useGame();

    return(
        <div id="CombatPanel">
            { state.combatStarted && state.currentEntity != null ? (
                <div className='active-entity'>
                    <strong>Information:</strong>
                    <div className='entity-name'>
                        Name: { state.currentEntity.name }
                    </div>
                    <div className='entity-health'>
                        Health: { state.currentEntity.currentHealth} / { state.currentEntity.maxHealth }
                    </div>
                    <hr />
                    <strong>Actions:</strong>
                    <ActionsPanel currentEntity={state.currentEntity} />
                </div>
            ) : 
                <>Combat not started...</>
            }
        </div>
    )
}

export default CombatPanel;
