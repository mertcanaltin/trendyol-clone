import React from "react";

import './index.scss';
export default function Breadcrumb() {
  return (
    <div>
      <div
        data-partial-fragment-name="MarketingProductDetail"
        data-partial-fragment-part="breadcrumb"
      >
        <div id="marketing-product-detail-breadcrumb">
          <div className="product-detail-breadcrumb full-width" data-reactroot>
            <a href="/" className="product-detail-breadcrumb-item">
              <span>Anasayfa</span>
              <i className="i-arrow-right" />
            </a>
            <a
              href="/erkek-x-g2"
              title="Erkek"
              className="product-detail-breadcrumb-item"
            >
              <span>Erkek</span>
              <i className="i-arrow-right" />
            </a>
            <a
              href="/erkek-giyim-x-g2-c82"
              title="Giyim"
              className="product-detail-breadcrumb-item"
            >
              <span>Giyim</span>
              <i className="i-arrow-right" />
            </a>
            <a
              href="/erkek-kaban-mont-x-g2-c104598"
              title="Kaban Mont"
              className="product-detail-breadcrumb-item"
            >
              <span>Kaban Mont</span>
              <i className="i-arrow-right" />
            </a>
            <a
              href="/erkek-mont-x-g2-c118"
              title="Mont"
              className="product-detail-breadcrumb-item"
            >
              <span>Mont</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
