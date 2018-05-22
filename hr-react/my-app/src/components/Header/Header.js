import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="desktop">
                        <div className="user-panel float-right">
                            <div className="float-right image">
                                <img src="./images/photo.jpeg" className="img-circle" alt="User Image"/>
                            </div>
                            <div className="float-right info">
                                <p>Gurudatta Patekar</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
 
export default Header;