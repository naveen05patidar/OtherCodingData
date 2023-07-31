import React, { useState } from 'react'
import { Popup } from '../Cards/Popup';
import { useNavigate, Link } from 'react-router-dom';


export default function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [cartItem, setCartItem] = useState(2);
    let navigate = useNavigate();



    const RouteHome = () => {
        navigate('/')
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }
    const handleClosePopup = (data) => {
        setIsPopupOpen(data);
    }

    return (
        <header>
            <div className="navbar">
                <div className="nav-logo border">
                    <div className="logo" onClick={RouteHome}></div>
                </div>


                <div className="nav-address border" onClick={handleOpenPopup}>
                    <p className="add-first">Deliver to</p>
                    <div className="add-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="add-sec">India</p>
                    </div>
                    {isPopupOpen && <Popup onClose={handleClosePopup} />}
                    {/* {
              isPopupOpen == true ? <Popup onClose={handleClosePopup} /> : ""
            } */}
                </div>




                <div className="nav-search">
                    {/* {
            productSubCategory.map((item)=>{
              <select className="search-select" key={item.id}>
              <option>All</option>
              <option>{item.category}</option>
            </select>
            }) 
           } */}

                    <select className="search-select">
                        <option>All</option>
                        <option>India</option>
                    </select>
                    <input className="search-input" placeholder="Search Amazon" />
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="nav-signin border">
                    {
                        (!localStorage.getItem('token')) ? <Link to='/Login'>
                            <p>
                                <span>Hello, Sign in</span>
                            </p>
                            <p className="nav-second">Account & lists</p>
                        </Link> : <Link to='/reg' onClick={logout}>
                            <p>
                                <span>Hello, LogOut</span>
                            </p>
                            <p className="nav-second">Account & lists</p>
                        </Link>
                    }
                </div>
                <div className="nav-return border">
                    <p>
                        <span>Returns</span>
                    </p>
                    <p className="nav-second">&Orders</p>
                </div>
                {
                    (!localStorage.getItem('token')) ? <div className="nav-cart">
                        <i className="fa-solid fa-cart-shopping"></i> Cart
                    </div> : <div className="nav-cart">
                        <i className="fa-solid fa-cart-shopping">{cartItem}</i> Cart
                    </div>
                }
            </div>
            <div className="panel">
                <div className="panel-all">
                    <i className="fa-solid fa-bars">All</i>
                </div>
                <div className="panel-ops">
                    <p>Todays Deals</p>
                    <p>Customer Service</p>
                    <p>Registry</p>
                    <p>Gift Cards</p>
                    <p>sell</p>
                </div>
                <div className="panel-deals">Shop deals in Electronics</div>
            </div>
        </header>
    )
}
