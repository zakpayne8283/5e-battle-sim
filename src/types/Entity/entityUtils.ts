import type { Entity } from './Entity';

export function createNewEntity() : Entity {

    return {
        id: `entity-${crypto.randomUUID()}`,
        name: 'entity',
        maxHealth: 12,
        currentHealth: 12,
        initiative: 0
    }
}