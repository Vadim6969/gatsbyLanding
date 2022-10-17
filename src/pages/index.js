import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WorkingConditionSection from "../components/WorkingConditionSection/WorkingConditionSection";
import OurAdvantagesSection from "../components/ OurAdvantagesSection/OurAdvantagesSection";
import MyCompanySection from "../components/MyComponySection/MyCompanySection";
import RnsFamilySection from "../components/RnsFamilySection/RnsFamilySection";
import CompetenciesSection from "../components/CompetenciesSection/CompetenciesSection";
import CorporateLife from "../components/ corporateLife/CorporateLife";
import Footer from "../components/Footer/Footer";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import logo from "../images/svg/logo.svg";
import Header from "../components/Header/header";
import Sidebar from "../components/Sidebar/Sidebar";


const IndexPage = () => {
    return (
    <>
        <Layout id="App">
            <Sidebar right pageWrapId={"page-wrap"} outerContainerId={"layout"} />
            <Parallax className="parallax-class"  pages={4.1} style={{top: '0', left: '0'}}>
                <ParallaxLayer
                >
                    <div className="layout">
                        <Header/>
                        <MyCompanySection/>
                    </div>
                    <ul className="circles">
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                    </ul>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{backgroundColor: 'transparent'}}>
                    <div className="layout">
                        <WorkingConditionSection />
                        <OurAdvantagesSection/>
                        <RnsFamilySection/>
                        <CompetenciesSection/>
                        <CorporateLife/>
                        <Footer/>
                    </div>
                    <ul className="circles">
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                        <li><img src={logo} alt="logo"/></li>
                    </ul>
                </ParallaxLayer>
            </Parallax>
        </Layout>
    </>
)
}

export const Head = () => <Seo title="HR"/>
export default IndexPage;