import { todoListState } from "../states/atoms";
import TodoItemCreator from "./TodoItemCreator";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}

export default TodoList;
