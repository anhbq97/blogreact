import '../../styles/header.css';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-12">
              <header className="header-default">
                <nav className="navbar-menu">
                  {/* logo  */}
                  <div className="navbar-logo">
                    <NavLink to="/posts" className="navbar-brand d-lg-inline-block d-md-inline-block">
                      <Image src={process.env.PUBLIC_URL + '/CLU.png'} fluid bsPrefix='img-logo'></Image>
                      <span style={{ fontSize: 13, fontWeight: 'lighter' }}>Kiến thức để chia sẻ</span>
                    </NavLink>
                  </div>
                  <button type="button" className="icon-bar-mobile"><span><FontAwesomeIcon icon={faBars} /></span></button>
                  <div className="navbar-list" id="navbar-menu">
                    <ul className="navbar-items">
                      <li className="nav-item">
                        <NavLink to="/posts" className="button rounded">
                          Giới thiệu
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/posts" className="button rounded">
                          Chia sẻ <FontAwesomeIcon icon={faAngleRight} className="icon-menu" />
                        </NavLink>
                        <ul className="sub-items">
                          <li><NavLink to="/posts" className="button rounded">Trò chơi</NavLink></li>
                          <li><NavLink to="/posts" className="button rounded">Phim</NavLink></li>
                          <li><NavLink to="/posts" className="button rounded">Sách</NavLink></li>
                        </ul>
                      </li>

                      {/* <li className="nav-item">
                        <NavLink to="/posts" className="button rounded">
                          Sản phẩm <FontAwesomeIcon icon={faAngleRight} className="icon-menu" />
                        </NavLink>
                        <ul className="sub-items">
                          <li><NavLink to="/posts" className="button rounded">Tranh phong thuỷ</NavLink></li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item">
                        <a href="">Hướng dẫn mua hàng</a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a href="">Bài viết <i className="fa-solid fa-angle-right" id="icon-menu" /></a>
                        <ul className="sub-items">
                          <li><a href="">Tranh ảnh</a></li>
                          <li><a href="">Khung tranh</a></li>
                          <li><a href="">Lập trình</a></li>
                          <li><a href="">Trò chơi</a></li>
                          <li><a href="">Phim ảnh</a></li>
                        </ul>
                      </li> */}
                      <li className="nav-item">
                        <NavLink to="/">Tools & Tips <FontAwesomeIcon icon={faAngleRight} className="icon-menu" /></NavLink>
                        <ul className="sub-items">
                          <li>
                            <NavLink to="/posts" className="button rounded">Excel</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/posts" className="button rounded">
                          Về tôi
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/posts" className="button rounded">
                          Liên Hệ
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;