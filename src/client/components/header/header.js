import { useMemo } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'

const Header = ()=>{
    const totalCount = useSelector(state => state?.cart?.cartItems)
    
    const counts = useMemo(()=>{
        return totalCount.reduce((acc, item)=>{
            return acc += item.quantity
        },0)
    },[totalCount])
    
    let nav = [
        {id:1, title: 'Home', url:'/'},
        {id:2, title: 'Favourite', url:'/favourite', count:counts},
    ]
    
    return(
        <header>
        <div className='container'>
        <div className='header_block'>
            <div className="logo">
                <Link to={'/'}>
                    Photo
                    <span>Gallery</span>
                </Link>
            </div>
            <nav>
                {nav.map((item,ind) => (
                    <Link to={item.url} key={item.id}>
                        {item.title}
                        {item?.count ? <sup>{item?.count}</sup>:null}
                    </Link>
                ))}
            </nav>
            </div>
        </div>
        </header>
    )
}

export default Header