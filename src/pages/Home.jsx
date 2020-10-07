import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, SortPopup, LoadingBlock } from "../components";
import { addPizzaToCart } from "../redux/actions/cartActions";
import { setCategory, setSortBy } from "../redux/actions/filtersActions";
import { fetchPizzas } from "../redux/actions/pizzasActions";

const categoryNames = ["Meat", "Vegetarian", "Chicken", "Grill", "Spicy"];
const sortItems = [
  { name: "Top-Selling", type: "rating", order: "desc" },
  { name: "Price", type: "price", order: "desc" },
  { name: "Alphabet", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);
  const cartItems = useSelector((state) => state.cart.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const { category, sortBy } = useSelector((state) => state.filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    // fetch("http://localhost:3000/db.json")
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     dispatch(setPizzas(json.pizzas));
    //   });
  }, [category, sortBy]);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />

        <SortPopup
          items={sortItems}
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
        />
      </div>

      <h2 className="content__title">Pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
