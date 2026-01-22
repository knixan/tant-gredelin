import Image from "next/image";
import { productCards } from "../Lib/mock-cards";

export default function Products() {
    return (
        <section id="produkter" className="max-w-7xl text-black mx-auto px-4 py-20">
            <h2 className="font-heading text-3xl text-center mb-12 text-warmbrown">
                Populära produkter
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {productCards.map((card, i) => (
                    <div
                        key={card.title}
                        className="group border border-gray-200 shadow-indigo-50 rounded-xl overflow-hidden flex flex-col items-center text-center bg-whitepure transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                    >
                        <div className="w-full h-40 bg-lightgray relative mb-4">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                                priority={i === 0}
                            />
                        </div>
                        <h3 className="font-heading text-xl mb-2 text-black">{card.title}</h3>
                        <p className="text-gray-700 mb-4">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
