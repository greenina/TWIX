import './style.css';
import React, {useState, useEffect} from 'react';
import Heart from "react-animated-heart";
import { db } from '../../firebase';
import RecProduct from '../RecProduct';
import { Button } from "@material-ui/core";

function DetailPage(props) {
  //console.log("props",props)
  const [recArray, setRecArray] = useState([]);
  const [wished, setWished] = useState([]);
  const [category, setCategory] = useState();
  const [products, setProducts] = useState({});
  const [img_src, setImgSrc] = useState({});
  const [score, setScore] = useState();
  const [console2, setConsole2] = useState();
  const [console3, setConsole3] = useState(0);
  const [bukkuk, setBukkuk] = useState([]);
  const [stage, setStage] = useState([]);
  const [status, setStatus] = useState();
  const [isClick, setClick] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [idd, setIdd] = useState();
  const name = props.location.state.name;
  const price = props.location.state.price;
  const img = props.location.state.imgg;
  const link = props.location.state.link;
  const idx = props.location.state.idx;
  const ecoval = props.location.state.ecoval;
  var states = ['adult_bad', 'adult_normal', 'adult_good', 'adult_dance'];
  console.log("num",idx+1);
  var avg = function(list){
    var sum=0;
    for(var i = 0;i<list.length;i++){
      sum+=list[i]
    }
    return sum/list.length;
  }
  var CopyUrlToClipboard = function(){
    // var obShareUrl = document.getElementById("ShareUrl");
    // obShareUrl.value = window.document.location.href;  // 현재 URL 을 세팅해 줍니다.obShareUrl.select();  // 해당 값이 선택되도록 select() 합니다
    // document.execCommand("copy"); // 클립보드에 복사합니다.
    // obShareUrl.blur(); // 선택된 것을 다시 선택안된것으로 바꿈니다.
    alert("URL이 클립보드에 복사되었습니다");
    console.log("alert") 
  }



  var heartClick = function(e){
    console.log("heartIdd",idd)
    var index = wished.indexOf(idd);
    console.log("index",index)
    if(!isClick){
      if(index===-1){
        wished.push(idd)
        console.log("wished1",wished)
      }
    }
    else{
      if(index!==-1){
        wished.splice(index,1)
        console.log("wished1",wished)
      }
    }
    setClick(!isClick);
    setWished(wished);
    console.log("wishedddd",wished)
    db.collection('users')
    .doc('1')
    .update({
      "wished": wished
    })
    console.log("wished2",wished)
    setStatus(avg(
      wished.map(function(el){
      db.collection('products')
      .doc(String(el))
      .get()
      .then(function(doc1){
        var docs1 = doc1.data();
        return docs1['eco']
      })
    })
    ))
    console.log("avg",avg(
      wished.map(function(el){
      db.collection('products')
      .doc(String(el))
      .get()
      .then(function(doc1){
        var docs1 = doc1.data();
        return docs1['eco']
      })
    })
    ))
    isClick?setConsole2("true"):setConsole2("false")
  }

  
  useEffect(()=>{
    db.collection('products')
    .get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        ////////get product list//////////
        var docs = doc.data();
        let dic = products;
        dic[doc.id] = docs;
        setProducts(dic);
        /////////get product id, category///////////
        if(doc.data().name===name){
          setIdd(doc.id);
          setCategory(doc.data().category)
          console.log("categoryyyyyyy",doc.data().category)
          console.log("categoryyyy",category)
          console.log("doc.id",doc.id)
          console.log("idd1",idd)
          db.collection('products1')
            .doc(doc.id)
            .get()
            .then(
              function(doc2){
                setStage(doc2.data())
              }
            )
          db.collection('users')
            .doc('1')
            .get()
            .then(
              function(docc){
                var docs = docc.data();
                setWished(docs['wished'])
                console.log("wishedItems",wished)
                console.log("wishedItems2",docs['wished'])
                console.log("idddd",doc.id)
                console.log("~~",docs['wished'].indexOf(doc.id))
                var clicked = !!(docs['wished'].indexOf(doc.id)+1);
                console.log("clicked",clicked)
                setStatus(avg(
                  wished.map(function(el){
                  db.collection('products')
                  .doc(String(el))
                  .get()
                  .then(function(doc1){
                    var docs1 = doc1.data();
                    return docs1['eco']
                  })
                })
                ))
                console.log("avg",
                  wished.map(function(el){
                    db.collection('products')
                    .doc(String(el))
                    .get()
                    .then(function(doc1){
                      var docs1 = doc1.data();
                      return docs1['eco']
                    })
                  })
                )
                setClick(clicked);
              }
            )
        }
      })
    })
    db.collection('companion')
      .doc('bukkuk')
      .get()
      .then(function (doc) {
        let docs = doc.data();
        console.log("link",link)
        setImgSrc([]);
        for (var i = 0; i < Object.keys(docs).length; i++) {
          let dic = img_src;
          dic[i] = docs[states[i]];
          setImgSrc(dic);
        }
        let tdic = img_src;
        tdic[4] = img_src[2];
        console.log('companion img source list', img_src);
      });

    db.collection('products')
    .get()
    .then((snapshot)=>{
      var temp=[]
      snapshot.forEach((docc)=>{
        console.log("nameee", name)
        console.log("nameee2",docc.data().name)
        setTimeout(()=>{
          console.log("category1",docc.data().category)
          console.log("category2",category)
          if(docc.data().category===category && docc.data().eco>0){
          temp.push(docc.id);
          setRecArray(temp)
          console.log("temppppp",temp)
          console.log("recArray", recArray)
        } 
        },1000)
        
      })
    })
  },[])


  return (
    <div class="whole">
      <div class="wrap"> 
        <div class="img">
          <img src={img} alt="Product image" width="500" height="500"></img>
        </div>
        <div class="info">
          <div class="row1">
            <h1>{name}</h1>
            <Heart isClick={isClick} onClick={heartClick} />
            <div class="share" onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              console.log("copy");
              alert("copied")
            }}>
              <img src="/images/share.png" height="30px"/>
            </div>
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
            <div class="price">{price}<span>&#8361;</span></div>
            
            <a href={link}>
              <Button variant="contained" color="primary">Go to Buy</Button>
            </a>
          </div>
        </div>
        <div class="companion">
          <img
            id="bukkuk"
            className="companion_gif"
            src={img_src[1]}
            alt="companion"
            key={status}
            margin-left="-10%"
          ></img>
        </div>
        
    </div>
      {status==0||status==1?
      <div class="images">
        <img src="/images/imagea.jpeg"/>
      </div>:
      <div class="images">
        <img height="400px"src="/images/imagea.jpeg"/>
      </div>
      }
      <div class="recbox">
        <div class="recommendations">Recommendations</div>
        {recArray.map((val, idx) => (
                  <div key={val}>
                    <RecProduct
                      name={products[val]['name']}
                      price={products[val]['price']}
                      imgg={products[val]['imgg']}
                      a={products[val]['a']}
                      ecoval={products[val]['eco']}
                      idx={products[val]}
                      // wished={printed.includes(1)}
                    />
                  </div>
                ))}
      </div>
      
                
  </div>
  );
}

export default DetailPage;
