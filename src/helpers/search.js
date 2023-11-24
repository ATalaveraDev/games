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

export function deriveSearchedGamesState(games) {
  let result = [];

  games.forEach(game => {
    if (game.status === 'unselected') {
      result.unshift(game);
    }
  });

  return [...result];
}

export function deriveSelectedGamesState(games) {
  let result = [];

  games.forEach(game => {
    if (game.status === 'selected') {
      result.unshift(game);
    }
  });

  return [...result];
}