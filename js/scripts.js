document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const languageIcon = document.getElementById('language-icon');
    const navLinks = document.querySelectorAll('.nav-link');
    const aboutTitle = document.querySelector('#about h2');
    const aboutContent = document.querySelector('.about-content');
    const techStackTitle = document.querySelector('#tech-stack h2');
    const projectsTitle = document.querySelector('#projects h2');
    const heroSubTitle = document.querySelector('#hero h2');

    const projectCards = document.querySelectorAll('.project-card');
    const footerText = document.querySelector('footer p');
    const educationTitle = document.querySelector('#education h2');
    const educationDescription = document.querySelector('.education-item h3');
    const educationDescriptionText = document.querySelector('.education-item .description');
    const educationGrade = document.querySelector('.education-item .grade');
    const educationInstitution = document.querySelector('.education-item .institution');


    const translations = {
        es: {
            home: 'Inicio',
            about: 'Sobre mí',
            'tech-stack': 'Tecnologías',
            projects: 'Proyectos',
            'about-content': '👨‍💻 Soy <strong>desarrollador Full Stack</strong> con una sólida experiencia en el desarrollo de aplicaciones multiplataforma y en el ámbito del desarrollo web. Mi carrera se ha centrado en crear soluciones tecnológicas que no solo sean eficientes, sino que también brinden una experiencia de usuario excepcional. Mi enfoque abarca tanto el front-end como el back-end, lo que me permite tener una visión integral de los proyectos y facilitar la colaboración en equipo.<br><br>📚 La <strong>pasión por el aprendizaje continuo</strong> es el motor que impulsa mi carrera. Siempre busco oportunidades para expandir mis conocimientos, ya sea explorando nuevas tecnologías, participando en cursos o asistiendo a conferencias. Esto me permite no solo dominar las herramientas actuales, sino también adaptarme rápidamente a las tendencias emergentes del sector. Me siento especialmente atraído por el desarrollo de aplicaciones modernas que utilizan <strong>frameworks populares</strong> y tecnologías innovadoras.<br><br>🚀 Me considero una persona <strong>entusiasta y comprometida</strong>, siempre en busca de nuevos retos que me permitan crecer profesionalmente. Me emociona la posibilidad de colaborar con equipos multidisciplinarios donde se fomente la creatividad y la innovación. Creo firmemente en la importancia de un entorno colaborativo y en la comunicación abierta, que son esenciales para el éxito de cualquier proyecto.<br><br>💼 Si estás buscando un desarrollador con dedicación, capacidad de aprendizaje y habilidades para trabajar en equipo, estoy seguro de que mi perfil será un buen fit. Mi objetivo es contribuir a proyectos que no solo utilicen tecnologías de vanguardia, sino que también tengan un impacto significativo en la comunidad. Me gusta involucrarme en todas las etapas del desarrollo, desde la planificación y diseño hasta la implementación y mantenimiento.<br><br>🌱 Estoy emocionado por la posibilidad de conectar con otros profesionales y aprender de sus experiencias. Estoy abierto a nuevas oportunidades de colaboración y a participar en proyectos que me desafíen y me ayuden a crecer. Ya sea que estés buscando mejorar un producto existente o lanzar una nueva idea, me encantaría discutir cómo puedo contribuir a tu visión.<br><br>¡No dudes en contactarme si deseas hablar sobre proyectos, ideas o simplemente compartir experiencias en el mundo del desarrollo!',
            'projects-title': 'Proyectos',
            'project-title-fbo': 'FBO Demo App',
            'project-description-fbo': 'Una demostración de una aplicacion multiplataforma desarrollada con Flutter',
            'project-title-tic': 'TIC-TAPSD: La vida conectada',
            'project-description-tic': 'Contribución a un proyecto que consiste en el diseño, creación y explotación de una plataforma software formada por una aplicación web y una aplicación móvil. Esta plataforma permite a los alumnos del módulo de Teleasistencia realizar las prácticas necesarias para su titulación.',
            'footer-text': '© 2024 Francisco Balonero Olivera. Todos los derechos reservados.',
            'education': 'Formación',
            'education-description': 'CGFS Desarrollo de Aplicaciones Multiplataforma',
            'education-description-text': 'Formación Dual.',
            'education-grade': 'Nota Media: 9.31',
            'education-institution': 'IES Ágora',
            'heroSubTitle': 'Desarrollador de softare'
        },
        en: {
            home: 'Home',
            about: 'About Me',
            'tech-stack': 'Tech Stack',
            projects: 'Projects',
            'about-content': '👨‍💻 I am a <strong>Full Stack Developer</strong> with extensive experience in developing cross-platform applications and web development. My career has been focused on creating technological solutions that are not only efficient but also provide an exceptional user experience. My expertise spans both front-end and back-end development, allowing me to have a comprehensive view of projects and facilitate team collaboration.<br><br>📚 A <strong>passion for continuous learning</strong> is the driving force behind my career. I am always looking for opportunities to expand my knowledge, whether by exploring new technologies, taking courses, or attending conferences. This enables me to master current tools and quickly adapt to emerging trends in the industry. I am particularly drawn to developing modern applications using <strong>popular frameworks</strong> and innovative technologies.<br><br>🚀 I consider myself an <strong>enthusiastic and dedicated individual</strong>, always seeking new challenges that allow me to grow professionally. I am excited about the opportunity to collaborate with multidisciplinary teams that foster creativity and innovation. I firmly believe in the importance of a collaborative environment and open communication, which are essential for the success of any project.<br><br>💼 If you are looking for a developer with dedication, a willingness to learn, and strong teamwork skills, I am confident that my profile will be a great fit. My goal is to contribute to projects that not only leverage cutting-edge technologies but also have a meaningful impact on the community. I enjoy being involved in all stages of development, from planning and design to implementation and maintenance.<br><br>🌱 I am excited about the possibility of connecting with other professionals and learning from their experiences. I am open to new collaboration opportunities and eager to participate in projects that challenge me and help me grow. Whether you\'re looking to enhance an existing product or launch a new idea, I would love to discuss how I can contribute to your vision.<br><br>Feel free to reach out if you want to talk about projects, ideas, or simply share experiences in the world of development!', 'projects-title': 'Projects',
            'project-title-fbo': 'FBO Demo App',
            'education': 'Education',
            'education-description': 'CGFS Multiplatform Application Development',
            'education-description-text': 'Dual Training.',
            'education-grade': 'Average Grade: 9.31',
            'education-institution': 'IES Ágora',
            'project-description-fbo': 'A demonstration of a cross-platform application developed with Flutter.',
            'project-title-tic': 'TIC-TAPSD: The Connected Life',
            'project-description-tic': 'Contribution to a project that involves the design, creation, and exploitation of a software platform consisting of a web application and a mobile application. This platform allows students of the Teleassistance module to carry out the necessary practices for their qualification.',
            'footer-text': '© 2024 Francisco Balonero Olivera. All rights reserved.',
            'heroSubTitle': 'Software developer'

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
        techStackTitle.textContent = translations[currentLanguage]['tech-stack'];
        projectsTitle.textContent = translations[currentLanguage]['projects'];
        educationTitle.textContent = translations[currentLanguage]['education'];
        educationDescription.textContent = translations[currentLanguage]['education-description'];
        educationDescriptionText.textContent = translations[currentLanguage]['education-description-text'];
        educationGrade.textContent = translations[currentLanguage]['education-grade'];
        educationInstitution.textContent = translations[currentLanguage]['education-institution'];
        heroSubTitle.textContent = translations[currentLanguage]['heroSubTitle']

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
