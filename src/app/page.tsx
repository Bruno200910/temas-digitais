"use client"

import { useState } from "react"
import { Star, TrendingUp, Users, GraduationCap, ShoppingBag, DollarSign, Target, Lightbulb, Wrench, ChevronRight, ArrowLeft, BookOpen, BarChart3, Zap, CheckCircle } from "lucide-react"

export default function Home() {
  const [ratings, setRatings] = useState<{[key: number]: number}>({})
  const [currentTheme, setCurrentTheme] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const handleRating = (themeId: number, rating: number) => {
    setRatings(prev => ({ ...prev, [themeId]: rating }))
  }

  const themes = [
    {
      id: 1,
      title: "Site de Nicho com Conteúdo Especializado",
      description: "Crie um site focado em um subnicho específico, como finanças pessoais, melhoria de produtividade ou saúde holística. Produza conteúdo relevante que atenda a um público dedicado e interessado na sua área.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-600",
      pages: [
        {
          title: "Introdução e Conceitos Básicos",
          icon: BookOpen,
          content: {
            intro: "Sites de nicho são a base de muitos negócios digitais de sucesso. Diferente de sites generalistas, eles focam em um público específico com necessidades bem definidas.",
            keyPoints: [
              "Nicho específico = menos concorrência e maior autoridade",
              "Público dedicado busca soluções especializadas",
              "Monetização mais eficiente com audiência qualificada",
              "SEO mais fácil com palavras-chave de cauda longa"
            ],
            examples: [
              "Blog sobre 'Finanças para Freelancers' em vez de 'Finanças Pessoais'",
              "Site sobre 'Produtividade para Estudantes de Medicina' em vez de 'Produtividade'",
              "Portal sobre 'Yoga para Idosos' em vez de 'Exercícios'"
            ],
            actionItems: [
              "Identifique sua área de expertise",
              "Pesquise nichos com demanda mas pouca oferta",
              "Valide a ideia com pesquisas no Google Trends",
              "Defina seu público-alvo específico"
            ]
          }
        },
        {
          title: "Exemplos Práticos e Casos de Sucesso",
          icon: BarChart3,
          content: {
            intro: "Veja como sites de nicho reais geram resultados impressionantes focando em audiências específicas.",
            successCases: [
              {
                name: "Smart Passive Income",
                niche: "Renda passiva online",
                results: "Mais de $100k/mês em receita",
                strategy: "Conteúdo educativo + cursos + afiliados"
              },
              {
                name: "Nerd Fitness",
                niche: "Fitness para nerds/gamers",
                results: "Milhões de visitantes mensais",
                strategy: "Comunidade + app + coaching"
              },
              {
                name: "The Penny Hoarder",
                niche: "Economia doméstica",
                results: "Vendido por $102 milhões",
                strategy: "Conteúdo viral + newsletter + parcerias"
              }
            ],
            contentTypes: [
              "Guias completos (10.000+ palavras)",
              "Tutoriais passo a passo com screenshots",
              "Reviews honestas de produtos do nicho",
              "Estudos de caso pessoais",
              "Listas de recursos e ferramentas",
              "Entrevistas com especialistas"
            ],
            metrics: [
              "Tempo médio na página: 3-5 minutos",
              "Taxa de conversão: 2-5% (vs 0.5% sites gerais)",
              "Custo por clique: 50-70% menor",
              "Engajamento: 3x maior que sites generalistas"
            ]
          }
        },
        {
          title: "Estratégias de Monetização e Implementação",
          icon: DollarSign,
          content: {
            intro: "Sites de nicho oferecem múltiplas formas de monetização. A chave é diversificar as fontes de receita.",
            monetizationStrategies: [
              {
                method: "Marketing de Afiliados",
                potential: "$500-$10.000/mês",
                difficulty: "Fácil",
                description: "Promova produtos relacionados ao seu nicho",
                tips: ["Teste os produtos antes de recomendar", "Use links contextuais", "Crie comparações honestas"]
              },
              {
                method: "Produtos Digitais",
                potential: "$1.000-$50.000/mês",
                difficulty: "Médio",
                description: "E-books, cursos, templates, checklists",
                tips: ["Resolva problemas específicos", "Ofereça garantia", "Use depoimentos reais"]
              },
              {
                method: "Consultoria/Mentoria",
                potential: "$2.000-$20.000/mês",
                difficulty: "Médio",
                description: "Sessões 1:1 ou em grupo",
                tips: ["Comece com preços baixos", "Documente resultados", "Crie pacotes escaláveis"]
              },
              {
                method: "Anúncios Display",
                potential: "$100-$5.000/mês",
                difficulty: "Fácil",
                description: "Google AdSense, Media.net",
                tips: ["Mínimo 10k visitantes/mês", "Otimize posicionamento", "Teste diferentes redes"]
              }
            ],
            implementationSteps: [
              "Semana 1-2: Pesquisa de nicho e validação",
              "Semana 3-4: Setup técnico (domínio, hosting, WordPress)",
              "Semana 5-8: Criação dos primeiros 10 artigos",
              "Semana 9-12: SEO e otimização",
              "Mês 4-6: Monetização e crescimento"
            ]
          }
        },
        {
          title: "Ferramentas, Recursos e Próximos Passos",
          icon: Wrench,
          content: {
            intro: "As ferramentas certas podem acelerar significativamente o crescimento do seu site de nicho.",
            essentialTools: [
              {
                category: "Criação de Conteúdo",
                tools: [
                  "WordPress + Elementor (design)",
                  "Grammarly (correção)",
                  "Canva (imagens)",
                  "Loom (vídeos explicativos)"
                ]
              },
              {
                category: "SEO e Analytics",
                tools: [
                  "Yoast SEO (otimização)",
                  "Google Analytics 4 (métricas)",
                  "Google Search Console (indexação)",
                  "Ubersuggest (palavras-chave)"
                ]
              },
              {
                category: "Email Marketing",
                tools: [
                  "ConvertKit (automação)",
                  "MailerLite (iniciantes)",
                  "OptinMonster (pop-ups)",
                  "Leadpages (landing pages)"
                ]
              },
              {
                category: "Monetização",
                tools: [
                  "ThirstyAffiliates (links de afiliados)",
                  "WooCommerce (produtos digitais)",
                  "Calendly (agendamento)",
                  "Stripe (pagamentos)"
                ]
              }
            ],
            budgetBreakdown: [
              "Domínio: $10-15/ano",
              "Hosting: $50-100/ano",
              "Tema premium: $50-100 (único)",
              "Ferramentas SEO: $100-300/ano",
              "Email marketing: $200-500/ano",
              "Total primeiro ano: $400-1.000"
            ],
            nextSteps: [
              "Escolha seu nicho usando a fórmula: Paixão + Conhecimento + Demanda",
              "Registre domínio com palavras-chave do nicho",
              "Configure WordPress com tema otimizado para SEO",
              "Crie calendário editorial com 50 ideias de conteúdo",
              "Publique 3 artigos por semana nos primeiros 3 meses",
              "Configure Google Analytics e Search Console",
              "Crie lead magnet e configure email marketing",
              "Aplique para programas de afiliados relevantes"
            ],
            timeline: "Resultados esperados: 3-6 meses para primeiras receitas, 12-18 meses para receita significativa"
          }
        }
      ]
    },
    {
      id: 2,
      title: "Marketplace/Galeria de Serviços para Freelancers Locais",
      description: "Plataforma onde freelancers e pequenos negócios podem se cadastrar, oferecer seus serviços e conquistar clientes na região.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      pages: [
        {
          title: "Fundamentos do Marketplace Local",
          icon: BookOpen,
          content: {
            intro: "Marketplaces locais conectam prestadores de serviços com clientes na mesma região, criando um ecossistema de negócios próspero.",
            keyPoints: [
              "Foco geográfico reduz concorrência global",
              "Confiança maior em serviços locais",
              "Possibilidade de encontros presenciais",
              "SEO local mais eficiente"
            ],
            marketOpportunity: [
              "Mercado de serviços locais: $400 bilhões globalmente",
              "85% dos consumidores pesquisam serviços locais online",
              "Crescimento de 15% ao ano em plataformas locais",
              "Ticket médio 40% maior que plataformas globais"
            ],
            targetAudience: [
              "Freelancers: designers, fotógrafos, consultores",
              "Prestadores de serviços: eletricistas, jardineiros, personal trainers",
              "Pequenos negócios: salões, oficinas, pet shops",
              "Clientes: pessoas físicas e pequenas empresas locais"
            ],
            competitiveAdvantage: [
              "Conhecimento profundo da região",
              "Relacionamento próximo com usuários",
              "Parcerias com negócios locais",
              "Marketing boca a boca mais eficiente"
            ]
          }
        },
        {
          title: "Estrutura e Funcionalidades Essenciais",
          icon: BarChart3,
          content: {
            intro: "Um marketplace de sucesso precisa equilibrar simplicidade para usuários com funcionalidades robustas para o negócio.",
            coreFeatures: [
              {
                feature: "Perfis de Prestadores",
                description: "Portfólio, avaliações, preços, disponibilidade",
                importance: "Crítico",
                implementation: "WordPress + Ultimate Member ou custom"
              },
              {
                feature: "Sistema de Busca",
                description: "Filtros por localização, categoria, preço, avaliação",
                importance: "Crítico",
                implementation: "SearchWP ou Elasticsearch"
              },
              {
                feature: "Sistema de Pagamentos",
                description: "Pagamento seguro com retenção até conclusão",
                importance: "Crítico",
                implementation: "Stripe Connect ou PayPal Marketplace"
              },
              {
                feature: "Avaliações e Reviews",
                description: "Sistema de feedback bidirecional",
                importance: "Alto",
                implementation: "WP Product Review ou custom"
              },
              {
                feature: "Chat/Mensagens",
                description: "Comunicação entre clientes e prestadores",
                importance: "Alto",
                implementation: "BuddyPress ou plugin de chat"
              },
              {
                feature: "Agendamento",
                description: "Calendário integrado para serviços com hora marcada",
                importance: "Médio",
                implementation: "Bookly ou Calendly integration"
              }
            ],
            userJourney: [
              "Cliente busca serviço por categoria/localização",
              "Visualiza perfis e compara prestadores",
              "Envia mensagem ou solicita orçamento",
              "Negocia detalhes e agenda serviço",
              "Realiza pagamento (com ou sem retenção)",
              "Recebe serviço e avalia prestador",
              "Prestador recebe pagamento após confirmação"
            ],
            technicalRequirements: [
              "Hosting com suporte a PHP 8+ e MySQL",
              "SSL certificate para pagamentos seguros",
              "CDN para carregamento rápido de imagens",
              "Backup automático diário",
              "Sistema de cache para performance"
            ]
          }
        },
        {
          title: "Modelos de Monetização e Crescimento",
          icon: DollarSign,
          content: {
            intro: "Marketplaces podem gerar receita através de múltiplos canais, criando um negócio sustentável e escalável.",
            revenueModels: [
              {
                model: "Comissão por Transação",
                percentage: "5-15% por serviço",
                pros: ["Receita proporcional ao sucesso", "Sem custo fixo para prestadores"],
                cons: ["Dependente do volume", "Necessita sistema de pagamento robusto"],
                bestFor: "Marketplaces estabelecidos com alto volume"
              },
              {
                model: "Assinatura Mensal",
                price: "$10-50/mês por prestador",
                pros: ["Receita previsível", "Simples de implementar"],
                cons: ["Barreira de entrada", "Pode afastar iniciantes"],
                bestFor: "Nichos premium ou B2B"
              },
              {
                model: "Taxa de Listagem",
                price: "$5-20 por anúncio",
                pros: ["Receita imediata", "Filtra anúncios sérios"],
                cons: ["Pode reduzir volume", "Concorrência com plataformas gratuitas"],
                bestFor: "Mercados com alta demanda"
              },
              {
                model: "Modelo Freemium",
                structure: "Básico gratuito + recursos premium pagos",
                pros: ["Baixa barreira de entrada", "Upsell natural"],
                cons: ["Complexo de gerenciar", "Conversão pode ser baixa"],
                bestFor: "Crescimento rápido inicial"
              }
            ],
            growthStrategies: [
              "Comece com um lado (oferta ou demanda) e cresça organicamente",
              "Parcerias com associações locais e câmaras de comércio",
              "Marketing de conteúdo focado em SEO local",
              "Programa de referência com incentivos",
              "Eventos de networking para prestadores",
              "Campanhas pagas no Google Ads e Facebook"
            ],
            kpis: [
              "Número de prestadores ativos",
              "Número de clientes únicos",
              "Valor médio por transação",
              "Taxa de conversão (visitante → cliente)",
              "Net Promoter Score (NPS)",
              "Receita recorrente mensal (MRR)"
            ]
          }
        },
        {
          title: "Implementação Técnica e Lançamento",
          icon: Wrench,
          content: {
            intro: "A implementação técnica correta é crucial para o sucesso do marketplace. Veja o passo a passo completo.",
            techStack: [
              {
                component: "Frontend",
                options: ["WordPress + tema marketplace", "React + Next.js", "Vue.js + Nuxt"],
                recommendation: "WordPress para MVP, React para escala"
              },
              {
                component: "Backend",
                options: ["WordPress + plugins", "Node.js + Express", "PHP + Laravel"],
                recommendation: "WordPress para rapidez, Node.js para customização"
              },
              {
                component: "Database",
                options: ["MySQL", "PostgreSQL", "MongoDB"],
                recommendation: "PostgreSQL para dados relacionais complexos"
              },
              {
                component: "Pagamentos",
                options: ["Stripe Connect", "PayPal Marketplace", "Mercado Pago"],
                recommendation: "Stripe Connect para flexibilidade"
              },
              {
                component: "Hosting",
                options: ["AWS", "Google Cloud", "DigitalOcean", "WP Engine"],
                recommendation: "DigitalOcean para custo-benefício"
              }
            ],
            developmentPhases: [
              {
                phase: "Fase 1 - MVP (2-3 meses)",
                features: ["Cadastro de usuários", "Perfis básicos", "Busca simples", "Contato direto"],
                budget: "$5.000-15.000"
              },
              {
                phase: "Fase 2 - Monetização (1-2 meses)",
                features: ["Sistema de pagamentos", "Comissões", "Dashboard financeiro"],
                budget: "$3.000-8.000"
              },
              {
                phase: "Fase 3 - Escala (2-3 meses)",
                features: ["App mobile", "API", "Analytics avançado", "Automações"],
                budget: "$8.000-20.000"
              }
            ],
            launchStrategy: [
              "Pré-lançamento: Cadastre 20-50 prestadores de qualidade",
              "Beta fechado: Teste com 100 usuários por 30 dias",
              "Soft launch: Abra para público com marketing limitado",
              "Grand opening: Campanha de marketing completa",
              "Pós-lançamento: Otimização baseada em feedback"
            ],
            essentialPlugins: [
              "WP Job Manager (gestão de anúncios)",
              "WooCommerce + Dokan (marketplace)",
              "BuddyPress (comunidade)",
              "WP User Frontend (dashboard)",
              "Yoast Local SEO (SEO local)",
              "WP Rocket (performance)"
            ],
            budgetBreakdown: [
              "Desenvolvimento: $10.000-30.000",
              "Design: $2.000-5.000",
              "Hosting (primeiro ano): $500-2.000",
              "Marketing inicial: $3.000-10.000",
              "Legal/compliance: $1.000-3.000",
              "Total: $16.500-50.000"
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Plataforma de Cursos Online/Mentoria em Nicho Específico",
      description: "Ofereça cursos e mentorias em uma área de especialização, com foco em aprendizado online e escalabilidade.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      icon: GraduationCap,
      gradient: "from-emerald-500 to-teal-600",
      pages: [
        {
          title: "Mercado de Educação Online e Oportunidades",
          icon: BookOpen,
          content: {
            intro: "O mercado de educação online cresceu 900% na última década e continua em expansão acelerada, especialmente em nichos específicos.",
            marketStats: [
              "Mercado global: $350 bilhões em 2025",
              "Crescimento anual: 8-10%",
              "Cursos online: 85% de satisfação dos alunos",
              "ROI médio para criadores: 300-500%"
            ],
            whyNicheWorks: [
              "Menos concorrência que cursos generalistas",
              "Público mais engajado e disposto a pagar",
              "Autoridade mais fácil de estabelecer",
              "Boca a boca mais eficiente em comunidades específicas"
            ],
            successfulNiches: [
              {
                niche: "Marketing para Dentistas",
                creator: "Dr. Marketing",
                revenue: "$50k/mês",
                students: "2.000+ alunos"
              },
              {
                niche: "Excel para Contadores",
                creator: "Planilhas Pro",
                revenue: "$30k/mês",
                students: "5.000+ alunos"
              },
              {
                niche: "Fotografia de Casamentos",
                creator: "Wedding Photo Academy",
                revenue: "$80k/mês",
                students: "1.500+ alunos"
              }
            ],
            trends: [
              "Micro-learning: aulas de 5-15 minutos",
              "Cohort-based courses: turmas fechadas",
              "Live learning: aulas ao vivo",
              "Community-driven: foco na comunidade",
              "Mobile-first: consumo via smartphone"
            ]
          }
        },
        {
          title: "Estrutura de Cursos e Metodologias de Ensino",
          icon: BarChart3,
          content: {
            intro: "A estrutura do curso é fundamental para o sucesso. Alunos online têm atenção limitada e precisam de resultados rápidos.",
            courseStructure: [
              {
                module: "Módulo de Boas-vindas",
                duration: "30-60 min",
                content: ["Apresentação pessoal", "Expectativas do curso", "Como usar a plataforma", "Comunidade"],
                goal: "Engajamento inicial e redução de desistência"
              },
              {
                module: "Fundamentos",
                duration: "2-4 horas",
                content: ["Conceitos básicos", "Terminologia", "Mindset necessário", "Ferramentas essenciais"],
                goal: "Base sólida de conhecimento"
              },
              {
                module: "Implementação Prática",
                duration: "4-8 horas",
                content: ["Passo a passo", "Exercícios práticos", "Templates", "Estudos de caso"],
                goal: "Aplicação imediata do conhecimento"
              },
              {
                module: "Otimização e Escala",
                duration: "2-4 horas",
                content: ["Técnicas avançadas", "Automações", "Métricas", "Troubleshooting"],
                goal: "Resultados superiores e autonomia"
              },
              {
                module: "Próximos Passos",
                duration: "1-2 horas",
                content: ["Plano de ação", "Recursos adicionais", "Comunidade", "Upsells"],
                goal: "Continuidade e fidelização"
              }
            ],
            contentTypes: [
              "Vídeo-aulas (70%): Screencast + talking head",
              "Materiais escritos (15%): PDFs, checklists, templates",
              "Exercícios práticos (10%): Assignments, quizzes",
              "Conteúdo ao vivo (5%): Webinars, Q&A sessions"
            ],
            engagementTactics: [
              "Gamificação: badges, pontos, leaderboards",
              "Progresso visual: barras de progresso, certificados",
              "Comunidade ativa: fórum, grupo privado",
              "Accountability: deadlines, check-ins",
              "Suporte direto: chat, office hours"
            ],
            completionRates: [
              "Cursos tradicionais: 15-20%",
              "Com comunidade: 30-40%",
              "Com mentoria: 50-70%",
              "Cohort-based: 70-85%"
            ]
          }
        },
        {
          title: "Modelos de Negócio e Precificação",
          icon: DollarSign,
          content: {
            intro: "A escolha do modelo de negócio e estratégia de preços pode determinar o sucesso ou fracasso da sua plataforma educacional.",
            businessModels: [
              {
                model: "Curso Único",
                price: "$97-$2.997",
                pros: ["Simples de criar", "Pagamento único", "Fácil de vender"],
                cons: ["Receita limitada", "Sem recorrência", "Difícil escalar"],
                bestFor: "Iniciantes ou nichos pequenos"
              },
              {
                model: "Assinatura Mensal",
                price: "$29-$197/mês",
                pros: ["Receita recorrente", "Relacionamento longo", "Maior LTV"],
                cons: ["Necessita conteúdo constante", "Churn management"],
                bestFor: "Criadores com muito conteúdo"
              },
              {
                model: "Cohort-Based Course",
                price: "$500-$5.000",
                pros: ["Preços premium", "Alto engajamento", "Comunidade forte"],
                cons: ["Limitado por tempo", "Intensivo para criar"],
                bestFor: "Especialistas reconhecidos"
              },
              {
                model: "Mentoria 1:1",
                price: "$200-$500/hora",
                pros: ["Preços altos", "Resultados personalizados", "Relacionamento próximo"],
                cons: ["Não escalável", "Tempo limitado", "Dependente de você"],
                bestFor: "Complemento aos cursos"
              }
            ],
            pricingStrategies: [
              "Anchor pricing: Ofereça 3 opções (básico, premium, VIP)",
              "Early bird: Desconto para primeiros compradores",
              "Payment plans: Parcelamento para aumentar conversão",
              "Upsells: Mentoria, templates, ferramentas extras",
              "Bundles: Combine cursos relacionados"
            ],
            revenueProjections: [
              {
                scenario: "Conservador",
                students: "100 alunos/mês",
                price: "$297",
                revenue: "$29.700/mês",
                costs: "$8.000/mês",
                profit: "$21.700/mês"
              },
              {
                scenario: "Realista",
                students: "300 alunos/mês",
                price: "$497",
                revenue: "$149.100/mês",
                costs: "$25.000/mês",
                profit: "$124.100/mês"
              },
              {
                scenario: "Otimista",
                students: "500 alunos/mês",
                price: "$997",
                revenue: "$498.500/mês",
                costs: "$50.000/mês",
                profit: "$448.500/mês"
              }
            ],
            costStructure: [
              "Plataforma de cursos: $100-500/mês",
              "Marketing pago: 20-30% da receita",
              "Suporte/VA: $2.000-5.000/mês",
              "Produção de conteúdo: $3.000-10.000/mês",
              "Ferramentas e software: $200-1.000/mês"
            ]
          }
        },
        {
          title: "Plataformas, Ferramentas e Estratégias de Lançamento",
          icon: Wrench,
          content: {
            intro: "A escolha das ferramentas certas pode acelerar significativamente o crescimento da sua plataforma educacional.",
            platforms: [
              {
                platform: "Teachable",
                price: "$39-199/mês",
                pros: ["Fácil de usar", "Boa integração", "Suporte brasileiro"],
                cons: ["Taxas por transação", "Customização limitada"],
                bestFor: "Iniciantes e cursos simples"
              },
              {
                platform: "Thinkific",
                price: "$49-499/mês",
                pros: ["Muito customizável", "Sem taxas extras", "Recursos avançados"],
                cons: ["Curva de aprendizado", "Preço mais alto"],
                bestFor: "Negócios sérios e escaláveis"
              },
              {
                platform: "Kajabi",
                price: "$149-399/mês",
                pros: ["All-in-one", "Marketing integrado", "Templates bonitos"],
                cons: ["Caro", "Complexo para iniciantes"],
                bestFor: "Criadores com orçamento e múltiplos produtos"
              },
              {
                platform: "WordPress + LearnDash",
                price: "$200-500 setup + hosting",
                pros: ["Controle total", "Customização ilimitada", "Sem taxas"],
                cons: ["Técnico", "Manutenção necessária"],
                bestFor: "Desenvolvedores ou orçamento para desenvolvimento"
              }
            ],
            essentialTools: [
              {
                category: "Criação de Conteúdo",
                tools: [
                  "Loom (gravação de tela): $8/mês",
                  "Canva Pro (design): $12/mês",
                  "Descript (edição): $20/mês",
                  "Notion (organização): $8/mês"
                ]
              },
              {
                category: "Marketing",
                tools: [
                  "ConvertKit (email): $29/mês",
                  "Facebook Ads Manager (gratuito)",
                  "Google Ads (budget variável)",
                  "Hotjar (analytics): $32/mês"
                ]
              },
              {
                category: "Comunidade",
                tools: [
                  "Discord (gratuito)",
                  "Circle ($39/mês)",
                  "Facebook Groups (gratuito)",
                  "Slack ($6.67/mês por usuário)"
                ]
              }
            ],
            launchStrategy: [
              {
                phase: "Pré-lançamento (30 dias)",
                activities: [
                  "Criar landing page com 'coming soon'",
                  "Construir lista de email com lead magnet",
                  "Validar ideia com pesquisas e entrevistas",
                  "Criar primeiros módulos do curso",
                  "Definir preço e estratégia de lançamento"
                ],
                goal: "500-1000 emails na lista"
              },
              {
                phase: "Beta Launch (14 dias)",
                activities: [
                  "Oferecer curso com 50% desconto para beta testers",
                  "Coletar feedback detalhado",
                  "Ajustar conteúdo baseado no feedback",
                  "Criar depoimentos e casos de sucesso",
                  "Finalizar todos os módulos"
                ],
                goal: "20-50 beta students"
              },
              {
                phase: "Official Launch (7 dias)",
                activities: [
                  "Campanha de email para lista completa",
                  "Webinar de lançamento",
                  "Parcerias com influenciadores",
                  "Ads no Facebook e Google",
                  "Criar urgência com oferta limitada"
                ],
                goal: "100-500 vendas"
              },
              {
                phase: "Pós-lançamento (ongoing)",
                activities: [
                  "Evergreen funnel automatizado",
                  "Conteúdo regular no blog/YouTube",
                  "Parcerias e afiliados",
                  "Upsells e cross-sells",
                  "Novos cursos baseados em demanda"
                ],
                goal: "Crescimento sustentável"
              }
            ],
            successMetrics: [
              "Conversion rate: 2-5% (landing page)",
              "Course completion: 60%+",
              "Student satisfaction: 4.5+ stars",
              "Refund rate: <5%",
              "Monthly recurring revenue growth: 20%+"
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Website de E-commerce com Produtos Digitais",
      description: "Venda de ativos digitais de alta qualidade para criadores, designers e desenvolvedores.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      icon: ShoppingBag,
      gradient: "from-orange-500 to-red-600",
      pages: [
        {
          title: "Mercado de Produtos Digitais e Oportunidades",
          icon: BookOpen,
          content: {
            intro: "O mercado de produtos digitais é uma das áreas de maior crescimento no e-commerce, com margens altas e escalabilidade infinita.",
            marketOverview: [
              "Mercado global: $200+ bilhões",
              "Crescimento anual: 15-20%",
              "Margem de lucro: 80-95%",
              "Custo de distribuição: próximo a zero"
            ],
            productCategories: [
              {
                category: "Design Assets",
                examples: ["Templates", "Ícones", "Fontes", "Mockups"],
                market: "$15 bilhões",
                avgPrice: "$5-50",
                competition: "Alta"
              },
              {
                category: "Desenvolvimento",
                examples: ["Themes", "Plugins", "Scripts", "APIs"],
                market: "$25 bilhões",
                avgPrice: "$20-200",
                competition: "Média"
              },
              {
                category: "Conteúdo",
                examples: ["E-books", "Cursos", "Templates", "Planilhas"],
                market: "$50 bilhões",
                avgPrice: "$10-500",
                competition: "Média"
              },
              {
                category: "Mídia",
                examples: ["Fotos", "Vídeos", "Áudio", "Animações"],
                market: "$30 bilhões",
                avgPrice: "$1-100",
                competition: "Alta"
              }
            ],
            advantages: [
              "Sem estoque físico ou logística",
              "Vendas 24/7 automatizadas",
              "Escalabilidade infinita",
              "Margens de lucro altíssimas",
              "Mercado global desde o dia 1"
            ],
            challenges: [
              "Pirataria e proteção de conteúdo",
              "Concorrência com conteúdo gratuito",
              "Necessidade de produção constante",
              "Dependência de plataformas terceiras"
            ]
          }
        },
        {
          title: "Tipos de Produtos e Estratégias de Criação",
          icon: BarChart3,
          content: {
            intro: "O sucesso em produtos digitais está na escolha certa do tipo de produto e na execução de qualidade superior.",
            highDemandProducts: [
              {
                product: "Website Templates",
                demand: "Muito Alta",
                difficulty: "Média",
                price: "$30-150",
                timeToCreate: "20-40 horas",
                skills: "HTML, CSS, Design",
                platforms: ["ThemeForest", "TemplateMonster", "Próprio site"]
              },
              {
                product: "Notion Templates",
                demand: "Alta",
                difficulty: "Baixa",
                price: "$5-50",
                timeToCreate: "5-15 horas",
                skills: "Notion, Design básico",
                platforms: ["Gumroad", "Etsy", "Próprio site"]
              },
              {
                product: "Planilhas Excel/Google",
                demand: "Alta",
                difficulty: "Baixa-Média",
                price: "$10-100",
                timeToCreate: "10-30 horas",
                skills: "Excel avançado, Design",
                platforms: ["Etsy", "Gumroad", "Próprio site"]
              },
              {
                product: "Presets Lightroom",
                demand: "Média-Alta",
                difficulty: "Média",
                price: "$15-80",
                timeToCreate: "15-25 horas",
                skills: "Lightroom, Fotografia",
                platforms: ["Etsy", "Próprio site", "Instagram"]
              },
              {
                product: "Ícones e Ilustrações",
                demand: "Muito Alta",
                difficulty: "Alta",
                price: "$5-200",
                timeToCreate: "20-100 horas",
                skills: "Illustrator, Design",
                platforms: ["Shutterstock", "IconFinder", "Próprio site"]
              }
            ],
            creationProcess: [
              {
                step: "Pesquisa de Mercado",
                description: "Identifique gaps e oportunidades",
                tools: ["Google Trends", "Pinterest", "Behance", "Dribbble"],
                time: "2-5 horas"
              },
              {
                step: "Validação da Ideia",
                description: "Teste a demanda antes de criar",
                methods: ["Pesquisas", "Landing pages", "Pré-vendas"],
                time: "1-3 dias"
              },
              {
                step: "Criação do MVP",
                description: "Versão mínima viável do produto",
                focus: ["Funcionalidade core", "Design básico", "Teste rápido"],
                time: "1-2 semanas"
              },
              {
                step: "Refinamento",
                description: "Melhore baseado no feedback",
                activities: ["Polimento visual", "Funcionalidades extras", "Documentação"],
                time: "1-2 semanas"
              },
              {
                step: "Lançamento",
                description: "Publique e promova o produto",
                channels: ["Redes sociais", "Email list", "Parcerias"],
                time: "1 semana"
              }
            ],
            qualityStandards: [
              "Design profissional e moderno",
              "Documentação clara e completa",
              "Arquivos organizados e nomeados",
              "Múltiplos formatos quando aplicável",
              "Suporte pós-venda responsivo"
            ]
          }
        },
        {
          title: "Plataformas de Venda e Estratégias de Marketing",
          icon: DollarSign,
          content: {
            intro: "A escolha da plataforma e estratégia de marketing pode determinar o sucesso do seu negócio de produtos digitais.",
            platforms: [
              {
                platform: "Gumroad",
                commission: "3.5% + $0.30",
                pros: ["Fácil setup", "Boa para iniciantes", "Checkout otimizado"],
                cons: ["Limitações de customização", "Dependência da plataforma"],
                bestFor: "Produtos simples, criadores iniciantes",
                avgRevenue: "$500-5.000/mês"
              },
              {
                platform: "Etsy",
                commission: "6.5% total",
                pros: ["Tráfego orgânico alto", "Confiança do consumidor", "SEO forte"],
                cons: ["Muita concorrência", "Foco em handmade", "Políticas rígidas"],
                bestFor: "Templates, planilhas, arte digital",
                avgRevenue: "$1.000-10.000/mês"
              },
              {
                platform: "Shopify",
                cost: "$29/mês + 2.9%",
                pros: ["Controle total", "Customização", "Escalabilidade"],
                cons: ["Custo mensal", "Necessita tráfego próprio", "Setup complexo"],
                bestFor: "Negócios sérios, múltiplos produtos",
                avgRevenue: "$2.000-50.000/mês"
              },
              {
                platform: "WooCommerce",
                cost: "Hosting + plugins",
                pros: ["Gratuito", "Flexibilidade total", "Sem comissões"],
                cons: ["Técnico", "Manutenção", "Segurança"],
                bestFor: "Desenvolvedores, orçamento limitado",
                avgRevenue: "$1.000-unlimited"
              }
            ],
            marketingStrategies: [
              {
                strategy: "SEO Orgânico",
                cost: "Baixo",
                timeToResults: "3-6 meses",
                roi: "Alto (longo prazo)",
                tactics: [
                  "Blog com tutoriais relacionados",
                  "Otimização de produto pages",
                  "Link building com parcerias",
                  "YouTube SEO com demos"
                ]
              },
              {
                strategy: "Pinterest Marketing",
                cost: "Baixo-Médio",
                timeToResults: "1-3 meses",
                roi: "Muito Alto",
                tactics: [
                  "Pins de alta qualidade dos produtos",
                  "Rich Pins para e-commerce",
                  "Boards temáticos organizados",
                  "Pinterest Ads para produtos top"
                ]
              },
              {
                strategy: "Instagram/TikTok",
                cost: "Baixo",
                timeToResults: "1-2 meses",
                roi: "Alto",
                tactics: [
                  "Behind-the-scenes da criação",
                  "Tutorials e dicas rápidas",
                  "User-generated content",
                  "Stories com links diretos"
                ]
              },
              {
                strategy: "Email Marketing",
                cost: "Baixo",
                timeToResults: "Imediato",
                roi: "Muito Alto",
                tactics: [
                  "Lead magnets gratuitos",
                  "Sequência de boas-vindas",
                  "Lançamentos exclusivos",
                  "Cross-sell de produtos relacionados"
                ]
              }
            ],
            pricingStrategies: [
              "Freemium: Produto básico gratuito + versões premium",
              "Bundle pricing: Pacotes com desconto",
              "Tiered pricing: Básico, Pro, Premium",
              "Limited time offers: Urgência e escassez",
              "Volume discounts: Desconto por quantidade"
            ],
            conversionOptimization: [
              "Previews de alta qualidade",
              "Depoimentos e reviews sociais",
              "Garantia de satisfação",
              "Checkout simplificado",
              "Upsells relevantes no checkout"
            ]
          }
        },
        {
          title: "Automação, Escala e Otimização de Resultados",
          icon: Wrench,
          content: {
            intro: "Para transformar a venda de produtos digitais em um negócio escalável, a automação e otimização são fundamentais.",
            automationTools: [
              {
                category: "Criação de Conteúdo",
                tools: [
                  {
                    tool: "Canva Pro",
                    use: "Templates e designs automatizados",
                    cost: "$12/mês",
                    impact: "Reduz tempo de criação em 70%"
                  },
                  {
                    tool: "Figma + Plugins",
                    use: "Design systems e componentes reutilizáveis",
                    cost: "$12/mês",
                    impact: "Consistência e velocidade"
                  },
                  {
                    tool: "Adobe Creative Suite",
                    use: "Automações e actions personalizadas",
                    cost: "$53/mês",
                    impact: "Produção em massa"
                  }
                ]
              },
              {
                category: "Marketing",
                tools: [
                  {
                    tool: "Buffer/Hootsuite",
                    use: "Agendamento de posts automático",
                    cost: "$15/mês",
                    impact: "Presença constante nas redes"
                  },
                  {
                    tool: "ConvertKit",
                    use: "Email sequences automatizadas",
                    cost: "$29/mês",
                    impact: "Nurturing automático de leads"
                  },
                  {
                    tool: "Zapier",
                    use: "Integração entre ferramentas",
                    cost: "$20/mês",
                    impact: "Workflow completamente automatizado"
                  }
                ]
              },
              {
                category: "Vendas",
                tools: [
                  {
                    tool: "Gumroad/Shopify",
                    use: "Processamento automático de pedidos",
                    cost: "3.5-6%",
                    impact: "Vendas 24/7 sem intervenção"
                  },
                  {
                    tool: "SendOwl",
                    use: "Entrega automática de produtos",
                    cost: "$15/mês",
                    impact: "Experiência do cliente otimizada"
                  }
                ]
              }
            ],
            scalingStrategies: [
              {
                strategy: "Productização de Serviços",
                description: "Transforme serviços personalizados em produtos padronizados",
                example: "Consultoria → Template de estratégia",
                potential: "10x mais vendas com mesmo esforço"
              },
              {
                strategy: "White Label Products",
                description: "Crie produtos que outros podem revender",
                example: "Templates que agências podem customizar",
                potential: "Receita passiva através de parceiros"
              },
              {
                strategy: "Subscription Model",
                description: "Transforme vendas únicas em receita recorrente",
                example: "Biblioteca de templates com novos itens mensais",
                potential: "MRR previsível e crescente"
              },
              {
                strategy: "Marketplace Próprio",
                description: "Convide outros criadores para vender na sua plataforma",
                example: "Comissão de 30-50% sobre vendas de terceiros",
                potential: "Receita sem criar produtos"
              }
            ],
            optimizationMetrics: [
              {
                metric: "Conversion Rate",
                benchmark: "2-5%",
                optimization: ["A/B test landing pages", "Melhore previews", "Simplifique checkout"]
              },
              {
                metric: "Average Order Value",
                benchmark: "$25-75",
                optimization: ["Bundles", "Upsells", "Cross-sells"]
              },
              {
                metric: "Customer Lifetime Value",
                benchmark: "$100-500",
                optimization: ["Email marketing", "Novos produtos", "Programa de fidelidade"]
              },
              {
                metric: "Refund Rate",
                benchmark: "<5%",
                optimization: ["Previews detalhados", "Descrições claras", "Suporte rápido"]
              }
            ],
            advancedTactics: [
              "Análise de dados para identificar produtos mais vendidos",
              "Seasonal marketing para produtos sazonais",
              "Influencer partnerships para alcance maior",
              "Affiliate program para vendas através de terceiros",
              "International expansion com localização",
              "Mobile optimization para vendas mobile"
            ],
            monthlyActionPlan: [
              "Semana 1: Análise de performance e identificação de oportunidades",
              "Semana 2: Criação de novos produtos baseados em demanda",
              "Semana 3: Otimização de produtos existentes",
              "Semana 4: Implementação de novas estratégias de marketing"
            ],
            revenueProjections: [
              {
                month: "Mês 1-3",
                products: "5-10 produtos",
                sales: "10-50/mês",
                revenue: "$500-2.500",
                focus: "Validação e aprendizado"
              },
              {
                month: "Mês 4-6",
                products: "15-25 produtos",
                sales: "50-200/mês",
                revenue: "$2.500-10.000",
                focus: "Otimização e escala"
              },
              {
                month: "Mês 7-12",
                products: "30-50 produtos",
                sales: "200-500/mês",
                revenue: "$10.000-25.000",
                focus: "Automação e diversificação"
              }
            ]
          }
        }
      ]
    }
  ]

  const StarRating = ({ themeId, currentRating }: { themeId: number, currentRating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(themeId, star)}
            className="transition-all duration-200 hover:scale-110"
          >
            <Star
              className={`w-6 h-6 ${
                star <= currentRating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 hover:text-yellow-300'
              }`}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {currentRating > 0 ? `${currentRating}/5` : 'Não avaliado'}
        </span>
      </div>
    )
  }

  if (currentTheme !== null) {
    const theme = themes.find(t => t.id === currentTheme)
    if (!theme) return null

    const currentPageData = theme.pages[currentPage - 1]
    const IconComponent = theme.icon
    const PageIconComponent = currentPageData.icon

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentTheme(null)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar aos Temas</span>
              </button>
              
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${theme.gradient} text-white`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                    {theme.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Página {currentPage} de {theme.pages.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {theme.pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === index + 1
                        ? `bg-gradient-to-r ${theme.gradient}`
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Page Header */}
            <div className={`bg-gradient-to-r ${theme.gradient} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-white bg-opacity-20 rounded-2xl">
                  <PageIconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{currentPageData.title}</h2>
                  <p className="text-white text-opacity-90">Tema {theme.id} - Página {currentPage}</p>
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {currentPageData.content.intro}
                </p>

                {/* Dynamic Content Rendering */}
                {Object.entries(currentPageData.content).map(([key, value]) => {
                  if (key === 'intro') return null

                  return (
                    <div key={key} className="mb-12">
                      {key === 'keyPoints' && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-yellow-500" />
                            Pontos-Chave
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(value as string[]).map((point, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {key === 'examples' && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-blue-500" />
                            Exemplos Práticos
                          </h3>
                          <div className="space-y-3">
                            {(value as string[]).map((example, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">{example}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {key === 'actionItems' && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Target className="w-6 h-6 text-green-500" />
                            Próximos Passos
                          </h3>
                          <div className="space-y-3">
                            {(value as string[]).map((item, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Handle complex objects */}
                      {typeof value === 'object' && !Array.isArray(value) && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h3>
                          <div className="space-y-6">
                            {Object.entries(value as any).map(([subKey, subValue]) => (
                              <div key={subKey} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                                  {subKey.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                                {Array.isArray(subValue) ? (
                                  <ul className="space-y-2">
                                    {subValue.map((item, index) => (
                                      <li key={index} className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-gray-600 dark:text-gray-300">
                                          {typeof item === 'string' ? item : JSON.stringify(item)}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-gray-600 dark:text-gray-300">{String(subValue)}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Handle arrays of strings */}
                      {Array.isArray(value) && typeof value[0] === 'string' && !['keyPoints', 'examples', 'actionItems'].includes(key) && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(value as string[]).map((item, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Página Anterior
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {currentPage} de {theme.pages.length}
                  </span>
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(theme.pages.length, currentPage + 1))}
                  disabled={currentPage === theme.pages.length}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    currentPage === theme.pages.length
                      ? 'text-gray-400 cursor-not-allowed'
                      : `text-white bg-gradient-to-r ${theme.gradient} hover:shadow-lg hover:scale-105`
                  }`}
                >
                  Próxima Página
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Rating Section */}
            {currentPage === theme.pages.length && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Avalie este tema completo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Que nota você daria para este tema após ler todas as páginas?
                  </p>
                  <StarRating themeId={theme.id} currentRating={ratings[theme.id] || 0} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Temas Digitais Exclusivos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Este aplicativo oferece uma exploração detalhada de quatro temas populares no universo digital, 
              com imagens ilustrativas, exemplos práticos, dicas essenciais e recomendações de ferramentas para cada um. 
              Cada tema possui 4 páginas completas com conteúdo aprofundado para captar seu interesse.
            </p>
          </div>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme) => {
            const IconComponent = theme.icon
            return (
              <div key={theme.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-105">
                {/* Theme Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-30`}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${theme.gradient} text-white shadow-xl`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 inline-block">
                      Tema {theme.id} • {theme.pages.length} páginas
                    </div>
                  </div>
                </div>

                {/* Theme Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {theme.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {theme.description}
                  </p>

                  {/* Pages Preview */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Páginas do Tema:
                    </h3>
                    <div className="space-y-2">
                      {theme.pages.map((page, index) => {
                        const PageIcon = page.icon
                        return (
                          <div key={index} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                            <PageIcon className="w-4 h-4 text-gray-400" />
                            <span>Página {index + 1}: {page.title}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentTheme(theme.id)
                        setCurrentPage(1)
                      }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r ${theme.gradient} hover:shadow-lg hover:scale-105 transition-all`}
                    >
                      Explorar Tema
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sua avaliação:</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRating(theme.id, star)}
                            className="transition-all duration-200 hover:scale-110"
                          >
                            <Star
                              className={`w-4 h-4 ${
                                star <= (ratings[theme.id] || 0)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300 hover:text-yellow-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary Section */}
      {Object.keys(ratings).length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Resumo das suas Avaliações
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Veja como você avaliou cada tema digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {themes.map((theme) => {
                const IconComponent = theme.icon
                const rating = ratings[theme.id] || 0
                return (
                  <div key={theme.id} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${theme.gradient} text-white mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Tema {theme.id}
                    </h3>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {rating > 0 ? `${rating}/5 estrelas` : 'Não avaliado'}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">
                  Média geral: {(Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length).toFixed(1)}/5
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Este aplicativo fornece uma estrutura completa para educar e orientar usuários interessados em diferentes áreas do mercado digital, 
              com exemplos visuais, dicas práticas e espaço para feedback.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore cada tema com 4 páginas detalhadas, avalie conforme sua preferência e descubra qual estratégia digital combina mais com seus objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}