import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
   const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id: Date.now(), title, description});
    setTitle('');
    setdescription('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text'  value={title}
            onChange={(e) => setTitle(e.tatget.value)}
            placeHolder='Title' />

          <textarea  
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeHolder='Description' />

          <button type='submit'>Add Recipe</button>

        </form>
    );
};

export default AddRecipeForm;
