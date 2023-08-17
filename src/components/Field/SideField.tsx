import Image from "next/image"

interface SideProps {
    text: string
}

export function SideFieldLeft(props: SideProps) {
    return (
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-y-20 sm:gap-x-40 px-8">
            <Image
                src={'/photos/6.svg'}
                alt="Não encontrado"
                priority
                width={480}
                height={480}
                className="rounded-lg"
            />
            <fieldset className="sm:w-[724px] sm:h-[240px] w-[400px] flex items-center justify-center bg-[#1D868C] rounded-lg">
                <p className="font-arial text-white text-xl font-bold p-20">
                    {props.text}
                </p>
            </fieldset>
        </div>
    )
}

export function SideFieldRight(props: SideProps) {
    return (
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-y-20 sm:gap-x-40 px-8">
            <fieldset className="sm:w-[724px] sm:h-[240px] w-[400px] flex items-center justify-center bg-[#1D868C] rounded-lg">
                <p className="font-arial text-white text-xl font-bold p-20">
                    {props.text}
                </p>
            </fieldset>
            <Image
                src={'/photos/5.svg'}
                alt="Não encontrado"
                priority
                width={480}
                height={480}
                className="rounded-lg"
            />
        </div>
    )
}

