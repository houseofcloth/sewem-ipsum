//
import { getTerms, getSentences, getParagraphs } from "./sewem-ipsum.mjs"
import { API_MAX_RETURN, endpointHeaders, messages } from "./config"

//
const apiv1Router = (endpoint, params) => {
  const count = (params.get('count') &&                   // Was it set?
                  params.get('count') > 0 &&              // A positive Number?
                  params.get('count') <= API_MAX_RETURN)  // Less than limit?
              ? params.get('count')
              : 1   // Invalid number, only return one

  // Additional configuration options
  const opts = {
    // Min/max terms.
    tMin: Number(params.get('t_min')) || undefined,
    tMax: Number(params.get('t_max')) || undefined,
    // Min/max sentences.
    sMin: Number(params.get('s_min')) || undefined,
    sMax: Number(params.get('s_max')) || undefined,
    // Min/max paragraphs.
    pMin: Number(params.get('p_min')) || undefined,
    pMax: Number(params.get('p_max')) || undefined,
  }

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
        JSON.stringify(getSentences(count, opts)), {
          status: 201,
          headers: endpointHeaders
        }
      )
    case "paragraph":
      return new Response(
        JSON.stringify(getParagraphs(count, opts)), {
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
  apiv1Router as default
}
