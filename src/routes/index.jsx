import styles from './Routes.module.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './MainPage'
import Writepage from './WritePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/write',
    element: <Writepage />,
  },
])
function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
