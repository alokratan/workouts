import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <>

<div className="navbar">
<div className="logo">
<p>HF</p>
</div>
<div className="menu">
  <ul>
    <li>
      <a href='/'><i className="bi bi-camera-reels-fill"></i>LIVE</a></li>
    <li><a href='/'><i className="bi bi-postcard-fill"></i>MEMBERSHIP</a></li>
    <li><a href='/'><i className="bi bi-clipboard-data-fill"></i>PLANS</a></li>
    <li><a href='/'><i className="bi bi-grid-fill"></i>MORE</a></li>
  </ul>
</div>
<div className="login"><p><i className="bi bi-person-fill"></i>Login</p></div>
</div>
<div className="workout">
</div>

<div className="containers">
<h1>
  Runner's Workout
</h1>
<div className="slider">
<div className="strength abc"><h5>Strength</h5><i className="bi bi-arrow-right-circle-fill"></i></div>
<div className="mobility abc"><h5>Mobility</h5><i className="bi bi-arrow-right-circle-fill"></i></div>
<div className="drills abc"><h5>Drills</h5><i className="bi bi-arrow-right-circle-fill"></i></div>
</div>
</div>



    </>
  );
}

export default App;
