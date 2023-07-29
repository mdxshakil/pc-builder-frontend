import { GiProcessor } from "react-icons/gi";
import { BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdOutlineStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { BsFillMouseFill } from "react-icons/bs";

export const categoryData = [
    {
        label: 'Processor',
        style: {
            background: 'linear-gradient(135deg, #9f7aea, #3b82f6)',
            focusRingColor: 'purple',
        },
        path: "Processor",
        icon: <GiProcessor />,
        iconName: "GiProcessor",
        partsName: "Processor",
    },
    {
        label: 'Motherboard',
        style: {
            background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            focusRingColor: 'cyan',
        },
        path: "Motherboard",
        icon: <BsFillMotherboardFill />,
        iconName: "BsFillMotherboardFill",
        partsName: "Motherboard",
    },
    {
        label: 'RAM',
        style: {
            background: 'linear-gradient(135deg, #34d399, #3b82f6)',
            focusRingColor: 'green',
        },
        path: "RAM",
        icon: <CgSmartphoneRam />,
        iconName: "CgSmartphoneRam",
        partsName: "RAM",
    },
    {
        label: 'Power Supply Unit',
        style: {
            background: 'linear-gradient(135deg, #a78bfa, #f43f5e)',
            focusRingColor: 'purple',
        },
        path: "Power Supply Unit",
        icon: <ImPowerCord />,
        iconName: "ImPowerCord",
        partsName: "Power Supply Unit",
    },
    {
        label: 'Storage Device',
        style: {
            background: 'linear-gradient(135deg, #f43f5e, #fb923c)',
            focusRingColor: 'pink',
        },
        path: "Storage Device",
        icon: <MdOutlineStorage />,
        iconName: "MdOutlineStorage",
        partsName: "Storage Device",
    },
    {
        label: 'Monitor',
        style: {
            background: 'linear-gradient(135deg, #22d3ee, #84cc16)',
            focusRingColor: 'teal',
        },
        path: "Monitor",
        icon: <PiMonitorFill />,
        iconName: "PiMonitorFill",
        partsName: "Monitor",
    },
    {
        label: 'Others',
        style: {
            background: 'linear-gradient(135deg, #fca5a5, #fbbf24)',
            focusRingColor: 'red',
        },
        path: "Others",
        icon: <BsFillMouseFill />,
        iconName: "BsFillMouseFill",
        partsName: "Others",
    },
];