import userEvent from "@testing-library/user-event"
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Popup = ({ onClose }) => {
    const [right, setRight] = useState(true);
    const [country, setCountry] = useState([])

    const handleClick = () => {

        setRight(false)
    }

    const loadData = async () => {
        let response = await axios.get('http://localhost:5000/api/displaydata')

        response = await response.data;
        setCountry(response[1]);
    }
    useEffect(() => {
        loadData();
    }, [])

    console.log(country);

    return (
        <div className="main">
            {/* {
             right == true    ? <div className="main">
                 <div className='popup' >
                   <div className='popup-content' > 
                   <button onClick={handleClick}>Close</button>
                   <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est delectus aliquid facere distinctio ullam placeat nulla autem quam sit beatae. Optio, consequuntur reiciendis perferendis, velit quos totam, ab eaque repellendus mollitia corrupti autem inventore!</p>
               
                   
                   </div>
                 </div>
                 </div> :""
         } */}

            {
                right == true ?


                    <div className='popup' >
                        <div className='popup-content' >
                            <h4>Choose Your Location  </h4>
                            <button onClick={handleClick}>Close</button>
                        </div>
                        <div className="popup-content-2">
                            <div>
                                <p>Delivery options and delivery speeds may vary for different locations</p>
                                <button name="btn" className="btn-sing-in" >Sign in to see your Address</button>
                                <p>----------------or enter a US zip code-----------------</p>
                                <div>
                                    <input type="text"></input>
                                    <button name="btn-apply">Apply</button>
                                </div>
                                <p>----------------------------or--------------------------------</p>
                                <div>

                                         <select >
                                                <option >Ship outside the India </option>
                                                <option>India</option>
                                            </select>
                                    
                                    {/* {
                                        country == [] ? country.map((item) => {
                                            <select key={item.name}>
                                                <option >Ship outside the India </option>
                                                <option>{item.name}</option>
                                            </select>
                                        }):""
                                    } */}
                                </div>
                            </div>
                        </div>
                        <div className='popup-content3' >
                            <button onClick={handleClick}>Done</button>
                        </div>
                    </div>
                    : ""
            }

        </div>
    )
}


