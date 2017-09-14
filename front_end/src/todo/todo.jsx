import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForms from './todoForms'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' smal='Cadastro' />
        <TodoForms />
        <TodoList />
    </div>
)
