import { Container } from "react-grid-system";

import "./style.scss";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <Container>
        <nav className="category-nav">
          <ul className="category-nav-items">
            <li className="category-nav-item dropdown">
              <a className="category-nav-link" href="#top">
                Kadın
              </a>
              <div className="dropdown-menu">
                <div className="category-subnav">
                  <div className="category-subnav-wrapper">
                    <div className="category-subnav-col">
                      <a className="category-subnav-title" href="#top">
                        Giyim
                      </a>
                      <ul>
                        <li>
                          <a href="#top">Elbise</a>
                        </li>
                        <li>
                          <a href="#top">Elbise</a>
                        </li>
                        <li>
                          <a href="#top">Elbise</a>
                        </li>
                      </ul>
                    </div>
                    <div className="category-subnav-col">
                      <a className="category-subnav-title" href="#top">
                        Ayakkabı
                      </a>
                    </div>
                    <div className="category-subnav-col">
                      <a className="category-subnav-title" href="#top">
                        Aksesuar&Çanta
                      </a>
                    </div>
                    <div className="category-subnav-col">
                      <a className="category-subnav-title" href="#top">
                        İç Giyim
                      </a>
                    </div>
                    <div className="category-subnav-col">
                      <a className="category-subnav-title" href="#top">
                        Kozmetik
                      </a>
                    </div>
                    <div className="category-subnav-campaign">
                      <a href="#top">
                        <img
                          src="https://cdn.dsmcdn.com/mnresize/500/247/ty175/campaign/banners/original/582354/dbddf0cac5_0_detay.jpg"
                          alt=""
                        />
                      </a>
                      <a href="#top">
                        <img
                          src="https://cdn.dsmcdn.com/mnresize/500/247/ty175/campaign/banners/original/582354/dbddf0cac5_0_detay.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Erkek
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Çocuk
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Ev & Yaşam
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Süpermarket
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Kozmetik
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Ayakkabı & Çanta
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Saat & Aksesuar
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Elektronik
              </a>
            </li>
            <li className="category-nav-item">
              <a className="category-nav-link" href="#top">
                Spor & Outdoor
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default HeaderBottom;
