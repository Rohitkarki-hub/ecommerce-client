import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  //useeffect
  useEffect(() => {
    getCategoties();
    getProducts();
  }, []);

  //getProducts
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
      console.log(res);
    });
  };

  //getCategoties
  const getCategoties = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
      console.log(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
