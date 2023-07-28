import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;