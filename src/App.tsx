import { useEffect, useMemo, useState } from 'react';

type Locale = 'ru' | 'ua';

type StoryLead = {
  section: string;
  title: string;
  description: string;
};

type Briefing = {
  title: string;
  cadence: string;
  blurb: string;
};

type GuideCard = {
  category: string;
  title: string;
  meta: string;
};

type LocalizedContent = {
  mainNav: string[];
  cityTags: string[];
  tickerItems: string[];
  leadStory: {
    section: string;
    title: string;
    description: string;
    image: string;
  };
  latestNews: StoryLead[];
  worldNews: string[];
  briefings: Briefing[];
  coverage: Record<string, string[]>;
  guideCards: GuideCard[];
    ui: {
    events: string;
    emailBriefingsChip: string;
    signIn: string;
    tagline: string;
    dateLine: string;
    latestNewsTitle: string;
    worldNewsTitle: string;
    liveGuide: string;
    topLabel: string;
    projectName: string;
    heroTitle: string;
    heroSubtitle: string;
    menu: string;
    search: string;
    subscribe: string;
    readAnalysis: string;
    readTime: string;
    docsAndLife: string;
    updatedToday: string;
    format: string;
    formatTitle: string;
    formatText: string;
    emailTitle: string;
    emailText: string;
    emailPlaceholder: string;
    subscribeNow: string;
    briefingsTitle: string;
    briefingsAction: string;
    coverageTitle: string;
    coverageAction: string;
    guidesTitle: string;
    guidesAction: string;
    approach: string;
    approachTitle: string;
    approachText: string;
    guideLabel: string;
    langRu: string;
    langUa: string;
  };
};

