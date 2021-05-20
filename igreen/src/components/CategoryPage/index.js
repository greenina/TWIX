import './style.css';
import React, { Component } from 'react';
import Product from '../Product';
import Productlist from './productlist';
import { db, firebaseApp, firebase } from './../../firebase';

var count = 0;
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      price: [],
      imgg: [],
      a: [],
      ecoval: [],
      wished: [],
    };
    this.datarefresh = this.datarefresh.bind(this);
    this.onesight = this.onesight.bind(this);
  }
  onesight() {
    var elements = document.getElementsByClassName('productbox');
    var checked = console.log(count);
    count++;
    for (var i = 0; i < elements.length; i++) {
      if (count % 2 == 1)
        elements[i].classList.add('eco' + this.state.ecoval[i]);
      else elements[i].classList.remove('eco' + this.state.ecoval[i]);
    }
  }
  datarefresh() {
    count = 0;
    var wishes = [];

    var user = db
      .collection('users')
      .doc('1')
      .get()
      .then(function (doc) {
        let docs = doc.data();
        wishes = docs['wished'];
      });

    var product = db
      .collection('products')
      .get()
      .then((snapshot) => {
        this.setState((prevState) => ({
          name: [],
          price: [],
          imgg: [],
          a: [],
          ecoval: [],
          wished: [],
        }));
        //snapshot.forEach(datacheck);
        //alert(document.getElementById('pc'))
        snapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          var vegan = document.getElementById('vegan').checked;
          var ap = document.getElementById('ap').checked;
          var harm = document.getElementById('harm').checked;
          var ecoonly = document.getElementById('ecoonly').checked;
          var veganvalid = !vegan || doc.data().vegan === vegan;
          var apvalid = !ap || doc.data().ap === ap;
          var harmvalid = !harm || doc.data().harm === harm;
          var wishbool = wishes.includes('' + doc.id) ? true : false;

          var ecovalid = !ecoonly || doc.data().eco > 0;
          console.log(doc.id, ' => ', doc.data());
          console.log(doc.data().eco);
          if (veganvalid && apvalid && harmvalid && ecovalid)
            this.setState((prevState) => ({
              name: [...prevState.name, doc.data().name],
              price: [...prevState.price, doc.data().price],
              imgg: [...prevState.imgg, doc.data().imgg],
              a: [...prevState.a, doc.data().a],
              ecoval: [...prevState.ecoval, doc.data().eco],
              wished: [...prevState.wished, wishbool],
            }));
        });
        console.log(this.state);
      });
  }

  render() {
    const { name, price, imgg, a, ecoval, wished } = this.state;
    return (
      <header>
        <div> 상품 카테고리 페이지</div>
        <div>내브바들어갈자리</div>
        <div className="checkbox1">
          <label>비건</label>
          <input
            type="checkbox"
            id="vegan"
            value="비건"
            onClick={this.datarefresh}
          />
          <label>동물보호</label>
          <input
            type="checkbox"
            id="ap"
            value="동물보호"
            onClick={this.datarefresh}
          ></input>
          <label>유해물질x</label>
          <input
            type="checkbox"
            id="harm"
            value="유해물질x"
            onClick={this.datarefresh}
          ></input>
        </div>
        <div className="checkbox3">
          <label>친환경만</label>
          <input
            type="checkbox"
            id="ecoonly"
            value="에코"
            onClick={this.datarefresh}
          ></input>
        </div>
        <button id="onesight" onClick={this.onesight}>
          한눈에보기
        </button>
        <button onClick={this.datarefresh}>ㅋㅋ</button>
        <div id="pc">
          <Productlist
            name={name}
            price={price}
            imgg={imgg}
            a={a}
            ecoval={ecoval}
            wished={wished}
          ></Productlist>
        </div>
      </header>
    );
  }
}

export default CategoryPage;
