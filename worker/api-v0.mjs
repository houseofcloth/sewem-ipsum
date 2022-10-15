//
import { getTerms, getSentences, getParagraphs } from "./sewem-ipsum.mjs"
import { API_MAX_RETURN, endpointHeaders, messages } from "./config"

//
const apiv0Router = (endpoint, params) => {
  const count = (params.get('count') &&                   // Was it set?
                  params.get('count') > 0 &&              // A positive Number?
                  params.get('count') <= API_MAX_RETURN)  // Less than limit?
              ? params.get('count')
              : 1   // Invalid number, only return one
  //
  switch(endpoint) {
    case "term":
      return new Response(
        // Term endpoint doesn't use `opts`
        JSON.stringify(getTerms(count)), {
          status: 201,
          headers: endpointHeaders
        })
    case "sentence":
      return new Response(
        JSON.stringify(getSentences(count)), {
          status: 201,
          headers: endpointHeaders
        }
      )
    case "paragraph":
      return new Response(
        JSON.stringify(getParagraphs(count)), {
          status: 201,
          headers: endpointHeaders
        }
      )
    default:
      return new Response(
        JSON.stringify([messages.api.invalid_endpoint]), {
          status: 400,
          headers: endpointHeaders
        }
      )
  }
}

//
export {
  apiv0Router as default
}
