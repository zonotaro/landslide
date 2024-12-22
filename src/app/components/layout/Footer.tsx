// src/app/components/layout/Footer.tsx
import Link from 'next/link';
import '../wwwroot/css/animate.min.css';
import '../wwwroot/css/bootstrap.min.css';
import '../wwwroot/css/bootstrap-icons.css';
import '../wwwroot/css/boxicons.min.css';
import '../wwwroot/css/glightbox.min.css';
import '../wwwroot/css/swiper-bundle.min.css';
import '../wwwroot/css/style.css';

const Footer = () => {
  return (
    <footer id = "footer">
      <div className="footer-newsletter">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h4>Nhận bản tin</h4>
                    <p>
                      Bạn quan tâm về vấn đề sạt lở đất, cùng chia sẻ và chung ta với cộng đồng, hãy để lại email để cập nhật thông tin mới nhất.
                    </p>
                </div>
                <div className="col-lg-6">
                    <form action="" method="post">
                        <input type="email" name="email"/>
                        <input type="submit" value="Đăng ký"/>
                    </form>
                </div>
            </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 footer-links">
              <h4>Liên kết</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="~/home">Trang chủ</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="~/home/problem">Vấn nạn sạt lở</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="~/home/report">Báo cáo</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="~/home/cam">Dự báo</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="~/home/contact">Liên hệ</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="~/home/about">Giới thiệu</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-4 footer-contact">
              <h4>Liên hệ</h4>
              <p>
                Lê Anh Tú<br/>
                Lê Đức Chính<br />
                Đỗ Trần Khánh Vinh<br />
                Huỳnh Thanh Hải Phong <br />
                Văn Công Nam <br />
                <strong>Điện thoại:</strong> +36154283<br/>
                <strong>Email:</strong> landslidedetection@gmail.com<br />
              </p>
            </div>
            <div className="col-lg-4 col-md-4 footer-info">
              <h3>Giới thiệu</h3>
              <p>Hệ thống phát hiện và cảnh báo sạt lở đất được ra đời trong bối cảnh ...</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;