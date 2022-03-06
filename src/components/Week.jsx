import React from 'react'
import { useSelector } from 'react-redux';

export default function Week({ setIsVisible }) {
    let Arr = useSelector(state => state.weekReducer);
    const weeks = [

        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ]
    const Time = [
        "7:00 Am",
        "8:00 Am",
        "9:00 Am",
        "10:00 Am",
        "11:00 Am",
        "12:00 Pm",
        "1:00 Pm",
        "2:00 Pm",
        "3:00 Pm",
        "4:00 Pm",
        "5:00 Pm",
        "6:00 Pm",
        "7:00 Pm",
        "8:00 Pm",
        "9:00 Pm",
        "10:00 Pm",
        "11:00 Pm"
    ]

    return (
        <>
            <div className='container'>
                <table>
                    <thead >
                        <tr >
                            <th className='week_headcol'> </th>
                            {weeks.map((week, i) => (
                                <td key={i} className='week_head'>{week} {Arr[i]}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        <tr  ><td className='all_day'>
                            All Days
                        </td>
                            {
                                weeks.map((week, i) => (
                                    <td key={i} onClick={() => {
                                        setIsVisible(true)
                                    }} className='all-border' id={week}
                                    ></td>
                                ))
                            }
                        </tr>

                        {
                            Time.map((time, i) => (
                                <React.Fragment key={i}>
                                    <tr className=''>
                                        <td data-content={time} className='tabel_head'></td>
                                        {
                                            weeks.map((week, i) => (
                                                <td key={i} onClick={() => {
                                                    setIsVisible(true)
                                                }} className='week_line' id={time}
                                                ></td>
                                            ))
                                        }
                                    </tr>
                                    <tr >
                                        <td className='time_subhead' id={`${time[0]}:30`}>{time}</td>
                                        {
                                            weeks.map((week, i) => (
                                                <td key={i} id={time} onClick={() => {
                                                    setIsVisible(true)
                                                }}
                                                    className='week_line'></td>
                                            ))
                                        }
                                    </tr>
                                </React.Fragment>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
