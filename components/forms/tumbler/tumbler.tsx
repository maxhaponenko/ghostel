import './tumbler.scss';
import React from 'react';

class OwnProps {
    toggle: () => void;
    value: boolean;
    labelOn: string;
    labelOff: string;
}

export default class Tumbler extends React.Component<OwnProps, any> {

    render() {
        return (
            <div className="tumbler" onClick={this.props.toggle}>
                <div className={`tumbler__caret ${this.props.value ? 'right' : 'left'}`}>
                    <span className="tumbler__text" style={{ paddingLeft: 3 }}>{this.props.labelOn}</span>
                    <span className="tumbler__toggler"></span>
                    <span className="tumbler__text" style={{ paddingRight: 3 }}>{this.props.labelOff}</span>
                </div>
            </div>
        )
    }
}