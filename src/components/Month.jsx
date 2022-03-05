import { Calendar } from 'antd';
import moment from 'moment';
import { useState ,useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function Month({setIsVisible}) {
 
  const [select , setSelect ] = useState(moment())
  let val = useSelector(state => state.month.data);
  useEffect(()=>{
      setSelect(val)
     
  })

   const onSelect = (value)=>{

  
    

    setIsVisible(true)

   }
   
  

      
  return (
    <>
 
       <Calendar onSelect={onSelect}  value={select} />
    </>
  )
}
