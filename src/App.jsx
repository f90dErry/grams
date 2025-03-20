import { BrowserRouter as Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
