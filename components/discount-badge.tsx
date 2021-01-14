import React, { Component } from 'react'
import { connect } from 'react-redux'
import discountBadge from 'public/images/icons/discount-icon.png';
import styled from 'styled-components'

class DiscountBadge extends Component {
    render() {
        return (
            <Discount>
                <img src={discountBadge} />
            </Discount>
        )
    }
}

const Discount = styled.div`
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