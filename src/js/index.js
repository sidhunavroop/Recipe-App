import axios from 'axios';
async function getResults(query) {
  const key = '00961cd13d5ff593655d4e35250dbdd9';
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  try {
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch(error) {
      alert(error);
  }
  
}
getResults('penne pasta');