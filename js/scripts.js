document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const languageIcon = document.getElementById('language-icon');
    const navLinks = document.querySelectorAll('.nav-link');
    const aboutTitle = document.querySelector('#about h2');
    const aboutContent = document.getElementById('about-content');
    const socialsTitle = document.querySelector('#socials h2');
    const techStackTitle = document.querySelector('#tech-stack h2');
    const projectsTitle = document.querySelector('#projects h2');
    const projectCards = document.querySelectorAll('.project-card');
    const footerText = document.querySelector('footer p');

    const translations = {
        es: {
            home: 'Inicio',
            about: 'Sobre mí',
            socials: 'Social',
            'tech-stack': 'Tech Stack',
            projects: 'Proyectos',
            'about-content': '👨‍💻 Soy un desarrollador de aplicaciones multiplataforma recientemente graduado con una sólida formación tanto en desarrollo multiplataforma como en desarrollo web, adquirida a través de un programa de formación dual.<br><br>📚 Mi pasión por el aprendizaje continuo me impulsa a mantenerme actualizado con las últimas tendencias y tecnologías en el ámbito del desarrollo de software. Durante mi formación, he adquirido habilidades prácticas en diversas tecnologías y lenguajes de programación, lo que me permite abordar proyectos con una perspectiva amplia y adaptable.<br><br>🚀 Me considero una persona entusiasta y comprometida, siempre en busca de nuevas ideas y desafíos que me permitan crecer y evolucionar profesionalmente.<br><br>💼 Si buscas un desarrollador con dedicación, ganas de aprender y capacidad para trabajar en equipo, estoy seguro de que mi perfil cumplirá tus expectativas.',
            'socials-content': 'Aquí puedes encontrarme en LinkedIn:',
            'tech-stack-content': 'Esta es la tecnología en la que me especializo:',
            'projects-title': 'Proyectos',
            'project-title-fbo': 'FBO Demo App',
            'project-description-fbo': 'Una demostración de una aplicacion multiplataforma desarrollada con Flutter',
            'project-title-tic': 'TIC-TAPSD: La vida conectada',
            'project-description-tic': 'Contribución a un proyecto que consiste en el diseño, creación y explotación de una plataforma software formada por una aplicación web y una aplicación móvil. Esta plataforma permite a los alumnos del módulo de Teleasistencia realizar las prácticas necesarias para su titulación.',
            'footer-text': '© 2024 Francisco Balonero Olivera. Todos los derechos reservados.'
        },
        en: {
            home: 'Home',
            about: 'About Me',
            socials: 'Socials',
            'tech-stack': 'Tech Stack',
            projects: 'Projects',
            'about-content': '👨‍💻 I am a recently graduated multiplatform application developer with a solid background in both multiplatform and web development, acquired through a dual training program.<br><br>📚 My passion for continuous learning drives me to stay updated with the latest trends and technologies in software development. During my training, I have gained practical skills in various technologies and programming languages, enabling me to approach projects with a broad and adaptable perspective.<br><br>🚀 I consider myself an enthusiastic and committed individual, always seeking new ideas and challenges that allow me to grow and evolve professionally.<br><br>💼 If you are looking for a developer with dedication, a willingness to learn, and the ability to work in teams, I am confident that my profile will meet your expectations.',
            'socials-content': 'You can find me on LinkedIn:',
            'tech-stack-content': 'This is the technology I specialize in:',
            'projects-title': 'Projects',
            'project-title-fbo': 'FBO Demo App',
            'project-description-fbo': 'A demonstration of a cross-platform application developed with Flutter.',
            'project-title-tic': 'TIC-TAPSD: The Connected Life',
            'project-description-tic': 'Contribution to a project that involves the design, creation, and exploitation of a software platform consisting of a web application and a mobile application. This platform allows students of the Teleassistance module to carry out the necessary practices for their qualification.',
            'footer-text': '© 2024 Francisco Balonero Olivera. All rights reserved.'
        }
    };

    let currentLanguage = 'es';

    languageToggle.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        languageIcon.src = currentLanguage === 'en' ? 'img/spain.png' : 'img/english.png';

        navLinks.forEach(link => {
            link.textContent = translations[currentLanguage][link.dataset.key];
        });

        aboutTitle.textContent = translations[currentLanguage]['about'];
        aboutContent.innerHTML = translations[currentLanguage]['about-content'];
        socialsTitle.textContent = translations[currentLanguage]['socials'];
        techStackTitle.textContent = translations[currentLanguage]['tech-stack'];
        projectsTitle.textContent = translations[currentLanguage]['projects'];

        projectCards.forEach(card => {
            const projectTitle = card.querySelector('h3');
            const projectDescription = card.querySelector('p');
            if (projectTitle.textContent.includes('FBO')) {
                projectTitle.textContent = translations[currentLanguage]['project-title-fbo'];
                projectDescription.textContent = translations[currentLanguage]['project-description-fbo'];
            } else if (projectTitle.textContent.includes('TIC-TAPSD')) {
                projectTitle.textContent = translations[currentLanguage]['project-title-tic'];
                projectDescription.textContent = translations[currentLanguage]['project-description-tic'];
            }
        });

        footerText.textContent = translations[currentLanguage]['footer-text'];
    });
});
