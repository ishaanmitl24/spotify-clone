export const fetchArtist = async () => {
  const response = await fetch('https://spotify-auth-c4e29-default-rtdb.firebaseio.com/artist.json');
  if(!response.ok){
    throw new Error('Fetching Failed');
  }
  const result = await response.json();
	return result.artist;
};

export const getAlbumData = async()=>{
 
  const response = await fetch(
    'https://spotify-auth-c4e29-default-rtdb.firebaseio.com/albums.json'
  );
  if(!response.ok){
    throw new Error('Fetching Failed');
  }
  const result = await response.json();

	return result.album;
}


export const getSingleArtistData= async({signal,id})=>{
  const response = await fetch(
    `https://spotify-auth-c4e29-default-rtdb.firebaseio.com/overview.json`,
    {signal}
  );
  if(!response.ok){
    throw new Error('Fetching Failed');
  }
  const result = await response.json();
	return result[id];
}
export const getSingleAlbumData= async({signal,id})=>{
  const response = await fetch(
    `https://spotify-auth-c4e29-default-rtdb.firebaseio.com/albumoverview.json`,
    {signal}
  );
  if(!response.ok){
    throw new Error('Fetching Failed');
  }
  const result = await response.json();
	return result[id];
}