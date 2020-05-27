import React from 'react';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div class="shopping-cart-table">
      <h2>Your Order</h2>

      <table class="table">
        <thead>
          <td> #</td>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <th>1</th>
          <td>Site Reliability Engineering</td>
          <td>2</td>
          <td>$40</td>

          <td>
            <button
              onClick={() => { }}
              className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
            </button>

            <button
              onClick={() => { }}
              className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
            </button>

            <button
              onClick={() => { }}
              className="btn btn-outline-warning btn-sm float-right">
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tbody>
      </table>

      <div className="total">
        Total: $201
      </div>

    </div>
  );
}

export default ShoppingCartTable;