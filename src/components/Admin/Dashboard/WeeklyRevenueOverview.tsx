"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const WeeklyRevenueOverview = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Week")
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 400)
        }

        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    const getDataForPeriod = (period: string) => {
        switch (period) {
            case "Day":
                return [
                    { name: "12 AM", revenue1: 1440, revenue2: 1600 },
                    { name: "3 AM", revenue1: 1034, revenue2: 1259 },
                    { name: "6 AM", revenue1: 900, revenue2: 1444 },
                    { name: "9 AM", revenue1: 1200, revenue2: 1550 },
                    { name: "12 PM", revenue1: 1400, revenue2: 1000 },
                    { name: "3 PM", revenue1: 2000, revenue2: 1000 },
                    { name: "6 PM", revenue1: 1904, revenue2: 1500 },
                ]
            case "Week":
                return [
                    { name: "Monday", revenue1: 4000, revenue2: 3000 },
                    { name: "Tuesday", revenue1: 5000, revenue2: 3000 },
                    { name: "Wednesday", revenue1: 4000, revenue2: 2000 },
                    { name: "Thursday", revenue1: 3000, revenue2: 2000 },
                    { name: "Friday", revenue1: 2000, revenue2: 5000 },
                    { name: "Saturday", revenue1: 1000, revenue2: 6000 },
                    { name: "Sunday", revenue1: 4000, revenue2: 6000 },
                ]
            case "Month":
                return [
                    { name: "Week 1", revenue1: 6000, revenue2: 10000 },
                    { name: "Week 2", revenue1: 7000, revenue2: 9000 },
                    { name: "Week 3", revenue1: 8000, revenue2: 8000 },
                    { name: "Week 4", revenue1: 9000, revenue2: 7000 },
                    { name: "Week 5", revenue1: 10000, revenue2: 6000 },
                    { name: "Week 6", revenue1: 9000, revenue2: 5000 },
                    { name: "Week 7", revenue1: 7000, revenue2: 6000 },
                ]
            default:
                return [
                    { name: "Monday", revenue1: 600, revenue2: 400 },
                    { name: "Tuesday", revenue1: 500, revenue2: 4003 },
                    { name: "Wednesday", revenue1: 500, revenue2: 400 },
                    { name: "Thursday", revenue1: 544, revenue2: 700 },
                    { name: "Friday", revenue1: 500, revenue2: 400 },
                    { name: "Saturday", revenue1: 5040, revenue2: 400 },
                    { name: "Sunday", revenue1: 500, revenue2: 440 },
                ]
        }
    }

    const data = getDataForPeriod(selectedPeriod)

    const getMaxValue = (period: string) => {
        switch (period) {
            case "Day":
                return 2000
            case "Week":
                return 6000
            case "Month":
                return 12000
            default:
                return 6000
        }
    }

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#1A1D29] border border-[#535EE1]/20 rounded-md p-2 shadow-lg shadow-black/20 backdrop-blur-sm">
                    <p className="text-white text-sm font-semibold mb-2 border-b border-[#3B3D55]/30 pb-1">{label}</p>
                    <div className="space-y-1">
                        {payload.map((entry: any, index: number) => (
                            <div key={index} className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                                    <span className="text-[#868EA2] text-xs font-medium">
                                        {entry.dataKey === "revenue1" ? "Revenue 1" : "Revenue 2"}
                                    </span>
                                </div>
                                <span className="text-white text-xs font-semibold">${entry.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        return null
    }

    return (
        <div className="w-full lg:max-w-[547px] bg-[#13151E] border border-[#3B3D5533] rounded-md flex flex-col pt-[22px] px-3 sm:px-6">
            {/* Header */}
            <div className="flex items-start sm:items-center justify-between sm:flex-row flex-col gap-2 mb-5">
                <h2 className="text-white text-[12px] font-medium">
                    {selectedPeriod === "Day"
                        ? "Daily Revenue Overview"
                        : selectedPeriod === "Week"
                            ? "Weekly Revenue Overview"
                            : "Monthly Revenue Overview"}
                </h2>

                {/* Time Period Selector */}
                <div className="flex bg-[#191C27] rounded-md">
                    {["Day", "Week", "Month"].map((period) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(period)}
                            className={`w-[83px] py-1.5 text-[11px] cursor-pointer font-medium border rounded-md text-white transition-colors focus:outline-none hover:bg-transparent ${selectedPeriod === period
                                ? "bg-[#535EE10F] border-[#535EE1]"
                                : "border-transparent hover:border-[#535EE1]/30"
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div className="h-[200px] w-full outline-none focus:outline-none [&_*]:outline-none [&_*]:focus:outline-none">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} width={100} margin={{ top: 10, right: 0, left: -60, bottom: 10 }}>
                        <CartesianGrid
                            strokeDasharray="0"
                            stroke="#4A5568"
                            strokeOpacity={0.3}
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#515A69", fontSize: isSmallScreen ? 8 : 10 }} />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 0, fill: "transparent" }}
                            domain={[0, getMaxValue(selectedPeriod)]}
                        //   tickCount={8}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                        <Bar dataKey="revenue1" fill="#535EE1" radius={[4, 4, 0, 0]} maxBarSize={25} />
                        <Bar dataKey="revenue2" fill="#7080FF" radius={[4, 4, 0, 0]} maxBarSize={25} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default WeeklyRevenueOverview
