import Image from "next/image";

export function CenterField() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-4">
            <fieldset className="w-[646px] h-[294px] flex items-center justify-center bg-[#1D868C] rounded-lg">
                <p className="font-arial text-white text-xl font-bold p-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque dolorum veritatis harum facilis molestiae
                    maiores velit enim.
                    Aperiam fugit perferendis minus quia corporis et ipsum rem, incidunt culpa. Corporis?
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