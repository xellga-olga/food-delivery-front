import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <main className="app">
      <Header />
      <section className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
