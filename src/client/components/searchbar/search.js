import { useEffect } from 'react'
import './search.css'
import {fetchRandomData} from '../../store/home/actions'
import { useSelector, useDispatch } from 'react-redux'
import hero from '../../assets/img/hero.jpeg'

const debounce = (cb, limit) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, limit);
    };
};
const Search = ({setQuery})=>{
    const dispatch = useDispatch()
    const handleSearch = debounce((e)=>{
        setQuery(e.target.value)
    },500)

    const {randomData} = useSelector(state => state?.landing)

    useEffect(()=>{
        dispatch(fetchRandomData())
    },[])

    return(
    <div className='hero' style={{background: `#f2f2f2 url(${randomData?.urls?.regular ?? hero})no-repeat center/cover`}}>
        <div className='search_bar'>
            <input 
                type='text' 
                placeholder='Search Photos'
                onChange={(e)=>handleSearch(e)}
            />
        </div>
    </div>
    )
}

export default Search