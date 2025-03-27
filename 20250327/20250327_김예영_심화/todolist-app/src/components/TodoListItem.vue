<template>
  <li
    class="list-group-item"
    :key="todoItem.id"
    :class="{ 'list-group-item-success': todoItem.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      v-model="todoItem.completed"
      @click="toggleCompletedHandler(todoItem.id)"
    />

    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
    </span>

    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('deleteTodo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>

<script setup>
const props = defineProps({
  todoItem: { type: Object, required: true },
});
const toggleCompletedHandler = (id) => {
  emit('toggle-completed', id);
};
const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
