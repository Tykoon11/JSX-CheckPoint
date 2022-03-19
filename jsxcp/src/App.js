import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.jpeg"
import styles from "./style.css"


function App() {
  return (
    <div className="App">
      <div style = {{border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className = 'title red'>Unachukwu Nobleman Ikenna</h1>
        <br/>
        <img src ={imageInSrc} alt ='hacker1'/>
        <br/>
        <img src = "/jsxcp/public/imageInPublic.jpeg" alt ="laptop"/>
      </div>
      <video width="320" height="240" controls >
        <source src = 'myVideo.mp4'type='video/mp4'/>
      </video>
    </div>
  );
}

export default App;
