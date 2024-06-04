document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const faqItem = this.parentElement.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const currentState = this.getAttribute('data-state');

            if (currentState === 'plus') {
                faqAnswer.style.display = 'block';
                this.src = './assets/image/minus.svg';
                this.setAttribute('data-state', 'minus');
            } else {
                faqAnswer.style.display = 'none';
                this.src = './assets/image/plus.svg';
                this.setAttribute('data-state', 'plus');
            }
        });
    });
});
