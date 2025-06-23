import { useState } from 'react';

// Local imports
import type { Entity } from '../../types/Entity/Entity';
import type { Action } from '../../types/Action/Action';
import ActionDetails from '../ActionDetails/ActionDetails';

// CSS
import './ActionsPanel.css';

type ActionsPanelProps = {
    currentEntity: Entity;
}

function ActionsPanel({ currentEntity } : ActionsPanelProps) {
    const [selectedAction, setSelectedAction] = useState<Action | null>(null);

    return(
        <>
        {
            currentEntity.actions.map((action, i) => (
                <div key={i}>
                    <button onClick={() => setSelectedAction(action)}>
                        {action.name}
                    </button>
                </div>
            ))
        }
        {
            selectedAction != null ? (
                <ActionDetails currentAction={selectedAction} />
            ) : <></>
        }
        </>
    );
}

export default ActionsPanel;