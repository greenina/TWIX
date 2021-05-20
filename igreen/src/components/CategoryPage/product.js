import React, { Component } from "react";
import "./style.css";
import $ from "jquery";
class Product extends Component {

  constructor(props){
    super(props);
    console.log(this.props.ecoval);
    
    this.state={
      name : "",
      price :"",
      imgg :"",
      a:"",
      ecoval:1,

    }
    this.me=this.me.bind(this);
    this.ml=this.ml.bind(this);
  }
  
  // componentDidMount(){
  //   $(".productbox").mouseenter(function(){console.log('on');
  //   $(this).addClass("eco"+this.props.ecoval)});
  // $(".productbox").mouseleave(function(){$(this).removeClass("eco"+this.props.ecoval)});

  // }

  me(){
    console.log('on');
  //   console.log(this.state.ecoval);
    document.getElementById("pdb"+this.props.idx).classList.add("eco"+this.props.ecoval);
    console.log(document.getElementById("pdb"));
  }
  
  ml(){
    console.log('off');
   
    // $(this).removeClass("eco"+this.props.ecoval);
    document.getElementById("pdb"+this.props.idx).classList.remove("eco"+this.props.ecoval);
  }
  
  render() {
    var { name, price, imgg, a, ecoval, idx} = this.props;
    return (
      <header>
        <div id={"pdb"+idx} class={"productbox"} valuee={this.props.eco} onMouseEnter={this.me} onMouseLeave={this.ml}>
          <div class="pimage">
            <a href={this.props.a}>
              <img src={this.props.imgg} alt="Product image" width="150" height="150"></img>
            </a>
          </div>
          <p class="des">{this.props.name}</p>
          <p class="des">{this.props.price}won</p>
        </div>
        
      </header>
    );
  }
}



export default Product;