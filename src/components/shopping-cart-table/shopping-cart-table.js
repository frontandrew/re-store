import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

import { bookAddedToCart } from '../../actions';


const ShoppingCartTable = ({ items, total, onDecrease, onIncrease, onDelete }) => {

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <th>{idx + 1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>

      <table className="table">
        <thead>
          <tr>
            <th> #</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, idx) => {
              return renderRow(item, idx)
            })
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>

    </div>
  );
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    onIncrease: (id) => dispatch(bookAddedToCart(id)),
    onDecrease: (id) => {
      console.log(`Decreased ${id}`)
    },
    onDelete: (id) => {
      console.log(`Deleted ${id}`)
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ShoppingCartTable);