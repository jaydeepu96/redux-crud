import React from 'react'
import { withRouter } from 'react-router-dom'
import CreateTask from './CreateTask'
function EditTask() {
    return (
        <div>
            <CreateTask Edit={true} />
        </div>
    )
}

export default withRouter(EditTask)
