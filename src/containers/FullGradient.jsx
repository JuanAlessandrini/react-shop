import React, { Component } from 'react';
import "@styles/FullGradient.scss";
import { render } from 'react-dom';

export default class FullGradient extends Component
{
    render() {
    return (<div className="fullGradient">
        <div className='contendor'>
            <div>{this.props.children[0]}</div>
            <div>{this.props.children[1]}</div>
        </div>
    </div>);
    }
}

