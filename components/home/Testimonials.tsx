import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
    {
        name: "Alexander V.",
        username: "@alex_ventures",
        body: "The most seamless property acquisition I've experienced. Truly exceptional service and discretion.",
        img: "https://avatar.vercel.sh/alex",
    },
    {
        name: "Isabella R.",
        username: "@bella_designs",
        body: "Found me an off-market gem in record time. Their network in the luxury sector is unmatched.",
        img: "https://avatar.vercel.sh/bella",
    },
    {
        name: "Marcus Chen",
        username: "@mchen_invest",
        body: "Professional, discreet, and incredibly knowledgeable. I trust them with all my international assets.",
        img: "https://avatar.vercel.sh/marcus",
    },
    {
        name: "Sarah Sterling",
        username: "@sarah.sterling",
        body: "They understood exactly what I was looking for. The penthouse view is absolutely breathtaking.",
        img: "https://avatar.vercel.sh/sarah",
    },
    {
        name: "James Thorne",
        username: "@thorne.group",
        body: "Efficient and detail-oriented. A perfect partner for high-value real estate transactions.",
        img: "https://avatar.vercel.sh/james",
    },
    {
        name: "Victoria Al-Fayed",
        username: "@victoria.af",
        body: "An unparalleled experience from viewing to closing. The team went above and beyond.",
        img: "https://avatar.vercel.sh/victoria",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-2",
                // light styles
                "border-gray-950/[.05] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <img className="rounded-full" width="40" height="40" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold font-serif text-primary">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-muted-foreground">{username}</p>
                </div>
            </div>
            <blockquote className="mt-4 text-sm text-gray-600 leading-relaxed font-light italic">"{body}"</blockquote>
        </figure>
    )
}

export function Testimonials() {
    return (
        <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    )
}
