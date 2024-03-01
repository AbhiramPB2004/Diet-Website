import Menu from "./Menu";
import Header from "./Header";
import Choose from "./Choose";
// import Explore from "./components/Explore";
import Trainer from "./Trainer";
import Testimonial from "./Testimonial";
import Discount from "./Discount";
import Footer from "./Footer";
// import "";
import "./App.css";

function Main(){
    return(
    <div className="App">
      <Menu />
      <Header />
      <Choose />
      {/* <h1>helloworld </h1> */}
      {/* <Explore /> */}
      <Trainer />
      <Testimonial />
      <Discount />
      <Footer />
    </div>
    );
}
export default Main;