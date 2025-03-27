<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todo in todoList"
          :key="todo.id"
          :todoItem="todo"
          @toggle-completed="emit('toggle-completed', $event)"
          @delete-todo="emit('delete-todo', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

// 부모로부터 전달 받은 데이터 수신 + 유효성 검사
const props = defineProps({
  todoList: { type: Array, required: true },
});

const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
