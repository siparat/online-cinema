import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { router } from '@/shared'

function App() {
  return <RouterProvider router={router} />
}

export default App
