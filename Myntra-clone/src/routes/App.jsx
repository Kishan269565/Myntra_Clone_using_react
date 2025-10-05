import { useState } from 'react'
import Header from '../comonents/Header'
import Footer from '../comonents/Footer'
import { Outlet } from 'react-router-dom'
import Fetchitems from '../comonents/fetchitems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../comonents/LoadingSpinner'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0);
  const fetchStatus = useSelector((store) => store.fetchstatus);


  return (
    <>

      <Header />
      <Fetchitems />
      {fetchStatus.currentlyfetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
