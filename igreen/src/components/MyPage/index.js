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
        setScore(0);
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
      });

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
        setScore(0);
        var tmpScore = 0;
        for (i = 0; i < userInfo['wished'].length; i++) {
          tmpScore += products[userInfo['wished'][i]]['eco'] + 1;
        }
        setScore(Math.round(tmpScore / userInfo['wished'].length));
        console.log(
          "user's eco score",
          Math.round(tmpScore / userInfo['wished'].length)
        );
        console.log('userInfo', userInfo);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const recommend = (val) => {
    if (products[val]['eco'] > 0)
      console.log('bukkuk loved this product', products[val]['name']);
    else console.log("bukkuk's recommendation!");
  };

  return (
    <div>
      <div className="tmp"> 여기에 nav bar가 들어가면 될 것 같습니당 </div>
      <div className="container">
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
        {userInfo['wished'] && Object.keys(products).length > 0 ? (
          <div id="showwish">
            {userInfo['wished'].map((val, idx) => (
              <div onMouseEnter={(e) => recommend(val)} key={val}>
                <WishProduct
                  name={products[val]['name']}
                  price={products[val]['price']}
                  imgg={products[val]['imgg']}
                  a={products[val]['a']}
                  ecoval={products[val]['eco']}
                  idx={idx}
                  wished={userInfo['wished'].includes(val)}
                />
                {userInfo['wished'].includes(val) ? (
                  <img
                    className="myheart"
                    src="https://ifh.cc/g/d7BZO6.png"
                    width="30px"
                  />
                ) : (
                  <img
                    className="myheart"
                    src="https://ifh.cc/g/IuZase.png"
                    width="30px"
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
