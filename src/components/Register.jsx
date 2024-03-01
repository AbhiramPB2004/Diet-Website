
// import "./App.css";
import "./Register-style.css"
function Register(){
    return(
        <div>
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
    <form>
      <h3>Registration</h3>

      <label className="name">Name</label>
      <input type="text" placeholder="Your Name" id="name" />

      <label className="age">Age</label>
      <input type="number" placeholder="Your Age" id="age" />

      <label className="sex">Sex</label>
      <select id="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label className="height">Height</label>
      <input type="number" placeholder="Your Height (in cm)" id="height" />

      <label className="weight">Weight</label>
      <input type="number" placeholder="Your Weight (in kg)" id="weight" />

      <label className="food-type">Type of Food</label>
      <select id="food-type">
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
        <option value="eggitarian">Eggitarian</option>
      </select>

      <button>Next</button>
       <div className="social1">
        <div className="go"><i className="fab fa-google"></i> Google</div>
        <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
      </div> 
    </form>
         
        </div>
    );
}
export default Register