import DefaultLayout from 'components/default-layout'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell, faWifi, faBroom, faLock, faBed, faChess, faFolderOpen, faCoffee, faSun, faShower, faMap, faWind, faTshirt } from '@fortawesome/free-solid-svg-icons'
import SeoText from 'components/seo-jilie-vo-lvove'

export default function Facilities() {
    return (
        <DefaultLayout>
            <Section>
                <div className="container">
                    <h2>Facilities</h2>
                    <div className="row">
                        <div className="col">
                            <div className="item"><div className="icon"><FAIcon icon={faConciergeBell} /></div>24/7 Reception</div>
                            <div className="item"><div className="icon"><FAIcon icon={faWifi} /></div>Wi-fi</div>
                            <div className="item"><div className="icon"><FAIcon icon={faBroom} /></div>Daily cleaning</div>
                            <div className="item"><div className="icon"><FAIcon icon={faLock} /></div>Lockers</div>
                            <div className="item"><div className="icon"><FAIcon icon={faBed} /></div>Bed linen and towels</div>
                        </div>
                        <div className="col">
                            <div className="item"><div className="icon"><FAIcon icon={faChess} /></div>Common room</div>
                            <div className="item"><div className="icon"><FAIcon icon={faFolderOpen} /></div>Fully equipped kitchen</div>
                            <div className="item"><div className="icon"><FAIcon icon={faCoffee} /></div>Tea and Coffee</div>
                            <div className="item"><div className="icon"><FAIcon icon={faSun} /></div>Balcony</div>
                            <div className="item"><div className="icon"><FAIcon icon={faShower} /></div>4 bathrooms</div>
                        </div>
                        <div className="col">
                            <div className="item"><div className="icon"><FAIcon icon={faMap} /></div>City maps</div>
                            <div className="item"><div className="icon"><FAIcon icon={faWind} /></div>Hair dryer</div>
                            <div className="item"><div className="icon"><FAIcon icon={faTshirt} /></div>Iron</div>
                        </div>
                    </div>
                </div>
                <SeoText />
            </Section>
        </DefaultLayout>
    )
}

const Section = styled.div`
    padding-top: 40px;
    padding-bottom: 70px;
    h2 {
        margin-bottom: 40px;
        font-size: 30px;
        font-weight: normal;
    }
    .row {
        display: flex;
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: -10px;
        flex-wrap: wrap;
        margin-bottom: 80px;
        .col {
            width: 33.33%;
            padding: 0 10px;
            @media (max-width: 750px) {
                width: 50%;
            }
            @media (max-width: 499px) {
                width: 100%;
            }
            .item {
                font-size: 20px;
                margin-bottom: 20px;
                display: flex;
                .icon {
                    width: 30px;
                    margin-right: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    svg {
                        color: #BDBDBD;
                    }
                }
                
            }
        }
    }
`