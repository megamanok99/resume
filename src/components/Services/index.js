import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainter,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainter id="services">
            <ServicesH1>
                Our services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Reduce expenses</ServicesH2>
                    <ServicesP> we help reduce you fees and inreace you overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Reduce expenses</ServicesH2>
                    <ServicesP> we help reduce you fees and inreace you overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Reduce expenses</ServicesH2>
                    <ServicesP> we help reduce you fees and inreace you overall revenue.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainter>
    )
}

export default Services;
