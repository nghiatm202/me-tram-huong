import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Radio from '../../components/radio';
import { useVietnamProvinces } from '../../hooks';

function Order() {
  const {
    formData,
    districts,
    provinces,
    _handleDistrictChange,
    _handleChangeAddress,
  } = useVietnamProvinces();

  return (
    <div className="order-page">
      <div className="container">
        <div className="cart-title">
          <span className="title-step">1. Giỏ hàng</span>
          <MdOutlineArrowForwardIos color="#ccc" size={16} />
          <span className="title-step active">2. Thanh toán</span>
          <MdOutlineArrowForwardIos color="#ccc" size={16} />
          <span className="title-step">3. Hoàn tất đơn hàng</span>
        </div>

        <div className="order-container">
          <div className="order-details">
            <h2 className="title">Chi tiết thanh toán</h2>
            <label for="order-label-name">Họ tên *</label>
            <input
              type="text"
              id="order-label-name"
              name="name"
              placeholder="Họ tên"
            />

            <label for="order-label-phone">Số điện thoại *</label>
            <input
              type="number"
              id="order-label-phone"
              name="phone"
              placeholder="Số điện thoại"
            />

            <label for="order-label-email">Email</label>
            <input
              type="text"
              id="order-label-email"
              name="email"
              placeholder="Email"
            />

            <label>Tỉnh/ Thành phố *</label>
            <select
              name="order-provinces"
              type="text"
              id="order-provinces"
              onChange={_handleChangeAddress}
              value={formData.province}
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {Object.values(provinces).map((item, i) => (
                <option key={i}>{item.name}</option>
              ))}
            </select>

            <label>Chọn Quận/ Huyện *</label>
            <select
              name="order-district"
              id="order-district"
              type="text"
              onChange={_handleDistrictChange}
              value={formData.district}
            >
              <option value="">Chọn Quận/Huyện</option>
              {Object.values(districts).map((item, i) => (
                <option key={i}>{item.name}</option>
              ))}
            </select>

            <label for="order-label-address">Địa chỉ *</label>
            <input
              type="text"
              id="order-label-address"
              name="address"
              placeholder="Số nhà, thôn, xóm,..."
            />

            <h3 className="sub-title">Thông tin thêm</h3>
            <label for="order-label-note">Ghi chú đơn hàng (Tùy chọn)</label>
            <textarea
              type="text"
              id="order-label-note"
              name="note"
              placeholder="Ghi chú"
            />
          </div>

          <div className="my-order">
            <h4 className="my-order-title">Đơn hàng của bạn</h4>
            <div className="products">
              <p className="title">Sản phẩm</p>
              <div className="product-item">
                <p className="name">
                  Trầm hương tự nhiên Việt Nam mảnh nút đơn 10li
                  <span className="amount">x 1</span>
                </p>
                <span className="price">
                  Giá: <span>1.000.000 đ</span>
                </span>
              </div>
            </div>
            <div className="total">
              <span className="title">Tổng</span>
              <span className="price">1.000.000 đ</span>
            </div>
            <div className="final-total-box">
              <div className="transport-fee">
                <span className="title">Phí vận chuyển</span>
                <span className="price">0 đ</span>
              </div>
              <div className="discount">
                <span className="title">Giảm giá</span>
                <span className="price">0 đ</span>
              </div>
              <div className="final-total">
                <span className="title">Thành tiền</span>
                <div className="price">1.000.000 đ</div>
              </div>
            </div>

            <div className="payment-box">
              <p className="title">Phương thức thanh toán</p>
              <Radio id="my-order-cod" name="COD (Thanh toán khi nhận hàng)" />
              <Radio
                id="my-order-online-payment"
                name="Thanh toán online (Chuyển khoản)"
              />
            </div>

            <div className="terms-condition">
              <input type="checkbox" id="terms-checkbox" />
              <label htmlFor="terms-checkbox">
                Tôi đã đọc và đồng ý với các điều khoản và điều kiện của trang
                web *
              </label>
            </div>

            <button className="order-btn">Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
