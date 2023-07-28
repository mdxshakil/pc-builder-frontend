import { partsCategories } from "@/constants";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                {/* mobile dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Categories</a>
                            <ul className="p-2">
                                {
                                    partsCategories.map((item, index) => (
                                        <li
                                            key={index}>
                                            <Link href={`/category/${item?.partsName}`}>{item.partsName}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link href={"/"} className="btn btn-ghost normal-case text-xl">pcBuilder</Link>
            </div>
            <div className="navbar-end">
                {/* large device dropdown */}
                <ul className="menu menu-horizontal px-1 z-[100] hidden lg:flex">
                    <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                {
                                    partsCategories.map((item, index) => (
                                        <li
                                            key={index}>
                                            <Link href={`/category/${item?.partsName}`}>{item.partsName}</Link>
                                        </li>

                                    ))
                                }
                            </ul>
                        </details>
                    </li>
                </ul>
                <Link href={"/pcbuilder"} className="btn">PC Builder</Link>
            </div>
        </div>
    );
};

export default Navbar;