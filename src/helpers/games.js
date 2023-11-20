async function getDataFromApi(param) {
  let searchQuery = param ? `?name=${param}` : '';
  const response = await fetch(`http://localhost:3001/videogames${searchQuery}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data;
}

export async function getGames() {
  const data = await getDataFromApi();

  return data.results.map(game => { 
    return { ...game, status: 'unselected' };
  });
}

export async function searchGames(search) {
  const data = await getDataFromApi(search);

  return data.results.map(game => { 
    return { ...game };
  });
}