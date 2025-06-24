import { useGame } from '../../types/GameContext';
import type { Action } from "../../types/Action/Action";

type ActionDetailsProps = {
    currentAction: Action;
}

function ActionDetails({ currentAction } : ActionDetailsProps) {
    const { state, dispatch } = useGame();

    let targets = null;

    switch (currentAction.actionType) {
        case "ATTACK_SINGLE":
            targets = state.entities.filter(e => e != state.currentEntity);
            break;
        case "ATTACK_MULTIPLE":
        default:
            break;
    }

    return (
        <>
            <div>{currentAction.name}</div>
            <div>
                { state.currentEntity != null && targets != null && targets.map(target => (
                    <button
                        key={target.id}
                        onClick={
                            () => dispatch(
                                {
                                    type: 'ATTACK_ENTITY',
                                    payload: {
                                        attackerId: state.currentEntity.id,
                                        recieverId: target.id,
                                        action: currentAction
                                    }
                                }
                            )}
                    >
                        {target.name}
                    </button>
                ))}
            </div>
        </>
    )
}

export default ActionDetails;