import Image from "next/image"

export function SideFieldLeft() {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-x-40 px-8">
            <Image
                src={'/photos/image 1.svg'}
                alt="Não encontrado"
                priority
                width={480}
                height={480}
            />
            <fieldset className="w-[724px] h-[240px] flex items-center justify-center bg-[#1D868C] rounded-lg">
                <p className="font-arial text-white text-xl font-bold p-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore minus, maiores commodi ex quae
                    rat nemo nesciunt ad, laudantium
                    cupiditate omnis cumque vitae exercitationem quia molestias. Aut non culpa veritatis!
                </p>
            </fieldset>
        </div>
    )
}

export function SideFieldRight() {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-x-40 px-8">
            <fieldset className="w-[724px] h-[240px] flex items-center justify-center bg-[#1D868C] rounded-lg">
                <p className="font-arial text-white text-xl font-bold p-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore minus, maiores commodi ex quae
                    rat nemo nesciunt ad, laudantium
                    cupiditate omnis cumque vitae exercitationem quia molestias. Aut non culpa veritatis!
                </p>
            </fieldset>
            <Image
                src={'/photos/image 1.svg'}
                alt="Não encontrado"
                priority
                width={480}
                height={480}
            />
        </div>
    )
}

