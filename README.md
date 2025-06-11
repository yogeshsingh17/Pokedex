Pokédex Web App
A modern, responsive Pokédex built with React that allows users to browse, search, and view detailed information about Pokémon using the PokéAPI.

🚀 Demo
Add a link or screenshot here if you deploy your app!

🛠️ Tech Stack
React (with Hooks)
React Router DOM
Axios
CSS Modules & Custom CSS
PokéAPI (https://pokeapi.co/)

✨ Features
Paginated Pokémon List: Browse Pokémon in a paginated grid with next/prev navigation.
Search Functionality: Search for any Pokémon by name or ID with debounced input to minimize API calls.
Detailed Pokémon View: Click any Pokémon to see its image, types, height, weight, and more.
Similar Pokémon: On the details page, view a grid of similar Pokémon by type.
Responsive Design: Works well on desktop and mobile devices.
Smooth Navigation: Uses React Router for seamless page transitions.

📦 API Reference
This project uses the PokéAPI:

List Pokémon: https://pokeapi.co/api/v2/pokemon
Pokémon Details: https://pokeapi.co/api/v2/pokemon/:id
Pokémon by Type: https://pokeapi.co/api/v2/type/:type
Pokémon Form Example: https://pokeapi.co/api/v2/pokemon-form/:id

📁 Project Structure
src/
  components/
    Pokedex/
    Pokemon/
    PokemonDetails/
    PokemonList/
    Search/
  hooks/
    useDebounce.js
    usePokemon.js
    usePokemonList.js
  utils/
    downloadPokemons.js
  App.jsx
  main.jsx
  index.css

🧑‍💻 Getting Started
1. Clone the repository:
git clone https://github.com/yourusername/pokedex.git
cd pokedex

2.Install dependencies:
npm install

3. Run the app locally:
npm run dev

The app will be available at http://localhost:5173 (or as specified by Vite).

🔍 Usage
Browse: The homepage displays a paginated list of Pokémon.
Search: Use the search bar to find Pokémon by name or ID. Results update after you stop typing (debounced).
View Details: Click any Pokémon card to see its details and similar Pokémon.
Navigate: Use the Prev/Next buttons to paginate through the Pokémon list.

📝 Notes
All Pokémon data is fetched live from PokéAPI.
The project demonstrates best practices with React hooks, custom hooks, and state management.
Debouncing is implemented to optimize API requests during search.

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgements
PokéAPI for the free Pokémon data API.
Pokémon and Pokémon character names are trademarks of Nintendo.
