import React, {Component} from 'react';
import Header from './header';
import TrackWidget from './trackWidget';

class Banner extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="banner-wrapper u-pos-rel u-text-center" style={{backgroundImage : 'url("assets/bg-pic@2x.jpg")'}}>
                <Header />
                
                
                <div className="main-header">
                	<div className="first-line" style={{borderBottom : '2px solid #fff'}}>
                        <input type="text" className="form-control" id="surname" onChange={this.handleChange} style={{border:'none',background:'transparent',color:'#fff'}} placeholder="Search ..."/>
                    </div>
                	<div className="header u-pos-fixed" style={{position : 'relative'}}>
                        <div className="header-left" style={{width : '100%'}}>
                            <div className="header-item" data-section="0">Suggest Topics</div>
                            <div className="header-item" data-section="1">Favourites</div>
                            <div className="header-item" data-section="2">Bookmarks</div>
                            <div className="header-item" data-section="3">Editors' Picks</div>
                        </div>
                    </div>
                </div>
                <div className="left-widget">
                	<TrackWidget bars={this.props.sectionCount} activeBar={this.props.activeSection}/>
                </div>
                
            </div>
        )
    }

}

export default Banner;
