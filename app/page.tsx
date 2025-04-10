import GlobalLayout from "@/app/layouts/GlobalLayout";
import { Metadata } from "next";
import Container from "./layouts/components/Container";
import Profile from "./components/Profile";
import Games from "./components/Games";
import Profession from "./components/Profession";
import Works from "./components/Works";
import Services from "./components/Services";
import PcSetup from "./components/PcSetup";
import MySoftware from "./components/Software";

export const metadata:Metadata = {
    title: "Home | JacobThaDev",
};

const Homepage = () => {
    return(
        <GlobalLayout>
            <Container>
                <div className="flex items-center mb-20 relative z-10">
                    <div className="flex lg:flex-row flex-col gap-10 lg:items-start">
                        <div className="lg:min-w-[400px]">
                            <Profile/>
                            <Games/>
                        </div>

                        <div className="w-full">
                            <div id="profession"></div>
                            <Profession/>

                            <hr className="border-secondary mb-6" id="works"/>
                            <Works/>

                            <hr className="border-secondary mb-6" id="services"/>
                            <Services/>

                            <hr className="border-secondary mb-6" id="setup"/>
                            <PcSetup/>

                            <hr className="border-secondary mb-6" id="software"/>
                            <MySoftware/>
                        </div>
                    </div>
                </div>
                </Container>
        </GlobalLayout>
    )
}

export default Homepage;