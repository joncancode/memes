import React, { Component } from 'react'

class Meme extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange(event) {
        
    }

    render(){
        return(
            <div>
            <form className="meme-form">
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                /> 
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                /> 
            
                <button>Gen</button>
            </form>
        </div>
        )
    }
} 

export default Meme