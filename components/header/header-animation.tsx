import { useCallback, useEffect, useState } from 'react';
import { animated, useSpring, config } from 'react-spring'
import styled, { css } from 'styled-components';

export default function HeaderAnimation({ isOpen, children, ...otherProps }) {
    const [isMobileMode, setIsMobileMode] = useState(false)
    
    const handleResize = useCallback(
        () => {
            const windowWidth = window.innerWidth
            if (windowWidth <= 900 && !isMobileMode) {
                setIsMobileMode(true)
            } else if (windowWidth > 900 && isMobileMode) {
                setIsMobileMode(false)
            }
        },
        [isMobileMode]
    )
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    const spring = useSpring({
        from: { transform: isOpen ? 'translate(0%, 0%)' : 'translate(100%, 0%)' },
        to: { transform: isOpen ? 'translate(0%, 0%)' : 'translate(100%, 0$)' },
        config: config.stiff,
    })


    const Animated = styled(animated.div)`
        display: flex;
        flex-grow: 1;
        will-change: transform;
        ${props => {
            if (isMobileMode) {
                return css`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    transform: translate(0%, 0%);
                `
            } else {
                return css`
                    position: relative;
                    top: unset;
                    left: unset;
                    width: unset;
                    height: unset;
                    transform: translate(0%, 0%);
                `
            }
        }}
    `

    return (
        <Animated style={isMobileMode ? spring : {}} >
            {children}
        </Animated>
    )
}
