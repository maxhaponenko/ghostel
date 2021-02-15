import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'components/forms/button'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'components/date-picker/date-picker'
import { AppState } from 'root.reducer'

class StateProps {
    hotelUTCOffset: number;
}
class State {
    selectedCheckinDate: Date;
    selectedCheckoutDate: Date;
}
class BookingModule extends Component<StateProps, {}> {

    setCheckinDate = () => {
        const now = new Date()
        const userUTCOffset = now.getTimezoneOffset()
        now.setMinutes(now.getMinutes() + userUTCOffset + this.props.hotelUTCOffset)
        const hotelCurrentTime = now

        const selectedCheckinDate = new Date(hotelCurrentTime.getFullYear(), hotelCurrentTime.getMonth(), hotelCurrentTime.getDate() + 1)

        return selectedCheckinDate
    }
    setCheckoutDate = () => {
        const now = new Date()
        const userUTCOffset = now.getTimezoneOffset()
        now.setMinutes(now.getMinutes() + userUTCOffset + this.props.hotelUTCOffset)
        const hotelCurrentTime = now

        const selectedCheckoutDate = new Date(hotelCurrentTime.getFullYear(), hotelCurrentTime.getMonth(), hotelCurrentTime.getDate() + 2)

        return selectedCheckoutDate
    }

    state = {
        selectedCheckinDate: this.setCheckinDate(),
        selectedCheckoutDate: this.setCheckoutDate()
    }

    


    onSelectStart = (date: Date) => {
        this.setState({ selectedCheckinDate: date})
    }
    onSelectEnd = (date: Date) => {
        this.setState({ selectedCheckoutDate: date})
    }
    

    render() {

        

        return (
            <Panel>
                <div className="dates">
                    <FAIcon icon={faCalendarAlt} />
                    <span>25 February 2021</span>
                    <span style={{ marginRight: 15, marginLeft: 15 }}>-</span>
                    <span>26 February 2021</span>
                    <DatePicker 
                        className="date-picker" 
                        selectedStart={this.state.selectedCheckinDate}
                        selectedEnd={this.state.selectedCheckoutDate}
                        onSelectStart={this.onSelectStart}
                        onSelectEnd={this.onSelectEnd}
                    />
                </div>
                <div className="guests">
                    <FAIcon icon={faUserFriends} />
                    <span>2 guests</span>
                </div>
                <div className="button">
                    <Button color="primary" size="xl" type="default">Check availability</Button>
                </div>
            </Panel>
        )
    }
}

const Panel = styled.div`
    width: 100%;
    height: 55px;
    padding: 4px 4px 4px 15px;
    background-color: white;
    border-radius: 100px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
    display: grid;
    grid-template-areas: "dates guests button";
    grid-template-columns: 2fr 1fr 245px;
    gap: 15px;
    .dates {
        grid-area: dates;
        display: flex;
        align-items: center;
        padding: 0 0 0 15px;
        cursor: pointer;
        &:hover {
            span {
                color: #503109;
            }
        }
        > svg {
            color: #FA9917;
            margin-right: 20px;
            position: relative;
            top: -1px;
            transition: left 100ms ease-in-out;
        }
        > span {
            font-size: 16px;
            font-weight: 400;
            white-space: nowrap;
        }
        .date-picker {
            position: absolute;
            bottom: 115%;
            left: 30px;
        }
    }
    .guests {
        grid-area: guests;
        display: flex;
        align-items: center;
        padding: 0 0 0 15px;
        cursor: pointer;
        &:hover {
            span {
                color: #503109;
            }
        }
        svg {
            color: #FA9917;
            margin-right: 20px;
            position: relative;
            top: -1px;
        }
        span {
            font-size: 16px;
            font-weight: 400;
            white-space: nowrap;
        }
    }
    .button {
        grid-area: button;
        button {
            width: 100%;
            height: 100%;
        }
    }
`

const mapStateToProps = (state: AppState) => ({
    hotelUTCOffset: state.booking.hotelUTCOffset
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BookingModule)
