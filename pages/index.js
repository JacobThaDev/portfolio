import GlobalLayout from '@/layouts/GlobalLayout';
import Container from '@/components/global/Container';
import Profile from '@/components/home/Profile';
import Profession from '@/components/home/Profession';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Experience from '@/components/home/Experience';
import Games from '@/components/home/Games';

function Homepage() {

    return (
        <GlobalLayout title="Home">
            
            <div className="flex items-center">
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
                            <Projects/>

                            <hr className="border-secondary mb-6" id="services"/>
                            <Services/>

                            <hr className="border-secondary mb-6" id="experience"/>
                            <Experience/>

                            <p>tbc...</p>
                        </div>
                    </div>
                </Container>
            </div>
            
        </GlobalLayout>
    );

}

export default Homepage;