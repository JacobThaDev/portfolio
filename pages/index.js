import GlobalLayout from '@/layouts/GlobalLayout';
import HomeHeader from '@/components/home/HomeHeader';
import Image from 'next/image';
import Link from 'next/link';

function Homepage() {

    return (
        <GlobalLayout title="Home" showNav={false}>
            <div className="flex w-full h-full absolute top-0 left-0 items-center justify-center bg-[#CFE5F2] text-center">
                <div>
                    <Image src="/img/logo_with_tag.png" width={710} height={143} alt="" className="h-auto" />
                    <p className="text-lg font-bold">Coming Soon | {" "}
                        <Link 
                            className="text-primary" href="https://twitter.com/JacobThaDev">
                            Twittersss
                        </Link>
                    </p>
                </div>
            </div>
        </GlobalLayout>
    );

}

export default Homepage;