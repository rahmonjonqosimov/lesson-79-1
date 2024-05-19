import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (count) => ({
        url: `/products?limit=8`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/products/search`,
        method: "GET",
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSearchProductsQuery,
  useGetSingleProductQuery,
} = productApi;
