import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { FcFullTrash, FcFile } from "react-icons/fc";
import {
  useCreateTodoMutation,
  useGetTodosQuery,
  useDeleteTodoMutation,
  useEditTodoStatusMutation,
} from "../Servcices/ApiSLice";
import { Link } from "react-router-dom";

const TodolistContainer = styled.div`
  width: 90%;
  margin: 3rem auto;

  form {
    width: 100%;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 3rem;

    input {
      box-shadow: 2px 2px 5px lightblue, -2px -2px 5px lightblue;
      border: none;
      outline: none;
      width: 70%;
      padding: 7px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 900px){
    width: 60%
  }
`;

function Todolist() {
  const {
    data: todos,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetTodosQuery();

  console.log(todos)

  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState(false);
  const [createTodo] = useCreateTodoMutation();
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTodo({ title: newTodo, task_manager: "william" });

    setNewTodo("");

    e.target.reset();
  };

  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodoStatus] = useEditTodoStatusMutation();

  return (
    <TodolistContainer>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="New Task?"
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button className="btn btn-dark" type="submit">Save Task</button>
      </form>
      {isLoading && <p>...Loading: Please Wait</p>}
      {isError && <p>{error.message}</p>}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess &&
            todos &&
            todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.created}</td>
                <td>
                  <Link to={`/todolist/${todo.id}`}>{todo.done ? <p><del>{todo.title}</del>{todo.id}</p>: <p>{todo.title}</p>}</Link>
                </td>
                <td
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    editTodoStatus({
                      id: todo.id,
                      done: done,
                    })
                  }
                >
                  {todo.done ? <p>Completed</p> : <p>Not Completed</p>}
                  <input
                    type="checkbox"
                    name="done"
                    id={todo.id}
                    checked={todo.done}
                    onChange={(event) => {setDone(!done); event.preventDefault()}}
                  />
                </td>
                <td>
                  <FcFile style={{ cursor: "pointer" }} />
                </td>
                <td>
                  <FcFullTrash
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTodo({ id: todo.id })}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {}
    </TodolistContainer>
  );
}

export default Todolist;
