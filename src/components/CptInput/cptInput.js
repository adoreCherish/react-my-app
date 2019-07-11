import React from 'react';
class CptInput extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            value: ''
        }
        this.change = this.change.bind(this);
    }
    componentDidMount() {
        this.setState({
            value: this.props.value
        })
    }
    render() {
        return (
            <input className={ `cm-bd cm-rds ${this.props.className }`} onChange={ this.change } value={ this.state.value } name={ this.props.name } type={ this.props.type }/>
        );
    }
    change( event ){
        this.setState({
            value: event.target.value
        })
    }
}
export default CptInput;