import DefaultLayout from 'components/default-layout'
import styled from 'styled-components'

export default function Facilities() {
    return (
        <DefaultLayout>
            <Section>
                <div className="container">


                    <h2>Facilities</h2>
                    <div className="row">
                        <div className="col">Some col 1</div>
                        <div className="col">Some col 2</div>
                        <div className="col">Some col 3</div>
                    </div>

                </div>
            </Section>
        </DefaultLayout>
    )
}

const Section = styled.div`
    padding-top: 40px;
    padding-bottom: 70px;
    .row {
        display: flex;
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: -10px;
        .col {
            width: 33.33%;
            padding: 0 10px;
        }
    }
`