import { TbTruckDelivery } from 'react-icons/tb';
import { Ri24HoursLine } from 'react-icons/ri';
import { FiPhoneCall, FiSearch } from 'react-icons/fi';
import { BsMinecartLoaded } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-upper">
        <div className="container">
          <div className="shipping header-upper-item">
            <TbTruckDelivery size={25} color="#ffd065" />
            <span className="text">Giao hàng miễn phí</span>
          </div>
          <div className="exchange header-upper-item">
            <Ri24HoursLine size={25} color="#ffd065" />
            <span className="text">Đổi trả trong 24h</span>
          </div>
          <div className="call header-upper-item">
            <FiPhoneCall size={25} color="#ffd065" />
            <span className="text">Hotline: 0909892986</span>
          </div>
          <div className="cart header-upper-item">
            <span className="text">Giỏ hàng</span>
            <BsMinecartLoaded size={25} color="#ffd065" />
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="container">
          <ul className="header-lower-list">
            <li className="header-lower-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="header-lower-item">
              <Link to="/">Giới thiệu</Link>
            </li>
            <li className="header-lower-item">
              <Link to="/">Sản phẩm</Link>
            </li>
            <li className="header-lower-item">
              <Link to="/">Tin tức</Link>
            </li>
            <li className="header-lower-item">
              <Link to="/">Video</Link>
            </li>
            <li className="header-lower-item">
              <Link to="/">Liên hệ</Link>
            </li>
          </ul>

          <div class="header-search">
            <form action="#">
              <input type="text" name="search" />
              <button type="submit">
                <FiSearch size={25} color="#002d26" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
