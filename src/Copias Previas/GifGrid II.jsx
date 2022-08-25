import { useState, useEffect } from 'react';
import { GitItem } from './GitItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  {/*const [counter, setCounter] = useState(10);*/ }
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, [])

  return (
    <>
      <h3>{category}</h3>
      {/*<h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>*/}
      <div className="card-grid">
        {
          images.map((image) => (
            <GitItem
              key={image.id}
              //image={image}
              title={image.title}
              url={image.url}
            />
          ))
        }
      </div>
    </>
  )
} 
