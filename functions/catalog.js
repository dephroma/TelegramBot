const { Markup } = require('telegraf');

const excurses = async (ctx) => {
    try {
        //! Экскурсия 1 "Знакомство с Дагестаном"
        await ctx.replyWithPhoto('https://t.me/DagEagleTour/9', {
            caption: '☀️Экскурсия «Знакомство с Дагестаном»🏔\n\n📍Маршрут : Махачкала/Каспийск - Сулакский каньон - бархан Сарыкум - Чиркейское водохранилище - форелевое хозяйство.\n\n🕝Длительность : 10-12ч.',
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback('Записаться', 'tour')]
            ]).reply_markup
        });

        await new Promise(resolve => setTimeout(resolve, 1000)); //! 1 секунда

        //! Экскурсия 2 "Древний Дербент"
        await ctx.replyWithPhoto('https://t.me/DagEagleTour/10', {
            caption: '☀️Экскурсия «Древний Дербент»🏔\n\n📍Маршрут : Махачкала/Каспийск - Дербент - крепость Нарын-Кала - Каспийский Монстр - фонтаны (в рабочие дни).\n\n🕝Длительность : 10-12ч.',
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback('Записаться', 'tour')]
            ]).reply_markup
        });

        await new Promise(resolve => setTimeout(resolve, 1000)); //! 1 секунда

        //! Экскурсия 3 "5 жемчужин Дагестана"
        await ctx.replyWithPhoto('https://t.me/DagEagleTour/8', {
            caption: '☀️Экскурсия «5 жемчужин Дагестана»🏔\n\n📍Маршрут : Махачкала/Каспийск — Гурбукинский карстовый провал — село Гуниб — Чохские террасы — село Гамсутль — Салтинский водопад.\n\n🕝Длительность : 10-12ч.',
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback('Записаться', 'tour')]
            ]).reply_markup
        });
    
            //! Экскурсия 1 "Знакомство с Дагестаном"2
            await ctx.replyWithMediaGroup([
                {
                    type: 'photo',
                    media: 'https://t.me/DagEagleTour/8',
                    caption: 'Описание фото 1'
                },
                {
                    type: 'photo',
                    media: 'https://t.me/DagEagleTour/10',
                    caption: 'Описание фото 2'
                }
            ]);

            await ctx.replyWithHTML(
                `<a href="https://t.me/DagEagleTour/9">📷 Фото экскурсии</a>\n\n☀️Экскурсия «Знакомство с Дагестаном»🏔\n\n📍Маршрут: Махачкала/Каспийск - Сулакский каньон - бархан Сарыкум - Чиркейское водохранилище - форелевое хозяйство.\n\n🕝Длительность: 10-12ч.`,
                {
                    reply_markup: Markup.inlineKeyboard([
                        [Markup.button.callback('Записаться', 'tour')]
                    ]).reply_markup
                }
            );
    
    } catch (error) {
        console.error('Ошибка при загрузке фото:', error);
        await ctx.reply('Приветственное фото временно недоступно! Ошибка сервера');
    }
};

const tours = async (ctx) => {
    try {
        //! Тур 1 "Край мечты"
        await ctx.replyWithPhoto('https://t.me/DagEagleTour/13', {
            caption: '☀️3 незабываемых дня в Дагестане - тур «Край мечты» 🏔\n\n📜Программа тура 3 ДНЯ «Край мечты»:\n🚩День 1. Махачкала/Каспийск – Бархан Сарыкум – Персиковый сад, Сулакский каньон – Чиркейское водохранилище.\n🚩День 2. Гоцатлинское водохранилище – Хунзах – водопады Дагестана – Матлас – Каменная чаша.\n🚩День 3. Дербент – Нарын-Кала – Каспийский монстр – фонтаны Дербента в рабочие дни – отъезд Махачкала/Каспийск.',
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback('Записаться на тур "Край мечты"', 'tour')]
            ]).reply_markup
        });

        await new Promise(resolve => setTimeout(resolve, 1000)); //! 1 секунда

        //! Тур 2 "Весь Дагестан"
        await ctx.replyWithPhoto('https://t.me/DagEagleTour/11', {
            caption: '☀️5 дней в Дагестане - тур «Весь Дагестан»🏔\n\n📜Программа тура 5 ДНЕЙ «Весь Дагестан»:\n🚩День 1. Махачкала/Каспийск – Бархан Сарыкум – Сулакский каньон, Чиркейская ГЭС.\n🚩День 2. Кезеной – Ам, Кавказская Швейцария – Хой – Цумадинский район.\n🚩День 3. Геквари – Цумада-Урух – водопады – верхнее Геквари.\n🚩День 4. Хунзахский район – Матлас – водопады – Гоор (язык тролля).\n🚩День 5. Карадахская теснина – Салтинский подземный водопад – Ирганайское водохранилище – отъезд.',
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback('Записаться на тур "Весь Дагестан"', 'tour')]
            ]).reply_markup
        });

        await new Promise(resolve => setTimeout(resolve, 1000)); //! 1 секунда

        //! Тур 3 "Дагестанский вояж"
        await ctx.replyWithPhoto('https://t.me/DagEagleTour/12', {
            caption: '☀️Неделя в Дагестане - тур «Дагестанский вояж» 🏔\n\n📜Программа 7 ДНЕЙ тура «Дагестанский вояж»:\n🚩День 1. Гуниб – Гамсутль – Салтинский подземный водопад – Чохские террасы – секретные локации.\n🚩День 2. Гоор – Язык тролля – Карадахская теснина – Ирганайское водохранилище.\n🚩День 3. Хунзах – Матлас – Каменная чаша.\n🚩 День 4. Сулакский каньон – Чиркейская ГЭС – комплекс Салатау – форелевое хозяйство – Бархан Сарыкум.\n🚩 День 5. Кубачи – Кала-Корейш.\n🚩 День 6. Дербент – Нарын-Кала – Лунь.\n🚩 День 7. Махачкала – Джума-мечеть – гора Тарки-Тау – Махачкалинский рынок – отъезд.',
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback('Записаться на тур "Дагестанский вояж"', 'tour')]
            ]).reply_markup
        });
    } catch (error) {
        console.error('Ошибка при загрузке фото:', error);
        await ctx.reply('Приветственное фото временно недоступно! Ошибка сервера');
    }
};

module.exports = { excurses, tours };