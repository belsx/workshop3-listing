const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          item.state !== "removed" && (
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img
                    src={item.MainImage.url_570xN}
                    alt={item.title}
                  />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">
                  {item.title?.length > 50
                    ? item.title.slice(0, 50) + "..."
                    : item.title}
                </p>
                <p className="item-price">
                  {item.currency_code === "USD"
                    ? `$${parseFloat(item.price).toFixed(2)}`
                    : item.currency_code === "EUR"
                    ? `€${parseFloat(item.price).toFixed(2)}`
                    : `${parseFloat(item.price).toFixed(2)} ${
                        item.currency_code
                      }`}
                </p>
                <p
                  className={`item-quantity level-${
                    item.quantity <= 10
                      ? "low"
                      : item.quantity <= 20
                      ? "medium"
                      : "high"
                  }`}
                >
                  {item.quantity} left
                </p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Listing;
