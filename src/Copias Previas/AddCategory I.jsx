import { useState } from 'react';

export const AddCategory = ( { setCategories } ) => {
  //const [inputValue, setInputValue] = useState('One Punch');
  const [inputValue, setInputValue] = useState('');


  //const onInputChange = (event) => {
  const onInputChange = ({ target }) => {
    //console.log(event);
    //console.log(event.target.value);
    //console.log(target.value);
    //setInputValue('Hola mundo');
    //setInputValue(event.target.value);
    setInputValue(target.value);

  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    setCategories( categories => [ inputValue, ...categories ]);
    setInputValue('');

  }

  return (
    //<form onSubmit={ (event) => onSubmit(event)}>
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //onChange={(event) => onInputChange(event)}
        onChange={onInputChange}

      />
    </form>
  );
}
