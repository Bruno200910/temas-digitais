"use client"

import { Unlock, ExternalLink, TrendingUp, Users, GraduationCap, ShoppingBag } from "lucide-react"

export default function Home() {
  const handleUnlock = () => {
    const message = encodeURIComponent("Olá Bruno, Tudo bem? Quero acesso aos temas digitais")
    window.open(`https://wa.me/+351927273709?text=${message}`, '_blank')
  }

  const themes = [
    {
      id: 1,
      title: "Site de Nicho com Conteúdo Especializado",
      description: "Crie um site dedicado a um subnicho específico, como finanças pessoais, produtividade ou saúde holística. Ofereça conteúdo de valor, otimize para SEO de cauda longa e monetize com anúncios, links de afiliados, produtos digitais e consultorias.",
      example: "Um blog sobre \"Finanças Pessoais para Jovens\" com guias práticos, planilhas e cursos online.",
      tools: "WordPress, Elementor, Yoast/Rank Math, GA4, MailerLite/ConvertKit",
      howTo: [
        "Escolha um subnicho específico",
        "Crie artigos semanais otimizados para SEO",
        "Crie lead magnets como checklists",
        "Use Google AdSense e links de afiliados"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Marketplace/Galeria de Serviços para Freelancers Locais",
      description: "Um site onde freelancers e pequenos negócios podem se conectar, criar perfis, mostrar serviços e fechar negócios com segurança. Monetize com comissões, assinaturas e cursos.",
      example: "Plataforma de designers gráficos freelancers em uma cidade, com filtros por localização e especialidade.",
      tools: "WordPress + WP Job Manager, Stripe, PayPal, automação de e-mails",
      howTo: [
        "Crie perfis de prestadores de serviço",
        "Adicione filtros de busca por localização e serviço",
        "Ofereça método de pagamento seguro",
        "Promova com SEO local"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
      icon: Users,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Plataforma de Cursos Online/Mentoria em Nicho Específico",
      description: "Ofereça cursos, mentorias e sessões ao vivo em um nicho específico, como marketing digital ou desenvolvimento pessoal. Monetize com vendas, assinaturas e coaching 1:1.",
      example: "Curso de \"Técnicas Avançadas de Copywriting\" com webinars ao vivo e sessões de mentoria.",
      tools: "Teachable, Thinkific, WordPress com LearnDash, Zoom, Stripe",
      howTo: [
        "Produza cursos curtos e de alto valor",
        "Crie planos de assinatura mensais",
        "Realize webinars para upsell"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      title: "Website de E-commerce com Produtos Digitais",
      description: "Venda produtos digitais como templates, gráficos, músicas ou fotos. Organize por categorias, ofereça pacotes e use SEO de imagens para atrair visitantes.",
      example: "Loja de templates de sites para WordPress, pacotes de recursos gráficos e bancos de fotos com licenciamentos.",
      tools: "Shopify, Gumroad, Etsy, CDN (Cloudflare Images)",
      howTo: [
        "Crie produtos de alta qualidade e bem organizados",
        "Ofereça bundles e descontos especiais",
        "Use SEO de imagens para melhorar visibilidade"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      icon: ShoppingBag,
      gradient: "from-orange-500 to-red-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Temas Digitais Exclusivos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Este aplicativo oferece quatro temas especializados para você explorar e implementar em seus projetos digitais. 
              Cada tema inclui exemplos, imagens ilustrativas e orientações práticas.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Unlock className="w-4 h-4" />
              <span>Para desbloquear o conteúdo completo, clique no botão "Desbloquear 🔓" abaixo de cada tema</span>
            </div>
          </div>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {themes.map((theme) => {
            const IconComponent = theme.icon
            return (
              <div key={theme.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Theme Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${theme.gradient} text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Tema {theme.id}
                  </div>
                </div>

                {/* Theme Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {theme.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {theme.description}
                  </p>

                  {/* Example */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Exemplo:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      {theme.example}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Ferramentas recomendadas:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {theme.tools}
                    </p>
                  </div>

                  {/* How To */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Como fazer:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {theme.howTo.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Unlock Button */}
                  <button
                    onClick={handleUnlock}
                    className={`w-full bg-gradient-to-r ${theme.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group`}
                  >
                    <Unlock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Desbloquear 🔓
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Ao clicar em "Desbloquear", você será direcionado para o WhatsApp com uma mensagem personalizada</span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Inclua imagens ilustrativas de cada tema para facilitar a compreensão visual, além de exemplos práticos de implementação. 
              Assim, você terá uma visão clara do potencial de cada tema e poderá solicitar o desbloqueio facilmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}