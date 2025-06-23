import { useGame } from '../../types/GameContext';
import type { Action } from "../../types/Action/Action";

type ActionDetailsProps = {
    currentAction: Action;
}

function ActionDetails({ currentAction } : ActionDetailsProps) {
    const { state } = useGame();

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
                { targets != null && targets.map((t, i) => (
                    <button key={i}>
                        {t.name}
                    </button>
                ))}
            </div>
        </>
    )
}

export default ActionDetails;