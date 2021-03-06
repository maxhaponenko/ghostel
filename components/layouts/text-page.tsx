import Layout from 'components/layouts/default-layout'

export default function TextPageLayout ({ children }) {
    return (
        <Layout>
            <div className="text-page">
                <div className="container">
                    { children }
                </div>
            </div>
        </Layout>
    )
}