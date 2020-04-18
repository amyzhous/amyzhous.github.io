import React from 'react'
import './Intro.css'


class Intro extends React.Component{

    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        if(this.props.transitionalState === 0 && new Date() - this.props.date >= 2000){
            let hi = document.getElementById('header-text');
            hi.classList.remove("fadingAnimation");
            hi.classList.add("fadingAnimation");
            hi.innerHTML = "Amy Here";
            this.props.changeTransitionalState(1);
        }else if (this.props.transitionalState === 1 && new Date() - this.props.date >= 4000){
            this.props.changeTransitionalState(2);
        }
    }
    render(){
        setInterval(this.changeState, 100);
        return(
            <div className="header">
                <div id="header-text" >
                    Hi!
                </div>
            </div>

        )
    }

}

export default Intro