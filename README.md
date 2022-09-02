# ogmeta

This is a small microservice we use at Hop to generate Open Graph images for our pages.

---

## Endpoints:

- GET `/` - Returns an Open Graph image for the given URL.

  - Requires `title` and `subtitle` query parameters.
  - Optionally add `&dark=true` for dark mode

- GET `/template` - Returns the HTML that is used to generate the Open Graph image.
  - Requires `title` and `subtitle` query parameters.
  - Optionally add `&dark=true` for dark mode
