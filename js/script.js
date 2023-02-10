const btnMenu = document.querySelector('.btn_menu');
const contentMenu = document.getElementById('content_menu');
const back = document.getElementById('back');
const openCompany = document.querySelector('.company_dropdown_menu')
const openFeatures = document.querySelector('.features_dropdown_menu');
const closeMenu = document.querySelector('.icon_close_menu');
const contentFeatures = document.getElementById('content-features-dropmenu');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.add('active');
    if(btnMenu.classList.contains('active')){
        contentMenu.style.display = 'block';
        back.style.display = 'block';
        document.documentElement.style.overflow = 'hidden';
    }
});

closeMenu.addEventListener('click', function () {
    btnMenu.classList.remove('active');
    contentMenu.style.display = 'none';
    back.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
});

openFeatures.addEventListener('click', () => {
    contentFeatures.classList.toggle('active');
    if(contentFeatures.classList.contains('active')){
        contentFeatures.style.display = 'block';
    }else{
        contentFeatures.style.display = 'none';
    }
});

openCompany.addEventListener('click', ()=> {
    if(contentFeatures.classList.contains('active')){
        contentFeatures.style.display = 'none';
    }
    const contentCompany = document.getElementById('content-calendar-dropmenu')
    contentCompany.classList.toggle('active');
    if(contentCompany.classList.contains('active')){
        contentCompany.style.display = 'block';
    }else{
        contentCompany.style.display = 'none';
    }
});

