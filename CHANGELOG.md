# CHANGELOG

## Version 3.0.0

- Typescript.
- Change parameters to accept with underscore *(e.g. `t_min`)* and camel case *(e.g. `tMin`)* on the`v1` endpoint.
- API now returns JSON with `{ result: ... }` or `{ error: ... }` rather than an array `[...]`
- Favicon imported into worker rather than loaded from external resource for front-end.
- Modified front-end to work with new return format.

## Version 2.0.0

- API v1.
- Cloudflare worker to serve demo page and API.

## Version 1.0.0

Move to an API using [Netlify Edge Function](https://docs.netlify.com/edge-functions/overview/). Using [Eleventy](https://11ty.dev) to build pages.

## Version 0.1.0

Initial release
