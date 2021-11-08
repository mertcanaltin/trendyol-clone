import React from "react";
import './index.scss';
export default function Main() {
  return (
    <div>
      <main id="product-detail-app">
        <div className="product-detail-container" data-tracker-root="true">
          <div className="sticky-header">
            <div
              className="sticky-product-desc-wrapper"
              data-tracker="seen:Seen"
              data-event-action="Sticky_Header"
              data-event-category="Product Detail"
            >
              <div className="sticky-product-info">
                <img
                  loading="lazy"
                  className="sticky-product-desc-img"
                  src="https://cdn.dsmcdn.com/ty219/product/media/images/20211101/13/163158425/104468829/2/2_org_zoom.jpg"
                  alt="Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                />
                <div className="sticky-product-desc">
                  <span className="sticky-product-name">
                    River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez
                    Kışlık Mont
                  </span>
                  <div className="pr-bx-w">
                    <div className="pr-bx-dsc">
                      <div className="pr-bx-nm-dsc">
                        <div className="pr-bx-nm with-org-prc">
                          <span className="prc-org">229,00 TL</span>
                          <span className="prc-slg prc-slg-w-dsc">190 TL</span>
                        </div>
                      </div>
                      <div className="seperator" />
                      <div className="pr-bx-pr-dsc">
                        <div className="pr-bx-pr-dsc">Sepette %20 İndirim</div>
                        <div style={{ display: "flex" }}>
                          <span className="prc-dsc">152 TL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky-product-buttons">
                <div className="hl-cn">
                  <div className="hl-ol" />
                  <div className="hl-cl">
                    <div className="size-variant-wrapper">
                      <div className="size-variant-title-wrapper">
                        <span className="size-variant-title">Beden</span>
                      </div>
                      <div className="pr-in-sz-pk">
                        <span>
                          <span>S</span>
                          <span className="stck-msg" />
                        </span>
                        <span className="caret" />
                      </div>
                      <div className="pr-in-drp">
                        <ul className="pr-in-drp-u">
                          <li className="vrn-item">
                            <span>S</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="add-to-basket">
                  <div className="add-to-basket-button-text">Sepete Ekle</div>
                  <div className="add-to-basket-button-text-success">
                    Sepete Eklendi
                  </div>
                  <div className="add-to-bs-ldr" />
                </button>
                <div className="favorite-button">
                  <div className="review-tooltip">
                    <div className="tooltip-indicator">
                      <button className="fv">
                        <i className="i-heart" />
                      </button>
                    </div>
                    <div className="top-padding" />
                    <div className="review-tooltip-content">
                      <div>Favorilere Ekle</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="product-container" data-drroot="product-detail">
              <div>
                <div className="gallery-container" tabIndex={0}>
                  <div className="product-image-container">
                    <i className="i-arrow-right right" />
                    <i className="i-arrow-right left" />
                    <div className="base-product-image">
                      <div style={{ position: "relative" }}>
                        <img
                          src="https://cdn.dsmcdn.com/ty219/product/media/images/20211101/13/163158425/104468829/6/6_org_zoom.jpg"
                          style={{ width: "100%", height: "100%" }}
                          alt=''
                        />
                        <div
                          className="js-image-zoom__zoomed-area"
                          style={{
                            background: "white",
                            opacity: "0.4",
                            position: "absolute",
                            width: "166.667px",
                            height: "200px",
                            top: "60px",
                            left: "0px",
                            display: "none",
                          }}
                        />
                        <div
                          className="js-image-zoom__zoomed-image"
                          style={{
                            backgroundImage:
                              'url("https://cdn.dsmcdn.com/mnresize/1200/1800/ty219/product/media/images/20211101/13/163158425/104468829/6/6_org_zoom.jpg")',
                            backgroundRepeat: "no-repeat",
                            display: "none",
                            position: "absolute",
                            top: "0px",
                            right: "0px",
                            transform: "translateX(100%)",
                            width: "500px",
                            height: "100%",
                            backgroundSize: "1200px 1800px",
                            backgroundPosition: "0px -180px",
                          }}
                        />
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      className="product-stamp ul"
                      src="https://cdn.dsmcdn.com/stamp/buyuk-firsat.png"
                      style={{ width: "103.75px" }}
                      alt=''
                    />
                  </div>
                  <div className="product-slide-container">
                    <div className="styles-module_sliderBase__swkx1 undefined">
                      <div className="styles-module_slider__o0fqa">
                        <div className="product-slide">
                          <img
                            loading="lazy"
                            src="https://cdn.dsmcdn.com/mnresize/128/192/ty219/product/media/images/20211101/13/163158425/104468829/2/2_org_zoom.jpg"
                            alt="River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                          />
                        </div>
                        <div className="product-slide">
                          <img
                            loading="lazy"
                            src="https://cdn.dsmcdn.com/mnresize/128/192/ty221/product/media/images/20211101/13/163158425/104468829/3/3_org_zoom.jpg"
                            alt="River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                          />
                        </div>
                        <div className="product-slide">
                          <img
                            loading="lazy"
                            src="https://cdn.dsmcdn.com/mnresize/128/192/ty220/product/media/images/20211101/13/163158425/104468829/4/4_org_zoom.jpg"
                            alt="River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                          />
                        </div>
                        <div className="product-slide">
                          <img
                            loading="lazy"
                            src="https://cdn.dsmcdn.com/mnresize/128/192/ty221/product/media/images/20211101/13/163158425/104468829/5/5_org_zoom.jpg"
                            alt="River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                          />
                        </div>
                        <div className="product-slide focused">
                          <img
                            loading="lazy"
                            src="https://cdn.dsmcdn.com/mnresize/128/192/ty219/product/media/images/20211101/13/163158425/104468829/6/6_org_zoom.jpg"
                            alt="River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-modal hidden">
                    <div className="gallery-modal-content">
                      <i className="i-close" />
                      <img
                        loading="lazy"
                        src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty219/product/media/images/20211101/13/163158425/104468829/6/6_org_zoom.jpg"
                        alt="River Club Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık Mont"
                      />
                      <i className="i-arrow-right right" />
                      <i className="i-arrow-right left" />
                    </div>
                  </div>
                  <div className="gallery-stamp-container">
                    <div className="cargo-free">KARGO BEDAVA</div>
                  </div>
                </div>
              </div>
              <div className="container-right-content">
                <div className="pr-in-w">
                  <div>
                    <div className="pr-in-cn">
                      <div>
                        <h1 className="pr-new-br">
                          River Club
                          <span>
                            {" "}
                            Erkek Siyah Içi Polarlı Su Ve Rüzgar Geçirmez Kışlık
                            Mont M-101{" "}
                          </span>
                        </h1>
                      </div>
                      <div className="merchant-box-wrapper">
                        <span className="supplier-text">Satıcı : </span>
                        <a
                          href="/magaza/river-club-m-217681"
                          className="merchant-text"
                        >
                          River Club
                        </a>
                      </div>
                      <div className="pr-in-ratings">
                        <div className="pr-in-rnr">
                          <div className="review-tooltip">
                            <div className="tooltip-indicator">
                              <div className="rating-line-wrapper">
                                <div className="rt-st-avg">
                                  <div className="ratings readonly">
                                    <div className="star-w">
                                      <div className="empty">
                                        <div className="star" />
                                      </div>
                                      <div
                                        className="full"
                                        style={{
                                          width: "100%",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <div className="star" />
                                      </div>
                                    </div>
                                    <div className="star-w">
                                      <div className="empty">
                                        <div className="star" />
                                      </div>
                                      <div
                                        className="full"
                                        style={{
                                          width: "100%",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <div className="star" />
                                      </div>
                                    </div>
                                    <div className="star-w">
                                      <div className="empty">
                                        <div className="star" />
                                      </div>
                                      <div
                                        className="full"
                                        style={{
                                          width: "100%",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <div className="star" />
                                      </div>
                                    </div>
                                    <div className="star-w">
                                      <div className="empty">
                                        <div className="star" />
                                      </div>
                                      <div
                                        className="full"
                                        style={{
                                          width: "100%",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <div className="star" />
                                      </div>
                                    </div>
                                    <div className="star-w">
                                      <div className="empty">
                                        <div className="star" />
                                      </div>
                                      <div
                                        className="full"
                                        style={{
                                          width: "53%",
                                          maxWidth: "100%",
                                        }}
                                      >
                                        <div className="star" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="top-padding" />
                            <div className="review-tooltip-content">
                              <div>
                                <span className="avg-rt-txt-tltp">
                                  <span className="tltp-avg-cnt">4.5 </span>
                                  Ortalama Puan
                                </span>
                                <div className="pr-rnr-rat-s">
                                  <div className="pr-rnr-st-ln">
                                    <div className="pr-rnr-st-v">5</div>
                                    <div className="ratings readonly">
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="pr-rnr-prg">
                                      <div className="pr-rnr-prg-y star-5" />
                                    </div>
                                    <div className="pr-rnr-st-c">236</div>
                                  </div>
                                  <div className="pr-rnr-st-ln">
                                    <div className="pr-rnr-st-v">4</div>
                                    <div className="ratings readonly">
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="pr-rnr-prg">
                                      <div className="pr-rnr-prg-y star-4" />
                                    </div>
                                    <div className="pr-rnr-st-c">40</div>
                                  </div>
                                  <div className="pr-rnr-st-ln">
                                    <div className="pr-rnr-st-v">3</div>
                                    <div className="ratings readonly">
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0px",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="pr-rnr-prg">
                                      <div className="pr-rnr-prg-y star-3" />
                                    </div>
                                    <div className="pr-rnr-st-c">15</div>
                                  </div>
                                  <div className="pr-rnr-st-ln">
                                    <div className="pr-rnr-st-v">2</div>
                                    <div className="ratings readonly">
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0px",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0px",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="pr-rnr-prg">
                                      <div className="pr-rnr-prg-y star-2" />
                                    </div>
                                    <div className="pr-rnr-st-c">6</div>
                                  </div>
                                  <div className="pr-rnr-st-ln">
                                    <div className="pr-rnr-st-v">1</div>
                                    <div className="ratings readonly">
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0%",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0px",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0px",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                      <div className="star-w">
                                        <div className="empty">
                                          <div className="star" />
                                        </div>
                                        <div
                                          className="full"
                                          style={{
                                            width: "0px",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <div className="star" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="pr-rnr-prg">
                                      <div className="pr-rnr-prg-y star-1" />
                                    </div>
                                    <div className="pr-rnr-st-c">15</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/river-club/erkek-siyah-ici-polarli-su-ve-ruzgar-gecirmez-kislik-mont-p-58925113/yorumlar?boutiqueId=588832&merchantId=217681&v=s"
                            className="rvw-cnt-tx"
                          >
                            312 Değerlendirme
                          </a>
                          <div className="seperator" />
                          <a
                            className="product-questions"
                            href="/river-club/erkek-siyah-ici-polarli-su-ve-ruzgar-gecirmez-kislik-mont-p-58925113/saticiya-sor?merchantId=217681"
                          >
                            196 Soru &amp; Cevap
                          </a>
                        </div>
                      </div>
                      <div className="product-price-container">
                        <div className="pr-bx-w">
                          <div className="pr-bx-dsc">
                            <div className="pr-bx-nm-dsc">
                              <div className="pr-bx-nm with-org-prc">
                                <span className="prc-org">229,00 TL</span>
                                <span className="prc-slg prc-slg-w-dsc">
                                  190 TL
                                </span>
                              </div>
                            </div>
                            <div className="seperator" />
                            <div className="pr-bx-pr-dsc">
                              <div className="pr-bx-pr-dsc">
                                Sepette %20 İndirim
                              </div>
                              <div style={{ display: "flex" }}>
                                <span className="prc-dsc">152 TL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pr-ins-inf-txt">
                    12 aya varan taksit seçenekleriyle!
                  </div>
                </div>
                <div
                  className="slicing-attributes"
                  data-drroot="slicing-attributes"
                />
                <div className="size-variant-wrapper">
                  <div className="size-variant-title-wrapper">
                    <span className="size-variant-title">
                      Beden: <span className="size-variant-attr-value">S</span>
                    </span>
                  </div>
                  <div className="variants">
                    <div
                      className="selected sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      S
                    </div>
                    <div
                      className="sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      M
                    </div>
                    <div
                      className="so sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      L<span className="i-alarm" />
                    </div>
                    <div
                      className="so sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      XL
                      <span className="i-alarm" />
                    </div>
                    <div
                      className="sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      XXL
                    </div>
                    <div
                      className="sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      3XL
                    </div>
                  </div>
                </div>
                <div className="vas-product" />
                <div className="product-button-container">
                  <button className="add-to-basket">
                    <div className="add-to-basket-button-text">Sepete Ekle</div>
                    <div className="add-to-basket-button-text-success">
                      Sepete Eklendi
                    </div>
                    <div className="add-to-bs-ldr" />
                  </button>
                  <div className="favorite-button">
                    <div className="review-tooltip">
                      <div className="tooltip-indicator">
                        <button className="fv">
                          <i className="i-heart" />
                        </button>
                      </div>
                      <div className="top-padding" />
                      <div className="review-tooltip-content">
                        <div>Favorilere Ekle</div>
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="delivery-favorite-info">
                  <div className="delivery-and-favorite-wrapper">
                    <div className="pr-dd">
                      <div className="pr-dd-rs-w">
                        <i className="pr-dd-icon rs" />
                        <span className="pr-dd-rs-text">Hızlı Teslimat: </span>
                        <span className="dd-txt-vl">1 gün içinde kargoda</span>
                      </div>
                    </div>
                    <div className="fv-dt">
                      <i className="i-heart" />
                      10685 favori
                    </div>
                  </div>
                </aside>
                <div className="featured-information">
                  <div className="featured-information-header">
                    Öne Çıkan Bilgiler
                  </div>
                  <div
                    className="content-descriptions"
                    data-drroot="content-descriptions"
                  >
                    <ul id="content-descriptions-list">
                      <li className="return-info">
                        15 gün içinde ücretsiz iade. Detaylı bilgi için{" "}
                          tıklayın
                        .
                      </li>
                      <li>
                        <div className="productDetailSupplierPopup">
                          <div className="popupBuffer" />
                          <div className="popupContent">
                            <div className="popup-top">
                              <div className="popup-logo">
                                <i className="icon icon-trendyol-marketplace" />
                              </div>
                              <div className="popup-info">
                                <div className="ttl">TRENDYOL PAZARYERİ</div>
                                <div className="description">
                                  Tüm satıcılarımız Trendyol hizmet
                                  standartlarını garanti eder.
                                </div>
                                <div className="attributes">
                                  <div>
                                    <i className="pdp-icon-reloaded" />
                                    Ücretsiz İade
                                  </div>
                                  <div>
                                    <i className="pdp-icon-cargo" /> Hızlı
                                    Teslimat
                                  </div>
                                  <div>
                                    <i className="pdp-icon-phone" />
                                    <span className="customer-support-text">
                                      Trendyol <br />
                                      Müşteri Desteği
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="supplier-info">
                              <span>
                                Satıcı:<b> River Club </b>
                              </span>
                              <span>
                                Satıcı Ünvanı:
                                <b>
                                  {" "}
                                  ROYALMEN TEKSTİL SANAYİ VE DIŞ TİCARET LİMİTED
                                  ŞİRKETİ{" "}
                                </b>
                              </span>
                              <span>
                                İletişim:
                                <b>
                                  {" "}
                                  Satıcının Trendyol tarafından teyit edilmiş
                                  e-posta ve iletişim adresi kayıt altındadır.{" "}
                                </b>
                              </span>
                              <span>
                                <span id="cityInfo">
                                  Şehir:<b> İstanbul</b>
                                </span>
                                <span>
                                  Kep Adresi:
                                  <b> royalmentekstil@hs01.kep.tr </b>
                                </span>
                              </span>
                              <span>
                                <span>
                                  Vergi Kimlik Numarası:<b> 7351550409 </b>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        Bu ürün{" "}
                        <span className="product-description-market-place">
                          River Club
                        </span>{" "}
                        tarafından gönderilecektir.
                      </li>
                      <li>
                        Manken ölçüleri : 1.80 boy kilo : 80 kg göğüs : 95 cm
                        bel : 85 cm Resimdeki manken üzerindeki beden : M Sezon
                        : 2021 İlkbahar / Yaz Sezonu Ürünümüz Yerli Üretimdir.
                      </li>
                      <li>
                        Bu üründen en fazla 10 adet sipariş verilebilir. 10
                        adetin üzerindeki siparişleri Trendyol iptal etme
                        hakkını saklı tutar.
                      </li>
                      <li>
                        Kampanya fiyatından satılmak üzere 100 adetten fazla
                        stok sunulmuştur.
                      </li>
                      <li>
                        İncelemiş olduğunuz ürünün satış fiyatını satıcı
                        belirlemektedir.
                      </li>
                      <li>
                        Listelenen fiyat 12 Kasım 2021 tarihine kadar
                        geçerlidir.
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="product-widget-list">
              <section className="campaigns-widget widget orange">
                <h2 className="widget-title">ÜRÜNÜN KAMPANYALARI</h2>
                <div className="widget-row">
                  <a
                    className="flex"
                    title="50 TL ve Üzeri Kargo Bedava"
                    href="/sr?prm=756819"
                  >
                    <i className="i-promotion" />
                    <span className="campaign-name">
                      50 TL ve Üzeri Kargo Bedava
                    </span>
                    <i className="i-arrow-right" />
                  </a>
                </div>
                <div className="widget-row">
                  <a
                    className="flex"
                    title="Sepette %20 İndirim"
                    href="/sr?prm=1766744"
                  >
                    <i className="i-promotion" />
                    <span className="campaign-name">Sepette %20 İndirim</span>
                    <i className="i-arrow-right" />
                  </a>
                  <label className="remaining-time">Son 3 Gün 12 Saat !</label>
                </div>
              </section>
              <section className="seller-widget widget">
                <div className="widget-title product-seller-line">
                  <div className="pr-mb">
                    <div className="pr-mb-mn">
                      <a href="/magaza/river-club-m-217681" title="River Club">
                        River Club
                      </a>
                      <div
                        className="sl-pn"
                        style={{ backgroundColor: "rgb(255, 172, 37)" }}
                      >
                        7.9{" "}
                      </div>
                      <div className="review-tooltip">
                        <div className="tooltip-indicator">
                          <i className="i-warning1" />
                        </div>
                        <div className="top-padding" />
                        <div className="review-tooltip-content">
                          <div className="tooltip-text">
                            <div className="information-text">
                              <span className="seller-point">Satıcı Puanı</span>
                              <div
                                className="sl-pn"
                                style={{ backgroundColor: "rgb(255, 172, 37)" }}
                              >
                                7.9{" "}
                              </div>
                            </div>
                            <span className="seller-point-desc">
                              Satıcı puanı, müşteri geri bildirimleri ve
                              satıcının sipariş sürecindeki performansı dikkate
                              alınarak hesaplanmaktadır.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="widget-row flex"
                  href="/magaza/river-club-m-217681"
                >
                  <i className="i-store" />
                  <div>
                    <span>Mağazayı Gör</span>
                    <span className="seller-follower-count">10.8B Takipçi</span>
                  </div>
                  <i className="i-arrow-right" />
                </a>
                <a
                  href="https://www.trendyol.com/river-club/erkek-siyah-ici-polarli-su-ve-ruzgar-gecirmez-kislik-mont-p-58925113/saticiya-sor?merchantId=217681"
                  rel="nofollow"
                  className="widget-row flex"
                >
                  <i className="i-dialog" />
                  <span>Satıcı Soruları (196)</span>
                  <i className="i-arrow-right" />
                </a>
              </section>
              <aside
                className="product-review-widget"
                data-drroot="product-reviews-widget"
              >
                <div className="widget">
                  <h2 className="widget-title">ÖNE ÇIKAN YORUM</h2>
                  <div className="rnr-com-tx">
                    <p className="line-clamp">
                      <span className="rnr-inline-rating" />
                    </p>
                    <div className="ratings readonly">
                      <div className="star-w">
                        <div className="empty">
                          <div className="star" />
                        </div>
                        <div
                          className="full"
                          style={{ width: "100%", maxWidth: "100%" }}
                        >
                          <div className="star" />
                        </div>
                      </div>
                      <div className="star-w">
                        <div className="empty">
                          <div className="star" />
                        </div>
                        <div
                          className="full"
                          style={{ width: "100%", maxWidth: "100%" }}
                        >
                          <div className="star" />
                        </div>
                      </div>
                      <div className="star-w">
                        <div className="empty">
                          <div className="star" />
                        </div>
                        <div
                          className="full"
                          style={{ width: "100%", maxWidth: "100%" }}
                        >
                          <div className="star" />
                        </div>
                      </div>
                      <div className="star-w">
                        <div className="empty">
                          <div className="star" />
                        </div>
                        <div
                          className="full"
                          style={{ width: "100%", maxWidth: "100%" }}
                        >
                          <div className="star" />
                        </div>
                      </div>
                      <div className="star-w">
                        <div className="empty">
                          <div className="star" />
                        </div>
                        <div
                          className="full"
                          style={{ width: "0%", maxWidth: "100%" }}
                        >
                          <div className="star" />
                        </div>
                      </div>
                    </div>
                    Urun cok guzel ama yorumlara ve kilo boy araligi beden
                    listesine itibar etmeyin. Kalıp gayet dar. Boy 1.72 kilo 70
                    olan ogluma m beden dar geldi. Bir buyugunu alacagim yani L
                    beden. Bakalim artık sansa olur ise.
                    <p />
                    <div className="rnr-com-bt">
                      <div>
                        <span className="rnr-com-usr">
                          p** e**
                          <span>
                            <span className="seperator">-</span>
                            <span className="user-is-elite">Elite Üye</span>
                          </span>
                          <span className="pipe">|</span>10 Eylül 2021
                        </span>
                        <span className="rnr-com-buy">
                          <div className="rnr-com-buy-ch">
                            <i className="i-checkmark" />
                          </div>
                          <span>Ürünü satın aldı</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="more-comments">
                    <a href="https://www.trendyol.com/river-club/erkek-siyah-ici-polarli-su-ve-ruzgar-gecirmez-kislik-mont-p-58925113/yorumlar?boutiqueId=588832&merchantId=217681">
                      DAHA FAZLA YORUM
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
