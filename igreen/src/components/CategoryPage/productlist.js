import React from 'react';
import Product from '../Product';

class Productlist extends React.Component {
  render() {
    const { name, price, imgg, a, ecoval, wished } = this.props;
    return name.map((val, idx) => {
      return (
        <Product
          name={name[idx]}
          price={price[idx]}
          imgg={imgg[idx]}
          a={a[idx]}
          ecoval={ecoval[idx]}
          idx={idx}
          wished={wished[idx]}
        />
      );
    });
  }
}

export default Productlist;
