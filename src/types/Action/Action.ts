type ActionType = 
    'ATTACK_SINGLE'     |
    'ATTACK_MULTIPLE'   ;

export type Action = {
    name: string,
    actionType: ActionType,
    actionCost: number,
    actionResult: object
}