import { useState } from 'react'
import Input from './Comp/Input'
import List from './Comp/list'
import './App.css'

function App() {
  
  return (
    <main className="app-shell">
      <section className="todo-card">
        <h1 className="app-title">My Tasks</h1>
        <p className="app-subtitle">Capture tasks and move through them with clarity.</p>
        <Input />
        <List />
      </section>
    </main>
  )
}

export default App
