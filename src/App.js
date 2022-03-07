import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// prolazimo kroz  nas data.js i vadimo kategorije, set koristiomo da bi smo dobili rezultate bez ponavljanja

const allCategories =['all', ...new Set(items.map((item) => {
  return item.category
}))] 
console.log(allCategories);


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // setujemo ako je category all da nam se vrati na pocetno stanje

    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
