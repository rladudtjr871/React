import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate}`;
}

function ReviewListItem({ item }) {
  return (
    <div className="ReviewListItem">
      <img className="ReviewistItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} />
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
