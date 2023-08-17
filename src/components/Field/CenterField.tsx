import Image from "next/image";

interface CenterProps {
    text: string
    img: string
}

export function CenterField(props: CenterProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-4">
            <fieldset className="sm:w-[646px] sm:h-[264px] w-[400px] flex items-center justify-center bg-[#1D868C] rounded-lg">
                <p className="font-arial text-white text-xl font-bold p-20 text-center">
                    {props.text}
                </p>
            </fieldset>
            <Image
                src={props.img}
                alt="Não encontrado"
                priority
                width={480}
                height={480}
                className="rounded-lg"
            />
        </div>
    )
}