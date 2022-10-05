import React from 'react'
import Layout from '../../../../components/layout/main'
import MyClient from '../../../../components/screens/clients/my-client/[uuid]'

const MyClientPage: React.FC = () => {
    return (
        <Layout>
            <MyClient />
        </Layout>
    )
}

export default MyClientPage