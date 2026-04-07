# Todo List App

A simple and clean Todo List web application built with React. It lets users add tasks, delete tasks, and keep todos saved in browser local storage so data is available after refresh.

## Live Features

- Add a new todo with title and description
- Delete existing todos
- Client-side form validation for empty fields
- Persistent todos using browser local storage
- Routing with separate Home and About pages
- Responsive UI using Bootstrap 5

## Tech Stack

- React (Create React App)
- React Router
- Bootstrap 5 (CDN)
- LocalStorage API

## Project Structure

```
todo-list/
	public/
		index.html
	src/
		components/
			About.js
			AddTodo.js
			Footer.js
			Header.js
			TodoItem.js
			Todos.js
		App.js
		index.js
	package.json
	README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd todo-list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm start
```

The app will run at http://localhost:3000.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects CRA configuration (irreversible)

## How It Works

- Todos are initialized from local storage when the app starts
- New todos are added to React state in `App.js`
- Deleting a todo filters it out from state
- A `useEffect` hook syncs todos to local storage whenever the todo list changes

## Future Improvements

- Mark todo as completed
- Edit/update existing todos
- Add due dates and priorities
- Add category filters and search
- Replace alerts with inline validation messages

## Contributing

Contributions are welcome. Fork the repository, create a new branch, make your changes, and open a pull request.

## License

This project is open source and available under the MIT License.
