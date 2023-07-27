import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CarParkItems = () => {


    const items = useSelector((state) => state.allCarparks.carparks);

    console.log(items);

    const itemsRender = items.map((carPark) => {
        
        const{car_park_no, address, x_coord, y_coord} = carPark;
        return(
            <div className="four wide column" key={car_park_no}>
                <Link to={`/carpark/${car_park_no}`}>
                <div className="ui link cards">
                    <div className="card">
                    <div className="image">
                    <img src={process.env.PUBLIC_URL + '/carpark_default.jpeg'} alt={address} />
                    </div>
                    <div className="content">
                        <div className="header">{address}</div>
                        <div className="meta price">Xcoord: {x_coord}</div>
                        <div className="meta">Ycoord {y_coord}</div>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
        );

    });

    return(
        <>
        {itemsRender}
        </>
    );

};


export default CarParkItems;