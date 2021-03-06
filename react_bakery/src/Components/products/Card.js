import React, { Component } from 'react';

import specimen from '../../img/specimen.jpg'



class Card extends Component {


    constructor(){
        super();
        

        this.state = {
            source: specimen
        }
    }

        componentDidMount(){
            const url = `http://konexio.codiscovery.co/bakery/api/?q=${this.props.itemName}`
            fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('resultat fetch', json);

                    if (json.success){
                        console.log('hello json' , json.source)
                      this.setState ({
                          source: json.source
                      })  
                    }
         });
}
       
    render () {
        // console.log(this.state);
            return (

                <div>  
                    <button>
                        <img src={this.state.source} onClick={() => this.props.onClickFn(this.props.itemName , this.props.price)} className= "img-thumbnail" alt= ""/> 
                    </button>


                </div>
            )
            }


}


export default Card;