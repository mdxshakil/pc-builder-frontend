import { categoryData } from '@/constants';
import Link from 'next/link';
const commonButtonStyle = {
    overflow: 'hidden',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '0.6rem',
    transition: 'all 0.15s ease-in',
    backgroundColor: '#fff',
    color: "#fff",
    padding: "0.125rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    display: "inline-flex",
    marginRight: ".6rem",
    marginBottom: ".6rem"
};

const CategoryButtons = () => {
    return (
        <div>
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl py-6">Featured Categories</h1>
            <div>
                {categoryData?.map((button, index) => (
                    <div
                        key={index}
                        style={{
                            ...commonButtonStyle,
                            backgroundImage: button.style.background,
                        }}
                        className={`group ${index === 0 ? 'text-white' : 'hover:text-gray-900'
                            } focus:ring-4 focus:outline-none focus:ring-${button.style.focusRingColor
                            }-200 focus:ring-${button.style.focusRingColor === 'white' ? 'gray' : button.style.focusRingColor
                            }-800`}
                    >
                        <span className="relative px-3 sm:px-5 py-1.5 sm:py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <Link className='flex items-center justify-center gap-2' href={`category/${button.path}`}> {button.label} <span className='text-sm sm:text-xl md:text-2xl'>{button.icon}</span> </Link>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryButtons;
