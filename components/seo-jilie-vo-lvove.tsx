import React from 'react'
import styled from 'styled-components'

export default function SeoText() {
    return (
        <Section>
            <div className="container">

                <div className="text-section">
                    <h2>Hostels in Lviv and «GHOSTel» - what's the difference?</h2>
                    <p>Most of the hostels in Lviv are typical - a few beds in the same room, reception area, a bathroom and a shared kitchen. And all this - in typical European style. Our hostel Lviv considers his own, because it allows you to be in the past, and for a short while back on a long and exciting Middle Ages. The entire interior «GHOSTel» designed in medieval style, and it barely crossed the threshold, you will feel that they had made the journey in time.<br />Pointed arches doorways, decorated with stained glass, will impress any connoisseur of Gothic architecture, and the oak beams and a fireplace in the living room emphasize the monumentality and grandeur of medieval architecture. After spending the night in an atmosphere of mystery and majesty, you will realize that other hostels in Lviv will not be able to offer you the unique and exciting atmosphere, which offers «GHOSTel».</p>
                </div>
                <div className="text-section">
                    <h2>«GHOSTel» - medieval hostel in Lviv</h2>
                    <p>Additional advantage of our hostel is that it is located in the heart of the city, in an old house, an architectural monument. To the heart of the city - Lviv city hall, it can be a leisurely walk in just a few minutes. And while street noise will not prevent you enjoy the atmosphere of our restaurant. Thick walls reliably absorb the extra sounds and allow you to concentrate on the essentials - rest of the attractions of Lviv, Lviv walks in parks and express an authentic tour of Lviv cafe. It's no secret that the amount of interest in the city is very large, and view them in one day will not work. You'll want to spend a few days in Lviv, and when you have to spend the night, we are pleased to Throw open the doors for you our hostel.<br />We are sure that after spending the night in the exciting atmosphere of medieval hostel, you will certainly come back to us and recommend us to your friends.</p>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.div`
    width: 100%;
    .container {
        height: 100%;
        position: relative;
    }
    .text-section {
        margin-bottom: 20px;
    }
    h2 {
        font-size: 30px;
        font-weight: 300;
        color: #8C887B;
        margin-bottom: 5px;
    }
    p {
        font-size: 18px;
        font-weight: 300;
        color: #8C887B;
        line-height: 1.2;
    }
`