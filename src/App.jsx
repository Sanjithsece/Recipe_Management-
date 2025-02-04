import React, { useState } from "react";
import "./App.css";
import Home from "./files/Home";
import Feedback from "./files/Feedback";
import About from "./files/About";
import RecipeDetails from "./files/RecipeDetails";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage("recipeDetails");
  };

  return (
    <div className="app-container">
      <header>
        <h1 className="title">Recipe.....</h1>
        <nav>
          <button onClick={() => handlePageChange("home")}>Home</button>
          <button onClick={() => handlePageChange("feedback")}>Feedback</button>
          <button onClick={() => handlePageChange("about")}>About us</button>
        </nav>
      </header>

      <main>
        {currentPage === "home" && <Home onRecipeClick={handleRecipeClick} />}
        {currentPage === "feedback" && <Feedback />}
        {currentPage === "about" && <About />}
        {currentPage === "recipeDetails" && <RecipeDetails recipe={selectedRecipe} />}
      </main>
    </div>
    
  );
}

export default App;




