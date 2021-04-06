function Header ({onAddTodo}){
    function submit(event) {
        event.preventDefault();
        const form = event.target;
        onAddTodo(form.todo.value);
        form.reset();
    }

    return (
        <header className="Header">
            <form onSubmit={submit}>
                <input
                    id="todo"
                    name="todo"
                    type="text"
                    placeholder="Add ToDo"
                    required/>
                <button className="addButton" type="submit">Add</button>
            </form>
        </header>
    );
}

export default Header;