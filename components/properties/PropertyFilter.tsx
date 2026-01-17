"use client"

import { useState } from "react"
import { Search, ChevronDown, Filter } from "lucide-react"

export function PropertyFilter() {
    return (
        <div className="w-full bg-white border-y border-gray-100 sticky top-[72px] z-40 shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    {/* Filters Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-1 w-full gap-3">
                        <SelectGroup label="Category" options={["Buy", "Rent"]} />
                        <SelectGroup label="Type" options={["Apartment", "Villa", "Penthouse", "Townhouse"]} />
                        <SelectGroup label="Area" options={["Downtown", "Marina", "Palm Jumeirah", "Beachfront"]} />
                        <div className="flex gap-2 min-w-[200px]">
                            <input
                                type="text"
                                placeholder="Min Price"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Max Price"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <SelectGroup label="Beds" options={["1", "2", "3", "4", "5+"]} />
                        <SelectGroup label="Baths" options={["1", "2", "3", "4+"]} />
                    </div>

                    {/* Search Button */}
                    <button className="w-full lg:w-auto px-8 py-2.5 bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        <Search className="w-4 h-4" />
                        <span className="uppercase tracking-wider text-sm font-medium">Search</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function SelectGroup({ label, options }: { label: string, options: string[] }) {
    return (
        <div className="relative group">
            <select className="w-full appearance-none bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-primary cursor-pointer">
                <option value="">{label}</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
    )
}
