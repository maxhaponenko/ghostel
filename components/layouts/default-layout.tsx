import { useRef, useEffect, useState } from 'react'
import Header from '../header/header.entry'
import Footer from '../footer'
import styled from 'styled-components'

export default function DefaultLayout({ 
    transparentHeader = false, 
    children, 
    ...otherProps 
}) {

    const headerRef = useRef()
    const [headerHeight, setHeaderHeight] = useState(90)

    useEffect(() => {
        setHeaderHeight((headerRef.current as any).header.current.offsetHeight)
    }, [headerRef])

    return (
        <>
            <Header ref={headerRef} transparentMode={transparentHeader} />
            <Section headerHeight={headerHeight} transparentMode={transparentHeader}>
                {children}
            </Section>
            <Footer/>
        </>
    )
}

const Section = styled.div`
    min-height: calc(100vh - 380px);
    padding-top: ${props => props.transparentMode ? '0px' : `${props.headerHeight}px`};
`
