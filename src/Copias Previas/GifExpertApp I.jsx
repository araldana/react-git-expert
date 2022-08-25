import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Gragon Ball']);

  const onAddCategory = () => {
    setCategories(['Hola aao', ...categories]);
    // Otra formas
    //setCategories([...categories, 'Hola AAO']);
    //setCategories( cat => [...cat, 'Hola AAO']);

  }
  //console.log(categories);

  return (
    <>
        {/* Titulo */}
        <h1>GitfExpertApp</h1>

        {/* Entrada*/}
        <AddCategory setCategories={ setCategories }/>
        
        {/* Listado de GIF*/}
          {/*<button onClick={onAddCategory}>Agregar</button>*/}
            <ol> 
              { 
                  categories.map(category => {
                  return <li key={category}>{category}</li>;   {/* GIF Item */}
                })
              }
            </ol>
    </>
  );
}

