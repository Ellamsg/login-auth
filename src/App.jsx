
import './App.css'
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import RootLayouts from './RootLayouts/RootLayouts';

import {
  Route,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={< Login/>} />
      <Route path='/Dashboard' element={<Dashboard />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;