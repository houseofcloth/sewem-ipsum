// Maximum number of terms, sentences, or paragraphs returned
export const API_MAX_RETURN = 20

// Common endpoint headers
export const endpointHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': "GET, HEAD, OPTIONS",
})

export const messages = {
  "api": {
    "invalid_endpoint": "Invalid endpoint. See documentation: https://sew.dye.li/docs",
    "invalid_version": "Invalid API version. See documentation: https://sew.dye.li/docs",
    "invalid_request": "Invalid API request. See documentation: https://sew.dye.li/docs",
  }
}
