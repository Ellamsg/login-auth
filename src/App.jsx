
import './App.css'
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import PageNotFound from './page/PageNotFound';
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
      <Route    index element={< Login/>}  />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;