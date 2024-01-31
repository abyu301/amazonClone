import React, { useContext }  from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Products.module.css'
import {Link} from 'react-router-dom'
// import { DataContext } from '../DataProvider/DataProvider'
// import {Type} from '../../Utility/action.type'

function ProductCard({product, flex, renderDesc, renderAdd}) {
    const { image, title, id, rating, price  } = product;

    //   const [state,dispatch]=useContext(DataContext)
    //   console.log(DataContext)
      
     


    //   const addToCart = ()=>{
    //     dispatch({
    //         type:Type.ADD_TO_BASKET,
    //         item:{
    //             image, title, id, rating, price,description
    //         }
    //     })
    //   }
  
  return (
    <div  className={`${classes.card__container} ${flex?classes.product__flexed : ''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" className={classes.img_container}/>
        </Link>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating?.rate} precision={0.1}/>
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price} />
            </div>
            <button className={classes.button}>
                add to cart
            </button>
        </div>
        



    </div>
  )
}

export default ProductCard