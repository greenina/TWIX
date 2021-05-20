/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import { db } from '../../firebase';
import React, { useState, useEffect } from 'react';
import WishProduct from '../../WishProduct';

function MyPage() {
  // const [img_num, setImgNum] = useState(0);
  const [img_src, setImgSrc] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [products, setProducts] = useState({});
  const [score, setScore] = useState(0);
  const [wishes, setWishes] = useState(0);
  const [printed, setPrinted] = useState([]);
  const [first, setFirst] = useState(0);
  const [overlayMode, setOverlay] = useState(0);
  var del_idx = [];
  var timer;
  var delay = 500;

  useEffect(() => {
    var states = ['adult_bad', 'adult_normal', 'adult_good', 'adult_dance'];
    var infos = ['name', 'wished', 'experience'];

    db.collection('companion')
      .doc('bukkuk')
      .get()
      .then(function (doc) {
        let docs = doc.data();
        setImgSrc([]);
        for (var i = 0; i < Object.keys(docs).length; i++) {
          let dic = img_src;
          dic[i] = docs[states[i]];
          setImgSrc(dic);
        }
        console.log('companion img source list', img_src);
      });

    var count = 0;
    db.collection('products')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var docs = doc.data();
          let dic = products;
          count++;
          dic['' + count] = docs;
          setProducts(dic);
        });
        console.log('product list', products);

        db.collection('users')
          .doc('1')
          .get()
          .then(function (doc) {
            let docs = doc.data();
            setUserInfo([]);
            for (var i = 0; i < Object.keys(docs).length; i++) {
              let dic = userInfo;
              dic[infos[i]] = docs[infos[i]];
              setUserInfo(dic);
            }

            var tmpScore = 0;
            for (i = 0; i < userInfo['wished'].length; i++) {
              console.log(products[userInfo['wished'][i]]['eco']);
              tmpScore += products[userInfo['wished'][i]]['eco'];
            }
            if (userInfo['wished'].length > 0)
              setScore(Math.round(tmpScore / userInfo['wished'].length));
            else setScore(0);
            console.log(
              "user's eco score",
              Math.round(tmpScore / userInfo['wished'].length)
            );
            console.log('userInfo', userInfo);
            setWishes(userInfo['wished'].length);

            if (first == 0) {
              setFirst(1);
              setPrinted(userInfo['wished']);
              console.log('printed wishlist changed');
            }
            console.log(printed);
          });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [printed, wishes]);

  const mouseEnter = (val) => {
    console.log('mouse entered to ' + products[val]['name']);
    timer = setTimeout(function () {
      var bukkuk = document.getElementsByClassName('companion_gif')[0];
      console.log(bukkuk);
      bukkuk.style = 'margin-left: 5%';
      setOverlay(1);
    }, delay);
    // if (products[val]['eco'] > 0)
    //   console.log('bukkuk loved this product', products[val]['name']);
    // else console.log("bukkuk's recommendation!");
  };

  const mouseLeave = (val) => {
    console.log('mouse leaved from ' + products[val]['name']);
    clearTimeout(timer);
    var bukkuk = document.getElementsByClassName('companion_gif')[0];
    console.log(bukkuk);
    bukkuk.style = 'margin-left: -15%';
    setOverlay(0);
    // if (products[val]['eco'] > 0)
    //   console.log('bukkuk loved this product', products[val]['name']);
    // else console.log("bukkuk's recommendation!");
  };

  const heartOff = (e) => {
    e.preventDefault();
    var tmp = userInfo;
    // console.log(e.target.parentElement.getAttribute('value'));
    var val = e.target.parentElement.getAttribute('value');
    var index = userInfo['wished'].indexOf(val);
    if (index !== -1) {
      del_idx.push(index);
      tmp['wished'].splice(index, 1);
    }

    db.collection('users')
      .doc('1')
      .set(tmp)
      .then(() => {
        var current_wish = wishes - 1;
        setWishes(current_wish);
        var new_score = 0;
        for (var i = 0; i < userInfo['wished'].length; i++) {
          new_score += products[userInfo['wished'][i]['eco']];
        }
        setScore(Math.round(new_score / userInfo['wished'].length));
        // console.log(score, userInfo);
      });
  };

  const heartOn = (e) => {
    e.preventDefault();
    var tmp = userInfo;
    var val = e.target.parentElement.getAttribute('value');
    var index = del_idx.pop();
    tmp['wished'].splice(index, 0, val);

    db.collection('users')
      .doc('1')
      .set(tmp)
      .then(() => {
        var current_wish = wishes + 1;
        setWishes(current_wish);
        var new_score = 0;
        for (var i = 0; i < userInfo['wished'].length; i++) {
          new_score += products[userInfo['wished'][i]['eco']];
        }
        setScore(Math.round(new_score / userInfo['wished'].length));
        // console.log(score, userInfo);
      });
  };

  return (
    <div>
      <div className="tmp"> 여기에 nav bar가 들어가면 될 것 같습니당 </div>
      <div className="container">
        {overlayMode == 0 ? <div> 기본 정보 </div> : <div> 추천 정보 </div>}
        <img
          className="background_img"
          src="https://ifh.cc/g/ohSfv7.jpg"
          alt="background"
          key="background"
        ></img>

        <div className="companion">
          <img
            id="bukkuk"
            className="companion_gif"
            src={img_src[score]}
            alt="companion"
            key={score}
          ></img>
        </div>
      </div>
      <div className="wishlist">
        {printed != null &&
        printed.length > 0 &&
        userInfo['wished'] != null &&
        Object.keys(products).length > 0 ? (
          <div id="showwish">
            {printed.map((val, idx) => (
              <div
                onMouseEnter={(e) => mouseEnter(val)}
                onMouseLeave={(e) => mouseLeave(val)}
                key={val}
                value={val}
              >
                <WishProduct
                  name={products[val]['name']}
                  price={products[val]['price']}
                  imgg={products[val]['imgg']}
                  a={products[val]['a']}
                  ecoval={products[val]['eco']}
                  idx={idx}
                  wished={printed.includes(val)}
                />
                {userInfo['wished'].includes(val) ? (
                  <img
                    className="myheart"
                    src="https://ifh.cc/g/d7BZO6.png"
                    width="30px"
                    onClick={(e) => heartOff(e)}
                  />
                ) : (
                  <img
                    className="myheart"
                    src="https://ifh.cc/g/IuZase.png"
                    width="30px"
                    onClick={(e) => heartOn(e)}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div onClick={() => console.log(userInfo['wished'])}>No Product</div>
        )}
      </div>
    </div>
  );
}

export default MyPage;
