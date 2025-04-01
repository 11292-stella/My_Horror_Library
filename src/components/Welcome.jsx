import { Alert } from "react-bootstrap"

const Welcome = function () {
  return (
    <>
      {["info"].map((variant) => (
        <Alert key={variant} className="text-center" variant={variant}>
          Welcome to my library
        </Alert>
      ))}
    </>
  )
}

export default Welcome
