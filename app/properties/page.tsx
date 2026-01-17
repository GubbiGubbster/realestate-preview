import { Navbar } from "@/components/layout/Navbar"
import { PropertyFilter } from "@/components/properties/PropertyFilter"
import { FeaturedProperties } from "@/components/home/FeaturedProperties"
import { PROPERTIES } from "@/lib/data"
import Link from "next/link"
import { Bed, Bath, Square } from "lucide-react"

export default function PropertiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-primary/5 pb-12 pt-32">
                {/* Header */}
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">All Properties</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Browse our exclusive collection of the world's most extraordinary homes.</p>
                </div>
            </div>

            <PropertyFilter />

            {/* Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROPERTIES.map((property, index) => (
                        <Link href={`/properties/${property.id}`} key={property.id} className="group block">
                            <div className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary">
                                            {property.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-white font-serif text-xl drop-shadow-md">{property.price}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-serif font-medium text-primary mb-2 group-hover:text-accent transition-colors truncate">{property.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{property.location}</p>

                                    <div className="flex items-center gap-6 text-sm text-gray-400 border-t border-gray-100 pt-4">
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
                                            <span>{property.sqft}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
