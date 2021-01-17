import React, { Component, RefObject } from 'react'
import { connect } from 'react-redux'
import { AppState } from 'root.reducer'
import styled from 'styled-components'
import { CurrentStep } from 'controllers/cashback.controller'
import Button from 'components/forms/button';

class OwnProps {
    children: any
}
class StateProps {
    currentStep: CurrentStep
}

export class CachbackTooltip extends Component<StateProps & OwnProps> {

    tooltipRef: RefObject<any> = React.createRef()

    state = {
        isActive: false,
    }

    handleOutsideClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (this.tooltipRef && !this.tooltipRef.current.contains(e.target)) {
            this.setState({ isActive: false })
        }
    }
    handleoutsideClickBinded = this.handleOutsideClick.bind(this)

    toggleTooltip = () => {
        if (!this.state.isActive) {
            this.setState({ isActive: true}, () => {
                window.addEventListener('click', this.handleoutsideClickBinded)
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleoutsideClickBinded)
    }

    renderCurrentStep = () => {
        const { currentStep } = this.props
        if (currentStep === CurrentStep.Initial) {
            return (
                <div className="step1">
                    <span>Cashback for groups</span>
                    <Button type='outline' size="sm" color="primary" isLoading={true} >See more</Button>
                </div>
            )
        }
    }

    render() {
        return (
            <Tooltip ref={this.tooltipRef} isActive={this.state.isActive} onClick={() => this.toggleTooltip()}>
                {this.props.children}
                <div className="tooltip-panel">
                    {this.renderCurrentStep()}
                </div>
            </Tooltip>
        )
    }
}

const Tooltip = styled.div`
    position: relative;
    .tooltip-panel {
        display: ${(props: any) => props.isActive ? 'block' : 'none'};
        position: absolute;
        top: 100%;
        right: 0;
        width: 336px;
        /* height: 54px; */
        box-shadow: 0 1px 1px rgba(0,0,0,0.5);
        background-color: white;
        border-radius: 20px;
        padding: 15px 15px;
        &:after {
            position: absolute;
            top: -12px;
            right: 35px;
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 10px 12px 10px;
            border-color: transparent transparent white transparent;
        }

        .step1 {
            display: flex;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            align-items: center;
            span {
                font-size: 16px;
                margin-left: 13px;
            }
        }
    }
`

const mapStateToProps = (state: AppState) => ({
    currentStep: state.cashback.currentStep
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CachbackTooltip)
