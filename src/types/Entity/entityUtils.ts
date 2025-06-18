import type { Entity } from './Entity';

let entityCount = 0;

export function createNewEntity(existingEntities: Entity[]) : Entity {
    entityCount += 1;

    return {
        id: `entity${entityCount}`,
        health: 100,
        initiative: 0
    }
}