const content: Record<Locale, LocalizedContent> = {
  ru: {
    mainNav: ['Новости', 'Легализация', 'Работа', 'Жилье', 'Документы', 'Медицина', 'Учеба', 'Язык', 'Истории'],
    cityTags: ['Варшава', 'Краков', 'Вроцлав', 'Гданьск', 'Познань', 'Катовице'],
    tickerItems: [
      'Новые правила для karty pobytu: что важно проверить на этой неделе.',
      'Аренда в крупных городах: где выше спрос и размер залогов.',
      'Работа без польского: какие вакансии реально доступны.',
      'Как быстрее записаться к врачу по NFZ.',
      'PESEL, meldunek, umowa najmu: что нужно в первые недели.',
    ],
    leadStory: {
      section: 'Главная тема',
      title: 'Что меняется для русско- и украиноязычных эмигрантов в Польше в 2026 году',
      description:
        'Не просто новости, а понятный разбор: документы, жилье, работа, медицина, цены и бытовые изменения простым языком.',
      image:
        'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1400&q=80',
    },
    latestNews: [
      {
        section: 'Жилье',
        title: 'Как снять квартиру и не попасть на плохой договор или лишний залог',
        description: 'Короткий практический материал с красными флагами и чеклистом перед подписанием umowa najmu.',
      },
      {
        section: 'Работа',
        title: 'Где искать первую работу без сильного польского и какие вакансии чаще всего реальные',
        description: 'Сборка по площадкам и условиям: как читать вакансию без самообмана.',
      },
      {
        section: 'Документы',
        title: 'PESEL, meldunek, ZUS, NFZ: порядок действий в первые 30 дней',
        description: 'Стартовый маршрут для человека, который только приехал и не хочет запутаться.',
      },
    ],
    worldNews: [
      'Что срочно проверить в документах на этой неделе.',
      'Какие города сильнее всего перегреты по аренде.',
      'Где чаще всего ошибаются при подаче на побыт и регистрации адреса.',
      'Что делать, если работодатель тянет с договором или выплатой.',
      'Как попасть к врачу и когда имеет смысл идти платно.',
      'Какие польские фразы нужны в банке, уженде и на съеме жилья.',
    ],
    briefings: [
      {
        title: 'Утро в Польше',
        cadence: 'каждый будний день',
        blurb: 'Главные новости Польши и эмиграции за 5 минут.',
      },
      {
        title: 'Документы и право',
        cadence: '2 раза в неделю',
        blurb: 'Побыт, PESEL, регистрация, договоры и пояснения без бюрократического тумана.',
      },
      {
        title: 'Работа и деньги',
        cadence: '2 раза в неделю',
        blurb: 'Вакансии, рынок труда, налоги, ZUS и бытовая экономика эмигранта.',
      },
      {
        title: 'Жилье и быт',
        cadence: '1 раз в неделю',
        blurb: 'Гайды по аренде, коммуналке, району, безопасности и реальным расходам.',
      },
    ],
    coverage: {
      Новости: [
        'Что обсуждают в Польше сегодня и как это влияет на эмигрантов.',
        'Новые правила, проверки и процедуры: коротко и по делу.',
        'Что важно прочитать сейчас, а что можно пропустить.',
        'Региональные новости: Варшава, Краков, Вроцлав и другие города.',
      ],
      Легализация: [
        'Пошаговый маршрут: от въезда до легального статуса и продлений.',
        'Карта побыта: типичные ошибки в подаче и как не потерять месяцы.',
        'Когда нужен meldunek, а когда его отсутствие не критично.',
        'Какие документы лучше собрать заранее.',
      ],
      Работа: [
        'Как понять, что вакансия нормальная, а не заведомо проблемная.',
        'Umowa o prace, zlecenie, B2B: что это значит в повседневной жизни.',
        'Как говорить с работодателем, если польский пока слабый.',
        'Где искать работу новичку без знакомых и красивого CV.',
      ],
      Жилье: [
        'Как читать договор аренды и где прячутся неприятные детали.',
        'Когда район важнее цены и как не ошибиться с локацией.',
        'Депозит, коммуналка, посредник: сколько реально выходит на старте.',
        'Что делать, если собственник ведет себя странно после заселения.',
      ],
      Документы: [
        'PESEL, konto w banku, NFZ, ZUS: что оформлять первым.',
        'Справочник учреждений: куда идти с конкретной задачей.',
        'Какие документы держать в телефоне, а какие на руках.',
        'Шаблоны запросов для уженда и работодателя.',
      ],
    },
    guideCards: [
      {
        category: 'Старт в Польше',
        title: 'Первый месяц в Польше: пошаговый чеклист без паники',
        meta: '12 минут',
      },
      {
        category: 'Жилье',
        title: 'Как снять квартиру: договор, залог, посредник, подводные камни',
        meta: '9 минут',
      },
      {
        category: 'Работа',
        title: 'Как искать работу без идеального польского и не терять недели',
        meta: '8 минут',
      },
      {
        category: 'Документы',
        title: 'PESEL, pobyt, meldunek: простая карта по бюрократии',
        meta: '10 минут',
      },
      {
        category: 'Медицина',
        title: 'NFZ и частные клиники: когда и куда идти',
        meta: '7 минут',
      },
      {
        category: 'Язык',
        title: 'Польский для жизни: фразы для банка, врача, съема и работы',
        meta: '6 минут',
      },
    ],
    ui: {
      events: 'События',
      emailBriefingsChip: 'Email briefings',
      signIn: 'Войти',
      tagline: 'Аналитика для новой экономики мира',
      dateLine: 'СРЕДА, 11 МАРТА 2026',
      latestNewsTitle: 'Актуальные новости',
      worldNewsTitle: 'Мировые новости',
      liveGuide: 'Live guide',
      topLabel: 'Новости Польши и эмиграции',
      projectName: 'Мама, я в Польше',
      heroTitle: 'Польша, эмиграция и жизнь после переезда',
      heroSubtitle:
        'Медиа и справочник для русско- и украиноязычных: новости, документы, работа, жилье, медицина, язык и реальный опыт людей.',
      menu: 'Меню',
      search: 'Поиск',
      subscribe: 'Подписка',
      readAnalysis: 'Читать разбор',
      readTime: '7 мин чтения',
      docsAndLife: 'Документы + быт',
      updatedToday: 'Обновлено сегодня',
      format: 'Формат',
      formatTitle: 'Не просто новости, а объяснение: что делать человеку на месте',
      formatText:
        'Меньше сухой ленты, больше ответа на вопрос: что это значит для меня и какой следующий шаг.',
      emailTitle: 'Получать главное по Польше без информационного перегруза',
      emailText: 'Ежедневная и тематические рассылки для тех, кто живет в Польше или только планирует переезд.',
      emailPlaceholder: 'Email address',
      subscribeNow: 'Подписаться',
      briefingsTitle: 'Рассылки и форматы',
      briefingsAction: 'Все briefings',
      coverageTitle: 'Главные темы',
      coverageAction: 'Смотреть все рубрики',
      guidesTitle: 'Полезные гайды',
      guidesAction: 'Открыть библиотеку',
      approach: 'Подход',
      approachTitle: 'Каждая рубрика должна отвечать не только «что случилось», но и «что делать дальше»',
      approachText:
        'Это ключевое отличие проекта от обычной новостной ленты: новости, сервис и адаптация работают как единая система.',
      guideLabel: 'Разбор',
      langRu: 'RU',
      langUa: 'UA',
    },
  },
  ua: {
    mainNav: ['Новини', 'Легалізація', 'Робота', 'Житло', 'Документи', 'Медицина', 'Навчання', 'Мова', 'Історії'],
    cityTags: ['Варшава', 'Краків', 'Вроцлав', 'Гданськ', 'Познань', 'Катовіце'],
    tickerItems: [
      'Нові правила для karty pobytu: що важливо перевірити цього тижня.',
      'Оренда у великих містах: де зростає попит і депозити.',
      'Робота без польської: які вакансії реально доступні.',
      'Як швидше записатися до лікаря через NFZ.',
      'PESEL, meldunek, umowa najmu: що потрібно у перші тижні.',
    ],
    leadStory: {
      section: 'Головна тема',
      title: 'Що змінюється для російсько- та україномовних емігрантів у Польщі у 2026 році',
      description:
        'Не просто новини, а зрозумілий розбір: документи, житло, робота, медицина, ціни та побутові зміни простою мовою.',
      image:
        'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1400&q=80',
    },
    latestNews: [
      {
        section: 'Житло',
        title: 'Як зняти квартиру і не потрапити на невигідний договір або зайву заставу',
        description: 'Короткий практичний матеріал із червоними прапорцями та чеклістом перед підписанням umowa najmu.',
      },
      {
        section: 'Робота',
        title: 'Де шукати першу роботу без сильної польської та які вакансії найчастіше реальні',
        description: 'Підбірка майданчиків і умов: як читати вакансію без самообману.',
      },
      {
        section: 'Документи',
        title: 'PESEL, meldunek, ZUS, NFZ: порядок дій у перші 30 днів',
        description: 'Стартовий маршрут для людини, яка щойно приїхала і не хоче заплутатися.',
      },
    ],
    worldNews: [
      'Що терміново перевірити у документах цього тижня.',
      'Які міста зараз найбільш перегріті за орендою.',
      'Де найчастіше помиляються при подачі на побит і реєстрації адреси.',
      'Що робити, якщо роботодавець затягує з договором або виплатою.',
      'Як потрапити до лікаря і коли має сенс іти платно.',
      'Які польські фрази реально потрібні в банку, уженді та під час оренди житла.',
    ],
    briefings: [
      {
        title: 'Ранок у Польщі',
        cadence: 'кожного буднього дня',
        blurb: 'Головні новини Польщі та еміграції за 5 хвилин.',
      },
      {
        title: 'Документи та право',
        cadence: '2 рази на тиждень',
        blurb: 'Побит, PESEL, реєстрація, договори та пояснення без бюрократичного туману.',
      },
      {
        title: 'Робота і гроші',
        cadence: '2 рази на тиждень',
        blurb: 'Вакансії, ринок праці, податки, ZUS та побутова економіка емігранта.',
      },
      {
        title: 'Житло і побут',
        cadence: '1 раз на тиждень',
        blurb: 'Гайди з оренди, комуналки, району, безпеки та реальних витрат.',
      },
    ],
    coverage: {
      Новини: [
        'Що обговорюють у Польщі сьогодні і як це впливає на емігрантів.',
        'Нові правила, перевірки та процедури: коротко і по суті.',
        'Що важливо прочитати зараз, а що можна пропустити.',
        'Регіональні новини: Варшава, Краків, Вроцлав та інші міста.',
      ],
      Легалізація: [
        'Покроковий маршрут: від в\'їзду до легального статусу і продовжень.',
        'Карта побиту: типові помилки в подачі і як не втратити місяці.',
        'Коли потрібен meldunek, а коли його відсутність не критична.',
        'Які документи краще зібрати заздалегідь.',
      ],
      Робота: [
        'Як зрозуміти, що вакансія нормальна, а не проблемна.',
        'Umowa o prace, zlecenie, B2B: що це означає в повсякденному житті.',
        'Як говорити з роботодавцем, якщо польська поки слабка.',
        'Де шукати роботу новачку без знайомих і красивого CV.',
      ],
      Житло: [
        'Як читати договір оренди і де ховаються неприємні деталі.',
        'Коли район важливіший за ціну і як не помилитися з локацією.',
        'Депозит, комуналка, посередник: скільки реально виходить на старті.',
        'Що робити, якщо власник поводиться дивно після заселення.',
      ],
      Документи: [
        'PESEL, konto w banku, NFZ, ZUS: що оформлювати першим.',
        'Довідник установ: куди йти з конкретним завданням.',
        'Які документи тримати в телефоні, а які на руках.',
        'Шаблони запитів для уженду та роботодавця.',
      ],
    },
    guideCards: [
      {
        category: 'Старт у Польщі',
        title: 'Перший місяць у Польщі: покроковий чекліст без паніки',
        meta: '12 хвилин',
      },
      {
        category: 'Житло',
        title: 'Як зняти квартиру: договір, застава, посередник, підводні камені',
        meta: '9 хвилин',
      },
      {
        category: 'Робота',
        title: 'Як шукати роботу без ідеальної польської і не втрачати тижні',
        meta: '8 хвилин',
      },
      {
        category: 'Документи',
        title: 'PESEL, pobyt, meldunek: проста карта бюрократії',
        meta: '10 хвилин',
      },
      {
        category: 'Медицина',
        title: 'NFZ і приватні клініки: коли і куди йти',
        meta: '7 хвилин',
      },
      {
        category: 'Мова',
        title: 'Польська для життя: фрази для банку, лікаря, оренди та роботи',
        meta: '6 хвилин',
      },
    ],
    ui: {
      events: 'Події',
      emailBriefingsChip: 'Email briefings',
      signIn: 'Увійти',
      tagline: 'Аналітика для нової економіки світу',
      dateLine: 'СЕРЕДА, 11 БЕРЕЗНЯ 2026',
      latestNewsTitle: 'Актуальні новини',
      worldNewsTitle: 'Світові новини',
      liveGuide: 'Live guide',
      topLabel: 'Новини Польщі та еміграції',
      projectName: 'Мама, я в Польщі',
      heroTitle: 'Польща, еміграція і життя після переїзду',
      heroSubtitle:
        'Медіа і довідник для російсько- та україномовних: новини, документи, робота, житло, медицина, мова і реальний досвід людей.',
      menu: 'Меню',
      search: 'Пошук',
      subscribe: 'Підписка',
      readAnalysis: 'Читати розбір',
      readTime: '7 хв читання',
      docsAndLife: 'Документи + побут',
      updatedToday: 'Оновлено сьогодні',
      format: 'Формат',
      formatTitle: 'Не просто новини, а пояснення: що робити людині на місці',
      formatText:
        'Менше сухої стрічки, більше відповіді на питання: що це означає для мене і який наступний крок.',
      emailTitle: 'Отримувати головне по Польщі без інформаційного перевантаження',
      emailText: 'Щоденні та тематичні розсилки для тих, хто живе в Польщі або лише планує переїзд.',
      emailPlaceholder: 'Email address',
      subscribeNow: 'Підписатися',
      briefingsTitle: 'Розсилки та формати',
      briefingsAction: 'Усі briefings',
      coverageTitle: 'Головні теми',
      coverageAction: 'Дивитися всі рубрики',
      guidesTitle: 'Корисні гайди',
      guidesAction: 'Відкрити бібліотеку',
      approach: 'Підхід',
      approachTitle: 'Кожна рубрика має відповідати не лише «що сталося», а й «що робити далі»',
      approachText:
        'Це ключова відмінність проекту від звичайної новинної стрічки: новини, сервіс і адаптація працюють як єдина система.',
      guideLabel: 'Розбір',
      langRu: 'RU',
      langUa: 'UA',
    },
  },
};

