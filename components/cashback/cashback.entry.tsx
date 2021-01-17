import React, { Component } from 'react'
import { connect } from 'react-redux'
import discountBadge from 'public/images/icons/discount-icon.png';
import Tooltip from './cashback-tooltip';
import styled from 'styled-components'

class DiscountBadge extends Component {
    render() {
        return (
            <Tooltip>
                <Badge>
                    <img src={discountBadge} />
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