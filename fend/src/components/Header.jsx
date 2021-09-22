import React from 'react'

const Header = () => {
    return (
        <header className="row">
        <div>
          <a className="brandname" href="/">
            Head
          </a>
        </div>
        <div>
          <a href="/cart"> Cart</a>
          <a href="/signin">Sign in </a>
        </div>
      </header>
    )
}

export default Header
