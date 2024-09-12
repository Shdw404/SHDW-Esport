// Placeholder for future interactions or dynamic features
console.log("SHDW Gear site is up and running.");
// JavaScript pour générer les flocons de neige
document.addEventListener('DOMContentLoaded', function () {
    const snowflakesContainer = document.getElementById('snowflakes');
    const numberOfSnowflakes = 200; // Nombre de flocons de neige
  
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      
      // Position et animation aléatoires
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.top = `${Math.random() * 100}vh`;
      snowflake.style.width = `${Math.random() * 10 + 5}px`; // Taille entre 5px et 15px
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = `${Math.random() * 20 + 10}s`; // Durée entre 10s et 30s
      snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`; // Opacité entre 0.5 et 1
      
      // Ajout du flocon au conteneur
      snowflakesContainer.appendChild(snowflake);
    }
  });
  
  
  