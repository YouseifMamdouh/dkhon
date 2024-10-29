import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css';
import Slider from 'react-slick';
import slider1 from '../imaeags/97535ac1-7385-4729-ae9a-3b5041db960c.jpg';
import slider2 from '../imaeags/slider2.jpg';
import slider3 from '../imaeags/slider3.jpg';
import slider4 from '../imaeags/ovar1.jpg';
import slider5 from '../imaeags/mkas.jpg';
import { Link } from 'react-router-dom';
import slider8 from '../imaeags/sliderTow.png';
import slider9 from '../imaeags/sliderTree.png';
import slider10 from '../imaeags/slider-for.png';
import slider6 from '../imaeags/sliderfor.png';
import slider7 from '../imaeags/dce5ff4e-7903-413f-a92c-2a15e84b4234-thumbnail-1000x1000.png';
import slider11 from '../imaeags/rr.jpg'
import slider12 from '../imaeags/qq.jpg';
// import slider13 from '../imaeags/sliderTow.png';
// import slider14 from '../imaeags/for.png';
import slider15 from '../imaeags/fif.png';
import slider16 from '../imaeags/x.png';
import slider17 from '../imaeags/ww.png';
import slider18 from '../imaeags/ee.png';
import slider19 from '../imaeags/tt.png';
// import slider20 from '../imaeags/yy.png';
import slider44 from '../imaeags/ngam.jpg';
import slider45 from '../imaeags/adr.jpg';
import slider36 from '../imaeags/bkhor.png';
import slider21 from '../imaeags/zx.png';
import slider22 from '../imaeags/dkhon.png';
import slider23 from '../imaeags/cv.png';
import slider24 from '../imaeags/aboc.png';
import slider26 from '../imaeags/uu.png';
import slider27 from '../imaeags/ii.png';

export default function Hero() {

    const [modalShow, setModalShow] = useState(false);
    const [productName, setProductName] = useState('');

    const handleShow = (name) => {
        setProductName(name);
        setModalShow(true);
    };

    var settingr = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 4,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var settinge = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <>
            <div className="hero-container">
            </div>

            <section className='slider-section'>
                <div className="container-slider mt-4">
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider">
                                    <img src={slider1} alt="شاميل رقم 5" />
                                    <h3>شاميل رقم 5</h3>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider">
                                    <img src={slider2} alt="ديور سافاج" />
                                    <h3>ديور سافاج</h3>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider">
                                    <img src={slider3} alt="أكوا دي جيو" />
                                    <h3>أكوا دي جيو</h3>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider">
                                    <img src={slider1} alt="كريد أفينتوس" />
                                    <h3>كريد أفينتوس</h3>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider">
                                    <img src={slider3} alt="إيف سان لوران بلاك أوبيم" />
                                    <h3>إيف سان لوران بلاك أوبيم</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='slider-section'>
                <div className="container-slider">
                    <div className='text-center'>
                        <img src={slider4} alt="" />
                    </div>
                </div>
            </section>

            <section className='slider-section'>
                <div className="container-slider-img-top">
                    <div className='text-center position-relative'>
                        <img src={slider5} alt="" className='img-fluid' />
                        <button className='shop-now-btn'>
                            <Link to="/shop">تسوق الآن</Link>
                        </button>
                    </div>
                </div>
            </section>
            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">الأكثر مبيعًا</h3>
                        <h2 class="off_title">رحلة متعددة الحواس</h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider8} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider9} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider8} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider9} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider8} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>

            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">شذا دخون</h3>
                        <h2 class="off_title">مجموعة دخون الفاخرة تُشابه إمتلاك قطعة نادرة</h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider6} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider7} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider7} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider6} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>

            <Slider {...settingr}>
                <div>
                    <img src={slider11} alt="شاميل رقم 5" />
                </div>
                <div>
                    <img src={slider12} alt="" />
                </div>
            </Slider>





            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">عبق الفخامة
                        </h3>
                        <h2 class="off_title">مجموعة الشيوخ عبق أصيل تَرتقي به
                        </h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider10} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>

            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">حضور خاص
                        </h3>
                        <h2 class="off_title">مجموعة برايفت حضور لا يُشاهد بل يُشعر به
                        </h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider15} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider16} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider15} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider16} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>


            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">بريق المجوهرات
                        </h3>
                        <h2 class="off_title">ايقونة من الجمال تُشابه بريق المجوهرات الخلاب
                        </h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider17} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider17} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider18} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider19} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider17} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">نفحات تعبر عنك
                        </h3>
                        <h2 class="off_title">مجموعة سجنتشر نفحات تعبر عن ما بداخلك
                        </h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider26} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider27} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider27} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider26} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider27} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <Slider {...settingr}>
                <div className="slider-item position-relative">
                    <img className="img-baacK" src={slider44} alt="شاميل رقم 5" />
                    <button className="shop-button position-absolute">التسوق</button>
                </div>
                <div className="slider-item position-relative">
                    <img className="img-baacK" src={slider44} alt="" />
                    <button className="shop-button position-absolute">التسوق</button>
                </div>
                <div className="slider-item position-relative">
                    <img  className="img-baacK"src={slider45} alt="" />
                    <button className="shop-button position-absolute">التسوق</button>
                </div>
            </Slider>

            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">لغة العظماء
                        </h3>
                        <h2 class="off_title">العود لغة تعكس شخصيتك المُلهمة
                        </h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider36} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider36} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider36} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider36} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section className='slider-section-22'>
                <div className="container-slider mt-4">
                    <div class="sec_title position-relative text-center">
                        <h3 class="ft-bold pt-3">إلهام لا ينتهي
                        </h3>
                        <h2 class="off_title">مجموعة البخور الأصلية حيث السُرُور الامنتهي
                        </h2>
                    </div>
                    <div className="slider mt-4">
                        <Slider {...settings}>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider21} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider22} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider23} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-prinet">
                                <div className="card-slider-tow position-relative"> {/* إضافة position-relative */}
                                    <img src={slider24} alt="شاميل رقم 5" />
                                    <div className="discount-tag position-absolute top-0 end-0 m-2"> {/* تعديل هنا */}
                                        <span className="badge bg-danger">خصم 40%</span>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="product-name fw-bolder fs-md lh-1">
                                            <a href="#" tabIndex="0"> سجنتشر جولد </a>
                                        </h5>
                                        <div className="star-rating align-items-center d-flex justify-content-center p-0">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>

                                        <div className="card-price">
                                            <span className="price-discount">
                                                <del className="old">285.00 </del>
                                                <span className="price">171.00 ر.س </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <div>
                                            <button type="button" className="btn-cart"> إضافة إلى السلة</button>
                                        </div>
                                        <div className="icon">
                                            <button onClick={() => handleShow('شاميل رقم 5')}> <i className="fa fa-eye me-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            {/* مودال Bootstrap كبير */}
            <div className={`modal ${modalShow ? 'show' : ''}`} style={{ display: modalShow ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">تفاصيل المنتج</h5>
                            <button type="button" className="close" onClick={() => setModalShow(false)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{productName}</p>
                            {/* يمكنك إضافة المزيد من المحتوى هنا، مثل وصف المنتج أو صورة أكبر له */}
                            <img src={slider1} alt={productName} className="img-fluid" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setModalShow(false)}>إغلاق</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
