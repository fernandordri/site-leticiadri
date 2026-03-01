document.addEventListener('DOMContentLoaded', () => {
    // Inicialização segura do AOS previnindo CLS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disableMutationObserver: true,
            once: true,
            duration: 800,
            easing: 'ease-out',
            offset: 100
        });
    }

    // Lógica do Accordion FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Fecha todos os painéis abertos
            document.querySelectorAll('.faq-item').forEach(other => {
                other.classList.remove('active');
            });
            
            // Abre se estava fechado
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
});
