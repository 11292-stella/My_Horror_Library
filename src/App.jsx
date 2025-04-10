import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import AllTheBooks from "./components/AllTheBooks"
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from "./components/Welcome"
import Carosel from "./components/carosel"
import FormAct from "./components/FormAct"
import Backoffice from "./components/Backoffice"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Menu from "./components/Menu"
import Details from "./components/Details"
import { useState } from "react"
import horrorB from "./horror.json"

import NewComment from "./components/NewComment"
import DinuovoBook from "./components/DinuovoBook"
import SingleBook from "./components/SingleBook"
function App() {
  const [selectedAsin, setSelectedAsin] = useState(null)
  const handleBookSelect = (asin) => {
    console.log("ASIN selezionato:", asin)
    setSelectedAsin(asin)
  }
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />

        <main className="flex-grow-1 container mt-4">
          <h1 className=" text-center fw-bold">Libri Horror</h1>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Welcome />
                  <Carosel />
                </div>
              }
            />
            <Route
              path="/form"
              element={
                <>
                  <FormAct />
                  <Backoffice />
                </>
              }
            />
            <Route path="/carosel" element={<Carosel />} />
            <Route
              path="/comment"
              element={
                <div>
                  <NewComment asin={selectedAsin} />
                  <DinuovoBook
                    libri={horrorB}
                    onBookSelect={handleBookSelect}
                  />
                </div>
              }
            />

            <Route path="/menu" element={<Menu />} />
            <Route path="/details/:bookasin" element={<Details />} />
            <Route path="*" element={<NotFound asin={selectedAsin} />} />
          </Routes>

          <div className="mb-4"></div>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
