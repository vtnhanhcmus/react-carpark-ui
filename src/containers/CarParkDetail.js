import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { removedSeletedCarPark, seletedCarPark } from "../redux/actions/CarParksAction";

const CarParkDetail = () => {
    const {carParkNo} = useParams();
    console.log(carParkNo);
    let carPark = useSelector((state) => state.carpark);
    console.log(carPark);
    const {carParkInfo, available} = carPark;
    const dispatch = useDispatch();
    const fetchCarParkDetail = async (carParkNo) => {
        const response = await axios.get(`http://localhost:8072/carparks/main/${carParkNo}/detail`).catch(err => {
            console.log("Error : ", err);
        });
        dispatch(seletedCarPark(response.data));
    };

    useEffect(() => {
        if(carParkNo && carParkNo !== "") fetchCarParkDetail(carParkNo);
        return () => {
            dispatch(removedSeletedCarPark());
        }

        }, [carParkNo]
    );

    return (
        <div className="ui grid container">
      {Object.keys(carPark).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={process.env.PUBLIC_URL + '/carpark_default.jpeg'} alt={carParkInfo.address} />
              </div>
              <div className="column rp">

              <form class="ui form">
                <div class="field">
                        <label>CarPark No</label>
                        <input type="text" disabled name="carpark-no" placeholder="CarPark No" value={carParkInfo.car_park_no}/>
                    </div>

                    <div class="field">
                        <label>Address</label>
                        <input type="text" disabled name="address" placeholder="Address" value={carParkInfo.address}/>
                    </div>

                    <div class="field">
                        <label>Total Slots</label>
                        <input type="text" disabled name="total-slots" placeholder="Total Slots" value={available.totalLots}/>
                    </div>

                    <div class="field">
                        <label>Available Slots</label>
                        <input type="text" disabled name="available-slot" placeholder="Available Slots" value={available.lotsAvailable}/>
                    </div>

                    <div class="field">
                        <label>Quality</label>
                        <input type="text" name="quality" placeholder="Quality"/>
                    </div>

                    <button class="ui button" type="submit">Book</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
}

export default CarParkDetail;