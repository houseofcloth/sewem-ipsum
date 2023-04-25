# Sewem Ipsum

A [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum)-like dummy text generator full of fabric/sewing/dressmaking terms.

Test it out [https://sew.dye.li](https://sew.dye.li)

## Deployment

Clone/fork this repository and deploy to Cloudflare Workers using [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/).

## API Documentation

- API is free an open to anyone to use.
- `API_BASE` path is `/api/{API_VERSION}`
- Current version: `v1`
- There are three endpoints

### Endpoint Reference

#### `/term`
Options for this endpoint:
- `count`
  > Number of terms to return.    
  > **Limit:** Set via `API_MAX_RETURN`

##### Examples
- `{API_BASE}/term`
  > Return a single term.
- `{API_BASE}/term?count=3`
  > Return three terms.

#### `/sentence`
Options for this endpoint:
- `count`
  > Number of terms to return.    
  > **Limit:** Set via `API_MAX_RETURN`
- `tMin`
  > Minimum number of terms per sentence.
- `tMax`
  > Maximum number of terms per sentence.
- `sMin`
  > Minimum number of sentences *(overrides `count`)*.
- `sMax`
  > Maximum number of sentences *(overrides `count`)*.

##### Examples
- `{API_BASE}/sentence`
  > Return a single paragraph of random length.
- `{API_BASE}/sentence?count=3`
  > Return three sentences.
- `{API_BASE}/sentence?count=3&tMin=3&tMax=3`
  > Return three sentences each with three terms.
- `{API_BASE}/sentence?sMin=4&sMax=6`
  > Return between `4` and `6` sentences.
- `{API_BASE}/sentence?sMin=4&sMax=6&tMin=4&tMax=6`
  > Return between `4` and `6` sentences each with `4` to `6` terms.

#### `/paragraph`
Options for this endpoint:
- `count`
  > Number of terms to return.    
  > **Limit:** Set via `API_MAX_RETURN`
- `pMin`
  > Minimum number of paragraphs *(overrides `count`)*.
- `pMax`
  > Maximum number of paragraphs *(overrides `count`)*.
- Plus options available for `/sentence` above.

##### Examples
- `{API_BASE}/paragraph`
  > Return a single paragraph.
- `{API_BASE}/paragraph?count=3`
  > Return three paragraphs.
- `{API_BASE}/paragraph?sMin=4&sMax=6`
  > Return between `4` and `6` paragraphs.
- `{API_BASE}/paragraph?count=3&sMin=3&sMax=3&tMin=3&tMax=3`
  > Return three paragraphs, each with three sentences, each with three terms.

### API v0

`v0` is still valid, though considered deprecated.

## LICENSE

[Jam Open Source License](LICENSE)
