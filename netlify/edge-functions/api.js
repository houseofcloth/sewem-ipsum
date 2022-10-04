/**
 * import base functions from Sewem Ipsum
 */
import { getTerms, getSentences, getParagraphs } from "../sewem-ipsum.mjs"

//
const API_BASE = '/api'
const API_VERSION = 'v0'
const API_MAX_RETURN = 20

//
const supportedMethods = [ "GET", "OPTIONS" ]

//
const endpointHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': "GET, OPTIONS",
})

/**
 * 
 */
export default ({url, method}) => {
  
  const { pathname, searchParams } = new URL(url)
  
  // If method supported
  if (supportedMethods.includes(method)) {

    // Options for fetch
    if (method === "OPTIONS")
      return new Response(null, { headers: endpointHeaders })
    
    const endpoint = pathname.slice(`${API_BASE}/${API_VERSION}/`.length)

    // Was a specific number of terms/sentences/paragraphs requests?
    const count = (searchParams.get('count') &&                   // Was it set?
                   searchParams.get('count') > 0 &&               // A positive Number?
                   searchParams.get('count') <= API_MAX_RETURN)   // Less than limit?
                ? searchParams.get('count')
                : 1

    // Set content type header
    endpointHeaders.set('Content-Type', 'application/json;charset=utf-8')

    // Which endpoint
    switch(endpoint) {
      case "term":
        return new Response(
          JSON.stringify(getTerms(count)), {
            headers: endpointHeaders
          })
      case "sentence":
        return new Response(
          JSON.stringify(getSentences(count)), {
            headers: endpointHeaders
          }
        )
      case "paragraph":
        return new Response(
          JSON.stringify(getParagraphs(count)), {
            headers: endpointHeaders
          }
        )
      default:
        return new Response(
          JSON.stringify(["Invalid endpoint. See documentation: https://sew.dye.li/docs"]), {
            status: 400,
            headers: endpointHeaders
          }
        )
    }

  }

  // All other methods
  return new Response(JSON.stringify(["Unsupported"]), { status: 501 })

}
