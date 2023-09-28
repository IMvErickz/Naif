import Image from 'next/image'

interface CardProps {
    text: string
    span?: string
    img: string
}

export function ObjectiveCard(props: CardProps) {
    return (
        <section className='w-full flex flex-col items-center justify-center space-y-4'>
            <div className="sm:w-[598px] h-[247px] w-[350px] flex flex-col items-center justify-center bg-[#24C7B2] rounded-lg p-4">
                <p className="text-white font-arial text-2xl">
                    {props.text}
                    <span className="text-[#FF0000] font-arial text-2xl"> {props.span}</span>
                </p>
            </div>
            <div className='w-full flex items-center justify-center'>
                <Image
                    src={props.img}
                    alt="Não encontrado"
                    priority
                    width={0}
                    height={0}
                    className="rounded-lg sm:w-[80%] w-[85%]"
                />
            </div>
        </section>
    )
}