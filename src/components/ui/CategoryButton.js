import { categoryButtonsData } from '@/constants';
import Link from 'next/link';
import { GiProcessor } from "react-icons/gi";
import { BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdOutlineStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { BsFillMouseFill } from "react-icons/bs";

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
            {categoryButtonsData?.map((button, index) => (
                <button
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
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <Link className='flex items-center justify-center gap-2' href={`category/${button.path}`}> {button.label} <span>{button.icon}</span> </Link>
                    </span>
                </button>
            ))}
        </div>
    );
};

export default CategoryButtons;
