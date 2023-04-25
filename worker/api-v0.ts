//
import { getTerms, getSentences, getParagraphs } from "./sewem-ipsum"
import { API_MAX_RETURN, corsHeaders, messages } from "./config"

const apiv0Router = (
  endpoint: string,
  params: URLSearchParams
): Response => {
  const count: number = (
      params.get('count') &&                          // Was it set?
      Number(params.get('count')) > 0 &&              // A positive Number?
      Number(params.get('count')) <= API_MAX_RETURN   // Less than limit?
    ) ? Number(params.get('count'))                   // Return number
      : 1                                             // Invalid number, only return one

  let ipsum: APIResult,
      error: APIError,
      status: number
  
  switch(endpoint) {
    case "term":
      ipsum = { result: getTerms(count) }
      status = 201
      break;
    case "sentence":
      ipsum = { result: getSentences(count, {}) }
      status = 201
      break;
    case "paragraph":
      ipsum = { result: getParagraphs(count, {}) }
      status = 201
      break;
    default:
      error = { error: messages.invalid_endpoint }
      status = 400
      break;
  }

  return new Response(
    JSON.stringify(ipsum || error),
    {
      status,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json; charset=utf-8',
      }
    }
  )
}

export {
  apiv0Router as default
}
