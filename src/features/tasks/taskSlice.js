import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Tasks: [{
        id: 1,
        taskname: 'Running ',
        discription: 'on park',
        startTime: '11:00',
        endTime: '11:15'
    }, {
        id: 2,
        taskname: 'walkingh ',
        discription: 'on park',
        startTime: '12:00',
        endTime: '12:15'
    }, {
        id: 3,
        taskname: 'walkingh ',
        discription: 'on park',
        startTime: '13:15',
        endTime: '14:15'
    }, {
        id: 4,
        taskname: 'walkingh ',
        discription: 'on park',
        startTime: '15:00',
        endTime: '16:00'
    }],

    ById: {}

}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setCreateTask: (state, action) => {
            state.Tasks.push(action.payload);
            console.log(state.Tasks)
        },
        setEditTask: (state, action) => {
            // state.Tasks.push(action.payload);
            // const index = arr.findIndex((el) => el === 2);
            // arr[index] = 0;
            // arr;
            let Tasks = [...state.Tasks];
            const index = state.Tasks.findIndex((item) => item.id === action.payload.id)
            // console.log("innn", index)
            if (index >= 0) {
                Tasks[index] = action.payload
            } else {
                console.log(`cant remove task id ${action.payload.id}`)
            }
            return { Tasks }
        },
        setDeletTask: (state, action) => {
            let Tasks = [...state.Tasks];
            const index = state.Tasks.findIndex((item) => item.id === action.payload.id)
            // console.log("innn", index)
            if (index >= 0) {
                Tasks.splice(index, 1)
            } else {
                console.log(`cant remove task id ${action.payload.id}`)
            }
            return { Tasks }
        },
        selectTaskById: (state, action) => {
            state.ById = action.payload.data
        },
    }
})

export const { setCreateTask, setEditTask, setDeletTask, selectTaskById } = taskSlice.actions;

export const selectTask = (state) => state.task.Tasks;
export const selectTaskId = (state) => state.task.ById;


export default taskSlice.reducer;