import Image from 'next/image'
import React from 'react'

const RecentTransactions = () => {
    const transactions = [
        {
            id: 1,
            customer: {
                name: "John Doe",
                email: "johndoe@gmail.com"
            },
            status: "Paid",
            paymentMethod: {
                type: "VISA",
                number: "**** **** 8388"
            },
            amount: "$100.00"
        },
        {
            id: 2,
            customer: {
                name: "John Doe",
                email: "johndoe@gmail.com"
            },
            status: "Paid",
            paymentMethod: {
                type: "VISA",
                number: "**** **** 8388"
            },
            amount: "$100.00"
        },
        {
            id: 3,
            customer: {
                name: "John Doe",
                email: "johndoe@gmail.com"
            },
            status: "Paid",
            paymentMethod: {
                type: "VISA",
                number: "**** **** 8388"
            },
            amount: "$100.00"
        }
    ]

    return (
        <div className='mt-6 md:mt-8 flex flex-col lg:flex-row items-stretch w-full justify-between gap-4 md:gap-8'>
            {/* Table */}
            <div className='py-4.5 sm:py-[22px] px-4.5 sm:px-6 w-full lg:max-w-[975px] bg-[#13151E] border border-[#3B3D5533] rounded-md overflow-hidden flex flex-col'>
                <div className="flex-shrink-0">
                    <h2 className="text-white text-[12px] font-medium mb-1">Recent Transactions</h2>
                    <p className="text-[#515A69] text-[11px] font-medium">Recent transactions from your store</p>
                </div>

                <div className="overflow-x-auto flex-5">
                    <table className="w-full min-w-[600px] h-full">
                        <thead>
                            <tr className="border-b border-[#3B3D5533]">
                                <th className="text-left text-[#515A69] text-[11px] font-medium py-3 pr-6">Customer</th>
                                <th className="text-left text-[#515A69] text-[11px] font-medium py-3 px-6">Status</th>
                                <th className="text-left text-[#515A69] text-[11px] font-medium py-3 px-6">Payment Method</th>
                                <th className="text-left text-[#515A69] text-[11px] font-medium py-3 px-6">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b border-[#3B3D5533] last:border-b-0">
                                    <td className="py-2.5 pr-6">
                                        <div>
                                            <p className="text-white text-[11px] font-medium">{transaction.customer.name}</p>
                                            <p className="text-[#515A69] text-[10px] font-medium">{transaction.customer.email}</p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 px-6">
                                        <div className="bg-[#40E588] w-fit px-1.5 h-5 rounded-full flex items-center gap-0.5">
                                            <Image src='/assets/icons/check-circle.svg' alt='check-circle' width={13} height={13} />
                                            <span className="text-[#0F4326] text-[11px] font-medium">
                                                {transaction.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-5 bg-white rounded-full flex items-center justify-center">
                                                <Image src='/assets/icons/visa-logo.svg' alt='visa-logo' width={24.5} height={7.82} />
                                            </div>
                                            <span className="text-white text-[11px] font-medium">{transaction.paymentMethod.number}</span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 px-6">
                                        <span className="text-white text-[11px] font-medium">{transaction.amount}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Card */}
            <div className='w-full lg:max-w-[300px] bg-[#13151E] border border-[#3B3D5533] rounded-md flex flex-col py-4.5 sm:py-[22px] px-4.5 sm:px-6'>
                <div className="flex-shrink-0">
                    <h2 className="text-white text-[12px] font-medium mb-1">Recent Transactions</h2>
                    <p className="text-[#515A69] text-[11px] font-medium">Recent transactions from your store</p>
                </div>

                <div className="flex-1 mt-5">
                    <div className="flex items-center gap-4 justify-between w-full">
                        <div className="flex items-center gap-3">
                            <div className="w-[34px] h-[34px] bg-[#515A69] rounded-full flex items-center justify-center">
                                <span className="text-white text-[12px] font-medium">JD</span>
                            </div>
                            <div>
                                <p className="text-white text-[11px] font-medium mb-1">John Doe</p>
                                <p className="text-[#515A69] text-[10px] font-medium">johndoe@gmail.com</p>
                            </div>
                        </div>
                        <span className="text-white text-[11px] font-medium">$100.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentTransactions