
# 📝 Note Making App

A frontend-only note-taking application built using **ReactJS**.
The project demonstrates clean **component-based architecture**, **state management using React hooks**, and proper **UI validation**, without using Redux Toolkit, Context API, or a backend.

---

## 🚀 Features
- Create notes with title and description
- Title validation (required field)
- Submit button disabled when title is empty
- Error handling and user feedback
- Render multiple notes dynamically
- Delete individual notes
- Notes persist using browser localStorage
- Simulated loading state to mimic API behavior

---

## 🛠️ Tech Stack
- ReactJS
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- localStorage

---

## 📂 Project Structure
```text
src/
├── components/
│   ├── NoteForm.jsx      # Handles note creation & validation
│   ├── NoteList.jsx      # Renders list of notes using map()
│   └── NoteItem.jsx      # Represents a single note with delete action
│
├── App.jsx               # Root component & global notes state
├── main.jsx              # Application entry point
└── index.css             # Global styles
```
▶️ How to Run Locally

Clone the repository:
git clone <repository-url>

Navigate to the project directory:

cd Note_Management_App

Install dependencies:

npm install

Start the development server:
npm run dev
Open in browser:
http://localhost:5173

## Assumptions

- **Single-user usage:** Notes are stored in the browser’s local storage and are not shared across devices or users.
- **Title is mandatory:** Every note must have a title. Description is optional.
- **Local storage as persistence:** Notes are stored locally in the browser. It is assumed the user will use the same browser to access their notes.
- **Browser support:** The app assumes modern browsers that support ES6 features and the localStorage API.
- **Small dataset:** The app assumes that the user will not create an extremely large number of notes, as local storage has size limitations (~5MB per domain).

## Limitations

- **No multi-user support:** Cannot handle multiple users or authentication; all notes are stored locally per browser.
- **Limited data persistence:** Clearing browser cache or local storage will remove all notes.
- **No database integration:** Currently uses local storage only; the app cannot scale for server-side storage or online access.
- **No rich text support:** Notes support only plain text. No formatting, attachments, or images.
- **No search or filtering:** Users cannot search, sort, or filter notes.
- **UI responsiveness:** Basic UI responsiveness is provided, but it may not be fully optimized for all screen sizes.

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

