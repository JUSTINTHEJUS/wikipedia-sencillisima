document.getElementById('searchBox').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || content.includes(query)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
});