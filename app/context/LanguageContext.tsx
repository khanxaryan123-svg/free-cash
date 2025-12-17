'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = "English" | "Chinese" | "French" | "German" | "Portuguese" | "Russian" | "Arabic" | "Spanish";

type Translations = {
  footer: {
    about: string;
    sections: {
      freecash: string;
      waysToEarn: string;
      resources: string;
      business: string;
    };
    copyright: string;
    links: {
      terms: string;
      privacy: string;
      cookie: string;
      affiliate: string;
    };
    linkLists: {
      freecash: string[];
      waysToEarn: string[];
      resources: string[];
      business: string[];
    };
    selectLanguage: string;
  };
  header: {
    cashout: string;
    signin: string;
    signup: string;
  };
};

const translations: Record<Language, Translations> = {
  English: {
    header: {
      cashout: "Cashout",
      signin: "Sign In",
      signup: "Sign Up",
    },
    footer: {
      about: "Freecash is a platform where users can earn money and rewards by completing tasks, surveys, and offers, with quick payout options like gift cards, PayPal, and cryptocurrencies.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "Ways to Make Money",
        resources: "Resources",
        business: "Business",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        cookie: "Cookie Policy",
        affiliate: "Affiliate Policy",
      },
      linkLists: {
        freecash: [
          "Cashout", "How to earn?", "Free Gift Cards", "Free Crypto", 
          "Free Money", "Free Paypal", "Free Amazon Gift Card", 
          "Free Apple Gift Card", "Free Google Play Gift Card", 
          "Free Bitcoin", "Free Ethereum", "Free Litecoin"
        ],
        waysToEarn: [
          "Earn Playing Games", "Surveys For Money", "Earn Testing Products", 
          "Earn Downloading Apps", "Earn Watching Videos", "Earn Watching Ads", 
          "Earn Completing Free Trial", "Earn Doing Tasks", "Free Lottery"
        ],
        resources: [
          "Academy", "Help Center", "Make Money From Home", "Side Hustles", 
          "Make Money Online", "Part Time Jobs", "Remote Jobs", "Free Robux", 
          "Free Steam Gift Card", "Free Doordash Gift Card", "Free PSN Gift Card", 
          "Free Xbox Gift Card", "Free Spotify Premium"
        ],
        business: [
          "Affiliate Program", "Become a Partner", "Advertise On Freecash"
        ]
      },
      selectLanguage: "Select your language",
    }
  },
  Chinese: {
    header: {
      cashout: "提现",
      signin: "登录",
      signup: "注册",
    },
    footer: {
      about: "Freecash 是一个平台，用户可以通过完成任务、调查和优惠来赚取金钱和奖励，提供礼品卡、PayPal 和加密货币等快速支付选项。",
      sections: {
        freecash: "Freecash",
        waysToEarn: "赚钱方法",
        resources: "资源",
        business: "商业",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "服务条款",
        privacy: "隐私政策",
        cookie: "Cookie 政策",
        affiliate: "联盟政策",
      },
      linkLists: {
        freecash: [
          "提现", "如何赚钱？", "免费礼品卡", "免费加密货币", 
          "免费资金", "免费 Paypal", "免费亚马逊礼品卡", 
          "免费苹果礼品卡", "免费 Google Play 礼品卡", 
          "免费比特币", "免费以太坊", "免费莱特币"
        ],
        waysToEarn: [
          "玩游戏赚钱", "做调查赚钱", "测试产品赚钱", 
          "下载应用赚钱", "看视频赚钱", "看广告赚钱", 
          "完成免费试用赚钱", "做任务赚钱", "免费彩票"
        ],
        resources: [
          "学院", "帮助中心", "在家赚钱", "副业", 
          "在线赚钱", "兼职工作", "远程工作", "免费 Robux", 
          "免费 Steam 礼品卡", "免费 Doordash 礼品卡", "免费 PSN 礼品卡", 
          "免费 Xbox 礼品卡", "免费 Spotify 会员"
        ],
        business: [
          "联盟计划", "成为合作伙伴", "在 Freecash 上做广告"
        ]
      },
      selectLanguage: "选择您的语言",
    }
  },
  French: {
    header: {
      cashout: "Retrait",
      signin: "Connexion",
      signup: "S'inscrire",
    },
    footer: {
      about: "Freecash est une plateforme où les utilisateurs peuvent gagner de l'argent et des récompenses en complétant des tâches, des enquêtes et des offres, avec des options de paiement rapides comme des cartes-cadeaux, PayPal et des crypto-monnaies.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "Moyens de gagner de l'argent",
        resources: "Ressources",
        business: "Entreprise",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "Conditions d'utilisation",
        privacy: "Politique de confidentialité",
        cookie: "Politique relative aux cookies",
        affiliate: "Politique d'affiliation",
      },
      linkLists: {
        freecash: [
          "Retrait", "Comment gagner ?", "Cartes-cadeaux gratuites", "Crypto gratuite", 
          "Argent gratuit", "Paypal gratuit", "Carte-cadeau Amazon gratuite", 
          "Carte-cadeau Apple gratuite", "Carte-cadeau Google Play gratuite", 
          "Bitcoin gratuit", "Ethereum gratuit", "Litecoin gratuit"
        ],
        waysToEarn: [
          "Gagner en jouant", "Sondages rémunérés", "Tester des produits", 
          "Télécharger des applis", "Regarder des vidéos", "Regarder des pubs", 
          "Essais gratuits", "Faire des tâches", "Loterie gratuite"
        ],
        resources: [
          "Académie", "Centre d'aide", "Gagner de l'argent chez soi", "Activités annexes", 
          "Gagner de l'argent en ligne", "Emplois à temps partiel", "Emplois à distance", "Robux gratuits", 
          "Carte Steam gratuite", "Carte Doordash gratuite", "Carte PSN gratuite", 
          "Carte Xbox gratuite", "Spotify Premium gratuit"
        ],
        business: [
          "Programme d'affiliation", "Devenir partenaire", "Publicité sur Freecash"
        ]
      },
      selectLanguage: "Sélectionnez votre langue",
    }
  },
  German: {
    header: {
      cashout: "Auszahlung",
      signin: "Anmelden",
      signup: "Registrieren",
    },
    footer: {
      about: "Freecash ist eine Plattform, auf der Benutzer Geld und Belohnungen verdienen können, indem sie Aufgaben, Umfragen und Angebote abschließen, mit schnellen Auszahlungsoptionen wie Geschenkkarten, PayPal und Kryptowährungen.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "Möglichkeiten Geld zu verdienen",
        resources: "Ressourcen",
        business: "Geschäft",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutzrichtlinie",
        cookie: "Cookie-Richtlinie",
        affiliate: "Partnerprogramm-Richtlinie",
      },
      linkLists: {
        freecash: [
          "Auszahlung", "Wie verdienen?", "Kostenlose Geschenkkarten", "Kostenlose Krypto", 
          "Kostenloses Geld", "Kostenloses PayPal", "Kostenlose Amazon Karte", 
          "Kostenlose Apple Karte", "Kostenlose Google Play Karte", 
          "Kostenloser Bitcoin", "Kostenloses Ethereum", "Kostenloser Litecoin"
        ],
        waysToEarn: [
          "Verdienen durch Spiele", "Umfragen für Geld", "Produkte testen", 
          "Apps herunterladen", "Videos ansehen", "Werbung ansehen", 
          "Kostenlose Testversionen", "Aufgaben erledigen", "Kostenlose Lotterie"
        ],
        resources: [
          "Akademie", "Hilfe-Center", "Geld von zu Hause verdienen", "Nebenjobs", 
          "Geld online verdienen", "Teilzeitjobs", "Remote-Jobs", "Kostenlose Robux", 
          "Kostenlose Steam Karte", "Kostenlose Doordash Karte", "Kostenlose PSN Karte", 
          "Kostenlose Xbox Karte", "Kostenloses Spotify Premium"
        ],
        business: [
          "Partnerprogramm", "Partner werden", "Werben auf Freecash"
        ]
      },
      selectLanguage: "Wählen Sie Ihre Sprache",
    }
  },
  Portuguese: {
    header: {
      cashout: "Saque",
      signin: "Entrar",
      signup: "Inscrever-se",
    },
    footer: {
      about: "Freecash é uma plataforma onde os usuários podem ganhar dinheiro e recompensas completando tarefas, pesquisas e ofertas, com opções de pagamento rápido como cartões-presente, PayPal e criptomoedas.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "Maneiras de ganhar dinheiro",
        resources: "Recursos",
        business: "Negócios",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "Termos de Serviço",
        privacy: "Política de Privacidade",
        cookie: "Política de Cookies",
        affiliate: "Política de Afiliados",
      },
      linkLists: {
        freecash: [
          "Saque", "Como ganhar?", "Cartões-presente grátis", "Cripto grátis", 
          "Dinheiro grátis", "Paypal grátis", "Cartão Amazon grátis", 
          "Cartão Apple grátis", "Cartão Google Play grátis", 
          "Bitcoin grátis", "Ethereum grátis", "Litecoin grátis"
        ],
        waysToEarn: [
          "Ganhar jogando", "Pesquisas por dinheiro", "Ganhar testando produtos", 
          "Ganhar baixando apps", "Ganhar assistindo vídeos", "Ganhar assistindo anúncios", 
          "Ganhar completando testes grátis", "Ganhar fazendo tarefas", "Loteria grátis"
        ],
        resources: [
          "Academia", "Central de Ajuda", "Ganhar dinheiro em casa", "Renda extra", 
          "Ganhar dinheiro online", "Trabalhos de meio período", "Trabalhos remotos", "Robux grátis", 
          "Cartão Steam grátis", "Cartão Doordash grátis", "Cartão PSN grátis", 
          "Cartão Xbox grátis", "Spotify Premium grátis"
        ],
        business: [
          "Programa de Afiliados", "Torne-se um parceiro", "Anuncie no Freecash"
        ]
      },
      selectLanguage: "Selecione seu idioma",
    }
  },
  Russian: {
    header: {
      cashout: "Вывод средств",
      signin: "Войти",
      signup: "Регистрация",
    },
    footer: {
      about: "Freecash — это платформа, где пользователи могут зарабатывать деньги и вознаграждения, выполняя задания, опросы и предложения, с быстрыми вариантами выплат, такими как подарочные карты, PayPal и криптовалюты.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "Способы заработка",
        resources: "Ресурсы",
        business: "Бизнес",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "Условия обслуживания",
        privacy: "Политика конфиденциальности",
        cookie: "Политика использования файлов cookie",
        affiliate: "Партнерская политика",
      },
      linkLists: {
        freecash: [
          "Вывод", "Как заработать?", "Бесплатные подарочные карты", "Бесплатная крипта", 
          "Бесплатные деньги", "Бесплатный Paypal", "Бесплатная карта Amazon", 
          "Бесплатная карта Apple", "Бесплатная карта Google Play", 
          "Бесплатный Bitcoin", "Бесплатный Ethereum", "Бесплатный Litecoin"
        ],
        waysToEarn: [
          "Заработок на играх", "Опросы за деньги", "Заработок на тестировании", 
          "Заработок на скачивании приложений", "Заработок на просмотре видео", "Заработок на просмотре рекламы", 
          "Заработок на бесплатных пробных версиях", "Заработок на заданиях", "Бесплатная лотерея"
        ],
        resources: [
          "Академия", "Центр помощи", "Заработок из дома", "Подработка", 
          "Заработок в интернете", "Работа на полставки", "Удаленная работа", "Бесплатные Robux", 
          "Бесплатная карта Steam", "Бесплатная карта Doordash", "Бесплатная карта PSN", 
          "Бесплатная карта Xbox", "Бесплатный Spotify Premium"
        ],
        business: [
          "Партнерская программа", "Стать партнером", "Реклама на Freecash"
        ]
      },
      selectLanguage: "Выберите ваш язык",
    }
  },
  Arabic: {
    header: {
      cashout: "سحب الأموال",
      signin: "تسجيل الدخول",
      signup: "اشتراك",
    },
    footer: {
      about: "Freecash هي منصة حيث يمكن للمستخدمين كسب المال والمكافآت من خلال إكمال المهام والاستطلاعات والعروض، مع خيارات دفع سريعة مثل بطاقات الهدايا وPayPal والعملات المشفرة.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "طرق لكسب المال",
        resources: "الموارد",
        business: "أعمال",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "شروط الخدمة",
        privacy: "سياسة الخصوصية",
        cookie: "سياسة ملفات تعريف الارتباط",
        affiliate: "سياسة الإحالة",
      },
      linkLists: {
        freecash: [
          "سحب", "كيف تكسب؟", "بطاقات هدايا مجانية", "عملات مشفرة مجانية", 
          "مال مجاني", "Paypal مجاني", "بطاقة Amazon مجانية", 
          "بطاقة Apple مجانية", "بطاقة Google Play مجانية", 
          "Bitcoin مجاني", "Ethereum مجاني", "Litecoin مجاني"
        ],
        waysToEarn: [
          "اكسب من الألعاب", "استطلاعات بمقابل مادي", "اكسب من اختبار المنتجات", 
          "اكسب من تحميل التطبيقات", "اكسب من مشاهدة الفيديوهات", "اكسب من مشاهدة الإعلانات", 
          "اكسب من الفترات التجريبية", "اكسب من إتمام المهام", "يانصيب مجاني"
        ],
        resources: [
          "الأكاديمية", "مركز المساعدة", "كسب المال من المنزل", "أعمال جانبية", 
          "كسب المال عبر الإنترنت", "وظائف بدوام جزئي", "وظائف عن بعد", "Robux مجاني", 
          "بطاقة Steam مجانية", "بطاقة Doordash مجانية", "بطاقة PSN مجانية", 
          "بطاقة Xbox مجانية", "Spotify Premium مجاني"
        ],
        business: [
          "برنامج الإحالة", "كن شريكاً", "أعلن على Freecash"
        ]
      },
      selectLanguage: "اختر لغتك",
    }
  },
  Spanish: {
    header: {
      cashout: "Retiro",
      signin: "Iniciar sesión",
      signup: "Registrarse",
    },
    footer: {
      about: "Freecash es una plataforma donde los usuarios pueden ganar dinero y recompensas completando tareas, encuestas y ofertas, con opciones de pago rápido como tarjetas de regalo, PayPal y criptomonedas.",
      sections: {
        freecash: "Freecash",
        waysToEarn: "Formas de ganar dinero",
        resources: "Recursos",
        business: "Negocios",
      },
      copyright: "© Freecash 2025",
      links: {
        terms: "Términos de servicio",
        privacy: "Política de privacidad",
        cookie: "Política de cookies",
        affiliate: "Política de afiliados",
      },
      linkLists: {
        freecash: [
          "Retiro", "¿Cómo ganar?", "Tarjetas de regalo gratis", "Cripto gratis", 
          "Dinero gratis", "Paypal gratis", "Tarjeta Amazon gratis", 
          "Tarjeta Apple gratis", "Tarjeta Google Play gratis", 
          "Bitcoin gratis", "Ethereum gratis", "Litecoin gratis"
        ],
        waysToEarn: [
          "Ganar jugando", "Encuestas por dinero", "Ganar probando productos", 
          "Ganar descargando apps", "Ganar viendo videos", "Ganar viendo anuncios", 
          "Ganar completando pruebas gratis", "Ganar haciendo tareas", "Lotería gratis"
        ],
        resources: [
          "Academia", "Centro de ayuda", "Ganar dinero desde casa", "Trabajos secundarios", 
          "Ganar dinero en línea", "Trabajos a tiempo parcial", "Trabajos remotos", "Robux gratis", 
          "Tarjeta Steam gratis", "Tarjeta Doordash gratis", "Tarjeta PSN gratis", 
          "Tarjeta Xbox gratis", "Spotify Premium gratis"
        ],
        business: [
          "Programa de afiliados", "Conviértete en socio", "Anúnciate en Freecash"
        ]
      },
      selectLanguage: "Seleccione su idioma",
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (isOpen: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("English");
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t: translations[language],
      isLanguageModalOpen,
      setIsLanguageModalOpen
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
