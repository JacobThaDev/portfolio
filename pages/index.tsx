import GlobalLayout from '@/layouts/GlobalLayout';
import Container from '@/components/global/Container';
import Profile from '@/components/home/Profile';
import Profession from '@/components/home/Profession';
import Works from '@/components/home/Works';
import Services from '@/components/home/Services';
import Experiences from '@/components/home/Experiences';
import Games from '@/components/home/Games';

export default function Homepage() {

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
                            <Works/>

                            <hr className="border-secondary mb-6" id="services"/>
                            <Services/>

                            <hr className="border-secondary mb-6" id="experience"/>
                            <Experiences/>

                            <p>tbc...</p>
                        </div>
                    </div>
                </Container>
            </div>
            
        </GlobalLayout>
    );

}