import React, {Component} from 'react';

class Header extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="header u-pos-fixed">
                <div className="header-left">
                    <div className="header-item logo">
                        <div className="logo-wrapper">
                            <img src="assets/logo.png"/>
                        </div>
                    </div>
                    
                </div>
                <div className="header-right">
                    <div className="header-item" data-section="0">Suggest Topics</div>
                    <div className="header-item" data-section="1">Favourites</div>
                    <div className="header-item" data-section="2">Bookmarks</div>
                    <div className="header-item" data-section="3">Editors' Picks</div>
                </div>
            </div>
        )
    }

}

export default Header;
