export default function day({ setIsVisible }) {

    const time = [
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
            <table>
                <thead></thead>
                <tbody>
                    <tr className='allDay'><td  >
                        All Days
                    </td>
                        <td  ></td>
                    </tr>
                    <br />
                    {/* day row */}
                    {
                        time.map((t, i) => (

                            <div key={i} >
                                <tr className='tabel_container' >
                                    <td data-content={t} className='tabel-head'></td>
                                    <td id={t} onClick={() => {
                                        setIsVisible(true)
                                    }}
                                        className='tabel-design'></td>
                                </tr>
                                <tr >
                                    <td className='col' ></td>
                                    <td id={`${t[0]}:30`} onClick={() => {
                                        setIsVisible(true)
                                    }}
                                        className='tabel-design'></td>
                                </tr>
                            </div>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
