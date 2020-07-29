<template>
  <div class="task"
    @click="$emit('taskStateChanged', task)"
    :class="stateClass">
    <span @click.stop="$emit('taskDeleted',task)" class="close">x</span>
      <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true }
    },
    computed: {
        stateClass(){
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
}
</script>

<style>
    .task{
        position: relative;
        box-sizing: border-box;
        width: 200px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending{
        border-left: 12px solid darkred;
        background-color: red;
    }

    .done {
        color: darkgrey;
        border-left: 12px solid darkgreen;
        background-color: green;
        text-decoration: line-through;
    }   

    .pending .close{
        background-color: darkred;
    }

    .done .close{
        background-color: darkgreen
    }

    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>