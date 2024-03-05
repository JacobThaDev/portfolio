import GlobalLayout from '@/layouts/GlobalLayout';
import Container from '@/components/global/Container';
import PcSetup from '@/components/setup/pcsetup';
import React from 'react';
import MySoftware from '@/components/home/Software';


export default function Setup() {

    return (
        <GlobalLayout title="Home">
            
            <div className="flex items-center mb-20">
                <Container>
                    <PcSetup/>
                    <MySoftware/>
                </Container>
            </div>
        </GlobalLayout>
    );
}