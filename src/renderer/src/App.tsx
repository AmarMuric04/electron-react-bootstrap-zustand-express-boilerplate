import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

function App(): React.JSX.Element {
  const [userData, setUserData] = useState<User>({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const data = await window.api.signUp(userData)

    console.log(data.data)
  }

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light"
    >
      <Form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <Form.Group className="mb-0">
          <Form.Control
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            value={userData.firstName}
            type="text"
            placeholder="First Name"
            className="rounded-top rounded-bottom-0 p-2"
          />
          <Form.Control
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            value={userData.lastName}
            type="text"
            placeholder="Last Name"
            className="rounded-0 p-2"
          />
          <Form.Control
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            value={userData.email}
            type="email"
            placeholder="Email"
            className="rounded-bottom rounded-top-0 p-2"
          />
        </Form.Group>
        <Button type="submit" className="mt-3 w-100 p-2">
          Submit
        </Button>
        <p>@Murga 2025</p>
      </Form>
    </Container>
  )
}

export default App
