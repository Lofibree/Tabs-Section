class Tabs {
    constructor() {
        this.tabs = null;
        this.btns = [];
        this.articles = [];
        this.element = null;
        this.iframe = null;

        this.start = function (elId) {
            var that = this;
            var elId = document.querySelector('#' + elId);

            this.tabs = elId.querySelector('.buttonsTextBox');
            this.btns = elId.querySelectorAll('.buttonStep');
            this.articles = elId.querySelectorAll('.content');
            this.iframe = elId.querySelector('.iframe');

            this.tabs.addEventListener('click', (event) => {
                const id = event.target.dataset.id;
                const element = elId.querySelector('#' + id);

                if (id) {
                    that.btns.forEach((btn) => {
                        btn.classList.remove('live');
                    });
                    event.target.classList.add('live');
                    that.articles.forEach((article) => {
                        article.classList.remove('live');
                    });
                    element.classList.add('live');

                    if (id === 'step1') {
                        that.iframe.setAttribute('src', 'https://www.youtube.com/embed/z0nZAXyF2BU');
                    } else if (id === 'step2') {
                        that.iframe.setAttribute('src', 'https://www.youtube.com/embed/MYlSg2Ay3ic');
                    } else if (id === 'step3') {
                        that.iframe.setAttribute('src', 'https://www.youtube.com/embed/_r0vlyp33pw');
                    };
                };
            });
        };
    }
}
