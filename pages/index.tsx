import GlobalLayout from '@/layouts/GlobalLayout';
import Container from '@/components/global/Container';
import Profile from '@/components/home/Profile';
import Profession from '@/components/home/Profession';
import Works from '@/components/home/Works';
import Services from '@/components/home/Services';
import Games from '@/components/home/Games';
import PcSetup from '@/components/setup/pcsetup';
import MySoftware from '@/components/home/Software';


export default function Homepage() {

    return (
        <GlobalLayout title="Home">

            <div className="flex items-center mb-20 relative z-10">
                <Container>
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
                </Container>
            </div>
            
        </GlobalLayout>
    );

}