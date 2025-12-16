import MarkdownIt from 'markdown-it';


const addClasses = (md: MarkdownIt) => {

    const originalRender = md.renderer.render.bind(md.renderer);

    md.renderer.render = (tokens, options, env) => {
        const result = originalRender(tokens, options, env);
        return result.replace(
            /<table([^>]*)>([\s\S]*?)<\/table>/g,
            '<div class="table-responsive"><table$1>$2</table></div>'
        );
    };
    md.renderer.rules.table_open = () =>
        '<table class="border-collapse border-gray-500 w-full overflow-x-auto table-auto">';

    md.renderer.rules.th_open = () =>
        '<th class="border border-gray-500 p-2  font-medium ">';
    md.renderer.rules.td_open = () =>
        '<td class="border border-gray-500 p-2 text-center">';
    md.renderer.rules.tr_open = () =>
        '<tr class="border border-gray-500 p-2">';
    md.renderer.rules.thead_open = () => `
    <thead class="border-gray-500">`
    md.renderer.rules.link_open = (tokens, idx) => {
        const token = tokens[idx];
        const href = token.attrGet('href') || '';
        const title = token.attrGet('title') || '';

        let attrs = `href="${md.utils.escapeHtml(href)}"`;
        if (title) attrs += ` title="${md.utils.escapeHtml(title)}"`;


        // 💜 Стиль под твои предпочтения
        attrs += ' class="text-blue-500 hover:underline hover:text-purple-700"';

        return `<a ${attrs}>`;
    };
    md.renderer.rules.fence = (tokens, idx) => {
        const token = tokens[idx];
        const escaped = md.utils.escapeHtml(token.content);
        return `<pre class="my-6"><code class="block p-4  rounded bg-blue-950 text-white font-mono text-sm whitespace-pre-wrap break-words">${escaped}</code></pre>`;
    };
    md.renderer.rules.heading_open = (tokens, idx) => {
        const h = tokens[idx].tag;
        const classes = {
            h1: 'text-4xl my-10 font-bold ',
            h2: 'text-3xl my-5 font-medium ',
            h3: 'text-2xl my-5 font-semibold  ',
            h4: 'text-xl my-3 font-medium ',
        }[h] || 'font-semibold mt-4 mb-2';
        return `<${h} class="${classes}">`;
    };
    md.renderer.rules.bullet_list_open = () => `
    <ul class="list-disc ps-6" >
    `
    md.renderer.rules.ordered_list_open = () => `
    <ol class="list-decimal ps-6" >
    `
    md.renderer.rules.image = (tokens, idx, options) => {
        const token = tokens[idx];

        const src = token.attrGet('src') || '';
        const alt = token.content || '';

        // 🔁 Заменяем часть URL
        const newSrc = src.replace(/^.*?(?=\/uploads\/)/, 'https://strapitest.ybru.ru'); // или любой другой паттерн

        // Устанавливаем новый src
        token.attrSet('src', newSrc);
        token.attrSet('class', 'rounded-xl');
        token.attrSet('loading', 'lazy');

        // Остальное рендерим как обычно
        return md.renderer.renderToken(tokens,idx, options);
    };

};

// Экспортируем настроенный инстанс
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

md.use(addClasses);

export { md };