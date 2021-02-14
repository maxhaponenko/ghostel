import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import { firstWeekdayInMonth, lastWeekdayInMonth } from './utils'

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

    countOfDaysFromPreviousMonth = () => {
        const activeMonth = this.state.activeMonth
        const firstWeekday = firstWeekdayInMonth(activeMonth.getFullYear(), activeMonth.getMonth())
        return firstWeekday - 1
    }
    countOfDaysFromNextMonth = () => {
        const activeMonth = this.state.activeMonth
        const lastWeekDay = lastWeekdayInMonth(activeMonth.getFullYear(), activeMonth.getMonth())
        return 7 - lastWeekDay
    }

    render() {

        const { activeMonth } = this.state
        const { selectedStart, selectedEnd } = this.props

        // Count of days
        const firstRowPreviousMonthDays = this.countOfDaysFromPreviousMonth()
        const lastRowNextMonthDays = this.countOfDaysFromNextMonth()
        const numberOfDaysInMonth = new Date(this.state.activeMonth.getFullYear(), this.state.activeMonth.getMonth() + 1, 0).getDate();

        const datesInMonth = [...Array(numberOfDaysInMonth)].map((item, index) => {
            return new Date(activeMonth.getFullYear(), activeMonth.getMonth(), index + 1)
        })

        const isStartSelected = (item: Date) => selectedStart.getTime() == item.getTime()
        const isEndSelected = (item: Date) => selectedEnd.getTime() == item.getTime()
        const isBeforeNow = (item: Date) => item.getTime() < new Date().getTime()


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
                    {([...Array(firstRowPreviousMonthDays)] || []).map((item, index) => (
                        <div key={`day-${index}`} > </div>
                    ))}
                    {datesInMonth.map((item, index) => (
                        <div key={`day-${index}`} className={`${isStartSelected(item) || isEndSelected(item) ? 'selected' : ''} ${isBeforeNow(item) ? 'disabled' : ''}`} >
                            <div className={`liner ${isStartSelected(item) ? 'start' : ''} ${isEndSelected(item) ? 'end' : ''}`}></div>
                            <span className={`date ${isStartSelected(item) ? 'start' : ''} ${isEndSelected(item) ? 'end' : ''}`}>
                                {item.getDate()}
                            </span>
                        </div>
                    ))}
                    {([...Array(lastRowNextMonthDays)] || []).map((item, index) => (
                        <div key={`day-${index}`} > </div>
                    ))}
                </div>
            </Panel>
        )
    }
}

const Panel = styled.div`
    width: 350px;
    min-height: 335px;
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
        margin-top: 5px;
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
        padding-bottom: 16px;
        > div {
            width: 36px;
            height: 36px;
            margin: 4px 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .liner {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: #FFE9B8;
                &.start {
                    display: block;
                    border-top-left-radius: 100%;
                    border-bottom-left-radius: 100%;
                }
            }
            .date {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 100;
                box-sizing: border-box;
                border: 1px solid transparent;
                background-color: white;
                border-radius: 100%;
                cursor: pointer;        
            }
            &.selected {
                .date {
                    border: 1px solid #FA9917;
                    font-weight: 500;
                }
            }
            &.disabled {
                opacity: 0.3;
                pointer-events: none;
            }
            &:hover {
                .date {
                    border: 1px solid #FA9917;
                }
            }
        }
    }
`