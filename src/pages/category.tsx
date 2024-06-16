const Page = () => {
  return (
    <>
      <div className='content__row content__row--align-row'>
        <button className='content__btn content__btn--back'></button>
        <h1 className='content__title'>Осеннее настроение</h1>
      </div>
      <div className='content__row content__row--tags'>
        <a
          className='tag'
          href='#'
        >
          Тыквы!
        </a>
        <a
          className='tag'
          href='#'
        >
          Для глинтвейна и какао
        </a>
        <a
          className='tag'
          href='#'
        >
          Не нужно готовить
        </a>
        <a
          className='tag'
          href='#'
        >
          Устроить киномарафон
        </a>
      </div>
      <div className='content__row content__row--tile-mosaic'>
        <div className='section'>
          <div className='section__container'>
            <div className='section__row'>
              <h2 className='section__title'>Классные цены</h2>
            </div>
            <div className='section__row section__row--grid-5-cols section__row--special-mobile-view'>
              <div
                className='preview-product'
                data-product-id='1'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>

                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='2'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>

                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='3'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='4'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='5'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='6'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='7'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='8'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content__row'>
        <div className='section'>
          <div className='section__container'>
            <div className='section__row'>
              <h2 className='section__title'>Для глинтвейна и какао</h2>
            </div>
            <div className='section__row section__row--grid-5-cols section__row--special-mobile-view'>
              <div
                className='preview-product preview-product--discount'
                data-product-id='9'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='10'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='11'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='12'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='13'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>

                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='14'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>

                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='15'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='16'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content__row'>
        <div className='section'>
          <div className='section__container'>
            <div className='section__row'>
              <h2 className='section__title'>Eще заголовок</h2>
            </div>
            <div className='section__row section__row--grid-5-cols section__row--special-mobile-view'>
              <div
                className='preview-product'
                data-product-id='17'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>

                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='18'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>

                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='19'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='20'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='21'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='22'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='23'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='24'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='25'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='26'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='27'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='28'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='29'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='30'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='31'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product preview-product--discount'
                data-product-id='32'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <div className='preview-product__discount-label'>−32%</div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                      <span className='preview-product__descr-text preview-product__descr-text--green'>Участвует в&nbsp;акции</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>

                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>

                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--old'>250</div>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='preview-product'
                data-product-id='33'
              >
                <div className='preview-product__container'>
                  <div
                    className='preview-product__row preview-product__row--image'
                    data-link='product'
                  >
                    <div className='preview-product__quantity'></div>
                    <img
                      className='preview-product__img'
                      src='/image/preview-product/1.png'
                      alt=''
                    />
                  </div>
                  <div className='preview-product__row preview-product__row--info'>
                    <div
                      className='preview-product__title'
                      data-link='product'
                    >
                      Fanta, апельсин
                    </div>
                    <div className='preview-product__descr'>
                      <span className='preview-product__descr-text'>1 л</span>
                    </div>
                    <div className='preview-product__row preview-product__row--controls preview-product__row--mobile'>
                      <div className='preview-product__col preview-product__col--remove-product'>
                        <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                      </div>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                        <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                      </div>
                    </div>
                  </div>
                  <div className='preview-product__row preview-product__row--controls preview-product__row--desktop'>
                    <div className='preview-product__col preview-product__col--remove-product'>
                      <div className='preview-product__ctrl preview-product__ctrl--minus'></div>
                    </div>
                    <div className='preview-product__col preview-product__col--add-product preview-product__col--active'>
                      <div className='preview-product__price'>
                        <div className='preview-product__price-item preview-product__price-item--new'>2000&nbsp;₽</div>
                      </div>
                      <div className='preview-product__ctrl preview-product__ctrl--plus'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
