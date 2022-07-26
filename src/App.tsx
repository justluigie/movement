import React, { useCallback } from "react";
import './App.css';
import './module/background'
import Particles from 'react-tsparticles';
import type { Engine } from "tsparticles-engine"
import { loadFull } from 'tsparticles';
import  particlesOptions  from './module/background.json';
import { ISourceOptions } from 'tsparticles-engine';


function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

  return (
    <div className="App">
    <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
     <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"></img>
                    <h3>Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"></img>
                    <h3>Code</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"></img>
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default App;
