class Tabs {
    constructor() {
        this.tabs = null;
        this.btns = [];
        this.articles = [];
        this.element = null;
        this.video = null;

        this.start = function (elId) {
            var that = this;
            var elId = document.querySelector('#' + elId);

            this.tabs = elId.querySelector('.buttonsTextBox');
            this.btns = elId.querySelectorAll('.buttonStep');
            this.articles = elId.querySelectorAll('.content');
            this.video = elId.querySelector('.video');

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
                        that.video.setAttribute('src', './videos/videoleha1.mp4');
                    } else if (id === 'step2') {
                        that.video.setAttribute('src', './videos/seva.mp4');
                    } else if (id === 'step3') {
                        that.video.setAttribute('src', './videos/lofi.mp4');
                    };
                };
            });
        };
    }
}
