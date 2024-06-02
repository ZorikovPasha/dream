import React from "react"
import { GetServerSideProps } from "next";
import { publicApiClient } from "../api/mainPageApi";
import { Product } from "../@types/ententy/Product";
import { ProductCard } from "../shared/Card"

interface IProps {
  products: Product[]
}

const CategoryProduct = ({ products }: IProps) => {
  return (
    <>
      <div className="content__row">
        <div className="section">
          <div className="section__container">
            <div className="section__row section__row--grid-5-cols">
              {
                products.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProduct

export const getServerSideProps: GetServerSideProps<IProps> = async ({ query }) => {
  const formattedQuery = Array.isArray(query.id) ? query.id[0] : query.id

  const products = await publicApiClient.getProductsByCategory(formattedQuery ?? "")

  return {
    props: {
      products
    }
  }
}