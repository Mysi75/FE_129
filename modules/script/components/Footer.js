export default function footer() {
    let footerContent = `<div class="footer"> Footer</div>`;

    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `${footerContent}`;

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.append(container);

    return footer;
}