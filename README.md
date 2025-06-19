
# ✅ React Todo App using Context API

A fully functional Todo List application built using **React**, **Context API**, and **Tailwind CSS**. The app supports adding, editing, completing, and deleting todos, with **persistent storage using `localStorage`**.

---

## 📦 Features

- Add new todos
- Edit existing todos
- Mark todos as completed/uncompleted
- Delete todos
- Auto-save todos to `localStorage`
- Fully styled with Tailwind CSS
- Global state management using Context API

---

## 🛠️ Tech Stack

- ⚛️ React (Hooks, Functional Components)
- 🎯 Context API for state management
- 💾 LocalStorage for data persistence
- 🎨 Tailwind CSS for styling
- 🔀 JavaScript (ES6+)

---

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── TodoForm.jsx      // Input field + Add button
│   └── TodoItem.jsx      // Each todo item with edit, delete, complete
│
├── contexts/
│   └── TodoContext.js    // React Context logic for global state
│
├── App.jsx               // Main app with all logic and provider
└── index.css / main.jsx  // Tailwind CSS & entry point
```

---

## 🔄 How It Works

### 1. **Context Setup**

We use `createContext()` to create `TodoContext`:
```js
export const TodoContext = createContext(defaultValue)
```

Then we wrap the app with the provider in `App.jsx`:
```js
<TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
```

All components now have access to these via a custom hook:
```js
export const useTodo = () => useContext(TodoContext);
```

---

### 2. **State & Logic in `App.jsx`**

We keep the main todo list in state:

```js
const [todos, setTodos] = useState([]);
```

#### ✅ Add Todo
```js
setTodos(prev => [{ id: Date.now(), ...todo }, ...prev]);
```

#### ✏️ Update Todo
```js
setTodos(prev => prev.map(t => t.id === id ? updatedTodo : t));
```

#### ❌ Delete Todo
```js
setTodos(prev => prev.filter(t => t.id !== id));
```

#### ✅ Toggle Completion
```js
setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
```

---

### 3. **LocalStorage Integration**

To persist todos across reloads:

#### ✅ Load on mount:
```js
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos?.length) setTodos(todos);
}, []);
```

#### 💾 Save on change:
```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

---

### 4. **TodoForm Component**

- Uses `useState` to manage input text
- Calls `addTodo()` from context on submit
- Clears input after adding

```js
addTodo({ todo, completed: false });
```

---

### 5. **TodoItem Component**

Each todo can be:
- Toggled (via checkbox)
- Edited (via input + save button)
- Deleted (via ❌ button)

The component uses:
```js
updateTodo(todo.id, { ...todo, todo: todoMsg });
toggleComplete(todo.id);
deleteTodo(todo.id);
```

It manages local state for editing via:
```js
const [isTodoEditable, setIsTodoEditable] = useState(false);
```

---

## 💡 Code Highlights

- **`Date.now()`** used for unique IDs.
- **Spread operator** (`{ ...todo, todo: updatedMessage }`) ensures immutability.
- **Controlled inputs** maintain form data in state.
- **Tailwind CSS** provides fast styling without writing custom CSS.

---

## 📷 Screenshots
![Screenshot 2025-06-19 145233](https://github.com/user-attachments/assets/52da76c5-13ca-4ebf-97c2-3a293cabb9df)


---

## 🚀 How to Run Locally

```bash
git clone <repo-url>
cd <project-directory>
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧠 Key Learnings

- Using **Context API** for clean state management across components
- **Avoiding prop drilling** with `useContext()`
- Leveraging **custom hooks** for cleaner access
- Persisting state with **localStorage**
- Practicing React patterns with **functional components & hooks**

---

## 📌 Improvements You Can Try

- Add filters (All, Active, Completed)
- Use `uuid` instead of `Date.now()` for better ID generation
- Add animations with `Framer Motion`
- Add authentication and save todos per user using Firebase or Supabase

---
<!-- 
Built a modular React Todo application leveraging Context API and Hooks for global state management, featuring persistent data storage with localStorage and a responsive UI styled using Tailwind CSS. -->
