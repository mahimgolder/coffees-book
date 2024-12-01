/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
console.log(categories)

    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
              {
                categories.map(category => 
                <NavLink 
                    key={category.id} 
                    to={`/coffeeCards/${category.category}`} 
                    role="tab" 
                    className={({ isActive }) => `tab text-2xl font-thin ${(isActive ? 'tab-active' : '' )}`}>
                        {category.category}
                </NavLink>)
              }
                                        
            </div>
        </div>
    );
};

export default Categories;