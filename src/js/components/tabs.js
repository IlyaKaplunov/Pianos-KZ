const tabs = document.querySelectorAll('.contacts__tabs-btn'),
    contents = document.querySelectorAll('.contacts__content');
    maps = document.querySelectorAll('.map');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        maps.forEach((map) => {
            map.classList.remove('active');
        });
        contents[index].classList.add('active');
        tabs[index].classList.add('active');
        maps[index].classList.add('active');
    });
});