import RootLayout from '@/components/layout/RootLayout';
import { partsCategories } from '@/constants';
import Link from 'next/link';
import { IoIosAddCircle } from "react-icons/io";

const PCBuilderPage = () => {
    return (
        <div className='max-w-7xl p-6 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Selected Item</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            partsCategories?.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <span className='text-4xl'>{item?.icon}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item?.partsName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>
                                        <button className='btn btn-xs text-sm'>
                                            <Link href={`pcbuilder/components/${item?.label}`} className='flex items-center gap-1'>Choose<IoIosAddCircle /></Link>
                                        </button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>
        {page}
    </RootLayout>
}