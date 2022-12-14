import { useState } from "react";
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";
//import { AddCategory, GifGrid } from './components/index'  // index.js
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GitfExpertApp</h1>
      {/* Entrada*/}
      {/*<AddCategory setCategories={ setCategories }/>*/}
      < AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Listado de GIF*/}
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }
    </>
  );
}
