import React, { Component } from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class LiftingStateUp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature : ''};
    }
handleChange(e){
    this.props.onTemperatureChange(e.target.value);
}

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>

                {/*<BoilingVerdict celsius={parseFloat(temperature)} />*/}
                
            </fieldset>
        );
    }
}

export default LiftingStateUp;