import moment from 'moment'
import 'moment/locale/zh-cn';

import { useDispatch ,useSelector} from "react-redux";

import {DAY_DATE} from '../actions/types'



export default function Day({ setIsVisible, day}) {
    const dispatch = useDispatch()
    let dayTag  = useSelector(state => state.calender.data);
    
    const time = [
        "07:00 Am",
        "08:00 Am",
        "09:00 Am",
        "10:00 Am",
        "11:00 Am",
        "12:00 Pm",
        "01:00 Pm",
        "02:00 Pm",
        "03:00 Pm",
        "04:00 Pm",
        "05:00 Pm",
        "06:00 Pm",
        "07:00 Pm",
        "08:00 Pm",
        "09:00 Pm",
        "10:00 Pm",
        "11:00 Pm"
    ]

    let m = moment(day, 'ddd MMM D YYYY HH:mm a');
    
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    <tr className='allDay'><td className="alldayHead"  >
                        All Days
                    </td>
                        <td className="gap"></td>
                    </tr>



                    {/* day row */}
                    {
                        time.map((t, i) => (

                            <div key={i} >
                                <tr className='tabel_container' >
                                    <td data-content={t[0]>0?t:t.substring(1)} className='tabel-head'></td>
                                    <td id={t[0] + t[1] == 12 ? t[0] + t[1] : t[6] + t[7] == 'Pm' ? parseInt(t[0] + t[1]) + 12 : t[0] + t[1]} onClick={(e) => {

                                        let hour = e.target.id
                                      
                                        

                                        m.set({ h: hour, m: 0});

                                        dispatch({
                                                type: DAY_DATE,
                                                payload:{ dayData: m },
                                              });
                                       console.log(m.format('HH:mm'))
                                       console.log(moment(dayTag.date).format("HH:mm"))
                                         setIsVisible(true)
                                    }}
                                        className='tabel-design'>
                                            { m.format("HH:mm") == moment(dayTag.date).format("HH:mm") ?
                                            <span className='day_data'>
                                            Ravikumar 123
                                            </span> :<span>hello</span>}
                                         
                                          
                                        </td>
                                </tr>
                                <tr >
                                    <td className='col' ></td>
                                    <td id={t[0] + t[1] == 12 ? t[0] + t[1] : t[6] + t[7] == 'Pm' ? parseInt(t[0] + t[1]) + 12 : t[0] + t[1]} onClick={(e) => {

                                        let hour = e.target.id
                                        console.log(hour)
                                        var m = moment(day, 'ddd MMM D YYYY HH:mm a');

                                        m.set({ h: hour, m: 30 });
                                        dispatch({
                                            type: DAY_DATE,
                                            payload:{ dayData: m },
                                          });
                                        

                                        setIsVisible(true)
                                    }}
                                        className='tabel-design'>

                                           
                                        </td>
                                </tr>
                            </div>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
