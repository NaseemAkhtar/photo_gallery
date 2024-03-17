import { lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/card"
import './home.css'
import {fetchCartData, fetchSearchData} from '../../store/home/actions'
import Loader from '../../components/loader/loader';
import ResultNotFound from '../../components/resultNotFound/resultNotFound';

const Search = lazy(()=> import('../../components/searchbar/search'))

const Home = ()=>{
    const [gallery, setGallery] = useState([])
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const {homeData,searchData, homeLoading} = useSelector(state => state?.landing)
    
console.log('listing??',homeLoading)
    useEffect(()=>{
        dispatch(fetchCartData())
    },[])

    useEffect(()=>{
        setGallery(homeData)
    },[homeData])

    useEffect(()=>{
        dispatch(fetchSearchData({query:query}))
        return ()=> setGallery([])
    },[query])

    useEffect(()=>{
        if(!!searchData?.results?.length){
            setGallery(searchData?.results)
        }
    },[searchData])
    
    if(homeLoading){
        return <Loader/>
    }
return(<>
    <Search setQuery={setQuery}/>
    <div className='container'>
        <div className='card_outer'>
        {!!gallery?.length ?
            gallery?.map((card)=>(
                <Card key={card.id} card={card}/>
            ))
            :
            <ResultNotFound/>
        }
        </div>
    </div>
</>)}
export default Home