import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate}`;
}

function PokemonListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div className="PokemonListItem">
      <div>
        <h1>{item.name}</h1>
        <p>{item.type[0]}</p>
        <p>{item.type[1]}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={item.id}>
            <PokemonListItem item={item} onDelete={onDelete} />
            <input></input>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
