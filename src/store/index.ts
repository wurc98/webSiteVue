import { createStore } from 'vuex'

interface State {
    userName: string
    taskList: any[]
}

export default createStore({
    state: {
        userName: "王大合",
        taskList: [],
    },
    getters:{
        getUserName(state:State){
            return state.userName
        }
    },
    mutations: {
        createTask(state: State, newTask: string) {
            state.taskList.push(newTask)
        },
        deleteTask(state: State, index: number) {
            state.taskList.splice(index, 1)
        },
        updateStatus(state: State, payload: any) {
            const { index, status } = payload

            state.taskList[index].isfinished = status
        }
    }
});