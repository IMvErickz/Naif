import { CenterField } from '@/components/Field/CenterField'
import { SideFieldLeft, SideFieldRight } from '@/components/Field/SideField'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/header'
import { Nav } from '@/components/Nav/Nav'
import { Carrousel } from '@/components/Swiper/Swiper'
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

  const centers = [
    {
      text: 'Ajudar o núcleo familiar a superar os obstáculos , romper o ciclo de vulnerabilidade e construir um futuro mais estável e digno para si e seus filhos.',
      img: '/photos/2.svg'
    },
    {
      text: 'Identificando a potencialidade de cada indivíduo, para o desenvolvimento individual de cada comunidade.',
      img: '/photos/8.svg'
    }
  ]

  return (
    <main className='flex flex-col items-center justify-center bg-[#F6F6F7]'>
      <Header />
      <Nav />
      <section className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-center py-8'>
          <Image
            src={'/carrossel/capa NAIF 1.svg'}
            alt='Não encontrado'
            width={0}
            height={0}
            className='rounded-lg w-[70%]'
          />
        </div>
        <div className='w-full flex flex-col items-center justify-center py-8'>
          <h1 className='text-black font-arial text-center font-bold text-6xl'>Somos a <span className='text-[#FF0000]'>Esperança</span></h1>
          <div className='w-[70%] py-4'>
            <Carrousel />
          </div>
          <h1 className='font-arial text-black text-6xl text-center font-bold'>Temos uma <span className='text-[#FF0000]'>Missão</span></h1>
          <div className='w-full flex flex-col items-center justify-center gap-y-20'>
            <div className='w-full flex flex-row items-center justify-center'>
              <SideFieldRight
                text='Promover a transformação social e o desenvolvimento de comunidades em situação de vulnerabilidade social e/ou econômico.'
              />
            </div>
            <div className='w-full flex flex-row items-center justify-center'>
              <SideFieldLeft
                text='Construir um ambiente de apoio e aprendizado, onde as famílias possam se desenvolver integralmente, recuperar sua autoestima e confiança, e se tornarem agentes de mudança positiva em suas próprias vidas e em suas comunidades.'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-center py-8'>
          <h1 className='font-arial text-black text-6xl text-center font-bold'>Essa é a nossa <span className='text-[#FF0000]'>Visão</span></h1>
        </div>
        <div className='xl:w-full flex flex-col xl:flex-row items-center justify-center'>
          {centers.map(center => {
            return (
              <CenterField
                key={center.text}
                text={center.text}
                img={center.img}
              />
            )
          })}
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-center py-8'>
          <h1 className='font-arial text-black text-6xl text-center font-bold'>Esses são os nossos <span className='text-[#FF0000]'>Valores</span></h1>
        </div>
        <div className='w-full items-center justify-center flex flex-col md:grid md:grid-flow-row md:grid-cols-2 gap-y-12 py-4'>
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
      <section className='w-full flex flex-col items-center justify-center py-4'>
        <div className='w-full flex items-center justify-center py-8'>
          <h1 className='text-black font-bold font-arial text-center text-6xl'>Nosso <span className='text-[#FF0000]'>Público Alvo</span></h1>
        </div>
        <Image
          src={'/carrossel/capa site 3 1.svg'}
          alt='Não Encontrado'
          height={720}
          width={1280}
        />
      </section>
      <Footer />
    </main>
  )
}
