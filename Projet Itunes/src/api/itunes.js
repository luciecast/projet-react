export async function searchItunes(query) {
  // on recupere les musiques de l'API iTunes
  const response = await fetch(
    `https://itunes.apple.com/search?term=${query}&entity=song&limit=20`
  );
  const data = await response.json();
  return data.results;
}
