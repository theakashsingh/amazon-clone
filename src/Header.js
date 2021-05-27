import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"; 
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
            <img alt=""
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div
            className="header_search">
                <input
                className="header_searchInput"
                type="text" />
                <SearchIcon 
                className="header_searchIcon" />
            </div>

            <div className="header_nev">
                <Link to="/login">
                <div className='header_option'>
                    <span className='header_optinLineOne'>
                        Hello
                    </span>
                    <span className='header_optinLineTwo'>
                        Sing In
                    </span>
                </div>
                </Link>
                
                <div className='header_option'>
                    <span className='header_optinLineOne'>
                        Returns
                    </span>
                    <span className='header_optinLineTwo'>
                        &Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optinLineOne'>
                        Your
                    </span>
                    <span className='header_optinLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo
                    header_basketcount">
                        {basket?.length}
                    </span>
                </div>
                </Link>
               
            </div>
            
        </div>
    )
}

export default Header
