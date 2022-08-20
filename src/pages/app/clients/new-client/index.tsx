import React from 'react'
import Layout from '../../../../components/layout/main'
import CreateNewClient from '../../../../components/screens/clients/create-new-client'

const ClientPage: React.FC = () => {
    return (
        <Layout>
            <CreateNewClient />
        </Layout>
    )
}

export default ClientPage