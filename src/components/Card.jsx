/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { removeFavorite } from "../utils";


// eslint-disable-next-line react/prop-types
const Card = ({coffee, handleRemove}) => {
    const {pathname} = useLocation()

    // eslint-disable-next-line react/prop-types
    const {id, name, image, category, type, origin, rating, popularity} = coffee || {};

    
    return (
        <div className="flex relative">
            <Link 
            to={`/coffee/${id}`}
            className="transition hover:scale-105 shadow-xl rounded-xl  overflow-hidden"
            >
                <figure className="w-full h-48  overflow-hidden ">
                    <img src={image} alt="" />
                </figure>
                <div className="p-4">
                    <h1>Name:{name}</h1>
                    <p>Category:{category}</p>
                    <p>Type:{type}</p>
                    <p>Origin:{origin}</p>
                    <p>Rating:{rating}</p>
                    <p>Popular:{popularity}</p>
                </div>
            </Link>
            { pathname === '/dashboard' && (
                <div
                onClick={() => handleRemove(id)}
                 className="absolute p-3 rounded-full cursor-pointer bg-warning  -top-5 -right-5">
                    <FaTrashCan size={20}></FaTrashCan>
                </div>
            )}
        </div>
    );
};

export default Card;