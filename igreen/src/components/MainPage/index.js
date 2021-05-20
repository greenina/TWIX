import './style.css';
import {db, firebaseApp, firebase} from '../../firebase';
import React, { useEffect, useState } from 'react';
import Switch from './Switch';

function MainPage() {
  /**/
  const resizeArea = (data) => {
    const winWidth = document.body.offsetWidth;
    let a = [];
    for (let i=0; i<data.length; i++) {
      a.push(data[i]*winWidth/1440);
    }
    return a.join();
  };
  const [windowSize, setWindowSize] = useState(document.body.offsetWidth);
  const handleResize = () => {
      setWindowSize({
        winWidth: window.innerWidth
      });
    }
    
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => { // cleanup 
        window.removeEventListener('resize', handleResize);
      }
    }, [windowSize]);

  return (
    <div>
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio-lr" defaultChecked></input>
          <input type="radio" name="radio-btn" id="radio-kc"></input>
          <input type="radio" name="radio-btn" id="radio-br"></input>
          <input type="radio" name="radio-btn" id="radio-mr"></input>
        
          <div class="slide first">
            <img src="https://ifh.cc/g/il5UZy.png" alt="" usemap="#livingroom-map"></img>
            <map id="livingroom-map" name="livingroom-map" width="100%" height="100%" border="5px solid #000000">
              <area shape="poly" alt="" title="" coords={resizeArea([204,260,242,240,277,255,261,210,286,197,297,226,316,235,302,261,375,281,382,341,317,355,197,315,202,256,203,262])} href="/category" target="" />
              <area shape="poly" alt="" title="" coords={resizeArea([540,603,467,720,483,768,835,768,1078,689,1118,636,1081,538,970,493,820,493,537,600])} href="/category" target="" /></map>
          </div>
          <div class="slide">
            <img src="https://ifh.cc/g/il5UZy.png" alt=""></img>
          </div>
          <div class="slide">
            <img src="https://ifh.cc/g/il5UZy.png" alt=""></img>
          </div>
          <div class="slide">
            <img src="https://ifh.cc/g/il5UZy.png" alt=""></img>
          </div>
          <div class="navigation-manual">
            <label for="radio-lr" class="manual-btn-lr"></label>
            <label for="radio-kc" class="manual-btn-kc"></label>
            <label for="radio-br" class="manual-btn-br"></label>
            <label for="radio-mr" class="manual-btn-mr"></label>
          </div>
        </div>
      </div>
      <Switch />
    </div>
  );
}

export default MainPage;
