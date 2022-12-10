import { FiPhone, FiMail } from 'react-icons/fi';
import { TfiWorld, TfiLocationPin } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const footerCategories = [
  {
    title: 'Vòng trầm hương tự nhiên',
    path: '/',
  },
  {
    title: 'Nhang trầm tự nhiên',
    path: '/',
  },
  {
    title: 'Trầm hương xông đốt',
    path: '/',
  },
  {
    title: 'Dụng cụ đốt trầm',
    path: '/',
  },
];

const footerPolicies = [
  {
    title: 'Đặt hàng và thanh toán',
    path: '/',
  },
  {
    title: 'Phương thức vân chuyển',
    path: '/',
  },
  {
    title: 'Chính sách bảo mật thông tin',
    path: '/',
  },
  {
    title: 'Chính sách bảo hành, đổi trả',
    path: '/',
  },
  {
    title: 'Giới thiệu',
    path: '/',
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-upper">
          <div className="footer-col-first">
            <div className="footer-logo">
              <span className="logo">
                <img src="" alt="logo" />
              </span>
              <span className="name">Mê trầm hương</span>
            </div>

            <div className="footer-contact">
              <div className="footer-heading-lg">Thông tin liên hệ</div>
              <div className="footer-contact-item phone">
                <FiPhone />
                <span>
                  <strong>Điện thoại: </strong> 0909892986
                </span>
              </div>

              <div className="footer-contact-item email">
                <FiMail />
                <span>
                  <strong>Email: </strong> metramhuong@gmail.com
                </span>
              </div>

              <div className="footer-contact-item world">
                <TfiWorld />
                <span>
                  <strong>Website: </strong> metramhuong.vn
                </span>
              </div>

              <div className="footer-contact-item location">
                <TfiLocationPin />
                <span>
                  <strong>Địa chỉ: </strong> Số 8 đường 6A, KDC An Khánh, Ninh
                  Kiều, Cần Thơ
                </span>
              </div>
            </div>
          </div>

          <div className="footer-col-second">
            <div className="footer-categories">
              <p className="footer-heading-base">Danh mục sản phẩm</p>
              <ul className="list">
                {footerCategories.map(footerCategory => {
                  return (
                    <li key={footerCategory.title} className="item">
                      <Link to={footerCategory.path}>
                        {footerCategory.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="footer-fanpage">
              <p className="footer-heading-base">Fanpage</p>
            </div>
          </div>

          <div className="footer-col-third">
            <div className="footer-policies">
              <p className="footer-heading-base">Chính sách</p>
              <ul className="list">
                {footerPolicies.map(policy => {
                  return (
                    <li className="item" key={policy.title}>
                      <Link className="link" to={policy.path}>
                        {policy.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="footer-map">
              <p className="footer-heading-base">Map</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2022 metramhuong.vn - Chia sẻ đam mê Trầm Hương thật và
            mang sản phẩm Trầm Hương tự nhiên đến mọi người
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
