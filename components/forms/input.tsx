import React from 'react'
import styled from 'styled-components'

class OwnProps {
    value: string;
    onChange: (value: string) => void;

    width?: 'full-width' | 'auto';
    placeholder?: string;
    error?: boolean;
}

export default function Input(props: OwnProps) {

    const { width, value, placeholder, error, onChange } = props

    return (
        <Section width={width}>
            <input value={value} onChange={(e) => onChange(e.currentTarget.value) } />
        </Section>
    )
}

const Section = styled.div`
    width: ${props => props.width === 'full-width' ? '100%' : 'auto'};
    input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 15px;
        border-radius: 60px;
        border: 1px solid #DBDBDB;
        font-size: 13px;
        color: black;
        background-color: #F7F7F7;
        &::placeholder {
            color: #848484;
        }
        &:focus, &:active {
            outline: none;
        }
    }
`