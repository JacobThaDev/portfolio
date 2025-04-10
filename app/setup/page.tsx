import GlobalLayout from '@/app/layouts/GlobalLayout';
import PcSetup from '@/app/components/PcSetup';
import React from 'react';
import MySoftware from '../components/Software';
import Container from '../layouts/components/Container';

export default function Setup() {

    return (
        <GlobalLayout>
            <div className="flex items-center mb-20">
                <Container>
                    <PcSetup/>
                    <MySoftware/>
                </Container>
            </div>
        </GlobalLayout>
    );
}