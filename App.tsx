
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Link, 
  ArrowRight,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Logo } from './components/Logo';
import { SessionInfo, StepInfo } from './types';

const BUY_LINK = "https://networkkades.my.canva.site/";
const AFFILIATE_LINK = "https://dashboard.kiwify.com/join/affiliate/0G9SQimY";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sessions: SessionInfo[] = [
    {
      type: 'black',
      title: 'SESSÃO PRETA',
      description: 'MENTALIDADE & ESTRATÉGIA',
      items: [
        'Mentalidade de vendedor imparável',
        'Como pensar como afiliado profissional',
        'Como abordar pessoas corretamente e converter',
        'Como gerar autoridade mesmo sendo iniciante',
        'Como usar o networking a seu favor',
        'Como criar visão estratégica de longo prazo'
      ]
    },
    {
      type: 'red',
      title: 'SESSÃO VERMELHA',
      description: 'EXECUÇÃO & VENDAS',
      items: [
        'Como vender o acesso ao grupo em escala',
        'Scripts prontos de venda validados',
        'Como apresentar o KADES Network com impacto',
        'Como divulgar corretamente nas redes sociais',
        'Como otimizar seu link de afiliado',
        'Aceleração de resultados e lucro imediato'
      ]
    }
  ];

  const steps: StepInfo[] = [
    {
      id: 1,
      title: 'Entrar no Grupo',
      description: 'Garanta sua vaga na mentoria exclusiva.',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Receber Link',
      description: 'Tenha seu link de afiliado único e pronto.',
      icon: <Link className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Divulgação Estratégica',
      description: 'Use nossos métodos para atrair interessados.',
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Converter Vendas',
      description: 'Feche negócios usando scripts de alta conversão.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Lucrar Diariamente',
      description: 'Receba comissões por cada novo membro.',
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const expectations = [
    'Comprometimento total com os resultados',
    'Ação diária e execução do que é ensinado',
    'Vontade constante de aprender e evoluir',
    'Mentalidade de crescimento e abundância',
    'Respeito absoluto ao networking do grupo'
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#A32121] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo className="h-10" />
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-semibold text-sm tracking-widest">
            <a href="#about" className="hover:text-[#A32121] transition-colors">SOBRE</a>
            <a href="#sessions" className="hover:text-[#A32121] transition-colors">MENTORIA</a>
            <a href="#earn" className="hover:text-[#A32121] transition-colors">GANHOS</a>
            <a 
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A32121] px-6 py-3 rounded-none hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-900/20"
            >
              ENTRAR AGORA
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0B0B] border-b border-white/10 p-6 flex flex-col space-y-6 animate-fade-in-down">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">SOBRE</a>
            <a href="#sessions" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">MENTORIA</a>
            <a href="#earn" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">GANHOS</a>
            <a 
              href={BUY_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)} 
              className="bg-[#A32121] py-4 text-center font-black tracking-widest uppercase"
            >
              ENTRAR AGORA
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/90 to-[#0B0B0B]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#A32121]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#A32121]/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-[#A32121]/50 bg-[#A32121]/10 rounded-full animate-bounce">
            <span className="text-[#A32121] text-xs font-bold tracking-widest uppercase">O GRUPO MAIS EXCLUSIVO DO BRASIL</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
            KADES NETWORK – <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A32121]">
              Transforme Networking em Dinheiro
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Uma mentoria prática onde você aprende a vender, escalar conexões e lucrar com networking inteligente. 
            Não é apenas conversa, é execução pura.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#A32121] text-white px-10 py-5 font-black text-lg uppercase tracking-tighter hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
            >
              GRUPO VIP <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-[#A32121] px-10 py-5 font-black text-lg uppercase tracking-tighter transition-all hover:bg-white/5 flex items-center justify-center"
            >
              QUERO VENDER O ACESSO
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase">
                O QUE É O <span className="text-[#A32121]">KADES NETWORK?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                O KADES Network é um ecossistema fechado de networking estratégico. Nós não vendemos cursos, nós formamos executores. Aqui, o foco é o lucro real através de conexões inteligentes e estratégias de vendas validadas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <TrendingUp />, text: 'Escalabilidade' },
                  { icon: <ShieldCheck />, text: 'Autoridade' },
                  { icon: <Target />, text: 'Foco em Vendas' },
                  { icon: <Zap />, text: 'Execução' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 group">
                    <div className="p-3 bg-white/5 group-hover:bg-[#A32121] transition-colors rounded-none border border-white/10 group-hover:border-[#A32121]">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <span className="font-bold tracking-tight text-sm uppercase">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#A32121]/30 -z-10 translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Networking" 
                className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-[#A32121] p-8">
                <p className="text-4xl font-black leading-none">100%<br/><span className="text-sm font-bold tracking-widest opacity-80">PRÁTICO</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section id="sessions" className="py-24 bg-[#0B0B0B] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">COMO FUNCIONA A <span className="text-[#A32121]">MENTORIA</span></h2>
            <div className="w-24 h-1 bg-[#A32121] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {sessions.map((session, idx) => (
              <div 
                key={idx} 
                className={`p-10 border ${session.type === 'black' ? 'border-white/10 bg-gradient-to-br from-black to-[#111]' : 'border-[#A32121]/30 bg-gradient-to-br from-[#1a0505] to-[#0B0B0B]'} group relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 p-4 font-black opacity-10 text-6xl ${session.type === 'black' ? 'text-white' : 'text-[#A32121]'}`}>
                  {idx + 1}
                </div>
                <div className="mb-6">
                  <span className={`inline-block px-4 py-1 text-xs font-black tracking-[0.2em] mb-4 ${session.type === 'black' ? 'bg-white/10' : 'bg-[#A32121]/20 text-[#A32121]'}`}>
                    {session.description}
                  </span>
                  <h3 className={`text-3xl font-black tracking-tighter ${session.type === 'black' ? 'text-white' : 'text-[#A32121]'}`}>
                    {session.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {session.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-400 group-hover:text-white transition-colors">
                      <ChevronRight className={`flex-shrink-0 mt-1 ${session.type === 'black' ? 'text-white' : 'text-[#A32121]'}`} size={18} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Earn Money Section */}
      <section id="earn" className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black leading-none mb-6">COMO GANHAR DINHEIRO NO <span className="text-[#A32121]">KADES</span></h2>
              <p className="text-gray-600 text-lg">O processo é simples, lucrativo e escalável. Siga o passo a passo para começar a faturar agora.</p>
            </div>
            <div className="hidden md:block">
              <Logo className="h-16 opacity-20" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.id} className="p-8 border border-black/5 hover:border-[#A32121]/30 transition-all bg-gray-50 group">
                <div className="mb-8 w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-[#A32121] transition-colors">
                  {step.icon}
                </div>
                <div className="mb-2 text-[#A32121] font-black text-xs tracking-widest uppercase">Passo 0{step.id}</div>
                <h4 className="text-xl font-black tracking-tight mb-4 uppercase leading-none">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="py-24 bg-[#A32121] text-white">
        <div className="container mx-auto px-6 text-center">
          <Link size={60} className="mx-auto mb-8 opacity-40" />
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">O PODER DO LINK DE AFILIADO</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-black/10 p-8 border border-white/10">
              <h5 className="font-black text-xl mb-3">LINK EXCLUSIVO</h5>
              <p className="text-white/80 text-sm">Cada membro recebe um acesso único monitorado por nossa tecnologia.</p>
            </div>
            <div className="bg-black/10 p-8 border border-white/10">
              <h5 className="font-black text-xl mb-3">COMISSÃO DIRETA</h5>
              <p className="text-white/80 text-sm">Toda venda feita pelo seu link gera lucro instantâneo para você.</p>
            </div>
            <div className="bg-black/10 p-8 border border-white/10">
              <h5 className="font-black text-xl mb-3">OPORTUNIDADE REAL</h5>
              <p className="text-white/80 text-sm">O crescimento do grupo gera novas fontes de receita para você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase">O QUE ESPERAMOS DOS <span className="text-[#A32121]">MEMBROS</span></h2>
            <div className="space-y-4">
              {expectations.map((text, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-[#A32121]/50 transition-colors">
                  <span className="text-lg font-bold tracking-tight uppercase text-left">{text}</span>
                  <div className="w-4 h-4 rounded-full bg-[#A32121]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#0B0B0B]/95"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-none italic">
            "O GRUPO CRESCE. <br/>
            AS OPORTUNIDADES APARECEM. <br/>
            <span className="text-[#A32121]">QUEM AGE, LUCRA.</span>"
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#A32121] text-white px-14 py-6 font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-[#A32121] transition-all flex items-center justify-center"
            >
              GRUPO VIP
            </a>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-white/40 px-14 py-6 font-black text-xl uppercase tracking-tighter hover:bg-white/10 transition-all flex items-center justify-center"
            >
              QUERO VENDER O ACESSO
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo className="h-10" />
          <div className="flex flex-col items-center md:items-end">
            <p className="text-xs font-bold tracking-[0.3em] text-white/40 mb-2 uppercase">Todos os direitos reservados</p>
            <p className="text-sm font-bold text-white/60">KADES NETWORK &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
