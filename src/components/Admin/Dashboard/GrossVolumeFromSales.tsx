"use client"
import { useState } from "react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const GrossVolumeFromSales = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Week")

    // Different data sets for different periods
    const getDataForPeriod = (period: string) => {
        switch (period) {
            case "Day":
                return [
                    { name: "12 AM", value: 1200 },
                    { name: "3 AM", value: 800 },
                    { name: "6 AM", value: 600 },
                    { name: "9 AM", value: 1500 },
                    { name: "12 PM", value: 2000 },
                    { name: "3 PM", value: 1800 },
                    { name: "6 PM", value: 1600 },
                ]
            case "Week":
                return [
                    { name: "Mon", value: 15000 },
                    { name: "Tue", value: 12000 },
                    { name: "Wed", value: 18000 },
                    { name: "Thu", value: 10000 },
                    { name: "Fri", value: 8000 },
                    { name: "Sat", value: 22000 },
                    { name: "Sun", value: 25000 },
                ]
            case "Month":
                return [
                    { name: "Week 1", value: 80000 },
                    { name: "Week 2", value: 95000 },
                    { name: "Week 3", value: 110000 },
                    { name: "Week 4", value: 125000 },
                    { name: "Week 5", value: 140000 },
                    { name: "Week 6", value: 130000 },
                    { name: "Week 7", value: 115000 },
                ]
            default:
                return [
                    { name: "Mon", value: 15000 },
                    { name: "Tue", value: 12000 },
                    { name: "Wed", value: 18000 },
                    { name: "Thu", value: 10000 },
                    { name: "Fri", value: 8000 },
                    { name: "Sat", value: 22000 },
                    { name: "Sun", value: 25000 },
                ]
        }
    }

    const data = getDataForPeriod(selectedPeriod)

    return (
        <div className="w-full bg-[#13151E] border border-[#3B3D5533] rounded-md flex flex-col pt-4.5 md:pt-[22px] px-3 sm:px-6 lg:max-w-[731px] outline-none focus:outline-none [&_*]:outline-none [&_*]:focus:outline-none">
            {/* Header */}
            <div className="flex items-start sm:items-center justify-between sm:flex-row flex-col gap-2 mb-5">
                <h2 className="text-white text-[12px] font-medium">
                    {selectedPeriod === "Day"
                        ? "Daily Gross Volume from Sales"
                        : selectedPeriod === "Week"
                            ? "Weekly Gross Volume from Sales"
                            : "Monthly Gross Volume from Sales"}
                </h2>

                {/* Time Period Selector */}
                <div className="flex bg-[#191C27] rounded-md">
                    {["Day", "Week", "Month"].map((period) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(period)}
                            className={`flex-1 min-w-[70px] py-1.5 text-[11px] cursor-pointer font-medium border rounded-md text-white transition-colors focus:outline-none ${selectedPeriod === period ? "bg-[#535EE10F] border-[#535EE1]" : "border-transparent"
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div className="h-[200px] w-full outline-none focus:outline-none [&_*]:outline-none [&_*]:focus:outline-none">
                <ResponsiveContainer width="100%" height="100%" className="outline-none focus:outline-none">
                    <AreaChart data={data} margin={{ top: 10, right: 15, left: 15, bottom: 10 }}>
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="2%" stopColor="#535EE1" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#535EE1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="0" stroke="#3B3D5533" horizontal={true} vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#515A69", fontSize: 10 }}
                            interval={0}
                        />
                        <YAxis hide />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#535EE1"
                            strokeWidth={2}
                            fill="url(#colorGradient)"
                            dot={false}
                            activeDot={{ r: 4, fill: "#535EE1" }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GrossVolumeFromSales
