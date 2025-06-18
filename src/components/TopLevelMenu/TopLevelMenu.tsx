// Libraries
import { useState } from 'react'

// Local Imports
import type { Entity } from '../../types/Entity';

// CSS
import './TopLevelMenu.css';

function TopLevelMenu(){
    return(
        <div id="TopLevelMenu">
            <button id="AddEntity">Add Entity</button>
        </div>
    )
}

export default TopLevelMenu;