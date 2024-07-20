
import { useEffect } from 'react'
import { fetchitems} from '../mainstore/slices/slice'
import { useDispatch, useSelector } from 'react-redux'
import statuss from '../mainstore/slices/status'
import Loader from '../compunents/Loader'

const Products = () => {

  let { getitems ,status} = useSelector((state)=>state.getReducer)
 
  let dispitch = useDispatch()

  useEffect(()=>{
   dispitch( fetchitems())
  },[])
  return (
    <div className='w-full h-full flex items-center border-2 border-black border-solid gap-[20px]'>
     { status==statuss.pendding?(<Loader/>):(
      getitems.map((val,ind)=>{
        <div className=' w-[300px] h-[300px] ml-[10px] mt-[10px] rounded-[20px] flex justify-center flex-col gap-[10px] border-2 border-black border-solid' key={ind}>
     <img src={val.images} alt="" className='w-[50px] h-[100px]'/>
      <p>{val.tittle}</p>
      <span className='font-semibold'>{val.price}</span>
      <button className=' w-[90%] h-[35px] ml-[15px] bg-[red] text-white'>Add to cart</button>
     </div>
      })
     )}
    </div>
  )
}

export default Products