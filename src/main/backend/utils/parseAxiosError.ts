import axios from 'axios'

type ParsedAxiosError = {
  success: false
  message: string
  status: number
  data?: any
}

export default function parseAxiosError(error: any): ParsedAxiosError {
  if (axios.isAxiosError(error)) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
      data: error.response?.data?.data || null
    }
  }
  return {
    success: false,
    message: 'An unknown error occurred',
    status: 500
  }
}
