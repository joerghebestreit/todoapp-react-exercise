import Todo from "./todo.js"

function TodoList ({todos, onToggleComplete, onDelete}) {
    function renderTodos(){
        return todos.map((todo, index) => {
            return (<Todo
                key={index}
                name={todo.name}
                isComplete={todo.isComplete}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}/>);
        });
    }
    return <main className="main">{renderTodos()}</main>;
}

export default TodoList;