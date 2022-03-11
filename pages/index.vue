<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input 
      type="text" 
      v-model="newTask" 
      placeholder="Add a new task" 
      @keypress.enter="addTask" />
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <!-- Components -->
      <Task 
      v-for="(task, i) in $store.state.tasks"
      :key="i"
      :task="task" />
    </div>
    <div class="button-wrap" style="display: flex">
    <button @click="delete_completed" class="delete">Delete All Done Tasks</button>
    <button @click="delete_all" class="delete">Delete ALL</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTask: ""
    }
  },

  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = "";
      }
    },
    delete_completed () {
      this.$store.commit('DELETE_COMPLETED');
    },
    delete_all () {
      this.$store.commit('DELETE_ALL');
    }
  }
}
</script>
