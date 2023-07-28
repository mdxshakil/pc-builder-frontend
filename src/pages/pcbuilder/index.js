import React from 'react';
import RootLayout from '@/components/layout/RootLayout';
import { partsCategories } from '@/constants';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";
import { clearBuilder, removeFromBuilder } from '@/redux/features/pcbuilder/pcbuilderSlice';

const PCBuilderPage = () => {
    const { pcItems } = useSelector((state) => state.pcBuilder);
    const dispatch = useDispatch();
    const handleremoveFromBuilder = (itemId) => {
        dispatch(removeFromBuilder(itemId));
    }
    return (
        <div className='max-w-7xl p-6 mx-auto'>
            <div className='overflow-x-scroll'>
                <table className='table'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Selected Item</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partsCategories?.map((item, index) => {
                            // Find the corresponding item from redux store's pcItems using category
                            const selectedItem = pcItems.find((pcItem) => pcItem?.category === item?.partsName);

                            return (
                                <tr key={index}>
                                    {/* column1 */}
                                    <td>
                                        <div className='flex items-center'>
                                            <div className='avatar'>
                                                <div className='mask mask-squircle w-12 h-12'>
                                                    <span className='text-3xl'>{item?.icon}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='text-xs font-bold'>{item?.partsName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* column1 ends */}
                                    {/* column 2 */}
                                    <td>
                                        {selectedItem ? (
                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <div className='avatar'>
                                                        <div className='mask mask-squircle w-10 h-10'>
                                                            <img
                                                                src={selectedItem?.image}
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className='text-xs'>{selectedItem?.productName}</span>
                                                    <br />
                                                    <span className='badge badge-info badge-xs text-black'>${selectedItem?.price}</span>
                                                </div>

                                            </div>
                                        ) : (
                                            'No item selected'
                                        )}
                                    </td>
                                    {/* column2 ends */}
                                    {/* column3 */}
                                    <td>
                                        <div className='flex items-center'>
                                            {/* remove button */}
                                            {selectedItem && <button onClick={() => handleremoveFromBuilder(selectedItem?._id)} className='text-xl text-red-500'><AiFillDelete /></button>}
                                            {/* choose button */}
                                            <button className='btn btn-xs text-sm ml-2'>
                                                <Link href={`pcbuilder/components/${item?.label}`}>
                                                    {selectedItem ? "Replace" : "Choose"}
                                                </Link>
                                            </button>
                                        </div>
                                    </td>
                                    {/* column3 ends */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex item-center justify-end mt-3'>
                <div className='flex gap-3'>
                    <button disabled={pcItems?.length < 1} onClick={() => dispatch(clearBuilder())} className='btn btn-xs btn-error'>Reset Builder</button>
                    <button disabled={pcItems?.length !== partsCategories?.length} className='btn btn-xs btn-success'>Complete Build</button>
                </div>
            </div>
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
