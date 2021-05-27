import Layout from 'components/layouts/default-layout'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import Button from 'components/forms/button'
import { useEffect, useState } from 'react'
import ImageSlider from 'components/image-slider/image-slider'

function CellMonks(props) {

    const router = useRouter()
    const { pageName } = router.query
    console.log(pageName)

    return (
        <Layout>
            <div className="container">
                <Section>
                    <div className="navigation">
                        <div className="prev-page"><FAIcon icon={faLongArrowAltLeft} />Cell Monks</div>
                        <div className="next-page">Lords Chambers<FAIcon icon={faLongArrowAltRight} /></div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="description">
                                <header>
                                    <div className="room-name">Lords Chembers</div>
                                    <div className="max-guestes">2 guests</div>
                                </header>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <footer>
                                    <div className="price"><span>500 UAH</span> per day for 2 guests</div>
                                    <Button color="primary" type="default" onClick={() => { }} size="xl" >Book</Button>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <ImageSlider />
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    )
}

const Section = styled.div`
    margin-top: 30px;
    padding-bottom: 100px;
    .navigation {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #5E5E5E;
            cursor: pointer;
            svg {
                margin: 0 10px;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .row {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;

        @media (max-width: 1120px) {
            flex-direction: column-reverse;
        }
    }
    .column {
        width: 50%;
        padding: 0 15px;
        
        @media (max-width: 1120px) {
            width: 100%;
        }
        
    }
    .description {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        padding-top: 30px;
        header {
            display: flex;
            align-items: center;
            margin-bottom: 17px;
            justify-content: space-between;
            width: 100%;
            .room-name {
                font-size: 30px;
            }
            .max-guests {
                color: #515151;
                font-size: 20px;
            }
        }
        
        .text {
            font-size: 20px;
            line-height: 27px;
            flex: 1;
            margin-bottom: 25px;
        }

        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .price {
                font-size: 25px;
                span {
                    font-weight: 500;
                    color: #FA9917;
                }
            }
        }
    }
`

export default CellMonks
