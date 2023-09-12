import GlobalLayout from '@/layouts/GlobalLayout.tsx';
import HomeHeader from '@/components/home/HomeHeader';

function Homepage() {

    return(
        <GlobalLayout title="Home">
            <HomeHeader/>
        </GlobalLayout>
    )

}

export default Homepage;