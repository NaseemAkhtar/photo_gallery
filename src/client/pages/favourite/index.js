import { useDispatch, useSelector } from "react-redux";
import { lazy } from "react";
import './favroute.css'
const Card = lazy(()=> import('../../components/card/card'))
const ResultNotFound = lazy(()=> import('../../components/resultNotFound/resultNotFound'))


const Favourite = ()=>{
    const {cartItems} = useSelector(state => state?.cart)
    
return(<>
    <div className='container favroute'>
        <h1>Your Favroute Images</h1>
        <div className='card_outer'>
        {!!cartItems?.length ?
            cartItems?.map((card, ind)=>(
                <Card key={ind} card={card}/>
            ))
            :
            <ResultNotFound/>
        }
        </div>
    </div>
</>)}
export default Favourite