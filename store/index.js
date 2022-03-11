export const state = () => ({
    tasks:[]
})

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{content: task, done: false}, ...state.tasks]
    },

    REMOVE_TASK (state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    TOGGLE_TASK (state, task) {
        task.done = !task.done;
    }, 
    DELETE_COMPLETED (state) {
        state.tasks = state.tasks.filter(t => !t.done)
    }, 
    DELETE_ALL (state) {
        state.tasks = [];
    }
}