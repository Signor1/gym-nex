import { List } from "../atoms/List"
import { Text } from "../atoms/Text"
import { Card } from "../molecules/Card"
import { MembershipPlans } from "../particles/Data"


const Membership = () => {
    return (
        <section className="w-full  h-auto py-20 md:py-28 lg:py-40 bg-zinc-950 flex flex-col md:gap-28 gap-20 justify-center items-center">
            <div className="flex flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-36 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                <Text as="p" className="text-amber-500 md:text-sm text-xs tracking-widest uppercase">{MembershipPlans.firstText}</Text>
                <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{MembershipPlans.secondText}</Text>
                <Text as="h1" className="absolute text-zinc-500/20 md:left-24 lg:left-28 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">03</Text>
            </div>
            <main className="grid lg:w-[90%] md:w-[96%] w-[90%] md:grid-cols-3 items-center gap-8 md:gap-4 lg:gap-8">
                {
                    MembershipPlans.cards.map((card, index) => (
                        <Card className={`w-full flex flex-col items-center gap-4 border border-zinc-500  transition-all duration-200 cursor-pointer hover:border-red-500/50 ${index === 1 ? "lg:py-16 py-10" : "py-10"}`} key={index}>
                            <Text as="h2" className="text-zinc-100 flex items-end gap-0.5">
                                <span className="font-extrabold text-2xl">$</span>
                                <span className={`font-extrabold ${card.amount === 49 ? "text-6xl" : "text-5xl"}`}>{card.amount}</span>
                                <span className="font-medium text-lg">/{card.duration}</span>
                            </Text>
                            <Text as="h3" className={`capitalize text-base font-semibold w-full py-2 text-center  text-zinc-100 my-3 ${card.caption.includes('12') ? "bg-gradient-to-r to-amber-500 from-red-500" : "bg-zinc-800"}`}>{card.caption}</Text>

                            <ul className="flex flex-col items-center">
                                {
                                    card.benefits.map((benefit, index) => (
                                        <List className="text-zinc-300 py-3 text-base capitalize relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-zinc-700 last:before:w-0" key={index}>{benefit}</List>
                                    ))
                                }
                            </ul>
                        </Card>
                    ))
                }

            </main>
        </section>
    )
}

export default Membership