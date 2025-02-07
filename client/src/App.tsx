import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerData } from './router/routerData'
import GeneralLayout from './layout/GeneralLayout'
import './styles/global.scss'

const router = createBrowserRouter(
  routerData.map(routerElement => ({
    path: routerElement.path,
    element: (
      <GeneralLayout withAuth={routerElement.withAuth} label={routerElement.label}>
        {routerElement.element}
      </GeneralLayout>
    ),
  }))
)

function App() {
  return <RouterProvider router={router} />
}

export default App
