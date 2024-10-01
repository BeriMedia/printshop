// Testquery for fetching product data by handle
export const productQuery = `
  query ProductQuery($handle: String) {
    product(handle: $handle) {
      id
      title
      handle
    }
  }
`;

// get product media
export const productMediaQuery = `
query getProductMedia {
  products(first: 3) {
    edges {
      cursor
      node {
        id
        title
        description
        media(first: 10) {
        edges {
          node {
            mediaContentType
            alt
            ...mediaFieldsByType
          }
        }
      }
      }
    }
  }
}

fragment mediaFieldsByType on Media {
  ...on ExternalVideo {
    id
    host
    originUrl
  }
  ...on MediaImage {
    image {
      url
    }
  }
  ...on Model3d {
    sources {
      url
      mimeType
      format
      filesize
    }
  }
  ...on Video {
    sources {
      url
      mimeType
      format
      height
      width
    }
  }
}
`