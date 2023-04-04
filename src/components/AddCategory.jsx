import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  
  const [inpuntValue, setInpuntValue] = useState('')
  
  const onInputChange = ({ target }) => {
    setInpuntValue( target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const newCategory = inpuntValue.trim();
    if ( newCategory.length <= 1 ) return;

    onNewCategory( newCategory )
    setInpuntValue('')
  }
  
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inpuntValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
