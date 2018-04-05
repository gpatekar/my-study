import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 

class Full extends Component {
    render() {
        return (
            <div class="container">
                 {/*header*/}
                    <header>
                        <div class="row">
                            <div class="col-xs-6">
                                <a href="javascript:void(0);" class="leftArrow pull-left" id="backArrow"></a>
                                <h1 class="pull-left hidden-xs">Reports</h1>
                            </div>
                            <div class="col-xs-6 user-actions">
                                <div class="media">
                                    <div class="media-body text-right">
                                        <div class="hidden-xs">Atelia Gomes</div>
                                        <ul class="list-inline">
                                            <li>
                                                <a href="javascript:void(0);"><img src="Content/images/flag.png" width="20" height="20" /></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><img src="Content/images/alert.png" width="20" height="20" /></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><img src="Content/images/logout.png" width="20" height="20" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="media-right">
                                        <img src="Content/images/atelia.jpg" class="img-circle" width="70" height="70" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/*main container*/}
            </div>
        );
    }
}

export default Full;