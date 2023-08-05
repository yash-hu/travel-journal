export const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <div className="card-img">
        <img src={require(`../images/${props.imageUrl}`)} alt={props.title} />
      </div>
      <div className="card-info">
        <i class="fa-solid fa-location-dot"></i>
        <span className="country"> {props.location.toUpperCase()}</span>
        <span className="map-url">
          <a href={props.googleMapUrl}>
            View on Google Maps
          </a>
        </span>
        <h3 className="name">{props.title}</h3>
        <h6 className="date">{props.startDate} - {props.endDate}</h6>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};
