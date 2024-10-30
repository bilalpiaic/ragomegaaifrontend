"use client"
import { useEffect, useState } from 'react'

const Expenses = (props: any) => {

    const [orders, setOrders] = useState<any>([])

    useEffect(() => {
        const fetchOrders = async () => {
            const res2 = await fetch(`/api/orders`)
            const result = await res2.json()
            setOrders(result)
        }
        fetchOrders()
    }, [])


    return (
        <main className='h-[100vh]'>
            <section className="bg-gray-100 h-full flex flex-col gap-y-8 items-center mt-20">
                <h2 className="text-4xl font-bold mt-5">Dashboard</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                ORDER #
                            </th>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                PRODUCT ID
                            </th>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                NAME
                            </th>
                            <th scope="col" className="mobile:hidden px-6 mobile:px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                ADDRESS
                            </th>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                CONTACT
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            (orders?.map((item: any, i: any) => {
                                    return (
                                        <tr key={i}>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{i+1}</td>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.productId}</td>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                                            <td className="mobile:hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.address}</td>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.contact}</td>
                                        </tr>
                                    )
                            }))
                        }
                    </tbody>
                </table>
            </section>
            <div className='h-[2px] w-full bg-[#c2c2c2] mt-40'></div>
        </main>
    )
}

export default Expenses