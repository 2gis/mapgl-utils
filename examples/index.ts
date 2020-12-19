import data from './dist/data.json';

const examplesElement = document.getElementById('examples') as HTMLElement;
const codeElement = document.getElementById('code') as HTMLElement;

examplesElement.innerHTML = /* HTML */ `<ul>
    ${data.map((example) => `<li><a href="?${example.name}">${example.name}</a></li>`).join('')}
</ul>`;

const query = location.search.slice(1);

const activeExample = data.find((example) => example.name === query);
if (activeExample) {
    import(`./suites/${activeExample.name}`).then(() => {
        console.log(`loaded ${activeExample.name}`);
    });

    codeElement.innerText = activeExample.code;
}
