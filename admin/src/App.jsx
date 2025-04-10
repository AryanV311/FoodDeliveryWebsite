import { Navbar } from "./components/Navbar/Navbar"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import { Add } from "./pages/Add/Add"
import { List } from "./pages/List/List"
import { Order } from "./pages/Order/Order"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageSlots from "./pages/DeliverySlots/ManageSlots"
import ViewAllOrders from "./pages/ViewAllOrders/ViewAllOreder"


 const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={ < Add /> } />
          <Route path='/list' element={ < List /> } />
          <Route path='/order' element={ < Order /> } />
          <Route path="/manageSlot" element={ <ManageSlots />} />
          <Route path="/viewOrders" element={ <ViewAllOrders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
