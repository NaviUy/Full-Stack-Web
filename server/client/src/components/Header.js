import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent(){
        console.log({props:this})
        switch (this.props.auth){
            case null:
                return(<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>);
            case false:
                return (<li><a href="/auth/google">Login With Google</a></li>);
            default:
                return [<li key="1"><Payments/></li>,
                        <li key="3" style={{margin: '0 10px'}}>
                            Credits: {this.props.auth.credits}
                        </li>,
                        <li key="2"><a href="/api/logout">Logout</a></li>];
        }
    }

    render() {
        return(
            <nav>
                <div className='nav-wrapper'>
                    <div className='left-margin-custom'>                    
                        <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className='brand-logo'
                        >
                        Emaily
                        </Link>
                    </div>

                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return { auth };
}


export default connect(mapStateToProps)(Header); 