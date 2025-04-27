import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { body, validationResult } from 'express-validator'
import { catchAsync } from './utils/catchAsync'

const app = express()

app.use(cors())
app.use(express.json())

// Define a custom Error type

export class CustomError<T = unknown> extends Error {
  statusCode: number
  data?: T

  constructor(message: string, statusCode = 500, data?: T) {
    super(message)
    this.statusCode = statusCode
    this.data = data
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

app.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('firstName').notEmpty().withMessage('First Name is required'),
    body('lastName').notEmpty().withMessage('Last Name is required')
  ],
  catchAsync(async (req, res) => {
    const { firstName, lastName, email } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new CustomError('Please enter valid credentials')
      error.data = errors.array()
      error.statusCode = 422
      throw error
    }

    console.log(firstName, lastName, email)

    // Store the user in the database

    res.status(200).json({ success: true, message: 'Signup successful!' })
  })
)

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = error instanceof CustomError ? error.statusCode : 500
  const message = error instanceof CustomError ? error.message : 'Something went wrong'
  const data = error instanceof CustomError ? error.data : undefined

  console.error('Error:', message, 'Data:', data, 'Status:', status)
  res.status(status).json({ success: false, message, data })
})

app.listen(5000, () => {
  console.log('Connect to DB')
})
