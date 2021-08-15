<template>
  <div class="bg-support-100 w-full shadow-md rounded">
    <div class="flex flex-row flex-nowrap p-2 md:p-6">
      <label
        ><span
          class="cursor-pointer inline-block"
          :class="item.checked ? 'text-highlight-light' : 'text-support-400'"
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
        <input class="hidden" type="checkbox" v-model="item.checked" />
      </label>
      <input
        class="
          w-3/4
          px-2
          py-1
          ml-1.5
          outline-none
          bg-support-100
          placeholder-black
          border-2 border-support-100
          focus:border-highlight-light
        "
        type="text"
        placeholder="Type Something Here..."
        v-model="item.title"
      />
      <span
        class="ml-6 cursor-pointer"
        @click="item.star = !item.star"
        :class="item.star ? 'text-highlight-light' : 'text-support-400'"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          /></svg
      ></span>
      <span class="ml-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
      </span>
    </div>
    <hr />
    <div class="mx-4 md:mx-12 my-6 space-y-2">
      <div class="">
        <p class="">
          <span class="inline-block"
            ><svg
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
              /></svg
          ></span>
          Deadline
        </p>
        <div class="mx-7">
          <!-- https://github.com/nathanreyes/v-calendar -->
          <div class="relative">
            <date-picker
              class="absolute top-0 -left-9 md:left-0"
              v-model="item.deadline"
              :min-date="new Date()"
              mode="dateTime"
              is24hr
              is-expanded
            ></date-picker>
          </div>
        </div>
      </div>
      <div class="">
        <label class=""
          ><span class="mr-1 inline-block"
            ><svg
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
              /></svg></span
          >File<input class="hidden" type="file" @change="previewFiles" />
          <div class="mx-7 my-1">
            <span class="mr-1">{{ inputFilesPrompt }}</span
            ><span class="bg-support-300 p-1 text-white hover:bg-primary"
              >＋</span
            >
          </div>
        </label>
      </div>
      <div class="">
        <p class="">
          <span class="inline-block"
            ><svg
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
              /></svg
          ></span>
          Comment
        </p>
        <div class="mx-7 my-1">
          <textarea
            class="
              bg-white
              placeholder-support-300
              px-2
              py-1
              w-full
              outline-none
              focus:border-highlight-light
              focus:ring-1 focus:ring-highlight-light
              border-2 border-support-100
              rounded-sm
            "
            rows="7"
            placeholder="Type your memo here..."
            v-model="item.comment"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="flex">
      <button
        class="bg-white text-warning w-1/2 py-2 hover:bg-support-500"
        @click="$emit('cancel')"
      >
        × Cancel
      </button>
      <button
        class="bg-primary text-white w-1/2 py-2 hover:bg-support-600"
        @click="$emit('addTask', item)"
      >
        {{ editMode ? "＋ Save" : "＋ Add Task" }}
      </button>
    </div>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
export default {
  components: { DatePicker },
  mounted() {
    if (this.editTask) {
      this.editMode = true;
    }
    for (const o in this.editTask) {
      this.item[o] = this.editTask[o];
    }
  },
  emits: ["cancel", "addTask"],
  props: {
    editTask: {
      title: {
        type: String,
        default: "",
      },
      files: {
        type: Array,
        default() {
          return [];
        },
      },
      comment: {
        type: String,
        default: "",
      },
      star: {
        type: Boolean,
        default: false,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      deadline: {
        type: Date,
        default() {
          return new Date();
        },
      },
    },
  },
  data: () => ({
    item: {
      title: "",
      files: [],
      comment: "",
      star: false,
      checked: false,
      deadline: new Date(),
    },
    editMode: false,
  }),
  computed: {
    inputFilesPrompt() {
      if (this.item.files.length === 1) {
        return this.item.files[0].name;
      }
      if (this.item.files.length === 2) {
        return `${this.item.files.length} 個附件檔案`;
      }
      return "";
    },
  },
  methods: {
    previewFiles(e) {
      this.item.files = e.target.files;
    },
  },
};
</script>