import { useState, memo } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import heart from '../../assets/img/heartimg.png'
import './card.css'

const Card = ({card, setSnackbar})=>{
    const [iseAdded, setIseAdded] = useState(false)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state?.cart?.cartItems)
    const itemsAdded = ()=>{
        let getCard =cartItems.find(item => card.id == item.id)
        if(getCard) {
            return true
        } return false
    }

    const handleFavourite = (e)=>{
        if(e.target.checked){
            dispatch({type: 'ADD_ITEM',payload: {...card, favorite: true}})
        } else {
            dispatch({type: 'REMOVE_ITEM',payload: card})
        }
    }
console.log('cartItems',cartItems)
    
    return(
        <div className="card">
            <div className="img_outer">
                <img src={card?.urls?.small} alt={card.title} />
                <label 
                    className={`like_photo ${itemsAdded()? 'added':''}`}
                >
                    <input type='checkbox' id={card.id}
                        defaultChecked={itemsAdded()}
                        onClick={(e)=> {
                            handleFavourite(e)
                            itemsAdded()
                        }}
                    />
                    <img htmlFor={card.id} src={heart} alt='like'/>
                </label>
            </div>
            {/* <h2>
                <Link to={card.linkUrl}
                    onClick={()=> dispatch({type: 'PRODUCT',payload: card})}
                >{card.title}</Link></h2>
            <div className="price">&#36;{card.price}</div>   
            <button 
                onClick={()=> {
                    dispatch({type: 'ADD_ITEM',payload: {...card, quantity: 1}})
                    itemsAdded('add to cart')
                }}
                disabled={itemsAdded(card)}
            >{itemsAdded() ? 'Added':'Add'} To Cart</button> */}
        </div>
    )
}

export default memo(Card)