import React from 'react'
import Layout from '../../../../components/layout/main'
import CreateNewCompany from '../../../../components/screens/clients/create-new-company'

const ClientPage: React.FC = () => {
    return (
        <Layout>
            <CreateNewCompany />
        </Layout>
    )
}

export default ClientPage