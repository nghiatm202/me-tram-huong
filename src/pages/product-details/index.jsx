import ReactImageGallery from 'react-image-gallery';
import Breadcrumb from '../../components/breadcrumb';
import { FaStar } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import AgarwoodProductItem from '../../components/agarwood-product-item';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const images = [
  {
    original:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20216%20h%E1%BA%A1t%204li%203.jpg',
    thumbnail:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20216%20h%E1%BA%A1t%204li%203.jpg',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
    id: '2',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li Trầm hương tự nhiên Việt Nam dạng trúc thô 12li Trầm hương tự nhiên Việt Nam dạng trúc thô 12li Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '3',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '4',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '5',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '6',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '7',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '8',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
  {
    id: '9',
    name: 'Trầm hương tự nhiên Việt Nam dạng trúc thô 12li',
    image:
      'https://metramhuong.vn/upload/image/product/Vong/chuoi%20108%20216/Chu%E1%BB%97i%20108%207lii%201.jpg',
    path: '/',
    price: '1.500.000 VNĐ',
  },
];

function ProductDetails() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-details-page">
      <Breadcrumb />
      <div className="container">
        <div className="product-details-container">
          <div className="product-details-image">
            <ReactImageGallery
              items={images}
              showFullscreenButton={false}
              autoPlay
              showPlayButton={false}
            />
          </div>

          <div className="product-details-content">
            <h1 className="title">
              Trầm hương tự nhiên Việt Nam chuỗi 216 hạt 4li
            </h1>
            <div className="rating-box">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text">(0 đánh giá của khách hàng)</span>
            </div>
            <ul className="list">
              <li className="item">
                <BsFillPatchCheckFill color="#70b335" size={16} />
                <span>Chuẩn xuất xứ, chuẩn chất lượng</span>
              </li>
              <li className="item">
                <BsFillPatchCheckFill color="#70b335" size={16} />
                <span>Giao hàng toàn quốc</span>
              </li>
              <li className="item">
                <BsFillPatchCheckFill color="#70b335" size={16} />
                <span>Bảo hành mùi vĩnh viễn</span>
              </li>
              <li className="item">
                <BsFillPatchCheckFill color="#70b335" size={16} />
                <span>Đổi trả trong 24 giờ</span>
              </li>
            </ul>
            <span className="desc">
              Trầm hương tự nhiên Việt Nam chuỗi 216 hạt 4li Số hạt: 216 hạt.
              Đường kính hạt: 4mm. Xuất xứ: Việt Nam. Phân khúc: tốc, hàng phổ
              thông.
            </span>
            <p className="price">3.000.000 đ</p>
            <div className="button-box">
              <button className="contact">Liên hệ đặt mua</button>
              <button className="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h2 className="title">Sản phẩm liên quan</h2>
          <Slider {...settings} className="related-product-list">
            {agarwoodProductList.map(item => {
              return (
                <AgarwoodProductItem
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  path={item.path}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
