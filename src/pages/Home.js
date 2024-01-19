import Info from "../features/info/info";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import ImageCard from "../img/imageCard"
function Home() {
    return ( 
        <div>
            <NavBar>
                <ImageCard />
                <ProductList></ProductList>
                <Info></Info>
            </NavBar>
        </div>
     );
}

export default Home;