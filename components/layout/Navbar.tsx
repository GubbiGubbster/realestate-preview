"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === "/"

    // Always show scrolled style if not on home page, or if scrolled
    const showScrolledStyle = isScrolled || !isHome

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                showScrolledStyle ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-gray-100" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group">
                    <span className={cn(
                        "text-2xl font-serif tracking-widest font-bold uppercase transition-colors",
                        showScrolledStyle ? "text-primary" : "text-white"
                    )}>
                        Luxury<span className="font-light">Estate</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className={cn(
                    "hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide transition-colors",
                    showScrolledStyle ? "text-primary" : "text-white/90"
                )}>
                    <Link href="/properties" className="hover:text-accent transition-colors">Properties</Link>
                    <Link href="/agents" className="hover:text-accent transition-colors">Agents</Link>
                    <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                </div>

                {/* Actions */}
                <div className={cn(
                    "flex items-center space-x-6 transition-colors",
                    showScrolledStyle ? "text-primary" : "text-white"
                )}>
                    <button aria-label="Search" className="hover:text-accent transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 hover:text-accent transition-colors font-medium text-sm tracking-wide"
                        >
                            ENG <ChevronDown className="w-3 h-3" />
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-24 bg-white rounded-sm shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out border border-gray-100">
                            <button className="w-full text-left px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors">
                                ENG
                            </button>
                            <button className="w-full text-left px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 hover:text-primary transition-colors">
                                ARA
                            </button>
                        </div>
                    </div>
                    <button aria-label="Menu" className="md:hidden hover:text-accent transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
