import React, { createContext, useContext, useReducer } from 'react';
import type { Entity } from './Entity/Entity';
import type { Action } from './Action/Action';
import { createNewEntity, entityAttacksEntity } from './Entity/entityUtils';

// Define state object
type State = {
    entities: Entity[];
    combatStarted: boolean;
    currentEntity: Entity | null;
};

// Define actions
type ContextAction =
  | { type: 'ADD_ENTITY'; }
  | { type: 'START_COMBAT'; }
  | { type: 'ATTACK_ENTITY'; payload: { attackerId: string; recieverId: string; action: Action } };


// Set the initial state
const initialState: State = { entities: [], combatStarted: false, currentEntity: null };

// Setup Reducer
function gameReducer(state: State, contextAction: ContextAction) : State {
    // Handle specific actions
    switch (contextAction.type) {
        // Add new Entity
        case 'ADD_ENTITY':
            const updatedList = [...state.entities, createNewEntity(state.entities)];
            const sortedEntities = updatedList.sort((a, b) => b.initiative - a.initiative)

            return {
                ...state,
                entities: sortedEntities
            };
        case 'START_COMBAT':
            return {
                ...state,
                combatStarted: true,
                currentEntity: state.entities[0]
            };
        case 'ATTACK_ENTITY':
            const attacker = state.entities.filter(e => e.id === contextAction.payload.attackerId)[0];
            const reciever = state.entities.filter(e => e.id === contextAction.payload.recieverId)[0];
            const action = contextAction.payload.action;

            // Update the list of entities following the attack
            let updatedEntities = state.entities.map(e => e.id == reciever.id ? entityAttacksEntity(attacker, reciever, action) : e);

            // Remove any dead entities
            updatedEntities = updatedEntities.filter(e => e.currentHealth > 0);

            return {
                ...state,
                entities: updatedEntities
            }
        default:
            return state;
    }
}

// Create the game context
const GameContext = createContext<{
    state: State;
    dispatch: React.Dispatch<ContextAction>;
} | null>(null);

// Create the provider Object/Component
export const GameProvider = ({ children }: { children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    return (
        <GameContext.Provider value={{state, dispatch}}>
            { children }
        </GameContext.Provider>
    )
}

// Export the useGame function
export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error('useGame must be used within provider');
    return context;
}