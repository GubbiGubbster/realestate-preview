export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    priceValue: number; // For filtering
    image: string; // Main image
    images: string[]; // Gallery images
    beds: number;
    baths: number;
    sqft: number;
    category: string; // e.g., "Sale", "Rent"
    type: string; // e.g., "Apartment", "Villa", "Penthouse"
    description: string;
    features: string[];
}

export const PROPERTIES: Property[] = [
    {
        id: 1,
        title: "The Penthouse at 432 Park",
        location: "Midtown, New York",
        price: "$16,500,000",
        priceValue: 16500000,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
        ],
        beds: 3,
        baths: 3.5,
        sqft: 2800,
        category: "Sale",
        type: "Penthouse",
        description: "Experience the pinnacle of luxury living in this breathtaking penthouse. Featuring panoramic views of the city skyline, custom Italian cabinetry, and white oak flooring throughout.",
        features: ["City Views", "Concierge", "Private Elevator", "Gym"]
    },
    {
        id: 2,
        title: "Modern Malibu Estate",
        location: "Malibu, California",
        price: "$24,950,000",
        priceValue: 24950000,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613490493652-32a2468305c4?q=80&w=2671&auto=format&fit=crop", // Removed duplicate key
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop"
        ],
        beds: 5,
        baths: 6,
        sqft: 6500,
        category: "Sale",
        type: "Villa",
        description: "A masterpiece of contemporary architecture on the Malibu coast. Floor-to-ceiling glass walls blur the line between indoor and outdoor living.",
        features: ["Ocean Front", "Infinity Pool", "Theater", "Smart Home"]
    },
    {
        id: 3,
        title: "Historic Townhouse",
        location: "Belgravia, London",
        price: "£12,750,000",
        priceValue: 12750000,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop"
        ],
        beds: 4,
        baths: 3,
        sqft: 3200,
        category: "Sale",
        type: "Townhouse",
        description: "A beautifully restored Grade II listed townhouse in the heart of Belgravia. Original period features blended with modern luxury.",
        features: ["Garden", "Period Features", "Wine Cellar", "Staff Quarters"]
    },
    {
        id: 4,
        title: "Skyline Apartment",
        location: "Downtown, Dubai",
        price: "$5,500,000",
        priceValue: 5500000,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
        ],
        beds: 2,
        baths: 2,
        sqft: 1800,
        category: "Sale",
        type: "Apartment",
        description: "Ultra-modern apartment with direct views of the Burj Khalifa.",
        features: ["Burj Khalifa View", "Pool", "Parking", "Security"]
    },
    {
        id: 5,
        title: "Seaside Villa",
        location: "Nice, France",
        price: "€8,900,000",
        priceValue: 8900000,
        image: "https://images.unsplash.com/photo-1600596542815-2a4d9fbeaef3?q=80&w=2675&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600596542815-2a4d9fbeaef3?q=80&w=2675&auto=format&fit=crop"
        ],
        beds: 6,
        baths: 5,
        sqft: 4500,
        category: "Sale",
        type: "Villa",
        description: "Mediterranean elegance meets modern comfort in this stunning seaside villa.",
        features: ["Sea View", "Pool", "Guest House", "Garden"]
    },
    {
        id: 6,
        title: "Alpine Chalet",
        location: "Aspen, Colorado",
        price: "$18,000,000",
        priceValue: 18000000,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop"
        ],
        beds: 5,
        baths: 5.5,
        sqft: 5000,
        category: "Sale",
        type: "Chalet",
        description: "Ski-in/ski-out luxury chalet with mountain views and high-end amenities.",
        features: ["Ski-in/Ski-out", "Hot Tub", "Fireplace", "Mountain View"]
    }
];
