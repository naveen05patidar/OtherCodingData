// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Assets/CSS/Home.css';
// import axios from 'axios';



// export default function Main() {
//     const [data, setData] = useState([]);
//     const [productSubCategory, setProductSubCategory] = useState([]);



//     const loadData = async () => {
//         let response = await axios.get('http://localhost:5000/api/displaydata')

//         response = await response.data;
//         setData(response[0]);
//         setProductSubCategory(response[2]);
//     }
//     useEffect(() => {
//         loadData();
//     }, [])

//     return (
//         <div>
//             <div className="hero-section">
//                 <div className="hero-msg">
//                     <p>
//                         You are on amazon.com, you can also shop on Amazon India for millions of products with fast local delivery{' '}
//                         <Link>click here to go to amazon.in</Link>
//                     </p>
//                 </div>
//             </div>
//             <div className="shop-section">
//                 {
//                     data.map((item) => (
//                         <div className="box" key={item.ProductId}>
//                             <div className="box-content">
//                                 <h2>{item.ProductName}</h2>
//                                 <div className="box-img">
//                                     <img className="box-img-1" alt='Product' src={item.ProductImage} />
//                                 </div>
//                                 <p>see more</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Home.css';
import axios from 'axios';



export default function Main() {
    const [data, setData] = useState([]);
    const [productSubCategory, setProductSubCategory] = useState([]);



    const loadData = async () => {
        let response = await axios.get('http://localhost:5000/api/displaydata')

        response = await response.data;
        setData(response[0]);
        setProductSubCategory(response[2]);
    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <div className="hero-section">
                {/* <div className='carousel'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" classNameName="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
                </div> */}
                <div className="hero-msg">
                    <p>
                        You are on amazon.com, you can also shop on Amazon India for millions of products with fast local delivery{' '}
                        <Link>click here to go to amazon.in</Link>
                    </p>
                </div>
            </div>
            <div className="shop-section">
                {
                    data.map((item) => (
                        <div className="box" key={item.ProductId}>
                            <div className="box-content">
                                <h2>{item.ProductName}</h2>
                                <div className="box-img">
                                    <img className="box-img-1" alt='Product' src={item.ProductImage} />
                                </div>
                                <p>see more</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

