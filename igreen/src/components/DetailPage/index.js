import './style.css';
import React, { useState, useEffect } from 'react';
import Heart from 'react-animated-heart';
import { db } from '../../firebase';
import RecProduct from '../RecProduct';
import { Button } from '@material-ui/core';
import { facials_element, facials } from './product_array';

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
  const [product_id, setProductId] = useState(0);
  const name = props.location.state.name;
  const price = props.location.state.price;
  const img = props.location.state.imgg;
  const link = props.location.state.link;
  const idx = props.location.state.idx;
  const ecoval = props.location.state.ecoval;
  var value = '';
  var cgg = '';
  // var product_id = 0;
  var states = ['adult_bad', 'adult_normal', 'adult_good', 'adult_dance'];
  // console.log('num', idx + 1);
  var avg = function (list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum / list.length;
  };

  var heartClick = function (e) {
    // console.log('heartIdd', idd);
    var index = wished.indexOf(idd);
    // console.log('index', index);
    if (!isClick) {
      if (index === -1) {
        wished.push(idd);
      }
    } else {
      if (index !== -1) {
        wished.splice(index, 1);
      }
    }
    setClick(!isClick);
    setWished(wished);
    db.collection('users').doc('1').update({
      wished: wished,
    });
    setStatus(
      avg(
        wished.map(function (el) {
          db.collection('products')
            .doc(String(el))
            .get()
            .then(function (doc1) {
              var docs1 = doc1.data();
              return docs1['eco'];
            });
        })
      )
    );
    isClick ? setConsole2('true') : setConsole2('false');
  };

  useEffect(() => {
    console.log('db get');
    db.collection('products')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          ////////get product list//////////
          var docs = doc.data();
          let dic = products;
          dic[doc.id] = docs;
          setProducts(dic);

          // console.log('products check', products);

          if (dic[doc.id]['name'] == name) {
            cgg = products[doc.id]['category'];
            var tmp = Number(doc.id);
            for (var i = 0; i < facials.length; i++) {
              if (facials[i][0] == tmp) setProductId(i);
            }
            console.log('category', cgg, 'product_id', product_id);
            debugger;
          }
          /////////get product id, category///////////
          if (doc.data().name === name) {
            setIdd(doc.id);
            setCategory(doc.data().category);
            db.collection('products1')
              .doc(doc.id)
              .get()
              .then(function (doc2) {
                setStage(doc2.data());
              });
            db.collection('users')
              .doc('1')
              .get()
              .then(function (docc) {
                var docs = docc.data();
                setWished(docs['wished']);
                var clicked = !!(docs['wished'].indexOf(doc.id) + 1);
                setStatus(
                  avg(
                    wished.map(function (el) {
                      db.collection('products')
                        .doc(String(el))
                        .get()
                        .then(function (doc1) {
                          var docs1 = doc1.data();
                          return docs1['eco'];
                        });
                    })
                  )
                );
                setClick(clicked);
              });
          }
        });
      });

    db.collection('companion')
      .doc('bukkuk')
      .get()
      .then(function (doc) {
        let docs = doc.data();
        // console.log('link', link);
        setImgSrc([]);
        for (var i = 0; i < Object.keys(docs).length; i++) {
          let dic = img_src;
          dic[i] = docs[states[i]];
          setImgSrc(dic);
        }
        let tdic = img_src;
        tdic[4] = img_src[2];
        // console.log('companion img source list', img_src);
      });
  }, []);

  useEffect(() => {}, [product_id]);

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
            <div
              class="share"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                // console.log('copy');
                alert('copied');
              }}
            >
              <img src="/images/share.png" height="30px" />
            </div>
          </div>
          <div class="row2">
            {stage[0] ? (
              <div class="feature1" id="a">
                <div class="image">
                  <img src="/images/setting.png" height="30px" />
                </div>
                <div>produce</div>
              </div>
            ) : (
              <div class="feature1" id="b">
                <div class="image">
                  <img src="/images/setting.png" height="30px" />
                </div>
                <div>produce</div>
              </div>
            )}

            {stage[1] ? (
              <div class="feature2" id="a">
                <div class="image">
                  <img src="/images/hello.png" height="30px" />
                </div>
                <div>사용중..?</div>
              </div>
            ) : (
              <div class="feature2" id="b">
                <div class="image">
                  <img src="/images/hello.png" height="30px" />
                </div>
                <div>사용중..?</div>
              </div>
            )}
            {stage[2] ? (
              <div class="feature3" id="a">
                <div class="image">
                  <img src="/images/bin.png" height="30px" />
                </div>
                <div>after use</div>
              </div>
            ) : (
              <div class="feature3" id="b">
                <div class="image">
                  <img src="/images/bin.png" height="30px" />
                </div>
                <div>after use</div>
              </div>
            )}
          </div>
          <div class="row3">
            <div class="price">
              {price}
              <span>&#8361;</span>
            </div>

            <a href={link}>
              <Button variant="contained" color="primary">
                Go to Buy
              </Button>
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
      <div>
        <img alt="product_img" src={img} width="300px"></img>
        <img alt="product_img" src={img} width="300px"></img>
      </div>
      <div>
        {product_id != null ? (
          <table>
            <thead> {cgg} </thead>
            <tbody>
              {facials[product_id].map((val, index) =>
                index != 0 ? (
                  <tr>
                    <td> {facials_element[index]} </td>
                    <td> {val} </td> <td> {facials[product_id][index]} </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default DetailPage;
