import React from "react";

const RecipeDetails = ({ recipe }) => (
  <div className="recipe-details">
    <h2>{recipe}</h2>
    {recipe === "Fried Rice" && (
      <div>
        <img src="/Fried Rice.jpg" alt="Fried Rice" />
        <ul>
          <li>2 cups basmati rice</li>
          <li>4 cups water</li>
          <li>1 cinnamon stick</li>
          <li>2-3 cardamom pods</li>
          <li>Salt</li>
          <li>
            <strong>Cook the Rice:</strong>
            <ul>
              <li>Wash the basmati rice thoroughly and soak it for 20 minutes.</li>
              <li>In a pot, boil water with cloves, cinnamon, cardamom, and a pinch of salt.</li>
              <li>Add soaked rice and cook until 90% done (grains should be firm but cooked).</li>
              <li>Drain the water and keep the rice aside.</li>
            </ul>
          </li>
          <li>
            <strong>Prepare the Masala:</strong>
            <ul>
              <li>Heat oil/ghee in a large pan.</li>
              <li>Add sliced onions and sauté until golden brown.</li>
              <li>Add ginger-garlic paste and cook for 1 minute until aromatic.</li>
              <li>Stir in chopped tomatoes, biryani masala, turmeric, and red chili powder. Cook until the tomatoes are soft.</li>
              <li>Add yogurt and mix well to form a smooth masala.</li>
              <li>(Optional) Add cooked chicken/vegetables and coat them well in the masala.</li>
            </ul>
          </li>
        </ul>
      </div>
    )}
    {recipe === "Biryani" && (
      <div>
        <img src="/hyderabadi-biryani-recipe-chicken.jpg" alt="Biryani" />
        <ul>
          <li>2 cups basmati rice</li>
          <li>4 cups water</li>
          <li>1 cinnamon stick</li>
          <li>2-3 cardamom pods</li>
          <li>Salt</li>
          <li>
            <strong>Cook the Rice:</strong>
            <ul>
              <li>Wash the basmati rice thoroughly and soak it for 20 minutes.</li>
              <li>In a pot, boil water with cinnamon, cardamom, and a pinch of salt.</li>
              <li>Add soaked rice and cook until 90% done (grains should be firm but cooked).</li>
              <li>Drain the water and set the rice aside.</li>
            </ul>
          </li>
          <li>
            <strong>Prepare the Masala:</strong>
            <ul>
              <li>Heat oil/ghee in a large pan.</li>
              <li>Add sliced onions and sauté until golden brown.</li>
              <li>Add ginger-garlic paste and cook for 1 minute until fragrant.</li>
              <li>Add chopped tomatoes, biryani masala, turmeric, and red chili powder. Cook until the tomatoes soften.</li>
              <li>Add yogurt and mix well to form a smooth masala.</li>
              <li>(Optional) Add cooked chicken/vegetables and coat them well in the masala.</li>
            </ul>
          </li>
        </ul>
      </div>
    )}
    {recipe === "Chicken Tandoori" && (
      <div>
        <img src="/chicken tandoori.jpg" alt="Chicken Tandoori" />
        <ul>
          <li>4 chicken legs (with skin or skinless, as preferred)</li>
          <li>1 cup yogurt</li>
          <li>2 tablespoons lemon juice</li>
          <li>1 tablespoon ginger-garlic paste</li>
          <li>2 teaspoons red chili powder</li>
          <li>1 teaspoon turmeric powder</li>
          <li>1 teaspoon garam masala</li>
          <li>1 teaspoon cumin powder</li>
          <li>1 teaspoon coriander powder</li>
          <li>Salt to taste</li>
          <li>2 tablespoons oil or melted butter</li>
          <li>
            <strong>Prepare the Marinade:</strong>
            <ul>
              <li>In a bowl, mix yogurt, lemon juice, ginger-garlic paste, and all the spices.</li>
              <li>Make slits in the chicken legs for the marinade to penetrate.</li>
              <li>Coat the chicken pieces thoroughly with the marinade.</li>
              <li>Cover and refrigerate for at least 4 hours (overnight for better flavor).</li>
            </ul>
            <li>
              <strong>Serve:</strong>
              <ul>
                <li>Serve the Tandoori Chicken hot with mint chutney, onion rings, and lemon wedges for added flavor.</li>
              </ul>
            </li>

          </li>
        </ul>
      </div>
    )}
  </div>
);

export default RecipeDetails;
