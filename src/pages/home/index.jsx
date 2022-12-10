import { Link } from 'react-router-dom';
import AgarwoodProductItem from '../../components/agarwood-product-item';
import FeedbackSlider from '../../components/feedback-slider';

const agarwoodCategories = [
  {
    title: 'Vòng trầm hương tự nhiên',
    path: '/',
  },
  {
    title: 'Nhang trầm hương tự nhiên',
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

const agarwoodProductList = [
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li Trầm hương tự nhiên Việt Nam dạng trúc thô 12li Trầm hương tự nhiên Việt Nam dạng trúc thô 12li Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '1',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
];

const agarwoodInfoList = [
  {
    id: '1',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
  {
    id: '2',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
  {
    id: '3',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
  {
    id: '4',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
  {
    id: '5',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
  {
    id: '6',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
  {
    id: '7',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2014li%20(2).jpg',
    name: 'Trầm là gì? Trầm vườn là gì? Phân biệt ra sao? Phân cấp như thế nào?',
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="agarwood-info">
        <div className="container">
          <p className="section-heading">Mê trầm hương</p>
          <p className="sub-heading">
            Chia sẻ đam mê Trầm Hương thật và mang sản phẩm Trầm Hương tự nhiên
            đến mọi người
          </p>

          <ul className="agarwood-info-list">
            {agarwoodInfoList.map(item => {
              return (
                <li key={item.id} className="agarwood-info-item">
                  <Link to="/" className="agarwood-info-image">
                    <img src={item.image} alt={item.name} />
                  </Link>
                  <p className="name">
                    <Link to="/">{item.name}</Link>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="container">
        <section className="agarwood-products">
          <p className="section-heading">Sản phẩm trầm hương</p>
          <ul className="agarwood-categories">
            {agarwoodCategories.map(item => {
              return (
                <li key={item.title} className="agarwood-category">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="agarwood-product-list">
            {agarwoodProductList.map(item => {
              return (
                <AgarwoodProductItem
                  key={item.name}
                  price={item.price}
                  name={item.name}
                  image={item.image}
                  path={item.path}
                />
              );
            })}
          </div>
        </section>
      </div>
      <section class="agarwood-intro">
        <div className="container">
          <div className="agarwood-intro-container">
            <div className="agarwood-intro-content">
              <p className="sub-heading">Giới thiệu về</p>
              <p className="heading">Mê Trầm Hương</p>
              <div class="description">
                <p>
                  Mê Trầm Hương hiểu rất rõ băn khoăn của các anh chị mới tiếp
                  xúc với trầm, cũng như chính Mê Trầm Hương đã từng khó khăn
                  khi tìm hiểu về trầm hương thật, bởi bây giờ thật giả lẫn lộn,
                  giá cả chênh lệch quá nhiều giữa hàng tự nhiên và hàng nhân
                  tạo nuôi cấy.
                </p>

                <p>
                  Được bắt đầu từ đam mê với mùi hương của Trầm Hương tự nhiên,
                  Mê Trầm Hương muốn muốn chia sẻ kiến thức và sản phẩm
                  từ&nbsp;trầm hương tự nhiên thật đến cho người dùng. Mê Trầm
                  Hương&nbsp;chỉ kinh doanh Trầm Hương tự nhiên, nói không với
                  hàng nhân tạo nuôi cấy, hàng giả, đền ngay 100% giá trị hàng
                  nếu phát hiện không đúng Trầm hương tự nhiên bất cứ lúc nào.
                </p>
              </div>
              <p className="read-more">
                <Link to="/">Xem thêm</Link>
              </p>
            </div>
            <div className="agarwood-intro-image">
              <Link to="/" className="agarwood-intro-image-link">
                <img
                  src="https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tien%20phuoc%20lua/14li%20Tien%20Phu%E1%BB%9Bc%20l%E1%BB%B1a%203.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="feedback-section">
          <p className="section-heading">Đánh giá của khách hàng</p>
          <FeedbackSlider />
        </section>
      </div>
    </div>
  );
}

export default Home;
