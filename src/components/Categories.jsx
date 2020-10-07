import React from "react";
import PropTypes from 'prop-types'


const Categories = React.memo(
  function Categories({ items , onClickCategory, activeCategory }) {

    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            All
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    );
  }

)

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  onClickCategory: PropTypes.func,
}

Categories.defaultProps = {
  items: [],
  activeCategory: null,
}


export default Categories;
