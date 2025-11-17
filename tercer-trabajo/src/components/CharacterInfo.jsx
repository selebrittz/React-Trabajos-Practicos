//el hook recibe data desestructurado (del state)
export const CharacterInfo = ({ data }) => {
  //creo manualmenre la url para la imagen  uniendo la base de la url mas el portrait_path (path de la imagen)
  const IMAGE_BASE_URL = "https://cdn.thesimpsonsapi.com/500";
  const fullImageUrl = IMAGE_BASE_URL + data.portrait_path;

  return (
    <div id="wrapper" className="info-section">
      <div className="card">
        <div className="character-container">
          <img src={fullImageUrl} className="character-image" />

          <h3 className="character-name">Name: {data.name}</h3>
          <p className="character-description">
            Description: {data.description}
          </p>
          <p className="character-status">Status: {data.status}</p>
        </div>
      </div>
    </div>
  );
};
