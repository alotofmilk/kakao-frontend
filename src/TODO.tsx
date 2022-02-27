import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";

type ToDoType = {
  id: number;
  todo: string;
};

const ToDoList = (): JSX.Element => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<ToDoType[]>([]);

  const updateTODO = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const registerTODO = async () => {
    await axios.post("http://localhost:5000/todos", { todo: todoText });
    setTodoText("");
    await getToDolist();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete("http://localhost:5000/todos/${id}");
    await getToDolist();
  };

  const getToDolist = async () => {
    const { data } = await axios.get<ToDoType[]>("http://localhost:5000/todos");
    setTodoList(data);
  };

  useEffect(() => {
    getToDolist();
  }, []);

  return (
    <>
      <section>
        <input type="text" onChange={updateTODO} value={todoText} />
        <button onClick={registerTODO}>save</button>
      </section>
      {todoList.map((todo: ToDoType) => {
        return (
          <section key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </section>
        );
      })}
    </>
  );
};

export default ToDoList;
