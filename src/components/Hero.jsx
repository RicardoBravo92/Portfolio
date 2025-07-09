import { motion } from 'framer-motion';
import herobg from '../assets/herobg.png';
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center pt-20 pb-10 relative overflow-hidden black-gradient">
      {/* Fondo decorativo */}
      <img src={herobg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          <Trans i18nKey="hero.hello">
            Hola, soy <span className="text-accent drop-shadow-lg">Ricardo Bravo</span>
          </Trans>
        </h1>
        <p className="text-lg md:text-2xl text-[#dfd9ff] max-w-xl mx-auto mb-8 drop-shadow">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
