import React, { Component } from 'react'
import './booking-compact.scss';

export default class BookingCompact extends Component {
    render() {
        return (
            <div className="booking-compact">
                <div className="booking-compact__dates">
                    <div className="label">Dates:</div>
                    <input className="input" value=""></input>
                </div>
                <div className="booking-compact__guests">
                    <div className="label">Guests:</div>
                    <input className="input" value=""></input>
                </div>
            </div>
        )
    }
}
