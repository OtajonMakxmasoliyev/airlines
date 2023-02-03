import React, {useState} from 'react'
import "./book.scss"

const Book = () => {
    const [airports, setAirports]= useState(false)

    fetch("https://api.instantwebtools.net/v1/airlines")
    .then(res=>res.json())
    .then((data)=>{
       const forSetData = data.filter((value)=>{
        if (value.id) {
            return value
        }
       })

       setAirports(forSetData)

    }
    )



    const airportsname = airports? airports.map((airport)=>{
        if (airport.id) {
            return airport.name
        }
    }):null
    console.log(airportsname);


    
    
    return (
        <div className='booking'>
            <p className='absolute'>Book now</p>
            <div className="booking_buy">
                <p className='title'> Buy Tickets</p>
                <p className='title'> Check your flight status</p>
            </div>
            <hr />
            <div className="booking_types">
                <label>
                    <input type="radio" name="radio" value="chocolate" />
                    <span className="label">One way</span>


                </label>
                <label>
                    <input type="radio" name="radio" value="chocolate" />
                    <span className="label">Round trip</span>
                </label>
                <label>
                    <input type="radio" name="radio" value="chocolate" />
                    <span className="label">Multi-city</span>
                </label>
            </div>
        </div>
    )
}

export { Book }