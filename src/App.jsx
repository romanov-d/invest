import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import BusinessModel from './components/BusinessModel';
import InteractiveROIChart from './components/InteractiveROIChart';
import InteractiveExpensesChart from './components/InteractiveExpensesChart';
import { ArrowRight, Star, ChartBar, Target, Person, ShieldCheck, Envelope, Smartphone, Check, ShoppingBag, MapPin, LayoutList, Diamond, Display, Rocket, Flame, ShieldExclamation, CreditCard, Clock, Globe } from '@gravity-ui/icons';
import { useLanguage } from './components/LanguageContext';
import bgImage from './assets/bg.png';

const LanguageSwitcher = () => {
  const { lang, changeLanguage } = useLanguage();
  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-8 z-[110] flex gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-gray-200 shadow-lg print:hidden">
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${lang === 'ru' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('sr')}
        className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${lang === 'sr' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        SR
      </button>
    </div>
  );
};

const HeroSlide = ({ activeModel, setActiveModel }) => {
  const { t } = useLanguage();

  const handleSelect = (model) => {
    setActiveModel(model);
    const element = document.getElementById('concept-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col border-b border-gray-100 bg-white">
      <div className="flex flex-col lg:flex-row w-full flex-1">
        {/* Top/Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-16">
          <div className="max-w-2xl mx-auto lg:mx-0 w-full">
            <h1 className="font-poster text-[4.5rem] sm:text-7xl lg:text-[8rem] xl:text-[9rem] mb-2 lg:mb-4 text-black leading-none">
              Вкусно
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 lg:mb-12 font-medium tracking-tight leading-tight">
              {t('heroSubtitle')}
            </p>

            <div className="space-y-4 lg:space-y-6">
              <div
                onClick={() => handleSelect('darkKitchen')}
                className={`cursor-pointer group p-5 lg:p-8 rounded-[32px] border-2 transition-all flex items-center justify-between ${activeModel === 'darkKitchen' ? 'border-black bg-gray-50 shadow-sm' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
              >
                <div className="flex items-center gap-4 lg:gap-8">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-colors ${activeModel === 'darkKitchen' ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-black group-hover:text-white'}`}>
                    <Rocket className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg lg:text-2xl mb-1">{t('modelDarkKitchen')}</h3>
                    <p className="text-[10px] lg:text-sm text-gray-500">{t('modelDarkKitchenDesc')}</p>
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 lg:w-6 lg:h-6 transition-all ${activeModel === 'darkKitchen' ? 'opacity-100 translate-x-2' : 'opacity-0'}`} />
              </div>

              <div
                onClick={() => handleSelect('canteen')}
                className={`cursor-pointer group p-5 lg:p-8 rounded-[32px] border-2 transition-all flex items-center justify-between ${activeModel === 'canteen' ? 'border-[#059669] bg-green-50 shadow-sm' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
              >
                <div className="flex items-center gap-4 lg:gap-8">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-colors ${activeModel === 'canteen' ? 'bg-[#059669] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#059669] group-hover:text-white'}`}>
                    <ShoppingBag className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg lg:text-2xl mb-1">{t('modelCanteen')}</h3>
                    <p className="text-[10px] lg:text-sm text-gray-500">{t('modelCanteenDesc')}</p>
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 lg:w-6 lg:h-6 transition-all text-[#059669] ${activeModel === 'canteen' ? 'opacity-100 translate-x-2' : 'opacity-0'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom/Right: Image */}
        <div className="w-full lg:w-1/2 h-[45vh] lg:h-auto min-h-[400px] relative overflow-hidden flex-shrink-0">
          <img
            src="/slide1.PNG"
            alt="Вкусно"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, children, className = "", id }) => {
  return (
    <section id={id} className={`min-h-screen py-20 px-6 md:px-20 flex flex-col items-center border-b border-gray-100 print:break-after-page ${className}`}>
      <div className="max-w-6xl w-full">
        {title && (
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-12 text-center md:text-left tracking-tight">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

const ModelToggle = ({ activeModel, setActiveModel }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[100] bg-white/90 backdrop-blur-md p-1 rounded-2xl border border-gray-200 shadow-xl flex gap-1 print:hidden">
      <button
        onClick={() => setActiveModel('darkKitchen')}
        className={`px-3 py-2 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${activeModel === 'darkKitchen' ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        {t('modelDarkKitchen')}
      </button>
      <button
        onClick={() => setActiveModel('canteen')}
        className={`px-3 py-2 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${activeModel === 'canteen' ? 'bg-[#059669] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        {t('modelCanteen')}
      </button>
    </div>
  );
};

export default function App() {
  const [activeModel, setActiveModel] = useState('canteen');
  const { t } = useLanguage();

  const dkEquipment = [
    { name: t('investDetails.remont'), value: '3,000 €' },
    { name: t('investDetails.equip'), value: '8,000 €' },
    { name: t('investDetails.vent'), value: '4,000 €' },
    { name: t('investDetails.auto'), value: '6,000 €' },
    { name: t('investDetails.office'), value: '2,000 €' },
    { name: t('investDetails.cushion'), value: '26,100 €', highlight: true }
  ];

  const canteenEquipment = [
    { name: t('investDetails.equipCanteen'), value: '18,000 €' },
    { name: t('investDetails.ventCanteen'), value: '6,000 €' },
    { name: t('investDetails.repairCanteen'), value: '5,000 €' },
    { name: t('investDetails.autoCanteen'), value: '4,000 €' },
    { name: t('investDetails.cushion'), value: '36,600 €', highlight: true }
  ];

  const dkOpex = {
    team: [
      { name: t('teamRoles.cook'), value: '1,000 €', icon: <Star /> },
      { name: t('teamRoles.manager'), value: '2,000 €', icon: <ShieldCheck /> },
      { name: t('teamRoles.driver'), value: '1,200 €', icon: <Flame /> },
      { name: t('teamRoles.managers'), value: '600 €', icon: <Person /> },
      { name: t('teamRoles.accountant'), value: '300 €', icon: <ChartBar /> },
      { name: t('teamRoles.techManager'), value: '400 €', icon: <Rocket /> },
    ],
    fixed: [
      { name: t('teamRoles.rent'), value: '1,000 €', icon: <MapPin /> },
      { name: t('teamRoles.marketing'), value: '1,000 €', icon: <Smartphone /> },
      { name: t('teamRoles.utilities'), value: '1,200 €', icon: <Diamond /> },
    ],
    totalTeam: '5,500 €',
    totalFixed: '3,200 €'
  };

  const canteenOpex = {
    team: [
      { name: t('teamRoles.cooks'), value: '2,400 €', icon: <Star /> },
      { name: t('teamRoles.chef'), value: '2,000 €', icon: <ShieldCheck /> },
      { name: t('teamRoles.cashiers'), value: '1,600 €', icon: <ShoppingBag /> },
      { name: t('teamRoles.serving'), value: '1,600 €', icon: <Person /> },
      { name: t('teamRoles.driver'), value: '1,200 €', icon: <Flame /> },
      { name: t('teamRoles.accountant'), value: '300 €', icon: <ChartBar /> },
      { name: t('teamRoles.techManager'), value: '400 €', icon: <Rocket /> },
    ],
    fixed: [
      { name: t('teamRoles.rent'), value: '1,200 €', icon: <MapPin /> },
      { name: t('teamRoles.utilities'), value: '500 €', icon: <Diamond /> },
      { name: t('teamRoles.marketing'), value: '1,000 €', icon: <Smartphone /> },
    ],
    totalTeam: '9,500 €',
    totalFixed: '2,700 €'
  };

  const opexData = activeModel === 'canteen' ? canteenOpex : dkOpex;
  const equipData = activeModel === 'canteen' ? canteenEquipment : dkEquipment;
  const totalInvest = activeModel === 'canteen' ? '69,600 €' : '49,100 €';

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-green-100">
      <LanguageSwitcher />
      <ModelToggle activeModel={activeModel} setActiveModel={setActiveModel} />
      
      <main>
        <HeroSlide activeModel={activeModel} setActiveModel={setActiveModel} />

        {/* SECTION 2: IDEA & SCALE */}
        <Section id="concept-section" title={activeModel === 'canteen' ? t('conceptMarket') : t('conceptDarkKitchen')} className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
            {/* Concept Card - Large */}
            <div className="col-span-1 md:col-span-12 p-8 rounded-3xl bg-white text-black flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {activeModel === 'canteen' ? <ShoppingBag style={{ width: 24, height: 24 }} /> : <Rocket style={{ width: 24, height: 24 }} />}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {activeModel === 'canteen' ? t('freeFlowCanteen') : t('darkKitchenFactory')}
                  </h3>
                </div>
                <p className="text-xl leading-snug mb-6 text-gray-800">
                  {activeModel === 'canteen'
                    ? t('marketTrend')
                    : t('optimizedProduction')}
                </p>
                {activeModel === 'canteen' && (
                  <p className="text-lg leading-snug mb-6 text-gray-600 italic border-l-4 border-[#059669] pl-4">
                    {t('demandHonestFood')}
                  </p>
                )}
              </div>
              <div className="flex flex-col h-full gap-4 md:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 flex-1">
                  <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-[32px] flex flex-col justify-center border border-gray-100">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-6 text-black">{t('whyFormat', activeModel === 'canteen' ? t('freeFlowCanteen') : t('modelDarkKitchen'))}</h3>
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          {activeModel === 'canteen' ? <ShoppingBag style={{ width: 20, height: 20 }} /> : <Rocket style={{ width: 20, height: 20 }} />}
                        </div>
                        <div>
                          <span className="font-bold">
                            {t('formatModern')}
                          </span>
                          {' '}
                          {activeModel === 'canteen'
                            ? t('formatModernDesc')
                            : t('optimizedProduction')}
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          <Star style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                          <span className="font-bold">{t('cuisine')}</span> {t('cuisineType')}.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          <CreditCard style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                          <span className="font-bold">{t('avgCheck')}</span> {activeModel === 'canteen' ? t('avgCheckValueCanteen') : t('avgCheckValueDK')}.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          <Clock style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                          <span className="font-bold">{t('serviceTime')}</span> {activeModel === 'canteen' ? t('service3min') : t('service15min')}.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-[32px] flex flex-col justify-center border border-gray-100">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-6 text-black">{t('marketSerbia')}</h3>
                    <div className="space-y-3 md:space-y-6">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-black font-bold text-xs ring-1 ring-gray-200">ИТ</div>
                        <div>
                          <div className="font-bold text-black">{t('itSpecialists')}</div>
                          <div className="text-xs text-gray-500 font-medium">{t('belgrade100k')}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center font-bold text-black ring-1 ring-gray-200"><Person /></div>
                        <div>
                          <div className="font-bold text-black">{t('regularPeople')}</div>
                          <div className="text-xs text-gray-500 font-medium">{t('menWomen')}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center font-bold text-black ring-1 ring-gray-200"><ShoppingBag /></div>
                        <div>
                          <div className="font-bold text-black">{t('takeawayHome')}</div>
                          <div className="text-xs text-gray-500 font-medium">{t('deliveryAggregators')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 shrink-0">
                  <div className="p-5 sm:p-6 md:p-8 rounded-[32px] bg-gray-50 text-black flex items-center gap-4 border border-gray-100 shadow-sm">
                    <div className="p-3 bg-white rounded-full text-black shadow-sm ring-1 ring-gray-100"><MapPin /></div>
                    <div>
                      <h4 className="font-bold text-lg">{t('location')}</h4>
                      <p className="text-sm text-gray-500">{t('locationDesc')}</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8 rounded-[32px] bg-gray-50 text-black flex items-center gap-4 border border-gray-100 shadow-sm">
                    <div className="p-3 bg-white rounded-full text-black shadow-sm ring-1 ring-gray-100"><Check /></div>
                    <div>
                      <h4 className="font-bold text-lg">{t('projectStartTitle')}</h4>
                      <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: t('projectStartDate') }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 3: EXPERIENCE */}
        <Section title={t('teamExperience')} className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            {/* Left: Text Block */}
            <div className="p-8 rounded-3xl bg-gray-50 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-black"><ShieldCheck width={24} height={24} /></div>
                {t('ourExperience')}
              </h3>
              <p className="text-xl text-gray-700 leading-snug mb-8">
                {t('experienceDesc1')}
              </p>
              <p className="text-lg text-gray-600 border-t border-gray-200 pt-8 leading-snug">
                {t('experienceDesc2')}
              </p>
            </div>

            {/* Right: Clients Grid */}
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center mb-2 text-gray-400 font-medium text-sm">{t('trustedBy')}</div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center justify-center h-32">
                <img src="/yandex.png" alt="Яндекс" className="h-16 w-auto object-contain" />
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center justify-center h-32">
                <img src="/rzd.png" alt="РЖД" className="h-14 w-auto object-contain" />
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center justify-center h-32">
                <img src="/navi.png" alt="Нави" className="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 4: INVESTMENT STRUCTURE */}
        <Section title={t('investmentStructure')} className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
            {/* Chart Area */}
            <div className="col-span-1 md:col-span-5 bg-gray-50 rounded-3xl p-4">
              <InteractiveExpensesChart model={activeModel} />
            </div>

            {/* Grid of Expenses */}
            <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
              {/* Header */}
              <div className="flex justify-between items-end border-b pb-4">
                <span className="text-gray-500 text-sm font-bold">{t('launchBreakdown')}</span>
                <span className="text-4xl font-bold text-green-700">{totalInvest}</span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {equipData.map((item, idx) => (
                  <div key={idx} className={`p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm`}>
                    <div className={`text-gray-500 font-medium ${item.highlight ? 'font-bold' : ''}`}>{item.name}</div>
                    <div className={`p-2 rounded-lg text-black font-bold ${item.highlight ? 'bg-yellow-100' : 'bg-gray-100'}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 5: OPERATING EXPENSES */}
        <Section title={t('operatingExpenses')} className={activeModel === 'canteen' ? "bg-green-50/30" : "bg-gray-50/30"}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Team Block */}
            <div className="bg-white text-black rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Person className="text-black" /> {t('team')}
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">{opexData.totalTeam} {t('perMonth')}</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {opexData.team.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-black">
                        {member.icon}
                      </div>
                      <span className="font-bold text-gray-700 text-sm">{member.name}</span>
                    </div>
                    <span className="font-bold text-sm">{member.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Costs Block */}
            <div className="bg-white text-black rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Target className="text-black" /> {t('fixedCosts')}
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">{opexData.totalFixed} {t('perMonth')}</span>
              </div>

              <div className="space-y-6">
                {opexData.fixed.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-4 ${idx !== opexData.fixed.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                    <div className="p-3 bg-gray-100 rounded-xl">
                      {React.cloneElement(item.icon, { className: 'text-black' })}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-gray-500">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 6: FINANCIAL MODEL */}
        <Section title={t('financialModel')} className="bg-white">
          <div className="flex flex-col h-full gap-2 md:gap-4 overflow-y-auto pr-1 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 shrink-0">
              <div className="bg-gray-50 p-3 md:p-4 rounded-2xl border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-black mb-1 md:mb-2">
                  {activeModel === 'canteen' ? <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" /> : <Rocket className="w-4 h-4 md:w-5 md:h-5" />}
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1">
                  {activeModel === 'canteen' ? t('diningHallScale') : t('scaleFocus')}
                </h4>
                <div className="text-xl md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">
                  {activeModel === 'canteen' ? '60 ' : '100% '}
                  <span className="text-[10px] md:text-xs text-gray-400 font-normal">
                    {activeModel === 'canteen' ? t('peopleDay') : t('scaleFocus')}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                  {activeModel === 'canteen' ? t('canteenFocus') : t('dkFocus')}
                </p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-2xl border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-black mb-1 md:mb-2"><Smartphone className="w-4 h-4 md:w-5 md:h-5" /></div>
                <h4 className="text-base md:text-lg font-bold mb-1">{t('deliveryDaily')}</h4>
                <div className="text-xl md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">
                  {activeModel === 'canteen' ? '30' : '60'} <span className="text-[10px] md:text-xs text-gray-400 font-normal">{t('ordersDay')}</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">{t('woltGlovo')}</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-2xl border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-black mb-1 md:mb-2"><LayoutList className="w-4 h-4 md:w-5 md:h-5" /></div>
                <h4 className="text-base md:text-lg font-bold mb-1">{t('corporateCatering')}</h4>
                <div className="text-xl md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">
                  {activeModel === 'canteen' ? '60' : '80'} <span className="text-[10px] md:text-xs text-gray-400 font-normal">{t('mealsDay')}</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">{t('corporateContracts')}</p>
              </div>
            </div>

            <div className="flex-1 bg-gray-50 rounded-2xl p-2 md:p-4 min-h-[300px] shrink-0">
              <InteractiveROIChart model={activeModel} />
            </div>
          </div>
        </Section>

        {/* SECTION 7: INVESTMENT SUM */}
        <Section title={t('investmentProposal')} className="bg-white">
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#666' }}>{t('requiredAmount')}</div>
            <div className="text-6xl md:text-8xl font-bold text-[#059669] mb-8 md:mb-12">
              {totalInvest}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto text-left">
              <Card>
                <h4 className="font-bold mb-2">{t('investorShare')}</h4>
                <div className="text-4xl font-bold mb-2">30%</div>
                <p className="text-sm text-gray-500">{t('netProfitForever')}</p>
              </Card>
              <Card>
                <h4 className="font-bold mb-2">{t('capitalReturn')}</h4>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm text-gray-500">{t('priorityPayments')}</p>
              </Card>
              <Card>
                <h4 className="font-bold mb-2">{t('control')}</h4>
                <div className="text-4xl font-bold mb-2 font-poster">{t('controlFull')}</div>
                <p className="text-sm text-gray-500">{t('transparentReporting')}</p>
              </Card>
            </div>
          </div>
        </Section>

        {/* SECTION 8: BREAK EVEN */}
        <Section title={t('breakEvenPoint')} className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">{t('firstSteps')}</h3>
              <p className="mb-8 text-xl text-gray-600 leading-snug">
                {t('plannedLoss')}
              </p>

              <div className="relative border-l-4 border-gray-200 ml-4 space-y-8 pl-8 py-2">
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">{t('month1')}</h4>
                  <p className="text-gray-500">-2,000 € ({t('loss')})</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-orange-400 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">{t('month2')}</h4>
                  <p className="text-gray-500">-500 € ({t('momentum')})</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-yellow-400 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">{t('month3')}</h4>
                  <p className="text-gray-500">0 € ({t('breakEven')})</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">{t('month4')}</h4>
                  <p className="text-gray-500 font-bold text-green-700">+1,500 € ({t('firstProfit')})</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-black"><ShieldCheck width={24} height={24} /></div>
                {t('risks')}
              </h3>
              <div className="bg-white p-6 rounded-2xl mb-4 border border-gray-100">
                <h4 className="font-bold text-red-900 mb-2">{t('riskSlowStart')}</h4>
                <p className="text-gray-600 leading-snug text-sm">{t('riskSlowStartDesc')}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-900 mb-2">{t('solution')}</h4>
                <ul className="space-y-2 text-green-800 leading-snug text-sm font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> {t('solutionAds')}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> {t('solutionTarget')}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> {t('solutionFlyers')}</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 9: VISUALS */}
        <Section title={t('atmosphere')} className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 h-full items-center">
            <div className="h-[200px] md:h-[400px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0143.JPG" alt="Интерьер 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] md:h-[400px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0144.JPG" alt="Интерьер 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] md:h-[400px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0145.JPG" alt="Интерьер 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </Section>

        {/* SECTION 10: CONTACTS */}
        <Section className="bg-white">
          <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight">{t('letsDiscuss')}</h2>
            <p className="text-lg md:text-2xl mb-8 md:mb-16 text-gray-600 font-medium">
              {t('marketFree')}
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mb-10 md:mb-16">
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 w-full md:w-[300px] flex flex-col items-center border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-black mb-4 shadow-sm border border-gray-50">
                  <Envelope className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">{t('messenger')}</div>
                <div className="text-[#059669] font-bold text-xl">@vkusnoporus</div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 w-full md:w-[300px] flex flex-col items-center border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-black mb-4 shadow-sm border border-gray-50">
                  <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">{t('phone')}</div>
                <div className="text-[#059669] font-bold text-lg">+381 61 681 9650</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center border-4 border-white shadow-lg">
                <img src="/natalia.png" alt="Наталия Романова" className="w-full h-full object-cover" />
              </div>
              <div className="text-[#1d1d1f] font-bold">
                {t('founder')}<br />
                <span className="text-[#888] font-normal text-sm md:text-base italic">{t('founderTitle')}</span>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer / Logo Floating if needed */}
      <div className="fixed bottom-8 left-8 z-[100] font-poster text-[#059669] text-2xl opacity-50 pointer-events-none print:hidden">
        Вкусно
      </div>
    </div>
  );
}
