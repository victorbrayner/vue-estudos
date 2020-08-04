<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pa-sm bg-primary">
      <q-input 
        class="col"
        @keyup.enter="addTask"
        square
        filled
        bg-color="white"
        v-model="newTask"
        placeholder="Adicionar Tarefa"
        dense>
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addTask" />
        </template>
      </q-input>
    </div>

    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple>
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
            class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side>
          <q-btn flat round color="primary" icon="delete"
            dense @click.stop="deleteTask(index)" />
        </q-item-section>
      </q-item>
    </q-list>

    <div 
      v-if="!tasks.length"
      class="no-tasks absolute-center">
      <q-icon
        name="check"
        size="100px"
        color="primary" />
      <div class="text-h5 text-primary text-center">
        Sem tarefas
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newTask:'',
      tasks:[]
    }
  },
  methods: {
        deleteTask(index){
          this.$q.dialog({
            title: 'Confirmar',
            message: 'Você deseja deletar a tarefa?',
            cancel: true,
            persistent: true
          }).onOk(() => {
            this.tasks.splice(index, 1)
            this.$q.notify('Tarefa Deletada')
          })
        },
        addTask(event){
          this.tasks.push({
            title: this.newTask,
            done: false
            })
          this.newTask = ''
        }
  },
}
</script>

<style lang="scss">
  .done {
    .q-item__label{
      text-decoration: line-through;
      color: #bbbbbb;
    }
  }

  .no-tasks{
    opacity: 0.5;
  }
</style>