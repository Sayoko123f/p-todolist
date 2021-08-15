<template>
  <div class="flex flex-col items-center bg-support-200">
    <nav
      class="
        flex flex-row
        justify-center
        gap-x-1.5
        md:gap-x-4
        flex-nowrap
        w-full
        bg-primary
      "
    >
      <span :class="styleNav(1)" @click="navStatus = 1">My Tasks</span>
      <span :class="styleNav(2)" @click="navStatus = 2">In Progress</span>
      <span :class="styleNav(3)" @click="navStatus = 3">Completed</span>
    </nav>
    <div class="mt-2 flex flex-col items-center w-5/6 md:w-3/5">
      <!-- Task Add Panel -->
      <task
        @add-task="addTask"
        @cancel="showAddPanel = false"
        v-if="showAddPanel"
      ></task>
      <!-- New Task -->
      <div class="w-full">
        <input
          class="rounded h-16 border-2 border-support-300 px-2 py-0.5 w-full"
          type="text"
          placeholder="＋ Add Task"
          v-show="!showAddPanel"
          @focus="showAddPanel = true"
        />
      </div>
      <!-- Tasks List -->
      <div class="w-full">
        <draggable v-model="tasks" item-key="id">
          <template #item="{ element }">
            <div class="" v-for="item in viewTasks" :key="item.id">
              <task
                class="my-2"
                v-if="item.edit"
                :editTask="item"
                @cancel="item.edit = false"
                @add-task="editTask"
              ></task>
              <!-- divider -->
              <div
                class="my-2 p-4 md:px-6 md:py-4 rounded"
                :class="item.star ? 'bg-highlight-dark' : 'bg-support-100'"
                v-if="!item.edit"
              >
                <div class="flex justify-between">
                  <div class="">
                    <span
                      class="inline-block cursor-pointer"
                      :class="
                        item.checked
                          ? 'text-highlight-light'
                          : 'text-support-400'
                      "
                      @click="item.checked = !item.checked"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span
                      class="text-xl ml-1.5"
                      :class="{
                        'line-through': item.checked,
                        'text-support-700': item.checked,
                      }"
                      >{{ item.title }}</span
                    >
                  </div>
                  <div class="">
                    <span
                      class="inline-block cursor-pointer"
                      :class="
                        item.star ? 'text-highlight-light' : 'text-support-400'
                      "
                      @click="item.star = !item.star"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </span>
                    <span
                      class="inline-block cursor-pointer hover:text-primary"
                      @click="item.edit = true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="ml-8 mt-1 text-support-400 space-x-2">
                  <span v-if="item.deadline">{{
                    item.deadline.toLocaleDateString()
                  }}</span>
                  <span class="inline-block" v-if="item.deadline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span class="inline-block" v-if="item.files.length">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="inline-block" v-if="item.comment.length">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </template>
        </draggable>
        <!-- end v-for Tasks list -->
        <span class="p-1 text-support-300">{{ promptOfTasksNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import task from "./task.vue";
import draggable from "vuedraggable";
export default {
  mounted() {
    let item1 = {
      title: "任務一",
      files: [],
      comment: "努力努力再努力",
      star: true,
      checked: false,
      deadline: new Date(),
    };
    this.addTask(item1);
    let item2 = {
      title: "任務二",
      files: [],
      comment: "好想睡覺",
      star: false,
      checked: true,
    };

    this.addTask(item2);
  },
  components: { task, draggable },
  data: () => ({
    taskId: 0,
    showAddPanel: false,
    tasks: [],
    navStatus: 1,
  }),
  computed: {
    viewTasks() {
      if (this.navStatus === 2) {
        return this.tasks.filter((e) => e.checked === false);
      }
      if (this.navStatus === 3) {
        return this.tasks.filter((e) => e.checked === true);
      }
      return this.tasks;
    },
    promptOfTasksNumber() {
      let leftLen = this.tasks.filter((e) => e.checked === false).length;
      let completedLen = this.tasks.length - leftLen;
      let left = `${leftLen} task${leftLen > 1 ? "s" : ""} left`;
      let completed = `${completedLen} task${
        completedLen > 1 ? "s" : ""
      } completed`;
      if (this.navStatus === 2) {
        return left;
      }
      if (this.navStatus === 3) {
        return completed;
      }
      return `${left}, ${completed}.`;
    },
  },
  methods: {
    addTask(item) {
      item.id = this.taskId++;
      item.edit = false;
      this.tasks.push(item);
      this.showAddPanel = false;
    },
    editTask(item) {
      let i = this.tasks.findIndex((e) => e.id === item.id);
      for (let o in item) {
        this.tasks[i][o] = item[o];
      }
      this.tasks[i].edit = false;
      console.log(this.tasks[i]);
    },
    styleNav(status) {
      let base = ["text-lg", "py-3", "cursor-pointer"];
      let active = ["border-b-4", "border-support-800", "text-white"];
      let noActive = ["text-support-800"];
      return this.navStatus === status
        ? [...base, ...active]
        : [...base, ...noActive];
    },
  },
};
</script>

<style>
</style>