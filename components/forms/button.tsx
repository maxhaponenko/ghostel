import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class OwnProps {
    type: 'default' | 'outline';
    color: 'primary' | 'white' | 'grey' | 'danger';
    size: 'sm' | 'md' | 'lg' | 'xl'
    disabled?: boolean;
    shadow?: boolean;
    isLoading?: boolean;
}

export default class Button extends Component<OwnProps> {
    render() {

        const { type, color, size, disabled, shadow, isLoading, ...otherProps } = this.props

        return (
            <Btn
                type={type}
                color={color}
                size={size}
                disabled={disabled ? disabled : false}
                shadow={shadow ? shadow : false}
                isLoading={isLoading ? isLoading : false}
                {...otherProps}
            >
                <FontAwesomeIcon icon={faSpinner} />
                {/* <i className="fas fa-spinner"></i> */}
                {this.props.children}
            </Btn>
        )
    }
}

const Btn: any = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${(props: any) => {
        if (props.type === 'outline') return 'transparent'
        if (props.type === 'default') {
            if (props.color === 'primary') return '#FA9917'
            if (props.color === 'white') return '#ffffff'
            if (props.color === 'grey') return '#D8D8D8'
            if (props.color === 'danger') return '#FA5417'
        }
    }};
    border: ${(props: any) => {
        if (props.type === 'default') return 'transparent'
        if (props.type === 'outline') {
            if (props.color === 'primary') return '1px solid #FA9917'
            if (props.color === 'white') return '1px solid #D8D8D8'
            if (props.color === 'grey') return '1px solid #828282'
            if (props.color === 'danger') return '1px solid #FA5417'
        }
    }};
    color: ${(props: any) => {
        if (props.isLoading) return 'transparent'
        if (props.type === 'default') {
            if (props.color === 'primary') return '#ffffff'
            if (props.color === 'white') return '#000000'
            if (props.color === 'grey') return '#ffffff'
            if (props.color === 'danger') return '#ffffff'
        }
        if (props.type === 'outline') {
            if (props.color === 'primary') return '#FA9917'
            if (props.color === 'white') return '#D8D8D8'
            if (props.color === 'grey') return '#828282'
            if (props.color === 'primary') return '#FA5417'
        }
    }};
    font-size: ${(props: any) => {
        if (props.size === 'sm') return '14px'
        if (props.size === 'md') return '16px'
        if (props.size === 'lg') return '18px'
        if (props.size === 'xl') return '20px'
    }};
    font-weight: 300;
    padding: ${(props: any) => {
        if (props.size === 'sm') return '0.25rem 0.6rem'
        if (props.size === 'md') return '0.2rem 0.4rem'
        if (props.size === 'lg') return '0.2rem 0.4rem'
        if (props.size === 'xl') return '0.2rem 0.4rem'
    }};
    box-shadow: ${(props: any) => {
        if (props.shadow) return '0px 1px 1px rgba(0,0,0,0.5)';
        return 'none'
    }};
    opacity: ${(props: any) => {
        if (props.disabled) return '0.7'
    }};
    backdrop-filter: ${(props: any) => {
        if (props.disabled) return 'greyscale(0.8)'
    }};
    border-radius: 30px;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    &:hover {
        filter: brightness(105%);
    }
    &:active, &:focus {
        outline: none;
    }

    pointer-events: ${(props: any) => {
        if (props.isLoading) return 'none'
        if (!props.isLoading) return 'default'
    }};

    svg {
        position: absolute;
        display: ${(props: any) => props.isLoading ? 'block' : 'none'};
        opacity: ${(props: any) => props.isLoading ? 1 : 0};
        color: ${(props: any) => {
            if (props.type === 'default') {
                if (props.color === 'primary') return '#ffffff'
                if (props.color === 'white') return '#000000'
                if (props.color === 'grey') return '#ffffff'
                if (props.color === 'danger') return '#ffffff'
            }
            if (props.type === 'outline') {
                if (props.color === 'primary') return '#FA9917'
                if (props.color === 'white') return '#D8D8D8'
                if (props.color === 'grey') return '#828282'
                if (props.color === 'primary') return '#FA5417'
            }
        }};
        animation-name: spin;
        animation-duration: 1500ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear; 
    }
`