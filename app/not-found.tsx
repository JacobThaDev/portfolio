import { HomeModernIcon } from '@heroicons/react/24/outline'
import { SignalSlashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import GlobalLayout from './layouts/GlobalLayout'

const NotFound = () => {
    return(
        <GlobalLayout showFooter={false}>
            <div className="text-center lg:text-start py-20">
                <SignalSlashIcon height={50} className="mb-3 text-primary inline-block"/>
                <h2 className="text-2xl font-[900] mb-2">
                    Hey friend, you lost?
                </h2>
                <p className="mb-5">
                    You look a bit weary from your travels as you&apos;ve stumbled into the dark...
                </p>
                <Link href="/" className="px-6 py-2.5 bg-alt inline-block rounded-full">
                    <div className="flex items-center gap-2">
                        <HomeModernIcon height={20} className="inline-block"/>
                        Return Home
                    </div>
                </Link>
            </div>
        </GlobalLayout>
    )
}

export default NotFound;
 /*
export default function NotFound() {

    return (
        <>

            <div className="text-center lg:text-start">
                <SignalSlashIcon height={50} className="mb-3 text-primary inline-block"/>
                <h2 className="text-2xl font-[900] mb-2">
                    Hey friend, you lost?
                </h2>
                <p className="mb-5">
                    You look a bit weary from your travels as you&apos;ve stumbled into the dark...
                </p>
                <Link href="/" className="px-6 py-2.5 bg-alt inline-block rounded-full">
                    <div className="flex items-center gap-2">
                        <HomeModernIcon height={20} className="inline-block"/>
                        Return Home
                    </div>
                </Link>
            </div>
            
        </>
    )

}*/