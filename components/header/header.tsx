import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

class State {
    showMenu: boolean;
}

export default class Header extends React.PureComponent<any, State> {

    state = {
        showMenu: false,
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }


    render() {
        return <></>
    }
}