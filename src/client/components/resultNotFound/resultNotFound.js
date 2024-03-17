import {Link} from 'react-router-dom'
import './resultNotFound.css'
import resultNotFound from '../../assets/img/resultNotFound.jpg'

const ResultNotFound = ()=>{
    return(
        <div className='result_not_found'>
            <div>
                <img src={resultNotFound}/>
                <h2>Sorry we couldn't find any results</h2>
                <Link to={'/'}>Go to Home</Link>
            </div>
        </div>
    )
}

export default ResultNotFound