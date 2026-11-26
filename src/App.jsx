
import Header from "./components/Header"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"
import './App.css'
import { useState, useRef } from "react"

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "1000km달림",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "50km달림",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "80km달림",
    date: new Date().getTime()
  }
]

// 기록 내용에서 거리 추출
const getDistance = (content) => {
  const match = content.match(/(\d+(?:\.\d+)?)\s*km/i)
  return match ? Number(match[1]) : 0
}

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const totalDistance = todos.reduce(
    (total, todo) => total + getDistance(todo.content),
    0
  )

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime()
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const onUpdate = (targetId, updates) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId
          ? { ...todo, ...updates }
          : todo
      )
    )
  }

  const onDelete = (targetId) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== targetId)
    )
  }

  return (
    <div className="App">
      <Header />

      <section className="summary-section">
        <h3>달리기 기록</h3>

        <div className="summary-grid">
          <div className="summary-card">
            <span>총 km</span>
            <strong>{totalDistance.toLocaleString()}<small> KM</small></strong>
          </div>

          <div className="summary-card">
            <span>기록한 횟수</span>
            <strong>{todos.length}<small> 회</small></strong>
          </div>
        </div>
      </section>

      <section className="editor-section">
        <h3>새 기록</h3>
        <TodoEditor onCreate={onCreate} />
      </section>

      <TodoList
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  )
}

export default App
