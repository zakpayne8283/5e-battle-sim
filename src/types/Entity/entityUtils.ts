import type { Action } from '../Action/Action';
import type { Entity } from './Entity';
import entityData from '../../data/entities.json'

export function createNewEntity(entities : Entity[]) : Entity {

    // Choose a random entity from the list
    const templates = entityData.entities;
    const randomEntity = templates[Math.floor(Math.random() * templates.length)];

    // Add the number of entities with the same name to the new one's name
    const entityName = randomEntity.name + "#" + (entities.filter(e => e.name.indexOf(randomEntity.name) > -1).length + 1);

    return {
        id: `entity-${crypto.randomUUID()}`,
        name: entityName,
        maxHealth: randomEntity.maxHealth,
        currentHealth: randomEntity.maxHealth,
        initiative: Math.floor(Math.random() * 20) + 1 + randomEntity.initiativeBonus,
        actions: randomEntity.actions as Action[]
    }
}

/// Returns: entity that was attacked with the new health
export function entityAttacksEntity(attacker: Entity, reciever: Entity, action: Action) : Entity {
    
    // TODO: Do this using types by making an ActionResult type instead
    const damageDie = (action.actionResult as { damageDie: number }).damageDie;
    const damage = Math.floor(Math.random() * damageDie)

    reciever.currentHealth -= damage;

    return reciever;
}