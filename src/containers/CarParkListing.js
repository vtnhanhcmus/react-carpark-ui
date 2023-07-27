import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCarParks } from "../redux/actions/CarParksAction";
import CarParkItems from "./CarParkItems";

const CarParkListing = () => {

    const carparks = useSelector((state) => state.allCarparks.carparks);
    const dispatch = useDispatch();
    const fetchCarParks = async () => {
        const response = await axios.get("http://localhost:8072/carparks/main/list")
        .catch((err) => {
            console.log("Error : ", err);
        });
        console.log(response);
        dispatch(setCarParks(response.data));
    };

    useEffect(() => {
        fetchCarParks();
    }, []);

    console.log(carparks);

    return (
        <div className="ui grid container">
            <CarParkItems></CarParkItems>
        </div>
    );

}

export default CarParkListing;