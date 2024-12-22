// src/app/(routes)/page.tsx
import Slider from './components/ui/Slider';
import Footer from './components/layout/Footer'
export default function HomePage() {
  return (
    <div className="space-y-12">
      <Slider/>
      <div id="featured" className="featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h3><a href="~/home/cause">Mục đích nghiên cứu</a></h3>
                <ul>
                  <li>
                    <p>
                      Tìm hiểu các thiết bị hỗ trợ, thiết bị phát hiện và cảnh báo để giúp đỡ người dân xung quanh không bị gây nguy hiểm từ các trận sạt lở
                    </p>
                    </li>
                  <li>
                    <p>
                      Giúp người sử dụng theo dõi tình hình của vùng đất nơi được đặt thiết bị
                    </p>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="bi bi-bar-chart"></i>
                  <h3><a href="~/home/cause">Tính mới của đề tài</a></h3>
                  <ul>
                    <li>
                      <p>
                        Sử dụng các cảm biến để có thể đo được các thống từ đó đưa ra chẩn đoản về có thể xảy ra các vụ sạt lở đất hay không nhằm giúp cho người dân nắm bắt kịp thời, tránh các tai nạn đáng tiếc.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <i className="bi bi-binoculars"></i>
                    <h3><a href="~/home/cause"> Tính thực tiễn của đề tài</a></h3>
                    <ul>
                      <li>
                        <p>
                          Đề tài có tính thực tiễn cao, dễ dàng áp dụng ở các vùng gần núi, thường xuyên xảy ra mưa.
                        </p>
                      </li>
                      <li>
                        <p>
                          Dễ dàng lắp đặt: Việc lắp đặt hệ thống vô cùng dễ dàng; tất cả các module chức năng đều được thiết lập chế độ cắm-và-chạy giúp người dùng dễ thao tác và sử dụng.
                        </p>
                      </li>
                      <li>
                        <p>
                          Chi phí và giá thành thấp.
                        </p>
                      </li>
                      <li>
                        <p>
                          Đặc biệt, người dùng có thể nắm bắt tình trạng của vùng được đặt thiết bị
                        </p>
                      </li>
                    </ul>
                   </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}