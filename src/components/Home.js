import React from 'react'
import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
    height: 100vh;
`
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                desc="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section
                title="Model Y"
                desc="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section
                title="Model 3"
                desc="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section
                title="Model X"
                desc="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                desc="Money-back Gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtntext="Learn More"
            />
            <Section
                title="Solar For New Roofs"
                desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtntext="Learn More"
            />
            <Section
                title="Accessories"
                desc=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home;
