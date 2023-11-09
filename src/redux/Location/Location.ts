export interface Root {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface Result {
  id: number
  locationName: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
