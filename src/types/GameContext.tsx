import React, { createContext, useContext, useReducer } from 'react';
import type { Entity } from './Entity/Entity';
import { createNewEntity } from './Entity/entityUtils';

// Define state object
type State = {
    entities: Entity[];
    combatStarted: boolean;
    currentEntity: Entity | null;
};

// Define actions
type Action =
  | { type: 'ADD_ENTITY'; }
  | { type: 'START_COMBAT'; };


// Set the initial state
const initialState: State = { entities: [], combatStarted: false, currentEntity: null };

// Setup Reducer
function gameReducer(state: State, action: Action) : State {
    // Handle specific actions
    switch (action.type) {
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
        default:
            return state;
    }
}

// Create the game context
const GameContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
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