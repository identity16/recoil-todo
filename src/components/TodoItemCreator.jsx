import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../states/atoms";

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((prev) => [
            ...prev,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue("");
    };

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

export default TodoItemCreator;

// 고유 ID 생성
let id = 0;
function getId() {
    return id++;
}
