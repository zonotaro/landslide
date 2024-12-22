import Footer from '../components/layout/Footer'

export default function ContactPage() {
  return (
    <div>
      <section id = "contact" className = "contact">
        <div className='container'>
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="~/Home">Trang chủ</a></li>
                  <li>Contact</li>
              </ol>
              <h2>Liên hệ</h2>
            </div>
          </section>
          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Trường THPT Lê Quý Đôn</h3>
                <p>01 Vũ Văn Dũng, An Hải Tây, Sơn Trà, Đà Nẵng, Vietnam</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email</h3>
                <p>landslidedetection@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Điện thoại</h3>
                <p>+84 0363154283</p>
              </div>
            </div>

          </div>

          <div className = "row">
            <div className = "col-lg-6">
              <iframe
                className="gmap_iframe"
                width="100%"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Lê Quý Đôn đà nẵng&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ border: '0', width: '100%', height: '305px' }}
                allowFullScreen
              />
            </div>
            <div className = "col-lg-6">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required>
                    </input>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required>
                    </input>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required>
                  </input>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message"  placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}