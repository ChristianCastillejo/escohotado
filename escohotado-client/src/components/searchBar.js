import React from "react";

function SearchBar({
  openSearch,
  setOpenSearch,
  search,
  setSearch,
  filters,
  updateFilters
}) {
  return (
    <div
      className={`articles-filter-categories articles-filter-categories${openSearch &&
        "--search"}`}
    >
      <div
        className={`articles-filter-button articles-filter-button${openSearch &&
          "--search"}`}
        onClick={() => setOpenSearch(!openSearch)}
      >
        <i className="fas fa-search" />
      </div>
      <input
        className={`articles-filter-search-input articles-filter-search-input${!openSearch &&
          "--hidden"}`}
        placeholder="De la piel para dentro..."
        onChange={e => setSearch(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            updateFilters(undefined, undefined, search);
          }
        }}
      />
      <button
        className={`articles-filter-search-button articles-filter-search-button${!openSearch &&
          "--hidden"}`}
        onClick={() => updateFilters(undefined, undefined, search)}
      >
        <p>Buscar</p>
      </button>
      <div
        onClick={() => updateFilters("philosophy", !filters.philosophy, search)}
        className={`articles-filter-item ${filters.philosophy &&
          "articles-filter-item--selected"} ${openSearch &&
          "articles-filter-item--hidden"}`}
      >
        Filosofía
      </div>
      <div
        onClick={() => updateFilters("comunism", !filters.comunism, search)}
        className={`articles-filter-item ${filters.comunism &&
          "articles-filter-item--selected"} ${openSearch &&
          "articles-filter-item--hidden"}`}
      >
        Comunismo
      </div>
      <div
        onClick={() => updateFilters("drugs", !filters.drugs, search)}
        className={`articles-filter-item ${filters.drugs &&
          "articles-filter-item--selected"} ${openSearch &&
          "articles-filter-item--hidden"}`}
      >
        Drogas
      </div>
      <div
        onClick={() => updateFilters("history", !filters.history, search)}
        className={`articles-filter-item ${filters.history &&
          "articles-filter-item--selected"} ${openSearch &&
          "articles-filter-item--hidden"}`}
      >
        Historia
      </div>
    </div>
  );
}

export default SearchBar;
