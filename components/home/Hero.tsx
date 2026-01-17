"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { TextAnimate } from "@/components/ui/text-animate"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/hero-video.mov" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
                <div className="flex flex-col items-center mb-6">
                    <TextAnimate animation="slideUp" by="word" className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white">
                        Live Without
                    </TextAnimate>
                    <TextAnimate animation="slideUp" by="word" startDelay={0.3} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white">
                        Compromise
                    </TextAnimate>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-white/90">
                        Discover a curated collection of the Qatar's most extraordinary homes.
                    </p>
                </motion.div>

                {/* Search Bar / CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full max-w-md"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link href="/properties" className="flex-1">
                            <button className="w-full bg-white text-primary px-8 py-4 font-medium tracking-wide hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group">
                                Browse Properties
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <button className="flex-1 border border-white/30 backdrop-blur-sm text-white px-8 py-4 font-medium tracking-wide hover:bg-white/10 transition-colors">
                            Sell Your Home
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
                </div>
            </motion.div>
        </section>
    )
}
