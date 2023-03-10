const tabs = (selector) => {
    const tabContainer = document.querySelectorAll(selector);

    const contantHandler = (contents, index) => {
        contents.forEach((content, i) => {
            if (i === index){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        });
    }

    const tabsHandler = (buttons, contents) => {
        buttons.addEventListener('click', event => {
            let button = event.target;
            if (button.tagName !== 'LI') return;
            [...buttons.children].forEach((btn, i) => {
                if (btn === button){
                    btn.classList.add('active');
                    contantHandler([...contents.children], i);
                }else{
                    btn.classList.remove('active');
                }
            });
        });
    }

    [...tabContainer].forEach(tab => {
        const buttons = tab.querySelector('.tabs');
        const content = tab.querySelector('.tabs__content');

        tabsHandler(buttons, content);
    });
}

tabs('.container');