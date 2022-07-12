export const searchQuery = (query: string) => {
   // TODO: CORS headers
  fetch(`https://www.fruityvice.com/api/fruit/${query}`)
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      console.log('data: ', data);
    })
    .catch((err) => {
      console.log(err);
    });
};
