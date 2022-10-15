# Sewem Ipsum

A [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum)-like dummy text generator full of fabric/sewing/dressmaking terms.

Test it out [https://sew.dye.li](https://sew.dye.li)

## Deployment

Clone/fork this repository and deploy to Netlify either via [git based deploys](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git), or via [Netlify CLI](https://docs.netlify.com/site-deploys/create-deploys/#netlify-cli)

## API Documentation

- API is free an open to anyone to use.
- `API_BASE` path is `/api/{API_VERSION}`
- Current version: `v0`
- There are three endpoints

### Endpoint Reference

#### `/term`
Options for this endpoint:
- `count`
  Number of terms to return. **Limit:** 20

##### Examples
- `{API_BASE}/term` Return a single term.
- `{API_BASE}/term?count=3` Return three terms.

#### `/sentence`
Options for this endpoint:
- `count` Number of terms to return. **Limit:** 20

##### Examples
- `{API_BASE}/sentence` Return a single paragraph of random length.
- `{API_BASE}/sentence?count=3` Return three sentences.

#### `/paragraph`
Options for this endpoint:
- `count` Number of terms to return. **Limit:** 20

##### Examples
- `{API_BASE}/paragraph` Return a single paragraph.
- `{API_BASE}/paragraph?count=3` Return three paragraphs.

## LICENSE

[Jam Open Source License](LICENSE)
