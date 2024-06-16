import Flickity from 'react-flickity-component'
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ICategoryCard, publicApiClient } from '../api/mainPageApi.ts';

interface IProps {
  // openInfo: () => void
  sliderImages: string[]
  categories: ICategoryCard[]
}

const Home = ({ sliderImages, categories }: IProps) => {
  return (
    <>
      <Head>
      <title>Мечта - самый быстрый интернет-магазин. Доставка за 15 минут.</title>
      <meta
        name='description'
        content="Мечта - самый быстрый интернет-магазин. Доставка за 15 минут."
      />
      </Head>

      <div className="content__row">
        <h1 className="content__title">Мечта - самый быстрый интернет-магазин. Доставка за 15 минут.</h1>
      </div>
      <div className="content__row">
        <div className="promo">
          <Flickity
            disableImagesLoaded={false}
            options={{ initialIndex: 1, wrapAround: true }}
            reloadOnUpdate
          >
            {
              sliderImages.map((img, i) => (
                <div className="promo__carousel-item" key={i}>
                  <img src={img}/>
                </div>
              ))
            }
          </Flickity>
        </div>
      </div>
      <div className="content__row">
        <div className="section">
          <div className="section__container">
            <div className="section__row section__row--grid-4-cols">
              {
                categories.map((item) => (
                  <a className="card-promo" href="#" key={item.image}>
                    <div className="card-promo__container">
                      <h2>{item.name}</h2><img src={item.image} alt=""/>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


export const getStaticProps: GetStaticProps<IProps> = async () => {
  try {
    const sliderImages = await publicApiClient.getMainpageSliderImage()
    const categories = await publicApiClient.getCategories()
    
    console.log("sliderImages", sliderImages);
    console.log("categories", categories);
    
    return {
      props: {
        sliderImages: Array.isArray(sliderImages.images) ? sliderImages.images  : [],
        categories: Array.isArray(categories) ? categories  : [],
      },
      revalidate: 60
    }
  } catch (error) {
    console.log("error", error);
    
    return {
      props: {
        sliderImages: [],
        categories: []
      },
      revalidate: 60
    } 
  }
}

