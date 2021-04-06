function Todo ({ name, isComplete, onToggleComplete, onDelete }) {

    function toggleClick(){
        onToggleComplete(name);
    }
    function deleteClick(){
        onDelete(name);
    }

    return(
        <div className="todo">
            <button className="deleteButton" onClick={deleteClick}>X</button>
            <h2 className="todoText">{name}</h2>
            <button className="completeButton" onClick={toggleClick}>{isComplete ? "Pending" : "Complete"}</button>
        </div>
    )
}

export default Todo;