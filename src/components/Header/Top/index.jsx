import {Container} from "react-grid-system";

import "./style.scss";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <Container>
        <ul>
          <li>
            <a href="#top">İndirim Kuponlarım</a>
          </li>
          <li>
            <a href="#top">
              Trendyol'da Satış Yap
            </a>
          </li>
          <li>
            <a href="#top">Yardım & Destek</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default HeaderTop;