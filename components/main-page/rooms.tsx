import styled from 'styled-components'
import { useRouter } from 'next/router'
import image from 'public/images/image_5.jpg'
import image1 from 'public/images/image_7.jpg';
import image2 from 'public/images/image_4.jpg';
import image3 from 'public/images/image_6.jpg';

export default function SecondScreen() {

    const router = useRouter()

    return (
        <Section>
            <div className="container">
                <h2>ROOMS</h2>
                <div className="rooms-container">
                    <div className="grid-item">
                        <div className="room-item room-1" onClick={() => router.push("/rooms/lords-chambers")}>
                            <div className="bottom-container">
                                <div className="room-name">Lord`s Chambers</div>
                                <div className="room-guests">2 guests</div>
                                <div className="room-price">from <b>500 UAH</b> for <b>2 guests</b></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="room-item room-2" onClick={() => router.push("/rooms/cell-monks")}>
                            <div className="bottom-container">
                                <div className="room-name">Cell Monks</div>
                                <div className="room-guests">4 guests</div>
                                <div className="room-price orange">from <b>250 UAH</b> for <b>1 guest</b></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="room-item room-3" onClick={() => router.push("/rooms/guilds-knights")}>
                            <div className="bottom-container">
                                <div className="room-name">Knights of the Guild</div>
                                <div className="room-guests">10 guests</div>
                                <div className="room-price orange">from <b>200 UAH</b> for <b>1 guest</b></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="room-item room-4" onClick={() => router.push("/rooms/den-of-thiefes")}>
                            <div className="bottom-container">
                                <div className="room-name">Den of Thiefes</div>
                                <div className="room-guests">12 guests</div>
                                <div className="room-price orange">from <b>180 UAH</b> for <b>1 guest</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.div`
    position: relative;
    width: 100%;
    .container {
        height: 100%;
        position: relative;
        padding-top: 100px;
        padding-bottom: 140px;
    }
    h2 {
        font-size: 35px;
        text-align: center;
        font-weight: normal;
        margin-bottom: 70px;
    }
    .rooms-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        > .grid-item {
            
            width: 25%;
            padding: 10px;
            height: 460px;
            @media (max-width: 1199px) {
                width: 50%;
                padding: 20px 20px;
                height: 480px;
            }
            @media (max-width: 675px) {
                width: 100%;
            }
            @media (max-width: 399px) {
                height: 400px;
            }
            
            > .room-item {
                position: relative;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-clip: content-box;
                border-radius: 15px;
                box-shadow: 0px 2px 2px rgba(0,0,0,0.5);
                cursor: pointer;
                transition: all 100ms ease-in-out;
                
                &:hover {
                    transform: translate(0, -5px);
                }

                > .bottom-container {
                    height: 50%;
                    position: relative;
                    margin-top: auto;
                    padding: 20px;
                    /* padding-top: 130px; */
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    @media (max-width: 399px) {
                        padding: 15px;
                    }
                    .room-name {
                        font-size: 22px;
                    }
                    .room-guests {
                        font-size: 15px;
                        margin-top: 3px;
                    }
                    .room-price {
                        font-size: 17px;
                        margin-top: 13px;
                        @media (max-width: 399px) {
                            font-size: 15px;
                        }
                        b {
                            font-weight: 600;
                        }
                        &.orange b {
                            color: #FA9917;
                        }
                    }
                }
            }

            > .room-1 { 
                background-image: url(${image}); 
                > .bottom-container { 
                    background: linear-gradient(180deg, rgba(176,176,176,0) 0%, rgba(176,176,176,0.5) 50%, rgba(176,176,176,1) 100%); 
                }
            }
            > .room-2 { 
                background-image: url(${image1}); 
                > .bottom-container { 
                    background: linear-gradient(180deg, rgba(47,26,9,0) 0%, rgba(47,26,9,0.5) 50%, rgba(47,26,9,1) 100%); 
                    color: white;
                }
            }
            > .room-3 { 
                background-image: url(${image2}); 
                > .bottom-container { 
                    background: linear-gradient(180deg, rgba(20,20,36,0) 0%, rgba(20,20,36,0.5) 50%, rgba(20,20,36,1) 100%); 
                    color: white;
                }
            }
            > .room-4 { 
                background-image: url(${image3}); 
                > .bottom-container { 
                    background: linear-gradient(180deg, rgba(88,67,42,0) 0%, rgba(88,67,42,0.5) 50%, rgba(88,67,42,1) 100%); 
                    color: white;
                }
            }
        }
    }
`