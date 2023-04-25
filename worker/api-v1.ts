//
import { getTerms, getSentences, getParagraphs } from "./sewem-ipsum"
import { API_MAX_RETURN, corsHeaders, messages } from "./config"

//
const apiv1Router = (
  endpoint: string,
  params: URLSearchParams,
): Response => {
  const count: number = (
      params.get('count') &&                          // Was it set?
      Number(params.get('count')) > 0 &&              // A positive Number?
      Number(params.get('count')) <= API_MAX_RETURN   // Less than limit?
    ) ? Number(params.get('count'))                   // Return number
      : 1                                             // Invalid number, only return one

  // Additional configuration options
  /**
   * No reason for using `t_min` (etc.) instead of `tMin` (etc.)
   * This allows for either.
   * Perhaps in the future will remove the former, accepting only the latter.
   * This method also allows further options without the need to hard-code them.
   * 
   * If `count` exists as a param, will get added to `opts` as well.
   */
  const opts: Options = {}
  params.forEach((v, k) => {
    // Old key name
    if (k.includes('_')) {
      // Split and re-join key name
      let arr: Array<string> = k.split('_')
      arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1)
      let key = arr[0] + arr[1]
      // Only set key if value is a number
      if (Number.isInteger(v))
        opts[key] = Number(v)
    }
    // New key name
    else if (Number.isInteger(v))
      opts[k] = Number(v)
  })

  let ipsum: APIResult,
      error: APIError,
      status: number
  
  switch(endpoint) {
    case "term":
      ipsum = { result: getTerms(count) }
      status = 201
      break;
    case "sentence":
      ipsum = { result: getSentences(count, opts) }
      status = 201
      break;
    case "paragraph":
      ipsum = { result: getParagraphs(count, opts) }
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
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  )
}

//
export {
  apiv1Router as default
}
