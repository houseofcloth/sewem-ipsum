/**
 * Sewem Ipsum
 * =============
 * - Homepage
 * - 404 page
 * - API v0
 * - API v1
 * - Robots
 * - Documentation redirect
 */
// API router imports
import apiv0Router from "./api-v0.mjs"
import apiv1Router from "./api-v1.mjs"

// Common config imports
import { endpointHeaders, messages } from "./config"

// HTML imports
import homePage from "../dist/index.html"
import notFoundPage from "../dist/404.html"
import robotsTXT from "../dist/robots.txt"

// Headers for HTML pages
const htmlHeaders = new Headers({
  'Content-Type': 'text/html;charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  "X-XSS-Protection": "1; mode=block",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Feature-Policy": "none",
  "Cache-Control": "s-maxage=3600",
  "X-Robots-Tag": "index, follow, noarchive, nosnippet, notranslate",
  "Content-Security-Policy": "base-uri 'self'; script-src 'self' 'nonce-ae5d778cb21f'; style-src 'self' 'nonce-ae5d778cb21f'; img-src 'self' data:; object-src 'self'; frame-ancestors 'none';",
})

// Worker
export default {
  fetch(req, env, /* ctx */) {

    // Reject unsupported methods
    if (!['GET','HEAD','OPTIONS'].includes(req.method))
      return new Response("Method Not Allowed", {
        status: 405,
        headers: {
          Allow: "HEAD, GET, OPTIONS",
        }
      })
    
    //
    const { pathname } = new URL(req.url)

    // Serve Homepage
    if (pathname === "/")
      return new Response(homePage, {
        headers: htmlHeaders
      })

    // Favicon
    if (pathname === "/favicon.png")
      return fetch(env.FAVICON_URL)

    // Robots TXT
    if (pathname === "/robots.txt")
      return new Response(robotsTXT)

    // Documentation redirect
    if (pathname === "/docs")
      return new Response(null, {
        status: 302,
        headers: {
          Location: env.DOCS_URL,
          'Referrer-Policy': 'no-referrer',
        }
      })
    
    // Serve API
    if (pathname.startsWith('/api/')) {

      // Return for OPTIONS
      if (req.method === "OPTIONS")
        return new Response(null, {
          headers: endpointHeaders
        })
      
      // Check route matching
      const apiRoute = new URLPattern({ pathname: '/api/:version/:endpoint'})
      const apiMatch = apiRoute.exec(req.url)
      
      if (apiMatch) {
        // Parameters
        const params = new URL(req.url).searchParams

        // Call appropriate API 
        switch(apiMatch.pathname.groups.version) {
          case "v0":
            return apiv0Router(apiMatch.pathname.groups.endpoint, params)
          case "v1":
            return apiv1Router(apiMatch.pathname.groups.endpoint, params)
          default:
            // Not a version.
            return new Response(
              JSON.stringify([messages.api.invalid_version]), {
                status: 400,
                headers: {
                  'Content-Type': 'application/json',
                  ...endpointHeaders
                }
              }
            )
        }
      }
      //
      return new Response(messages.api.invalid_request, { status: 400 })
    }
      
    // Serve 404 page
    return new Response(notFoundPage, {
      status: 404,
      headers: htmlHeaders
    })
  }
}
