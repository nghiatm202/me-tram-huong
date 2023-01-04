import { GoHome } from 'react-icons/go';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-container">
          <Link to="/" className="home">
            <GoHome size={20} />
            <span>Trang chủ</span>
          </Link>
          <MdOutlineArrowForwardIos />
          <Link to="/" className="products">
            <span>Sản phẩm trầm hương</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
