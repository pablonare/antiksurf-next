export const PRODUCTS_QUERY = `
  query {
    products(first: 10) {
      nodes {
        id
        handle
        title
        description
        featuredImage {
          url
          altText
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      descriptionHtml
      images(first: 10) {
        nodes {
          url
          altText
        }
      }
      variants(first: 25) {
        nodes {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export const CART_QUERY = `
  query CartQuery($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
    }
  }
`;