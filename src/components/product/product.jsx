
import React from 'react'
import './product.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'


export const Product = ( props) => {
  return (
    <Link to="/product-detail" className="product">
      <div className="product-image">
        <img src={props.image} alt=""/>
      </div>
      <div className="product-price d-flex">
        <p className="price">{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</p>
        {props.sale !== 0 && <div className="price del">{props.sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</div>}
        
      </div>
      <h2 className="product-title">{props.title}</h2>
      {props.status.type !== '' && props.status.type === 'new' ? <div className="price-status">{props.status.content}</div> : props.status.type !== '' && <div className="price-status active">{props.status.content}</div>}
    </Link>
  )
}
