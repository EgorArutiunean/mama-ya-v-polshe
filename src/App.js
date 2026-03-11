import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
const content = {
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
            description: 'Не просто новости, а понятный разбор: документы, жилье, работа, медицина, цены и бытовые изменения простым языком.',
            image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1400&q=80',
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
            heroSubtitle: 'Медиа и справочник для русско- и украиноязычных: новости, документы, работа, жилье, медицина, язык и реальный опыт людей.',
            menu: 'Меню',
            search: 'Поиск',
            subscribe: 'Подписка',
            readAnalysis: 'Читать разбор',
            readTime: '7 мин чтения',
            docsAndLife: 'Документы + быт',
            updatedToday: 'Обновлено сегодня',
            format: 'Формат',
            formatTitle: 'Не просто новости, а объяснение: что делать человеку на месте',
            formatText: 'Меньше сухой ленты, больше ответа на вопрос: что это значит для меня и какой следующий шаг.',
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
            approachText: 'Это ключевое отличие проекта от обычной новостной ленты: новости, сервис и адаптация работают как единая система.',
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
            description: 'Не просто новини, а зрозумілий розбір: документи, житло, робота, медицина, ціни та побутові зміни простою мовою.',
            image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1400&q=80',
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
            heroSubtitle: 'Медіа і довідник для російсько- та україномовних: новини, документи, робота, житло, медицина, мова і реальний досвід людей.',
            menu: 'Меню',
            search: 'Пошук',
            subscribe: 'Підписка',
            readAnalysis: 'Читати розбір',
            readTime: '7 хв читання',
            docsAndLife: 'Документи + побут',
            updatedToday: 'Оновлено сьогодні',
            format: 'Формат',
            formatTitle: 'Не просто новини, а пояснення: що робити людині на місці',
            formatText: 'Менше сухої стрічки, більше відповіді на питання: що це означає для мене і який наступний крок.',
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
            approachText: 'Це ключова відмінність проекту від звичайної новинної стрічки: новини, сервіс і адаптація працюють як єдина система.',
            guideLabel: 'Розбір',
            langRu: 'RU',
            langUa: 'UA',
        },
    },
};
function SectionHeader({ title, action }) {
    return (_jsxs("div", { className: "section-header", children: [_jsx("h2", { children: title }), _jsxs("a", { href: "#", children: [action, " ", '->'] })] }));
}
function StoryList({ items, guideLabel }) {
    return (_jsx("div", { className: "story-list", children: items.map((item, idx) => (_jsxs("a", { className: "story-list-item", href: "#", children: [_jsxs("p", { children: [guideLabel, " ", String(idx + 1).padStart(2, '0')] }), _jsx("h3", { children: item })] }, item))) }));
}
export default function App() {
    const [locale, setLocale] = useState('ru');
    const t = content[locale];
    const coverageKeys = Object.keys(t.coverage);
    const [activeCategory, setActiveCategory] = useState(coverageKeys[0]);
    useEffect(() => {
        const nextKeys = Object.keys(t.coverage);
        if (!nextKeys.includes(activeCategory)) {
            setActiveCategory(nextKeys[0]);
        }
        document.documentElement.lang = locale === 'ru' ? 'ru' : 'uk';
    }, [locale, t.coverage, activeCategory]);
    const currentItems = useMemo(() => t.coverage[activeCategory] ?? t.coverage[coverageKeys[0]], [t, activeCategory, coverageKeys]);
    return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "top-strip", "aria-hidden": "true" }), _jsx("div", { className: "live-bar", children: _jsxs("div", { className: "container utility-row", children: [_jsxs("div", { className: "utility-left", children: [_jsx("a", { href: "#", children: t.ui.events }), _jsx("a", { href: "#", children: t.ui.emailBriefingsChip })] }), _jsx("div", { className: "ticker utility-ticker", children: _jsx("div", { className: "ticker-track", children: [...t.tickerItems, ...t.tickerItems].map((item, idx) => (_jsx("span", { children: item }, `${item}-${idx}`))) }) }), _jsxs("div", { className: "utility-right", children: [_jsxs("div", { className: "lang-switch header-lang-switch", children: [_jsx("button", { className: locale === 'ru' ? 'active' : '', onClick: () => setLocale('ru'), children: t.ui.langRu }), _jsx("button", { className: locale === 'ua' ? 'active' : '', onClick: () => setLocale('ua'), children: t.ui.langUa })] }), _jsx("a", { className: "utility-signin", href: "#", children: t.ui.signIn })] })] }) }), _jsx("header", { className: "site-header", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "masthead-tagline", children: t.ui.tagline }), _jsxs("div", { className: "masthead-main", children: [_jsx("div", { className: "masthead-spacer", "aria-hidden": "true" }), _jsx("h1", { className: "brand-logo", children: t.ui.projectName }), _jsx("div", { className: "masthead-spacer", "aria-hidden": "true" })] }), _jsxs("div", { className: "status-row", children: [_jsx("div", { className: "status-time", children: t.ui.dateLine }), _jsx("button", { className: "icon-button", "aria-label": t.ui.menu, children: t.ui.menu })] }), _jsx("nav", { className: "main-nav", children: t.mainNav.map((item) => (_jsx("a", { href: "#", children: item }, item))) })] }) }), _jsxs("main", { className: "container content", children: [_jsxs("section", { className: "hero-grid", children: [_jsxs("aside", { className: "hero-panel hero-column", children: [_jsx("div", { className: "rail-title-row", children: _jsx("h2", { children: t.ui.latestNewsTitle }) }), _jsx("div", { className: "latest-list", children: t.latestNews.map((story) => (_jsxs("article", { children: [_jsx("p", { className: "eyebrow", children: story.section }), _jsx("h3", { children: story.title }), _jsx("p", { children: story.description })] }, story.title))) })] }), _jsxs("article", { className: "hero-panel hero-card", children: [_jsx("img", { alt: t.leadStory.title, src: t.leadStory.image }), _jsxs("div", { className: "hero-copy", children: [_jsx("p", { className: "eyebrow", children: t.leadStory.section }), _jsx("h2", { children: t.leadStory.title }), _jsx("p", { children: t.leadStory.description }), _jsxs("div", { className: "hero-meta", children: [_jsx("span", { children: t.ui.readTime }), _jsx("span", { children: t.ui.docsAndLife }), _jsx("span", { children: t.ui.updatedToday })] }), _jsxs("a", { className: "primary-link", href: "#", children: [t.ui.readAnalysis, " ", '->'] })] })] }), _jsxs("aside", { className: "hero-panel hero-column", children: [_jsx("div", { className: "rail-title-row", children: _jsx("h2", { children: t.ui.worldNewsTitle }) }), _jsx("div", { className: "numbered-list", children: t.worldNews.map((item, idx) => (_jsxs("div", { children: [_jsx("div", { children: idx + 1 }), _jsx("p", { children: item })] }, item))) })] })] }), _jsxs("section", { className: "mid-grid", children: [_jsxs("div", { children: [_jsx(SectionHeader, { action: t.ui.briefingsAction, title: t.ui.briefingsTitle }), _jsx("div", { className: "briefing-grid", children: t.briefings.map((briefing) => (_jsxs("article", { children: [_jsx("p", { className: "eyebrow", children: briefing.cadence }), _jsx("h3", { children: briefing.title }), _jsx("p", { children: briefing.blurb })] }, briefing.title))) })] }), _jsxs("div", { children: [_jsx(SectionHeader, { action: t.ui.coverageAction, title: t.ui.coverageTitle }), _jsx("div", { className: "chip-row", children: coverageKeys.map((category) => (_jsx("button", { className: activeCategory === category ? 'active' : '', onClick: () => setActiveCategory(category), children: category }, category))) }), _jsxs("div", { className: "coverage-box", children: [_jsx(StoryList, { guideLabel: t.ui.guideLabel, items: currentItems }), _jsxs("div", { className: "coverage-note", children: [_jsx("p", { className: "eyebrow", children: t.ui.approach }), _jsx("h3", { children: t.ui.approachTitle }), _jsx("p", { children: t.ui.approachText })] })] })] })] }), _jsxs("section", { className: "guides", children: [_jsx(SectionHeader, { action: t.ui.guidesAction, title: t.ui.guidesTitle }), _jsx("div", { className: "guide-grid", children: t.guideCards.map((card) => (_jsxs("article", { children: [_jsx("p", { className: "eyebrow", children: card.category }), _jsx("h3", { children: card.title }), _jsx("p", { children: card.meta })] }, card.title))) })] })] })] }));
}
