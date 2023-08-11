import { CenterField } from '@/components/Field/CenterField'
import { SideFieldLeft, SideFieldRight } from '@/components/Field/SideField'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/header'
import { Nav } from '@/components/Nav/Nav'
import { Topic } from '@/components/Topic/Topic'
import Image from 'next/image'

export default function Home() {

  const topics = [
    {
      title: 'Desenvolvimento',
      desc: 'Valorizamos o desenvolvimento integral das pessoas, promovendo oportunidades de aprendizado , crescimento pessoal e capacitação para que alcancem seu máximo potencial.'
    },
    {
      title: 'Relações',
      desc: 'Reconhecemos a importância dos laços familiares e buscamos fortalecer as relações familiares, proporcionando apoio emocional, orientação e recursos para promover a coesão e o bem-estar das famílias.'
    },
    {
      title: 'Sustentabilidade',
      desc: 'Comprometemo-nos com o desenvolvimento sustentável e inclusivo das comunidades locais'
    },
    {
      title: 'Empoderamento',
      desc: 'Valorizamos o empoderamento comunitário, capacitando as pessoas a tomarem decisões, implementarem projetos e promoverem melhorias em suas comunidades.'
    },
    {
      title: 'Igualdade',
      desc: 'Defendemos a igualdade de oportunidades e a justiça social, lutando contra todas as formas de discriminação e trabalhando para eliminar as desigualdades que afetam as famílias em vulnerabilidade social.'
    },
    {
      title: 'Conhecimento',
      desc: 'Valorizamos a troca de conhecimento, experiências e recursos para maximizar nosso impacto e promover mudanças significativas.'
    },

  ]

  return (
    <main className='flex flex-col items-center justify-center bg-[#F6F6F7]'>
      <Header />
      <Nav />
      <section className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-full flex flex-col items-center justify-center py-8'>
          <h1 className='font-arial text-black text-6xl font-bold'>Temos uma <span className='text-[#FF0000]'>Missão</span></h1>
          <div className='w-full flex flex-col items-center justify-center gap-y-20'>
            <div className='w-full flex flex-row items-center justify-center'>
              <SideFieldRight />
            </div>
            <div className='w-full flex flex-row items-center justify-center'>
              <SideFieldLeft />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-center py-8'>
          <h1 className='font-arial text-black text-6xl font-bold'>Essa é a nossa <span className='text-[#FF0000]'>Visão</span></h1>
        </div>
        <div className='w-full flex flex-row items-center justify-center'>
          <CenterField />
          <CenterField />
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-center py-8'>
          <h1 className='font-arial text-black text-6xl font-bold'>Esses são os nossos <span className='text-[#FF0000]'>Valores</span></h1>
        </div>
        <div className='w-full items-center justify-center grid grid-flow-row grid-cols-2 gap-y-12'>
          {topics.map(topic => {
            return (
              <Topic
                key={topic.title}
                title={topic.title}
                description={topic.desc}
              />
            )
          })}
        </div>
      </section>
      <Footer />
    </main>
  )
}
