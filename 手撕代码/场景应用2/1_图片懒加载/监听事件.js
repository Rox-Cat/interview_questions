window.addEventListener("scroll", (e) => {
    images.forEach((image) => {
        const imgTop = image.getBoundingClientRect().top
        if (imgTop <= window.innerHeight) {
            const data_src = image.getAttribute('data-src')
            image.setAttribute('src', data_src)
        }
    })
    console.log("scroll")
})