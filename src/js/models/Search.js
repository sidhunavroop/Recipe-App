import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = '00961cd13d5ff593655d4e35250dbdd9';
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch(error) {
        alert(error);
    }
  }
}