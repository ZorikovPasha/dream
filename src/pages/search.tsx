import React from "react"
import { Product } from "../@types/ententy/Product"
import { ProductCard } from "../shared/Card"
import { useRouter } from "next/router"

export const Search = () => {
  const [searchData, setSearchData] = React.useState<Product[]>()

  const router = useRouter()
  const serchQueryFromUrl = router.query.q

  React.useEffect(() => {
    function searchProductByName(name: string): Product[] {
      console.log(name);
      return []
    }
    if (typeof serchQueryFromUrl === "string" && serchQueryFromUrl.length > 0) {
      setSearchData(searchProductByName(serchQueryFromUrl))
    }
  }, [serchQueryFromUrl])

    return (
    <>
      <div className="content__row">
        <div className="section">
          <div className="section__container">
            <div className="section__row section__row--grid-5-cols">
              {
                searchData?.map((product, index) => (
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

export default Search