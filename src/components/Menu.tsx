import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Category } from '../@types/ententy/Category'
import { useAppSelector } from '../store/storeHooks'
import { selectCategoriesList } from '../store/slices/categoriesSlice'

type MenuItemProps = {
  menuItem: Category
  isActive: boolean
  setCurrentIndex: () => void
}
const MenuItem = ({ menuItem, isActive, setCurrentIndex }: MenuItemProps) => {
  const isActiveClass = classNames('nav__submenu', {
    'nav__submenu--active': isActive
  })

  return (
    <>
      <div
        className='nav__item'
        onClick={setCurrentIndex}
      >
        <div className='nav__icon'></div>
        <p className='nav__text'>{menuItem.name}</p>
      </div>
      <div className={isActiveClass}>
        {menuItem.children?.map((category) => (
          <Link
            className='nav__submenu-item'
            href={`/category?id=${category.id}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </>
  )
}
const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const categories = useAppSelector(selectCategoriesList)

  console.log('categories', categories)

  return (
    <nav className='nav'>
      {categories?.map((category, index) => (
        <MenuItem
          setCurrentIndex={() => setCurrentIndex(currentIndex === index ? null : index)}
          menuItem={category}
          key={index}
          isActive={index === currentIndex}
        />
      ))}
    </nav>
  )
}

export default Menu
