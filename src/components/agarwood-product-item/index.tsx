import { Link } from 'react-router-dom';

function AgarwoodProductItem({ image, name, price, path }) {
  return (
    <div className="agarwood-product-item">
      <Link to={path} className="image">
        <img src={image} alt={name} />
      </Link>

      <div className="info">
        <p className="name">
          <Link to={path}>{name}</Link>
        </p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default AgarwoodProductItem;
