import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const NotFound = function () {
  const navigate = useNavigate()

  return (
    <div className="text-center">
      <h2>404-non trovato</h2>
      <p>
        vuoi tornare in <Link to={"/"}>home</Link>
      </p>

      <p>
        puoi usare anche{" "}
        <Button
          variant="primary"
          onClick={() => {
            navigate("/")
          }}
        >
          BUTTON
        </Button>
      </p>
    </div>
  )
}
export default NotFound
