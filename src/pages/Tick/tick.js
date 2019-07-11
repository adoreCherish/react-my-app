import React from 'react';
class Tick extends React.Component {
    constructor() {
        super();
        this.state = {
            contant: ''
        }
    }
    componentDidMount() {
        this.timer = setInterval( ()=>{
            this.setState({
                contant:  new Date().toLocaleTimeString()
            })
        }, 1000 )
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    render() {
        const element = (
            <div className="cm-clr-green cm-txt-c cm-mg-t-20">现在是: { this.state.contant }</div>
        )
        return element;
    }
}
export default Tick;