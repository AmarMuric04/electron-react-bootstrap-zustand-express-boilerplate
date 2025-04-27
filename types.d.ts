type User = {
  firstName: string
  lastName: string
  email: string
}

type SuccessResponse<T = any> = {
  success: true
  data: T
}

type ErrorResponse = {
  success: false
  message: string
  status: number
  data?: any
}
