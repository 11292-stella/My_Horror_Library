import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1">qui ci metto la roba</main>
      <MyFooter />
    </div>
  )
}

export default App
