"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bed, Bath, Square } from "lucide-react"
import Link from "next/link"

import { PROPERTIES } from "@/lib/data"

export function FeaturedProperties() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                <div>
                    <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-2 block">Exclusive Listings</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Featured Properties</h2>
                </div>
                <Link href="/properties" className="hidden md:flex items-center gap-2 text-primary hover:text-accent transition-colors group pb-1 border-b border-primary/20 hover:border-accent">
                    View All Listings
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Carousel */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROPERTIES.slice(0, 3).map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                                        For Sale
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-serif font-medium group-hover:text-accent transition-colors">{property.title}</h3>
                                        <p className="text-muted-foreground text-sm">{property.location}</p>
                                    </div>
                                    <p className="font-medium text-lg">{property.price}</p>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-gray-500 pt-2 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <Bed className="w-4 h-4" />
                                        <span>{property.beds}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="w-4 h-4" />
                                        <span>{property.baths}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Square className="w-4 h-4" />
                                        <span>{property.sqft} sqft</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 md:hidden">
                <Link href="/properties" className="flex items-center justify-center w-full gap-2 border border-primary py-4 hover:bg-primary hover:text-white transition-colors">
                    View All Listings
                </Link>
            </div>
        </section>
    )
}
