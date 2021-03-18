export interface DataResponse {
  request: string
  days: {
    day: number
    amount: number
  }[]
}