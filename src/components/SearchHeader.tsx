import { useRouter } from "next/router";
import React from "react"

const SearchHeader = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value)

    // Проверяем, не пустой ли запрос
    if (e.target.value.trim()) {
      // Формируем URL с параметром поиска
      router.push(`/search?q=${encodeURIComponent(e.target.value)}`);
    }
    if (e.target.value.trim().length === 0) {
      router.push(`/`);
    }
  }

  return (
    <div className="content__row content__row--header">
      <form className="search">
        <div className="search__container">
          <div className="search__col">
            <button className="search__btn search__btn--search" type="submit"></button>
            <input onChange={onChange} className="search__input-text" type="text" name="" value={searchQuery} placeholder="Искать в Мечте"
              data-popup="mobile-search" />
            <div className="search__btn search__btn--close"></div>
          </div>
          <div className="search__col">
            <div className="search__btn search__btn--profile"></div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchHeader
