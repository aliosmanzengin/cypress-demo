///<reference types="cypress" />

import {navigate,
        addTodo,
        validateTodoText,
        clearCompleted,
        showAllTodos,
        showOnlyActiveTodos,
        showOnlyCompletedTodos,
        toggleTodo,
        validateNumberOfTodosShown,
        validateTodoCompletedState,
        validateToggleState} from '../page-objects/todo-page'

describe('todo actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    navigate()

    addTodo('Clean room')
  })

  it('should add a new todo to the list', () => {
    validateTodoText(0, 'Clean room')

    validateToggleState(0, false)
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      toggleTodo(0)
      validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      toggleTodo(0)

      clearCompleted()

      validateNumberOfTodosShown(0)
    })
  })
})
/*

import { TodoPage } from "../page-objects/todo-page"


describe('todo actions',()=>{
    const todoPage = new TodoPage()

    beforeEach( () => {
        todoPage.navigate()
    
        todoPage.addTodo('Clean Room')
    })
    it('should add a new todo to the list', () => {        
    
        todoPage.validateTodoTxt(0,'Ckeab Room')
        cy.get('.toggle').should('not.be.checked')
        
    })
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('.toggle').should('be.checked')
        cy.get('label').should('have.css','text-decoration-line', 'line-through')
    
    })
    
    it('should clear completed todos', () => {
        cy.contains('Clear comple').click()
        cy.get('.todo-list').should('not.have.descendants','li')
    })
})
*/

