import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header class="shop-header row">
      <a class="logo text-dark" href="#">
        ReStore
      </a>
      <a class="shopping-cart" href="#">
        <i class="cart-icon fa fa-shopping-cart" />
        {numItems} item (${total})
      </a>
    </header>
  );
}

export default ShopHeader;