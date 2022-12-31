import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Radio from '../../components/radio';
import { useVietnamProvinces } from '../../hooks';

function Cart() {
  const {
    formData,
    districts,
    provinces,
    _handleDistrictChange,
    _handleChangeAddress,
  } = useVietnamProvinces();

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-title">
          <span className="title-step active">1. Giỏ hàng</span>
          <MdOutlineArrowForwardIos color="#ccc" size={16} />
          <span className="title-step">2. Thanh toán</span>
          <MdOutlineArrowForwardIos color="#ccc" size={16} />
          <span className="title-step">3. Hoàn tất đơn hàng</span>
        </div>

        <div className="cart-box">
          <div className="cart-products">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>
                    <span>Sản phẩm</span>
                  </th>
                  <th>
                    <span>Giá bán</span>
                  </th>
                  <th>
                    <span>Số lượng</span>
                  </th>
                  <th>
                    <span>Thành tiền</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="product-info">
                    <Link to="/">
                      <img
                        src="https://metramhuong.vn/upload/image/product/Vong/Tron%20don/Tron%20don%2012li%20(1).jpg"
                        alt=""
                      />

                      <span>Trầm hương tự nhiên Việt Nam tròn đơn 12li</span>
                    </Link>
                  </td>
                  <td className="product-subtotal">
                    <span>1.500.000 đ</span>
                  </td>
                  <td className="product-quantity">
                    <div className="group">
                      <input
                        type="button"
                        defaultValue="-"
                        className="qtyminus minus"
                        field="quantity"
                      />
                      <input
                        type="text"
                        name="quantity"
                        defaultValue="0"
                        className="qty"
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="qtyplus plus"
                        field="quantity"
                      />
                    </div>
                  </td>
                  <td className="product-price">
                    <span>1.500.000 đ</span>
                  </td>
                  <td className="product-remove">
                    <span>
                      <AiOutlineDelete
                        color="#002d26"
                        size={20}
                        cursor="pointer"
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to="/" className="cart-back-home">
              <HiOutlineArrowNarrowLeft color="#fff" size={16} />
              <span>Tiếp tục mua sắm</span>
            </Link>
            <div className="cart-coupon">
              <h4>Mã giảm giá</h4>
              <input
                type="text"
                className="coupon-code"
                placeholder="Nhập mã phiếu giảm giá tại đây..."
              />
              <button className="coupon-apply">Áp dụng</button>
            </div>
          </div>

          <div className="cart-payment-actions">
            <p className="cart-payment-title">Giỏ hàng</p>

            <p className="cart-payment-sub-title">Cách thức thanh toán</p>

            <Radio id="cod" name="COD (Thanh toán khi nhận hàng)" />

            <Radio
              id="online-payment"
              name="Thanh toán online (Chuyển khoản)"
            />

            <p className="cart-payment-demo">
              STK: 9909892986 <br /> Chủ TK: Lê Minh Phúc <br /> Ngân Hàng:
              Vietcombank <br /> Nội dung chuyển khoản: "Số điện thoại người
              mua" + "tram huong" <br /> Ví dụ: 0909892986 tram huong
            </p>

            <p>
              Chọn địa điểm <strong>nhận hàng.</strong>
            </p>

            <select
              name="provinces"
              id="provinces"
              onChange={_handleChangeAddress}
              value={formData.province}
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {Object.values(provinces).map((item, i) => (
                <option key={i}>{item.name}</option>
              ))}
            </select>

            <select
              name="district"
              id="district"
              onChange={_handleDistrictChange}
              value={formData.district}
            >
              <option value="">Chọn Quận/Huyện</option>
              {Object.values(districts).map((item, i) => (
                <option key={i}>{item.name}</option>
              ))}
            </select>

            <div className="line"></div>
            
            <div className="transport-fee total-item">
              <span>Phí vận chuyển</span>
              <span className="price">0 đ</span>
            </div>

            <div className="discount total-item">
              <span>Giảm giá</span>
              <span className="price">0 đ</span>
            </div>
            
            <div className="summary-subtotal total-item">
              <span>Thành tiền</span>
              <span className="price">4.100.000 đ</span>
            </div>

            <button className="btn-pay">Tiến hành thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
