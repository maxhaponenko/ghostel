import Layout from 'components/default-layout'
import styled from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

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
                            Column 1
                        </div>
                        <div className="column">
                            Column 2
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    )
}

const Section = styled.div`
    margin-top: 30px;
    .navigation {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
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
        align-items: center;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;
        
    }
    .column {
        width: 50%;
        padding: 0 15px;
    }
`

export default CellMonks
