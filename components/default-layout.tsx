import Header from './header/header.entry'
import Footer from './footer'
import styled from 'styled-components'

export default function DefaultLayout({ 
    transparentHeader = false, 
    children, 
    ...otherProps 
}) {
    return (
        <>
            <Header transparentMode={transparentHeader} />
            <Section>
                {children}
            </Section>
            <Footer/>
        </>
    )
}

const Section = styled.div`
    min-height: calc(100vh - 380px);
`
