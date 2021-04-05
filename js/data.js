const get_products_list = async (limit=0) =>{
    let response = await fetch(`/products?_sort=published_at:DESC${limit !== 0 ? `&_limit=${limit}`:``}`);
    let data = await response.json();
    return data;
}

const get_product = async (id)=>{
    let response = await fetch(`/products/${id}`);
    let data = await response.json();
    return data;
}

const show_msg = (message)=>{
    var x = document.getElementById("snackbar");

    // Set the text
    x.innerText = message
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
}

const add_products_to_home = async (lang)=>{
    let productsWrapper = document.getElementById('ProductsWrapper')
    let data = await get_products_list(6);
    let elements = ``
    for(let element of data){
        elements += `
            <div class="swiper-slide project-block">
                <div class="inner-box">
                    <figure class="image"><img src="${element.cover.url}" alt=""></figure>
                    <div class="caption-box">
                        <h4><a href="product-single.html?id=${element.id}">${element.name}</a></h4>
                        <div class="text">${lang === 'en'? element.short_description_en : element.short_description_fr}</div>
                        <a href="product-single.html?id=${element.id}" class="theme-btn btn-style-one read-more"><span class="btn-title">Read more</span></a>
                    </div>
                </div>
            </div>
        `;
    }
    productsWrapper.innerHTML += elements;

    if ($('.projects-slider').length) {
        var swiper = new Swiper('.projects-slider', {
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 2,
            initialSlide: 3,
            keyboardControl: true,
            mousewheelControl: false,
            lazyLoading: true,
            preventClicks: false,
            preventClicksPropagation: false,
            lazyLoadingInPrevNext: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            coverflow: {
                rotate: 40,
                stretch: 1,
                depth: 0,
                modifier: 1
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                }
            }
        });

    }
}

const add_products_to_productsPage = async (lang)=>{
    let productsWrapper = document.getElementById('ProductsWrapper')
    let data = await get_products_list();
    let elements = ``
    for(let element of data){
        elements += `
            <!-- product Block -->
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box">
                    <div class="image-box">
                        <figure class="image"><a href="product-single.html?id=${element.id}"><img src="${element.cover.url}" alt=""></a></figure>
                    </div>
                    <div class="lower-content">
                        <h3><a href="product-single.html?id=${element.id}">${element.name}</a></h3>
                        <div class="text">${(lang === 'en'? element.short_description_en.substr(0, 35) : element.short_description_fr.substr(0, 35))+' ...'}</div>
                        <a href="product-single.html?id=${element.id}" class="read-more">Read More</a>
                    </div>
                </div>
            </div>
        `;
    }
    productsWrapper.innerHTML += elements;
}

const add_product_to_product_page = async (lang)=>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let data = await get_product(id);
    let longDescription = `<p>${(lang === 'en'? data.long_description_en : data.long_description_fr).replace(/(?:\r\n|\r|\n)/g, '</p><p>')}</p>`
    let pictures = ``

    for(let e of data.photos){
        pictures += `
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box">
                    <div class="image-box">
                        <figure class="image"><a href="${e.url}" class="lightbox-image" data-fancybox="images"><img src="${e.url}" alt=""></a></figure>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('ProductCoverURL').setAttribute('href', data.cover.url);
    document.getElementById('ProductCoverImage').setAttribute('src', data.cover.url);
    document.getElementById('ProductTitle').innerHTML = data.name;
    document.getElementById('ProductPrice').innerHTML = `${data.reduction}DZD<del>${data.prix}DZD</del>`;
    document.getElementById('ProductShortDescription').innerHTML = lang === 'en'? data.short_description_en : data.short_description_fr;
    document.getElementById('ProductLongDescription').innerHTML = longDescription;
    document.getElementById('ProductImages').innerHTML = pictures;
}

const handleContactSend = async (event) =>{
    event.preventDefault();
    try{
        let response = await fetch(`/contacts/`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('subject').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            })
        });
        
        console.log(response);
        if(response.status == 200) show_msg('Your request was sent seccessfully');
        else if(response.status == 400) show_msg('There was an issue in your inputs please verify them');
        return false;
    }catch(err){
        show_msg('There was an issue sending your request please try later');
        return false;
    }
}