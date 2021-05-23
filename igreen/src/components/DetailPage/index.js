import './style.css';
import React, {useState, useEffect} from 'react';
import Heart from "react-animated-heart";
import { db } from '../../firebase';
import Product from '../Product/index';

function DetailPage(props) {
  //console.log("props",props)
  const [wished, setWished] = useState();
  const [console2, setConsole2] = useState();
  const [console3, setConsole3] = useState(0);
  const [bukkuk, setBukkuk] = useState([]);
  const [stage, setStage] = useState([]);
  const [status, setStatus] = useState();
  const [name, setName] = useState(props.location.state.name);
  const [price, setPrice] = useState(props.location.state.price);
  const [img, setImg] = useState(props.location.state.imgg);
  const [link, setLink] = useState(props.location.state.a);

  const [isClick, setClick] = useState();
  const [idx, setIdx] = useState(props.location.state.idx);
  const [userInfo, setUserInfo] = useState({});
  var states = ['adult_bad', 'adult_normal', 'adult_good', 'adult_dance'];
  //const [wished, setWished] = useState();
  db.collection('products1')
  .doc(String(idx+1))
  .get()
  .then(
    function(doc){
      setStage(doc.data())
    }
  )
  db.collection('users')
  .doc('1')
  .get()
  .then(
    function(doc){
      var docs = doc.data();
      var clicked = !!(docs['wished'].indexOf(String(idx+1))+1);
      setClick(clicked);
    }
  )
  //console.log(name, price, img, link, idx);
  db.collection('companion')
  .doc('bukkuk')
  .get()
  .then(
    function(doc){
      var docs = doc.data();
      var imgs=[]
      for(var i=0;i<Object.keys(docs).length;i++){
        imgs.push(docs[states[i]]);
        setBukkuk(imgs);
      }
    }
  )

  var avg = function(list){
    var sum=0;
    for(var i = 0;i<list.length;i++){
      sum+=list[i]
    }
    return sum/list.length;
  }
  var heartClick = function(e){
    var a = console3+1;
    setConsole3(a);
    setClick(!isClick);
    isClick?setConsole2("true"):setConsole2("false")
  }

  useEffect(()=>{
    db.collection('users')
    .doc('1')
    .get()
    .then(
      function(doc){
        var docs = doc.data();
        var index = docs['wished'].indexOf(String(idx+1));
        if(isClick){
          if(index==-1){
            docs['wished'].push(String(idx+1))
          }
        }
        else{
          if(index!==-1){
            docs['wished'].splice(index,1)
          }
        }
        setWished(docs['wished']);
        db.collection('users')
        .doc('1')
        .set(docs)
        .then(
          ()=>{
            setWished(docs['wished'])
            let eco = wished.map(function(el){
              db.collection('products')
              .doc(String(el))
              .get()
              .then(function(doc1){
                var docs1 = doc1.data();
                return docs1['eco']
              })
            })
            setStatus(avg(eco));
          }
        )
      } 
  )
  },[isClick, wished]);

  return (
    <div class="whole">
      <div class="wrap"> 
        <div class="img">
          <img src={img} alt="Product image" width="500" height="500"></img>
        </div>
        <div width="500px"></div>
        <div class="info">
          <div class="row1">
            {/* <h1>{console1}</h1>
            <h1>{console2}</h1>
            <h1>{console3}</h1> */}
            <h1>{name}</h1>
            <Heart isClick={isClick} onClick={heartClick} />
          </div>
          <div class="row2">
            {stage[0]?
            <div class="feature1" id="a">
              <div class="image">
                <img src="/images/setting.png" height="30px"/>
              </div>
              <div>produce</div>
            </div>:
            <div class="feature1" id="b">
              <div class="image">
                <img src="/images/setting.png" height="30px"/>
              </div>
              <div>produce</div>
            </div>
            }
            
            {stage[1]?
            <div class="feature2" id="a">
              <div class="image">
                <img src="/images/hello.png" height="30px"/>
              </div>
              <div>사용중..?</div>
            </div>:
            <div class="feature2" id="b">
              <div class="image">
                <img src="/images/hello.png" height="30px"/>
              </div>
              <div>사용중..?</div>
            </div>
            }
            {stage[2]?
            <div class="feature3" id="a">
              <div class="image">
                <img src="/images/bin.png" height="30px"/>
              </div>
              <div>after use</div>
            </div>:
            <div class="feature3" id="b">
              <div class="image">
                <img src="/images/bin.png" height="30px"/>
              </div>
              <div>after use</div>
            </div>
            }
          </div>
          <div class="row3">
            <div>{price} won</div>
            <a href={link}>
              <div>Go to Buy</div>
            </a>
          </div>
        </div>
        <div>
          <img src={bukkuk[status]}/>
        </div>
    </div>
      {status==0||status==1?
      <div class="images">
        <div class="image1">image1</div>
        <div class="image2">image2</div>
      </div>:
      <div class="images">
        <div class="image3">image3</div>
        <div class="image4">image4</div>
      </div>
      }
  </div>
  );
}

export default DetailPage;
