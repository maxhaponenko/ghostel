import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

class OwnProps {
    selectedStart: Date;
    selectedEnd: Date;
    onSelectStart: (date: Date) => void;
    onSelectEnd: (date: Date) => void;
    [key: string]: any
}

class State {
    activeMonth: Date;
}

export default class DatePicker extends Component<OwnProps, State> {

    state = {
        activeMonth: this.props.selectedEnd
    }

    onSelect = (date: Date) => {
        this.props.onSelectStart(date)
    }

    getMonthAndYear = () => {
        const month = moment(this.state.activeMonth).format('MMMM')
        const year = moment(this.state.activeMonth).format('YYYY')
        return `${month} ${year}`
    }

    onNextMonth = () => {
        this.setState({ activeMonth: moment(this.state.activeMonth).add(1, 'months').toDate() })
    }
    onPrevMonth = () => {
        this.setState({ activeMonth: moment(this.state.activeMonth).add(-1, 'months').toDate() })
    }

    isPrevMonthDisabled = () => {
        var x = new Date();
        x.setDate(0);
    }

    render() {


        const numberOfDaysInMonth = new Date(this.state.activeMonth.getFullYear(), this.state.activeMonth.getMonth()+1, 0).getDate();
        const firstWeekPreviousMonthDays = 1
        const lastWeekNextMonthDays = 5

        return (
            <Panel isNextBtnActive={true} isPrevBtnActive={true} {...this.props}>
                <header>
                    <div className="prev" onClick={this.onPrevMonth}><FAIcon icon={faChevronLeft} /></div>
                    <div className="month">{this.getMonthAndYear()}</div>
                    <div className="next" onClick={this.onNextMonth}><FAIcon icon={faChevronRight} /></div>
                </header>
                <div className="days-abbreviations">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                <div className="days">
                    {[...Array(firstWeekPreviousMonthDays)].map(item => (
                        <span></span>
                    ))}
                    {[...Array(numberOfDaysInMonth)].map((item, index) => (
                        <span>{index + 1}</span>
                    ))}
                    {[...Array(lastWeekNextMonthDays)].map(item => (
                        <span></span>
                    ))}
                </div>
            </Panel>
        )
    }
}

const Panel = styled.div`
    width: 350px;
    height: 335px;
    border-radius: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.5);
    background-color: white;
    cursor: default;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px;
        .prev, .next {
            width: 39px;
            height: 39px;
            border-radius: 100%;
            border-width: 1px; 
            border-style: solid;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .prev {
            border-color: ${(props: any) => props.isPrevBtnActive ? '#FA9917' : '#DBDBDB'};
            pointer-events: ${(props: any) => props.isPrevBtnActive ? 'default' : 'none'};
            svg {
                color: ${(props: any) => props.isPrevBtnActive ? '#FA9917' : '#DBDBDB'};
                position: relative;
                left: -1.5px;
            }
        }
        .next {
            border-color: ${(props: any) => props.isNextBtnActive ? '#FA9917' : '#DBDBDB'};
            pointer-events: ${(props: any) => props.isNextBtnActive ? 'default' : 'none'};
            svg {
                color: ${(props: any) => props.isNextBtnActive ? '#FA9917' : '#DBDBDB'};
                position: relative;
                right: -1.5px;
            }
        }
        .month {
            font-size: 17px;
            user-select: none;
        }
    }
    .days-abbreviations {
        display: flex;
        justify-content: center;
        pointer-events: none;
        user-select: none;
        margin-bottom: 10px;
        span {
            font-size: 12px;
            font-weight: 300;
            width: 36px;
            display: block;
            margin: 0 4px;
            text-align: center;
        }
    }
    .days {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        span {
            width: 36px;
            height: 36px;
            margin: 4px 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`