interface TopicProps {
    title: string
    description: string
}

export function Topic(props: TopicProps) {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-80">
                <h2 className="text-[#FF002A] font-bold font-arial text-4xl">{props.title}</h2>
                <p className="text-black font-arial text-center">{props.description}</p>
            </div>
        </div>
    )
}