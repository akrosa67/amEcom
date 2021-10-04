import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

const Header = ({ cartItems }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const btnStyle = { width: "30px" };
  // console.log(cartItems.length)

const  dispatch = useDispatch()
  const signoutHandler = ()=>{
    dispatch(signout())
  }
  return (
    <header className="row">
      <div>
        <Link className="brandname" to="/">
          Logo
        </Link>
      </div>
      <div>
        {cartItems.length > 0 ? (
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show Cart items"
            style={btnStyle}
            color="inherit"
            className="brandname"
          >
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </IconButton>
        ) : (
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show Cart items"
            style={btnStyle}
            color="inherit"
            className="brandname"
          >
            <ShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>
        )}
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className='dropdown-content'>
              <li>
                <Link to='/profile' >Profile</Link>
                </li>
              <li>
                <Link to='/orderhistory'>Order History</Link>
              </li>
              <li>
               <Link to='/' onClick={signoutHandler}>Sign Out</Link>
            </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">Sign in </Link>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className='dropdown'>
            <Link to='#admin'>Admin <i className="fa fa-caret-down"></i></Link>
            <ul className='dropdown-content'>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link to='/productlist'>Products</Link>
              </li>
              <li>
                <Link to='/orderlist'>Orders</Link>
              </li>
              <li>
                <Link to='/userlist'>Users</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
