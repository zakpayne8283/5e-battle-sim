// Libraries
import { useState } from 'react'

// Local imports
import type { Entity } from './types/Entity';

// CSS
import "./App.css"

function App() {
  // Define the entities, which will be creatures, players, etc
  const [entities, setEntities] = useState<Entity[]>([]);

  // Add a new entity to the game
  const addEntity = () => {
    // Generate the ID
    const newId = `entity${entities.length + 1}`;

    // Create the object
    const newEntity: Entity = {
      id: newId,
      health: 12,
      initiative: 0
    }

    // Update list of entities
    setEntities(prev => [...prev, newEntity]);
  }

  return (
    <>
      <h1>5E Battle Sim</h1>
      <div>
        <button onClick={addEntity}>
          Add Entity
        </button>
      </div>
      {entities.map(entity => (
        <div key={entity.id}>
          Entity {entity.id} - Initiative: {entity.initiative}
        </div>
      ))}
    </>
  )
}

export default App
