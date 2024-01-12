import KlasView from './pages/docent/KlasView'
import CijferView from './pages/docent/CijfersView'
import StudentList from './pages/docent/StudentList'
import Home from './pages/student/Home'

export const routes = [
  {
    path: '/',
    component: <KlasView />,
  },
  {
    path: '/Docent/CijfersView',
    component: <CijferView />,
  },
  {
    path: '/Docent/StudentList',
    component: <StudentList />,
  },
  {
    path: '/student',
    component: <Home />,
  },
]
