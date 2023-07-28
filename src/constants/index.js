import { GiProcessor } from "react-icons/gi";
import { BsFillMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdOutlineStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { BsFillMouseFill } from "react-icons/bs";

export const partsCategories = [
    {
        partsName: "Processor",
        path: "processor",
        icon: <GiProcessor />,
        label: 'Processor',
    },
    {
        partsName: "Motherboard",
        path: "motherboard",
        icon: <BsFillMotherboardFill />,
        label: 'Motherboard',
    },
    {
        partsName: "RAM",
        path: "ram",
        icon: <CgSmartphoneRam />,
        label: 'RAM',
    },
    {
        partsName: "Power Supply Unit",
        path: "psu",
        icon: <ImPowerCord />,
         label: 'Power Supply',
    },
    {
        partsName: "Storage Device",
        path: "storage",
        icon: <MdOutlineStorage />,
         label: 'Storage',
    },
    {
        partsName: "Monitor",
        path: "monitor",
        icon: <PiMonitorFill />,
        label: 'Monitor',
    },
    {
        partsName: "Others",
        path: "others",
        icon: <BsFillMouseFill />,
        label: 'Others',
    },
]



export const categoryButtonsData = [
    {
        label: 'Processor',
        style: {
            background: 'linear-gradient(135deg, #9f7aea, #3b82f6)',
            focusRingColor: 'purple',
        },
        path: "Processor",

    },
    {
        label: 'Motherboard',
        style: {
            background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            focusRingColor: 'cyan',
        },
        path: "Motherboard",

    },
    {
        label: 'RAM',
        style: {
            background: 'linear-gradient(135deg, #34d399, #3b82f6)',
            focusRingColor: 'green',
        },
        path: "RAM",

    },
    {
        label: 'Power Supply',
        style: {
            background: 'linear-gradient(135deg, #a78bfa, #f43f5e)',
            focusRingColor: 'purple',
        },
        path: "Power Supply Unit",

    },
    {
        label: 'Storage',
        style: {
            background: 'linear-gradient(135deg, #f43f5e, #fb923c)',
            focusRingColor: 'pink',
        },
        path: "Storage Device",

    },
    {
        label: 'Monitor',
        style: {
            background: 'linear-gradient(135deg, #22d3ee, #84cc16)',
            focusRingColor: 'teal',
        },
        path: "Monitor",

    },
    {
        label: 'Others',
        style: {
            background: 'linear-gradient(135deg, #fca5a5, #fbbf24)',
            focusRingColor: 'red',
        },
        path: "Others",

    },
];