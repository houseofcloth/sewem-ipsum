type CorsHeaders = {
  readonly [k: string]: string
}

// Maximum number of terms, sentences, or paragraphs returned
export const API_MAX_RETURN: number = 20

// Common endpoint headers
export const corsHeaders: CorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': "GET, HEAD, OPTIONS",
}

const documentMsg = "See documentation: https://sew.dye.li/docs"

export const messages: APIMessages = {
  invalid_endpoint: `Invalid endpoint. ${documentMsg}`,
  invalid_version: `Invalid API version. ${documentMsg}`,
  invalid_request: `Invalid API request. ${documentMsg}`,
}
