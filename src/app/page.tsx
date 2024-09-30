import Button from './components/Button';
import Link from 'next/link';
import CardsHome from './components/CardsHome';

export default function Home() {
  return (
    <div>
      <section className="bg-brand-pink flex justify-center items-center mt-[70px]">
        <div className="bg-hero-image bg-no-repeat bg-contain bg-top w-[320px] md:w-[800px] h-[244px] md:h-[500px] relative drop-shadow-xl mx-2">
          <div className="bottom-12 left-2 md:bottom-32 md:left-8 absolute">
            <Link href="#about">
              <Button text={'Saiba mais sobre nós'} />
            </Link>
          </div>
        </div>
      </section>
      <main id="treatments" className="w-full font-body pt-[76px]  pb-24">
        <div className="flex flex-col justify-center items-center mx-5 text-dark-10">
          <h1 className="text-4xl font-medium text-center">Tratamentos</h1>
          <p className="text-center text-xl leading-5 px-4">
            Oferecer a você os melhores serviços que podemos.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-y-14 gap-6 mx-10">
            <CardsHome />
          </div>
        </div>
      </main>
      <section className="w-full">
        <div className="py-[33px] text-dark-10 text-center flex flex-col items-center">
          <p className="text-lg font-medium leading-5 px-4 sm:w-[500px]">
            Possibilitar a felicidade através de unhas bem feitas é meu maior
            desejo.
          </p>
          <div className="mt-[15px] bg-brand-pink rounded-full w-[31px] h-[31px]"></div>
          <p className="pt-[15px] text-lg px-10 leading-5 sm:w-[400px]">
            Ana Clara Okamoto, Fundadora da Okamoto Beauty.
          </p>
        </div>
      </section>
      <section id="time" className="w-full bg-white flex justify-center">
        <div className="p-4 mb-4 md:w-[860px]">
          <span className="text-4xl text-brand-pink font-medium leading-6">
            Horários de atendimento
          </span>
          <p className="text-dark-20 leading-5">
            Se você se sente cansada e estressada após um dia de trabalho,
            teremos prazer em lhe oferecer uma solução agradável e saudável para
            reencontrar o equilíbrio.
          </p>
          <ul className="mt-2 text-dark-20 text-lg leading-6 tracking-tight">
            <li>
              Seg-sex: <span className="text-brand-pink">08h</span> ás
              <span className="text-brand-pink">19h</span>
            </li>
            <li>
              Sábado: <span className="text-brand-pink">09h</span> ás
              <span className="text-brand-pink">16h</span>
            </li>
            <li>
              Domingo: <span className="text-brand-pink">Fechado</span>
            </li>
          </ul>
        </div>
      </section>
      <section id="book" className="w-full bg-brand-pink pb-4 pt-2">
        <div className="text-white p-4 text-center">
          <span className="text-4xl leading-5 font-medium">
            Preparada para transformar suas unhas?
          </span>
          <p className="text-xl leading-5 pt-1 mb-6">
            Escolha o serviço ideal para você abaixo!
          </p>
          <Link
            href="https://wa.me/4484030462?text=Olá,%20tenho%20interesse%20em%20fazer%20um%20tratamento!"
            target="_blank"
          >
            {' '}
            <Button text={'Agendar agora!'} />
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="bg-light-10 w-full pb-4 flex justify-center"
      >
        <div className="px-4 pt-4 w-full flex flex-col text-start text-lg gap-2 leading-5 tracking-tight max-w-[860px]">
          <span className="text-2xl font-medium">Sobre nós</span>
          <p>
            Okamoto Beauty, o seu destino de beleza e bem-estar em Umuarama!
            Fundado por Ana Clara Okamoto, nosso salão é dedicado a proporcionar
            uma experiência única e personalizada para cada cliente.
          </p>
          <p>
            Com anos de experiência no setor de beleza, Ana Clara trouxe sua
            paixão e expertise para criar um espaço onde você pode relaxar e se
            sentir verdadeiramente cuidado. No Okamoto Beauty, oferecemos uma
            ampla gama de serviços de manicure e pedicure, utilizando apenas
            produtos de alta qualidade para garantir resultados excepcionais.
          </p>
          <p>
            Nosso compromisso é com a excelência e a satisfação do cliente. Cada
            detalhe é pensado para oferecer um ambiente acolhedor e
            profissional, onde você pode desfrutar de tratamentos de beleza que
            realçam sua confiança e bem-estar.
          </p>
          <div>
            <span id="contact" className="text-2xl font-medium">
              Contatos
            </span>
            <div className="mt-2 text-dark-20 tracking-tight text-lg">
              <p className="leading-5">
                R. Dr. Camargo, 4326 - Zona II, Umuarama - PR, 87501-378
              </p>
              <p>
                Instagram :
                <Link
                  href="https://www.instagram.com/ac.okamoto/"
                  target="_blank"
                  className="text-brand-pink"
                >
                  @ac.okamoto
                </Link>
              </p>
              <p>
                Telefone :
                <Link
                  href="https://wa.me/4484030462?text=Olá,%20tenho%20interesse%20em%20fazer%20um%20tratamento!"
                  target="_blank"
                  className="text-brand-pink"
                >
                  (44) 9 8403-0462
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
