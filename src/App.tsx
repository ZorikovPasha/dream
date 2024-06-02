import { useEffect, useState } from "react"
import classNames from "classnames"
import Link from "next/link"

import { Basket, SearchHeader, Footer, Menu } from "./components"
import { Faq, Profile, Login } from "./popup"
import Promo from "./components/Promo"
import { useAppSelector } from "./store/storeHooks"
import { selectIsAuthorized } from "./store/slices/authSlice"
import BasketPopup from "./popup/Basket"
import ProductInfo from "./popup/Product"
import SelectAddress from "./popup/SelectAdress"
import { useGetCategoriesQuery } from "./api/categoriesApi"
import { useGetMyInformationMutation } from "./api/authApi"

interface IProps {
  children: React.ReactNode
}

export const Layout = ({ children }: IProps) => {
  const [faqOpen, setFaqOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [productInfoOpen, setProductInfoOpen] = useState(false)
  const [basketOpen, setBasketOpen] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)

  useGetCategoriesQuery()
  const [getMe] = useGetMyInformationMutation();
  const isAuth = useAppSelector(selectIsAuthorized)

  const gridRightClass = classNames('grid__col grid__col--right', {
    'grid__col--include-rows': isAuth,
  });

  useEffect(() => {
    if (isAuth) getMe().unwrap();
  }, [isAuth])

  return (
    <div className="grid">
      <div className="grid__container grid__container--indent-bottom-big">
        <div className="grid__col grid__col--left">
          <aside className="sidebar">
            <div className="sidebar__container sidebar__container--visible">
              <div className="sidebar__row sidebar__row--logo"><Link className="logo" href="/" title="Мечта"></Link></div>
              <div className="sidebar__row sidebar__row--nav">
                <Menu />
              </div>
            </div>
          </aside>
        </div>
        <div className="grid__col grid__col--center">
          <div className="content">
            <BasketPopup isOpen={basketOpen} close={() => setBasketOpen(false)} />
            <SearchHeader />
            {children}
            <Faq isOpen={faqOpen} close={() => setFaqOpen(false)} />
            <Profile isOpen={profileOpen} close={() => setProfileOpen(false)} />
            <Login isOpen={loginOpen} close={() => setLoginOpen(false)} />
            <ProductInfo isOpen={productInfoOpen} close={() => setProductInfoOpen(false)} />
            <SelectAddress isOpen={addressOpen} close={() => setAddressOpen(false)} />
          </div>
          <Footer openFooter={() => setFaqOpen(true)} />
        </div>
        <div className={gridRightClass}>
          {isAuth ? <Basket openBasket={() => setBasketOpen(true)} openProfile={() => setProfileOpen(true)} /> : <Promo openAddress={() => setAddressOpen(true)} openLogin={() => setLoginOpen(true)} />}
        </div>
      </div>
      <div className="attached-button" data-link="basket">
        <div className="attached-button__title">129&nbsp;₽</div>
        <div className="attached-button__descr">30&nbsp;мин</div>
      </div>
    </div>

  )
}
