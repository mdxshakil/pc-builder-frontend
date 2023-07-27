import RootLayout from '@/components/layout/RootLayout';

const PCBuilderPage = () => {
    return (
        <div>
            <h1>PC builder page</h1>
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>
        {page}
    </RootLayout>
}