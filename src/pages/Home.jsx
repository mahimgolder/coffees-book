import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* Heeding */}
            <Heading title={'Browse Coffees by Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}></Heading>
            {/* categories tab section */}
            <Categories categories={categories}></Categories>
            {/* dynamic nested components */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;