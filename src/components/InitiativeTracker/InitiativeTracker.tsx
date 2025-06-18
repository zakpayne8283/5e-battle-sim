// Libraries
import { useState } from 'react'

// Local Imports
import type { Entity } from '../../types/Entity';

// CSS
import './InitiativeTracker.css';

type InitiativeTrackerProps = {
    entities: Entity[];
}

function InitiativeTracker({ entities }: InitiativeTrackerProps){
    // Sort entities by the turn order

    return(
        <div id="InitiativeTracker">
            {entities.map(entity => (
                <div key={entity.id}>
                {entity.id} - {entity.initiative}
                </div>
            ))}
        </div>
    );
}

export default InitiativeTracker;