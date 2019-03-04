//Load all containers
import Home from "./containers/home/index.jsx";
import PSP from "./containers/psp/index";

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/psp/',
    exact: true,
    component: PSP
  }
]

export default routes