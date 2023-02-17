import '../../styles/header.css';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
          <div className="row">
            <header className="header-default">
              <nav className="navbar-menu">
                {/* logo  */}
                <div className="navbar-logo">
                  <NavLink to="/posts" className="navbar-brand d-lg-inline-block d-md-inline-block">
                    <span className="icon-home"></span>Erabus
                  </NavLink>
                  <small />
                </div>
                <button type="button" className="icon-bar-mobile"><span className="fa-solid fa-bars" /></button>
                <div className="navbar-list" id="navbar-menu">
                  <ul className="navbar-items">
                    <li className="nav-item">
                      <NavLink to="/posts" className="button rounded">
                        <span className="icon-home"></span>Giới thiệu
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/posts" className="button rounded">
                        Review <i className="fa-solid fa-angle-right" id="icon-menu" />
                      </NavLink>
                      <ul className="sub-items">
                        <li><NavLink to="/posts" className="button rounded">Trò chơi</NavLink></li>
                        <li><NavLink to="/posts" className="button rounded">Phim</NavLink></li>
                        <li><NavLink to="/posts" className="button rounded">Sách</NavLink></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/posts" className="button rounded">
                        Sản phẩm <i className="fa-solid fa-angle-right" id="icon-menu" />
                      </NavLink>
                      <ul className="sub-items">
                        <li><NavLink to="/posts" className="button rounded">Tranh phong thuỷ</NavLink></li>
                      </ul>
                    </li>
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
                    {/* <li class="nav-item">
                          <a href="">Tools & Tips <i class="fa-solid fa-angle-right" id="icon-menu"></i></a>
                          <ul class="sub-items">
                              <li><a href="">Excel</a></li>
                          </ul>
                      </li> */}
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
    </>
  )
}

export default Header;