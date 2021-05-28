import Layout from 'components/layouts/default-layout'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import Button from 'components/forms/button'
import { useEffect, useState } from 'react'
import ImageSlider from 'components/image-slider/image-slider'
import { rooms } from 'content/rooms'

class OwnProps {
    id: number;
    roomName: string;
    guestsAmount: number;
    description: string;
    price: number;
    images: Array<string>
}

type Props = OwnProps


function RoomPage(props: Props) {

    const router = useRouter()
    const { pageName } = router.query

    const getLeftPageId = (currentPageId: number): number => {
        const result = Object.values(rooms).map(item => item.id).indexOf(currentPageId - 1)
        if (result < 0) return Object.keys(rooms).length - 1
        return result
    }

    console.log(getLeftPageId(props.id))

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
                                    <div className="room-name">{props.roomName}</div>
                                    <div className="max-guestes">{props.guestsAmount} guests</div>
                                </header>
                                <div className="text">{props.description}</div>
                                <footer>
                                    <div className="price"><span>{props.price} UAH</span> per day for {props.guestsAmount} {props.guestsAmount === 1 ? 'guest' : 'guests'}</div>
                                    <Button color="primary" type="default" onClick={() => { }} size="xl" >Book</Button>
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <ImageSlider images={props.images} />
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

export default RoomPage
