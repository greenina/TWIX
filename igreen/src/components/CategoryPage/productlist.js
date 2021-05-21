
import React from 'react';
import Product from './product'

class Productlist extends React.Component {
    render() {
        const { name, price, imgg, a ,ecoval} = this.props;
        return (
            name.map((val, idx) => {
                return <Product name={name[idx]} price={price[idx]} imgg={imgg[idx]} a={a[idx]} ecoval={ecoval[idx]} idx={idx}/>
            })
        )
    }
}

export default Productlist;