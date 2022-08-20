import React from 'react'
import Layout from '../../../../components/layout/main'
import CreateNewTask from '../../../../components/screens/tasks/create-new-task'


const NewTaskPage: React.FC = () => {
    return (
        <Layout>
            <CreateNewTask />
        </Layout>
    )
}

export default NewTaskPage