import React from 'react'
import {useParams} from "react-router-dom"
import { useTodoDetailQuery } from '../Servcices/ApiSLice'

const TodoDetailPage = () => {
    const {todoId} = useParams()
    const { data: myTodo, isFetching, isSuccess}= useTodoDetailQuery(todoId)
  return (
    <div>
        Welcome to Detail Page
        {isFetching && <p>...Loading</p>}
        {isSuccess && myTodo && myTodo.title}
    </div>
  )
}

export default TodoDetailPage