function SectionHeader({ title, action }: { title: string; action: string }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <a href="#">{action} {'->'}</a>
    </div>
  );
}

function StoryList({ items, guideLabel }: { items: string[]; guideLabel: string }) {
  return (
    <div className="story-list">
      {items.map((item, idx) => (
        <a key={item} className="story-list-item" href="#">
          <p>
            {guideLabel} {String(idx + 1).padStart(2, '0')}
          </p>
          <h3>{item}</h3>
        </a>
      ))}
    </div>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('ru');
  const t = content[locale];
  const coverageKeys = Object.keys(t.coverage);
  const [activeCategory, setActiveCategory] = useState<string>(coverageKeys[0]);

  useEffect(() => {
    const nextKeys = Object.keys(t.coverage);
    if (!nextKeys.includes(activeCategory)) {
      setActiveCategory(nextKeys[0]);
    }
    document.documentElement.lang = locale === 'ru' ? 'ru' : 'uk';
  }, [locale, t.coverage, activeCategory]);

  const currentItems = useMemo(() => t.coverage[activeCategory] ?? t.coverage[coverageKeys[0]], [t, activeCategory, coverageKeys]);

  return (
    <div className="page">
      <div className="top-strip" aria-hidden="true" />

      <div className="live-bar">
        <div className="container utility-row">
          <div className="utility-left">
            <a href="#">{t.ui.events}</a>
            <a href="#">{t.ui.emailBriefingsChip}</a>
          </div>
          <div className="ticker utility-ticker">
            <div className="ticker-track">
              {[...t.tickerItems, ...t.tickerItems].map((item, idx) => (
                <span key={`${item}-${idx}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="utility-right">
            <div className="lang-switch header-lang-switch">
              <button className={locale === 'ru' ? 'active' : ''} onClick={() => setLocale('ru')}>
                {t.ui.langRu}
              </button>
              <button className={locale === 'ua' ? 'active' : ''} onClick={() => setLocale('ua')}>
                {t.ui.langUa}
              </button>
            </div>
            <a className="utility-signin" href="#">
              {t.ui.signIn}
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <div className="masthead-tagline">{t.ui.tagline}</div>

          <div className="masthead-main">
            <div className="masthead-spacer" aria-hidden="true" />
            <h1 className="brand-logo">{t.ui.projectName}</h1>
            <div className="masthead-spacer" aria-hidden="true" />
          </div>

          <div className="status-row">
            <div className="status-time">{t.ui.dateLine}</div>
            <button className="icon-button" aria-label={t.ui.menu}>
              {t.ui.menu}
            </button>
          </div>

          <nav className="main-nav">
            {t.mainNav.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container content">
        <section className="hero-grid">
          <aside className="hero-panel hero-column">
            <div className="rail-title-row">
              <h2>{t.ui.latestNewsTitle}</h2>
            </div>
            <div className="latest-list">
              {t.latestNews.map((story) => (
                <article key={story.title}>
                  <p className="eyebrow">{story.section}</p>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </article>
              ))}
            </div>
          </aside>

          <article className="hero-panel hero-card">
            <img alt={t.leadStory.title} src={t.leadStory.image} />
            <div className="hero-copy">
              <p className="eyebrow">{t.leadStory.section}</p>
              <h2>{t.leadStory.title}</h2>
              <p>{t.leadStory.description}</p>
              <div className="hero-meta">
                <span>{t.ui.readTime}</span>
                <span>{t.ui.docsAndLife}</span>
                <span>{t.ui.updatedToday}</span>
              </div>
              <a className="primary-link" href="#">
                {t.ui.readAnalysis} {'->'}
              </a>
            </div>
          </article>

          <aside className="hero-panel hero-column">
            <div className="rail-title-row">
              <h2>{t.ui.worldNewsTitle}</h2>
            </div>
            <div className="numbered-list">
              {t.worldNews.map((item, idx) => (
                <div key={item}>
                  <div>{idx + 1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mid-grid">
          <div>
            <SectionHeader action={t.ui.briefingsAction} title={t.ui.briefingsTitle} />
            <div className="briefing-grid">
              {t.briefings.map((briefing) => (
                <article key={briefing.title}>
                  <p className="eyebrow">{briefing.cadence}</p>
                  <h3>{briefing.title}</h3>
                  <p>{briefing.blurb}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader action={t.ui.coverageAction} title={t.ui.coverageTitle} />
            <div className="chip-row">
              {coverageKeys.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="coverage-box">
              <StoryList guideLabel={t.ui.guideLabel} items={currentItems} />
              <div className="coverage-note">
                <p className="eyebrow">{t.ui.approach}</p>
                <h3>{t.ui.approachTitle}</h3>
                <p>{t.ui.approachText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="guides">
          <SectionHeader action={t.ui.guidesAction} title={t.ui.guidesTitle} />
          <div className="guide-grid">
            {t.guideCards.map((card) => (
              <article key={card.title}>
                <p className="eyebrow">{card.category}</p>
                <h3>{card.title}</h3>
                <p>{card.meta}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

