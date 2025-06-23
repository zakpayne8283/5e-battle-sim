// Local imports
import type { Entity } from '../../types/Entity/Entity';

// CSS
import './ActionsPanel.css';

type ActionsPanelProps = {
    currentEntity: Entity;
}

function ActionsPanel({ currentEntity } : ActionsPanelProps) {
    return(
        <>
        {
            currentEntity.actions.map((action, i) => (
                <div key={i}>
                    <button>
                        {action.name}
                    </button>
                </div>
            ))
        }
        </>
    );
}

export default ActionsPanel;