import { PROPERTIES } from "@/lib/data"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Bed, Bath, Square, MapPin, Share2, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return PROPERTIES.map((property) => ({
        id: property.id.toString(),
    }))
}

export default async function PropertyDetailPage({ params }: PageProps) {
    const { id } = await params
    const property = PROPERTIES.find((p) => p.id === parseInt(id))

    if (!property) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-primary/5 pt-24 pb-8">
                <div className="container mx-auto px-6">
                    <Link href="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Properties
                    </Link>
                </div>
            </div>

            {/* Images Grid - Modern Mosaic */}
            <div className="container mx-auto px-6 -mt-8">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-[500px] md:h-[600px] gap-2">
                    {/* Main Image */}
                    <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    {/* Secondary Images */}
                    {property.images.slice(1, 5).map((img, idx) => (
                        <div key={idx} className="relative group overflow-hidden">
                            <img
                                src={img}
                                alt={`${property.title} - ${idx + 2}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>
                    ))}
                    {/* Fallback if not enough images (just duplicating for design if needed, but data has them) */}
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Info */}
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">{property.price}</h1>
                            <div className="flex gap-4">
                                <button className="p-2 rounded-full border border-gray-200 hover:border-gray-900 transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="p-2 rounded-full border border-gray-200 hover:border-gray-900 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest">Est. Payment: $8,400/mo</p>

                        <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-gray-100">
                            <div className="flex items-center gap-3">
                                <Square className="w-6 h-6 text-gray-400" />
                                <div>
                                    <span className="block text-xl font-bold text-primary">{property.sqft}</span>
                                    <span className="text-sm text-gray-500">Sq Ft</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Bed className="w-6 h-6 text-gray-400" />
                                <div>
                                    <span className="block text-xl font-bold text-primary">{property.beds}</span>
                                    <span className="text-sm text-gray-500">Bedrooms</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Bath className="w-6 h-6 text-gray-400" />
                                <div>
                                    <span className="block text-xl font-bold text-primary">{property.baths}</span>
                                    <span className="text-sm text-gray-500">Bathrooms</span>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg text-gray-600 mb-12">
                            <h3 className="text-2xl font-serif font-medium text-primary mb-4">Description</h3>
                            <p>{property.description}</p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-serif font-medium text-primary mb-6">Features</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {property.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Agent */}
                    <div className="lg:w-[400px]">
                        <div className="sticky top-32 p-8 border border-gray-100 bg-gray-50">
                            <h3 className="text-xl font-serif font-medium mb-6">Interested in this property?</h3>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" alt="Agent" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-primary">James Anderson</p>
                                    <p className="text-sm text-gray-500">Senior Estate Agent</p>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white py-4 font-medium hover:bg-primary/90 transition-colors mb-3">
                                Contact Agent
                            </button>
                            <button className="w-full border border-primary text-primary py-4 font-medium hover:bg-primary/5 transition-colors">
                                Schedule Viewing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
