let form = document.querySelector('.analys-form');
let btn = document.querySelector('.analys-arrow');
let close = document.querySelector('.analys-form__close');
let anal = document.querySelector('.analys');

btn.addEventListener('click', function() {
    form.classList.remove('d-none');
    form.classList.add('d-block');
    anal.style.height = 100 + '%';
});

close.addEventListener('click', function() {
    form.classList.add('d-none');
    form.classList.remove('d-block');
    anal.style.height = 350 + 'px';
});

$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 130;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});