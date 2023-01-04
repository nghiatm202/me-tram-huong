import { FaStar } from 'react-icons/fa';

function FeedbackItem() {
  return (
    <div className="feedback-item">
      <div className="feedback-image">
        <img
          src="https://metramhuong.vn/upload/image/feedback/Feedback%208.png"
          alt="feedback"
        />
      </div>
      <div className="feedback-icon">
        <FaStar size={20} color="#ffd065" />
        <FaStar size={20} color="#ffd065" />
        <FaStar size={20} color="#ffd065" />
        <FaStar size={20} color="#ffd065" />
        <FaStar size={20} color="#ffd065" />
      </div>
    </div>
  );
}

export default FeedbackItem;
