import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hourlyTemp } from '../actions/hourlyTemp';

const HourlyTemp = () => {

    const citySearched = useSelector(state => state.temp.citySearched);
    const data = useSelector(state => state.hourlyTemp.hourlyTemp);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(citySearched) {
            dispatch(hourlyTemp(citySearched))
        }
    }, [citySearched])

    useEffect(() => {

    },[data])



    return (
        <>
        {data && (
        <div className="col-md-6 table-div">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Temp</th>
                        <th scope="col">Weather</th>
                        <th scope="col">Wind m/s</th>
                    </tr>
                    </thead>
                    <tbody id="d1">
                   {data.map((timeStamp, index) => 
                             <tr key={index}> 
                                <td>{timeStamp.dt_txt}</td>
                                <td>{Math.floor(timeStamp.main.temp)}</td>
                                <td>{timeStamp.weather[0].main}</td>
                                <td>{timeStamp.wind.speed}</td>
                            </tr>
                   )}
                    </tbody>
                </table>
            </div>
            
        </div>
        )}
        </>
    )
}

export default HourlyTemp;