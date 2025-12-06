import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Star, BookOpen, TrendingUp, Shield, Award } from 'lucide-react';

const LandingPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleBuyClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const features = [
    'Técnicas avançadas de "otimização de entregas"',
    'Como identificar oportunidades em cada pedido',
    'Estratégias para maximizar seus "ganhos"',
    'Dicas de como evitar problemas com a lei (spoiler: não tem como)',
    'Case studies de pessoas que tentaram e se deram mal',
    'Bônus: Como lidar com sua consciência pesada'
  ];

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Ex-entregador (atualmente em liberdade condicional)',
      text: 'Esse ebook mudou minha vida! Agora sei exatamente o que NÃO fazer.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Advogada Criminalista',
      text: 'Recomendo a todos os meus clientes lerem este livro... para entenderem os erros que cometeram.',
      rating: 5
    },
    {
      name: 'Carlos Pereira',
      role: 'Consultor de Ética',
      text: 'Um guia completo de tudo que você deve evitar fazer na vida.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-slate-800" />
            <span className="text-xl font-bold text-slate-800">Amazon Secrets™</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#sobre" className="text-slate-600 hover:text-slate-900 transition-colors">Sobre</a>
            <a href="#conteudo" className="text-slate-600 hover:text-slate-900 transition-colors">Conteúdo</a>
            <a href="#depoimentos" className="text-slate-600 hover:text-slate-900 transition-colors">Depoimentos</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-300">
          🔥 Edição Limitada - Até a polícia descobrir
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Como Roubar com<br />
          <span className="text-slate-700">Entregas da Amazon</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          O guia definitivo que você <strong>NÃO</strong> deveria ler, mas que vai te ensinar
          exatamente por que isso é uma péssima ideia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
            onClick={handleBuyClick}
          >
            Comprar Agora por R$ 97,00
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-300 hover:bg-slate-50 px-8 py-6 text-lg"
          >
            Conhecer Melhor
          </Button>
        </div>
        {showMessage && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg inline-block animate-in fade-in slide-in-from-top-2">
            😂 Relaxa! É só uma brincadeira. Não roube nada, tá?
          </div>
        )}
        <div className="flex justify-center gap-8 mt-12 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>100% Ilegal</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <span>Garantia de Prisão</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            <span>Ficha Criminal Garantida</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Sobre Este Ebook (Fictício)
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Este é um guia satírico e educacional que demonstra, através do humor,
              todas as razões pelas quais você <strong>JAMAIS</strong> deveria considerar
              cometer crimes relacionados a entregas.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Escrito por "especialistas" que aprenderam da pior forma possível,
              este ebook é um compilado de histórias reais (e trágicas) de pessoas
              que tentaram enganar o sistema e acabaram se dando muito mal.
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-slate-800">
              <p className="text-slate-800 font-semibold mb-2">⚠️ Aviso Legal:</p>
              <p className="text-slate-600">
                Este produto é 100% fictício e criado apenas para fins humorísticos.
                Não incentivamos, apoiamos ou ensinamos qualquer atividade ilegal.
                Por favor, seja uma pessoa decente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="conteudo" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            O Que Você Vai "Aprender"
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-slate-700 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Depoimentos (Totalmente Fictícios)
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center border-slate-800 shadow-xl">
            <CardHeader className="space-y-4 pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Pronto Para NÃO Cometer Crimes?
              </CardTitle>
              <CardDescription className="text-lg">
                Por apenas R$ 97,00 você pode ter acesso a este ebook inexistente
              </CardDescription>
              <div className="pt-4">
                <div className="text-4xl font-bold text-slate-900 mb-2">R$ 97,00</div>
                <p className="text-slate-600">Pagamento único (que não existe)</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg"
                onClick={handleBuyClick}
              >
                Adquirir Agora (De Mentirinha)
              </Button>
              <p className="text-sm text-slate-500">
                💳 Não aceitamos cartão roubado (nem qualquer outro método de pagamento)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Amazon Secrets™
              </h3>
              <p className="text-slate-400 text-sm">
                Um projeto satírico para lembrar que honestidade é sempre o melhor caminho.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Importantes</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Aviso</h3>
              <p className="text-slate-400 text-sm">
                Este site é uma paródia criada para fins humorísticos. Não vendemos
                nem promovemos atividades ilegais.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Amazon Secrets™. Todos os direitos reservados (inclusive o de não roubar).</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;