import React, { useState } from "react";

function Home({ recipes }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle image click
  const handleImageClick = (index) => {
    setSelectedRecipe(recipes[index]);
  };

  // Function to clear the selected recipe
  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  // Function to toggle the checked state of a step
  const toggleStepChecked = (stepId) => {
    if (selectedRecipe) {
      const updatedRecipe = { ...selectedRecipe };
      const updatedSteps = updatedRecipe.steps.map((step) => {
        if (step.id === stepId) {
          return { ...step, checked: !step.checked };
        }
        return step;
      });
      updatedRecipe.steps = updatedSteps;
      setSelectedRecipe(updatedRecipe);
    }
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
      {selectedRecipe !== null && (
        <div className="two-column-layout">
          <div className="recipe-details-popup">
            <h3>{selectedRecipe.name}</h3>
            <ul>
              {selectedRecipe.steps.map((step, stepIndex) => (
                <li key={step.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={step.checked || false}
                      onChange={() => toggleStepChecked(step.id)}
                    />
                    <span style={{ textDecoration: step.checked ? "line-through" : "none" }}>
                      {step.step}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <img className="popup-img" src={selectedRecipe.imageUrl} alt={selectedRecipe.name} />
          </div>
          <button onClick={clearSelectedRecipe}>Close</button>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Home;
