const images = document.querySelectorAll("img")
const callback = (entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            const data_src = entry.target.getAttribute('data-src')
            entry.target.setAttribute('src', data_src)
            entry.target.removeAttribute('data-src')
            console.log('被触发了')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(callback)
images.forEach(image => {
    observer.observe(image)
})