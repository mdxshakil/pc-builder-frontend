import { partsCategories } from "@/constants";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const { data: session } = useSession();
    const { user } = session || {};

    return (
        <div className="navbar bg-neutral sticky top-0 z-50">
            <div className="navbar-start">
                {/* mobile - category dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Categories</a>
                            <ul className="p-2">
                                {
                                    partsCategories?.map((item, index) => (
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
                {/* mobile - category dropdown ends */}
                <Link href={"/"} className="btn btn-ghost normal-case text-xl">pcEmpire</Link>
            </div>
            <div className="navbar-end">
                {/* large device category dropdown starts*/}
                <ul className="menu menu-horizontal px-1 z-[100] hidden lg:flex">
                    <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                {
                                    partsCategories?.map((item, index) => (
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
                {/* large device category dropdown ends*/}
                <Link href={"/pcbuilder"} className="btn btn-sm mr-2">PC Builder</Link>
                {/* profile dropdown */}
                {user?.email ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                            <Image height={32} width={32} src={user?.image} alt="User" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><p className="text-primary font-semibold">{user?.name}</p></li>
                        <li><button className="btn btn-xs btn-error" onClick={() => signOut()}>Logout</button></li>
                    </ul>
                </div> : <button className="btn btn-sm"><Link href={"/login"}>Login</Link></button>}
                {/* profile dropdown ends */}
            </div>
        </div>
    );
};

export default Navbar;