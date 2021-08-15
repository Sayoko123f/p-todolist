# Todolist 待辦事項清單
使用 Vue 3 和 Tailwindcss 

## Demo
[Demo](https://sayoko123f.github.io/p-todolist/)

### 功能
為待辦事項標示 **已完成/未完成**
![demo 1](https://github.com/Sayoko123f/p-todolist/blob/master/demo/todo-demo-1.gif)

為待辦事項標示 **星號** 使其醒目顯示

**可拖曳**待辦事項改變其在列表上的順序
![demo 2](https://github.com/Sayoko123f/p-todolist/blob/master/demo/todo-demo-2.gif)

**統計** 已完成/未完成 待辦事項的數量

**新增**一個待辦事項：可設定截止日、選擇檔案、註解
![demo 3](https://github.com/Sayoko123f/p-todolist/blob/master/demo/todo-demo-3.gif)

點擊 筆 **編輯**

RWD 設計

![demo 4](https://github.com/Sayoko123f/p-todolist/blob/master/demo/todo-demo-4.PNG)
![demo 5](https://github.com/Sayoko123f/p-todolist/blob/master/demo/todo-demo-5.PNG)

## 技術細節
### 引用的套件
- Vue 3
- Tailwindcss
- [v-calendar](https://github.com/nathanreyes/v-calendar) (時間日期選擇器)
- [vuedraggable](https://github.com/SortableJS/vue.draggable.next) (拖曳功能)

### 細節
- 以 webpack 5 構建使用模組方式載入各依賴項，壓縮程式碼加快打包速度
- 自訂 Tailwindcss 各種設定
- 將頁面拆分成 Vue 組件增加可維護性

### Reference
- [Building animated draggable interfaces with Vue.js and Tailwind](https://www.binarcode.com/blog/building-animated-draggable-interfaces-with-vuejs-and-tailwind/)
- [hexschool](https://hexschool.github.io/THE_F2E_Design/todolist/)