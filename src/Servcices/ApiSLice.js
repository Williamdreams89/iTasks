import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const APISlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  tagTypes: ["Todolist"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todo_api/todos/",
      providesTags: ["Todolist"],
    }),
    createTodo: builder.mutation({
      query: (todoItem) => ({
        url: "/todo_api/add_new_task/",
        method: "POST",
        body: todoItem,
      }),
      invalidatesTags: ["Todolist"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todo_api/remove_task/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todolist"],
    }),
    todoDetail: builder.query({
      query: (todoItem) => ({
        url: `/todo_api/view_task/${todoItem.id}`,
      }),
      providesTags: ["Todolist"],
    }),
    editTodoStatus: builder.mutation({
      query: (todoItem) => ({
        url: `/todo_api/edit_task/${todoItem.id}/`,
        method: "PATCH",
        body: todoItem,
      }),
      invalidatesTags: ["Todolist"],
    }),


    // Authentication Services

    loginUser: builder.mutation({
      query: ({username, password}) => ({
        url: "/accounts/api/auth/login",
        method: "POST",
        body : {username, password}
      })
    })
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useTodoDetailQuery,
  useEditTodoStatusMutation,
  useLoginUserMutation
} = APISlice;
