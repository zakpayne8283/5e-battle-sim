import type { Entity } from './Entity';
import entityData from '../../data/entities.json'

export function createNewEntity() : Entity {

    const templates = entityData.entities;
    const randomEntity = templates[Math.floor(Math.random() * templates.length)];

    return {
        id: `entity-${crypto.randomUUID()}`,
        name: randomEntity.name,
        maxHealth: randomEntity.maxHealth,
        currentHealth: randomEntity.maxHealth,
        initiative: Math.floor(Math.random() * 20) + 1 + randomEntity.initiativeBonus
    }
}