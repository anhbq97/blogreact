import '../../styles/footer.css';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
      <footer style={{backgroundColor: '#14111108'}}>
        <div className="container">
          <div className="row" style={{alignItems: 'center',}}>
            <div className="col-md-4">
              <b className="name-footer"><Image src={process.env.PUBLIC_URL + '/CLU.png'} fluid bsPrefix='img-logo'></Image>PoorClu</b>
              <strong className="description-footer">@2022 Thiết kế và phát triển bởi PoorCLU. Ghi rõ nguồn khi lấy thông tin từ website này.</strong>
            </div>
            <div className="col-md-5">
              <b className="title-footer">Về Tôi</b>
              <small className="description-footer">Xin Chào. Tôi tên là Bùi Quốc Anh <br />Blog được lập ra với mục đích viết những kiến thức mà tôi đã học được trong quá trình học tập và làm việc. Tôi những kiến thức tôi chia sẻ cũng sẽ giúp ích cho ai đó cần<br />Xin cảm ơn.</small>
            </div>
            <div className="col-md-3">
              <b className="title-footer">Liên Hệ</b>
              <small className="description-footer"><FontAwesomeIcon icon={faEnvelope} /> bquocanh.97<FontAwesomeIcon icon={faAt} />gmail.com</small>
              <small className="description-footer"><FontAwesomeIcon icon={faPhone} /> +84 963-527-200</small>
              <div className="icons-contact">
                <i className="fa-brands fa-facebook-square" />
                <i className="fa-brands fa-youtube" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-twitter-square" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Header;