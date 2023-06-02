import './card.styles.css';

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div key={id}>
      <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set8&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
