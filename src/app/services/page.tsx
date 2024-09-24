import CardSecondary from '../components/CardSecondary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Hand() {
  return (
    <div>
      <div className="w-full bg-brand-pink">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-hero-image2 bg-center bg-contain bg-no-repeat translate-y-16 mb-10"></div>
        <div className="rounded-t-[55px] bg-light-10 w-full h-10"></div>
      </div>
      <div id="treatments" className="w-full font-body bg-light-10 pb-24">
        <div className="pt-5">
          <div className="flex flex-col justify-center items-center mx-5 text-dark-10">
            <h1 className="text-4xl font-medium text-center leading-8 mb-2">
              Tratamentos para os mãos
            </h1>
            <p className="text-center text-xl leading-5 px-4">
              Confira todos os serviços para suas mãos.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-y-14 gap-6 mx-5">
              <CardSecondary
                linkImage={'/unha2.png'}
                title={'Simples'}
                title2={'Esmaltação e Cuticulagem'}
                desc1={
                  'Esmaltação: É o processo de aplicar esmalte nas unhas, incluindo a preparação das unhas, aplicação de base e esmalte colorido.'
                }
                desc2={
                  'Cuticulagem: Envolve o cuidado das cutículas, como amolecer, empurrar delicadamente e remover o excesso de pele.'
                }
                refPage={
                  'https://wa.me/44084030462?text=Olá,%20tenho%20interesse%20em%20fazer%20as%20mãos!'
                }
                cost={35}
                time={'45 Minutos'}
              />
              <CardSecondary
                linkImage={'/unha1.png'}
                title={'Esmaltação em Gel'}
                title2={'Esmaltação em Gel e Cuticulagem'}
                desc1={
                  'A esmaltação em gel envolve a aplicação de um esmalte especial em gel nas unhas, que é endurecido sob uma lâmpada UV ou LED.'
                }
                desc2={
                  'Cuticulagem: Envolve o cuidado das cutículas, como amolecer, empurrar delicadamente e remover o excesso de pele.'
                }
                refPage={
                  'https://wa.me/44084030462?text=Olá,%20tenho%20interesse%20em%20fazer%20as%20mãos%20em%20Gel!'
                }
                cost={50}
                time={'45 Minutos'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-brand-pink flex flex-col items-center pb-8">
        <div className="md:w-[860px]">
          <div className="p-4 text-center">
            <span className="text-3xl font-semibold text-dark-10">
              Okamoto Beauty
            </span>
            <p className="text-lg font-medium -mt-2 mb-2 text-dark-10">
              Beleza nunca foi tão fácil.
            </p>
            <div className="text-start">
              <p className="text-white leading-5">
                A “Okamoto Beauty” é uma empresa que oferece serviços de beleza
                e bem-estar em Umuarama, PR. Fundada por Ana Clara Okamoto, a
                missão da Okamoto Beauty é proporcionar a todos os clientes o
                “poder de viver” com confiança, realçando sua beleza única e
                expressando-se de maneira autêntica.
              </p>
            </div>
          </div>
          <div className="px-4 py-2  flex flex-col">
            <span className="text-3xl text-white font-medium">Contatos</span>

            <div>
              <p className="text-white">
                <i className="fa-solid fa-location-dot text-dark-10"></i>
                R. Dr. Camargo, 4326 - Zona II, Umuarama - PR, 87501-378
              </p>
            </div>
            <a
              href="https://www.instagram.com/ac.okamoto/"
              target="_blank"
              className="font-medium text-dark-10"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> @ac.okamoto
            </a>
            <a
              href="https://wa.me/44084030462?text=Olá,%20tenho%20interesse%20em%20fazer%20um%20tratamento!"
              target="_blank"
              className="font-medium text-dark-10"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> (44) 9 8403-0462
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
