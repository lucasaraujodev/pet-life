let faqElement = document.querySelectorAll('.faq')

faqElement.forEach(function(faq) {
    faq.addEventListener('click', function(){
        faq.classList.toggle('active')
    })
})

