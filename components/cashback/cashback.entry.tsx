import React, { Component } from 'react'
import { connect } from 'react-redux'
import discountBadge from 'public/images/icons/discount-icon.png';
import discountBadgeSmallShadow from 'public/images/icons/discount-icon-small-shadow.png';
import Tooltip from './cashback-tooltip';
import styled from 'styled-components'

class OwnProps {
    smallShadow: boolean
}

class DiscountBadge extends Component<OwnProps, any> {
    render() {
        return (
            <Tooltip>
                <Badge>
                    <img src={this.props.smallShadow ? discountBadgeSmallShadow : discountBadge} />
                </Badge>
            </Tooltip>
        )
    }
}

const Badge = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 95px;
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }
    &:hover {
        img {
            transform: scale(1.03);
        }
    }
`

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountBadge)