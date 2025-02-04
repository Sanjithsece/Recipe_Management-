import React from "react";

const Home = ({ onRecipeClick }) => (
  <div className="home">
    <div className="recipe-images">


      <div className="recipe-container">
        <img
          src="/Fried Rice.jpg"
          onClick={() => onRecipeClick("Fried Rice")}
        />
        <p className="recipe-title">𝗙𝗿𝗶𝗲𝗱 𝗥𝗶𝗰𝗲</p>
      </div>


      <div className="recipe-container">
        <img
          src="/hyderabadi-biryani-recipe-chicken.jpg"
          onClick={() => onRecipeClick("Biryani")}
        />
        <p className="recipe-title">𝑩𝒊𝒓𝒚𝒂𝒏𝒊</p>
      </div>


      <div className="recipe-container">
        <img
          src="/chicken tandoori.jpg"
          onClick={() => onRecipeClick("Chicken Tandoori")}
        />
        <p className="recipe-title">𝑪𝒉𝒊𝒄𝒌𝒆𝒏 𝑻𝒂𝒏𝒅𝒐𝒐𝒓𝒊</p>
      </div>




    </div>
  </div>
);

export default Home;
