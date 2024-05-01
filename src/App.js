import {Component} from 'react'
import './App.css' // Import the CSS file for styling

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      todosCount: 0,
      inputValue: '',
    }
  }

  handleAddTodo = () => {
    const {inputValue, todoList, todosCount} = this.state
    if (inputValue.trim() === '') {
      alert('Enter Valid Text')
      return
    }

    const newTodo = {
      text: inputValue,
      uniqueNo: todosCount + 1,
      isChecked: false,
    }

    this.setState({
      todoList: [...todoList, newTodo],
      todosCount: todosCount + 1,
      inputValue: '',
    })
  }

  handleTodoStatusChange = todoId => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.uniqueNo === todoId ? {...todo, isChecked: !todo.isChecked} : todo,
      ),
    }))
  }

  handleDeleteTodo = todoId => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.uniqueNo !== todoId),
    }))
  }

  render() {
    const {inputValue, todoList} = this.state

    return (
      <div className="todos-bg-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">Todos</h1>
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <input
                type="text"
                value={inputValue}
                onChange={e => this.setState({inputValue: e.target.value})}
                className="todo-user-input form-control"
                placeholder="What needs to be done?"
              />
              <button
                type="button"
                className="button"
                onClick={this.handleAddTodo}
              >
                Add
              </button>
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container">
                {todoList.map(todo => (
                  <li
                    key={todo.uniqueNo}
                    className={`todo-item-container ${
                      todo.isChecked ? 'checked' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={() =>
                        this.handleTodoStatusChange(todo.uniqueNo)
                      }
                      className="checkbox-input"
                    />
                    <div className="label-container d-flex flex-row">
                      <label
                        htmlFor={`checkbox${todo.uniqueNo}`}
                        className="checkbox-label"
                      >
                        {todo.text}
                      </label>
                      <div className="delete-icon-container">
                        <p
                          className="far fa-trash-alt delete-icon"
                          onClick={() => this.handleDeleteTodo(todo.uniqueNo)}
                        >
                          .
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button type="button" className="button" id="saveTodoButton">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todos
