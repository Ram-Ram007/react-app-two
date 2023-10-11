import React, { useState } from "react";

function Home({ recipes }) {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);

  // Function to handle image click
  const handleImageClick = (index) => {
    setSelectedRecipeIndex(index);
  };

  // Function to clear the selected recipe
  const clearSelectedRecipe = () => {
    setSelectedRecipeIndex(null);
  };

  return (
    <div className="home">
      <h2>Recipes</h2>
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="recipe-card"
            onClick={() => handleImageClick(index)}
          >
            <img src={recipe.imageUrl} alt={recipe.name} />
          </div>
        ))}
      </div>
      {selectedRecipeIndex !== null && (
        <div className="two-column-layout">
          <div className="recipe-details-popup">
            <h3>{recipes[selectedRecipeIndex].name}</h3>
            <ul>
              {recipes[selectedRecipeIndex].steps.map((step, stepIndex) => (
                <li key={step.id}>{step.step}</li>
              ))} {/* Corrected placement of closing parentheses */}
            </ul>
            <img
              className="popup-img"
              src={recipes[selectedRecipeIndex].imageUrl}
              alt={recipes[selectedRecipeIndex].name}
            />
          </div>
          <button onClick={clearSelectedRecipe}>Close</button>
          <div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
