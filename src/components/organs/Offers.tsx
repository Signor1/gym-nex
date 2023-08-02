import { Image } from "../atoms/Image"
import Offer from "../../assets/hero/3.jpeg"
import { Text } from "../atoms/Text"
import { OfferTexts } from "../particles/Data"
import { List } from "../atoms/List"
import { useCallback } from "react"
import { Barbell, Hoodie, PersonSimpleRun } from "@phosphor-icons/react"
import { Fade } from "react-awesome-reveal"


const Offers = () => {

    const renderIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <PersonSimpleRun size={50} color="currentColor" weight="light" />;
            case 1:
                return <Barbell size={50} color="currentColor" weight="light" />;
            case 2:
                return <Hoodie size={50} color="currentColor" weight="light" />;
            default:
                return "";
        }
    }, [])

    return (
        <section className="w-full h-auto flex items-center bg-zinc-900">
            <main className="w-full lg:h-[800px] grid md:grid-cols-2 items-center gap-10 md:gap-0 lg:gap-0 ">
                <div className="w-full md:h-[800px] h-[300px] grid">
                    <Image alt="Offer Image" objectCover="object-cover" className="w-full h-full" image={Offer} />
                </div>
                <div className="h-full w-full lg:px-10 px-4 flex flex-col lg:justify-center md:justify-end justify-center items-start md:gap-20 lg:gap-24 gap-16">
                    <Fade className="w-full">
                        <div className="w-full flex flex-col mt-10 lg:mt-24 items-center relative before:absolute before:-bottom-6 before:left-38 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                            <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{OfferTexts.firstText}</Text>
                            <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{OfferTexts.secondText}</Text>
                            <Text as="h1" className="absolute text-zinc-500/10 lg:left-48 md:left-32 left-36 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">02</Text>
                        </div>
                        <ul className="flex flex-col lg:gap-8 gap-6 pb-16">
                            {
                                OfferTexts.list.map((item, index) => (
                                    <List className="flex lg:gap-6 gap-4 items-start justify-start" key={index}>
                                        <Text as="span" className="text-amber-600 ">{renderIcon(index)}</Text>
                                        <div className="flex flex-col gap-1">
                                            <Text as="h3" className="text-base text-zinc-200 font-semibold">{item.listCaption}</Text>
                                            <Text as="p" className="text-zinc-400 text-justify">{item.text}</Text>
                                        </div>
                                    </List>
                                ))
                            }
                        </ul>
                    </Fade>
                </div>
            </main>

        </section>
    )
}

export default Offers