/**
 * How can I specify that
 * Sentence is => 1 Term,
 * Paragraph is => 1 Sentence
 * ???
 */
type Term = string
type Sentence = string
type Paragraph = string

//
type DefaultOptions = {
  countMin: number
  countMax: number
}

// 
type Options = {
  tMin?: number
  tMax?: number
  sMin?: number
  sMax?: number
  pMin?: number
  pMax?: number
}

//
type Environment = {
  readonly DOCS_URL: string
}

type APIMessages = {
  readonly [k: string]: string
  readonly invalid_endpoint: string
  readonly invalid_version: string
  readonly invalid_request: string
}

type APIResult = {
  result: Array<Term | Sentence | Paragraph>
}

type APIError = {
  error: keyof APIMessages
}
