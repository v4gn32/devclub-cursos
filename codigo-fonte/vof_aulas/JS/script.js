
        // Navegação moderna entre seções
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('main section');

        function showSection(hash) {
            sections.forEach(sec => {
                sec.classList.toggle('active', '#' + sec.id === hash);
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === hash);
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const hash = link.getAttribute('href');
                history.pushState(null, '', hash);
                showSection(hash);
            });
        });

        window.addEventListener('popstate', () => {
            showSection(location.hash || '#html');
        });

        // Inicialização
        showSection(location.hash || '#html');
