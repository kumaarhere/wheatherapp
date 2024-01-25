import cloud from './cloudy.png';
import logo from './weather-forecast.png';
import loader from './loading.png';
import './App.css';
function App() {
  
  function Apicall(){
    const cityInput = document.getElementById("cityname").value; 
    if(cityInput===null){
      alert("enter a valid city name")
    }else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=28e544016213c4d4ba8f925a2e917f35`)
    .then((res)=>res.json()).then((data)=>{
        document.querySelector(".condition").innerHTML=data.weather[0].main;
        document.querySelector(".location").innerHTML=data.name;
        document.querySelector(".country").innerHTML=data.sys.country;
        document.querySelector(".Humidity").innerHTML=data.main.humidity;
        document.querySelector(".Wind").innerHTML=data.wind.speed;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp-273)+"°C";
        document.querySelector(".pressure").innerHTML=data.main.pressure;
    })
    }};


  return (
    <div className="body">
      <img src={logo} className='logo' alt="logo"/>
      <div class="container">
        <div>
          <input type="search"
           id="cityname"
           className="input"
           placeholder="enter city name"/>
           <i class="fa-solid fa-magnifying-glass" onClick={Apicall}></i>
        </div>
        <div className="info">
        <img src={cloud}alt="cloud" className='cloud'/>
        <h2 className='condition'> &#8987;</h2>
          <div className='city'>
            <div>
              <h1 className='location'><img src={loader}alt="map" className='map'></img></h1>
              <h5 className='country'></h5>
            </div>
            <div className='temperature'>
                <h4 className='temp'>&#9788;</h4>
            </div>
          </div>
            
          <div className="forecasts">
            <div className="one">
              <h5>Humidity</h5>
              <span><h1 className="Humidity">0</h1><h5>%</h5></span>
            </div>
            <div className="two">
              <h5>Wind</h5>
              <span><h1 className="Wind">0</h1><h5>km/h</h5></span>
            </div>
            <div className="three">
              <h5>Pressure</h5>
              <span><h1 className="pressure">0</h1><h5>mb</h5></span>
            </div>
          </div>
        </div>
      </div>
      <p className='brand'><i class="fa-solid fa-person-digging"><a href="https://github.com/kumaarhere">KMR</a></i></p>
    </div>
  );
}

export default App;
