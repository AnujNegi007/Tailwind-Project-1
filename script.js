function handleMenu() {
    const navDialog = document.getElementById('nav-dailog')
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4
const initialTranslateRTL = 36*4

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) =>{
        const isIntersecting = entries[0].isIntersecting
        if(isIntersecting){
            document.addEventListener('scroll', sccrollHandler)
        } else{
            document.removeEventListener('scroll', sccrollHandler)
        }
    }
    const instersectionObserver = new IntersectionObserver(intersectionCallback)
    instersectionObserver.observe(element)

    function sccrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed
        let totalTranslate = 0
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR
        }else{
            totalTranslate = -(translateX + initialTranslateRTL)
        }
        element.style.transform = `translateX(${totalTranslate}px)`
    }
} 

const line1 = document.getElementById('line1')
setupIntersectionObserver(line1, true, 0.15)
const line2 = document.getElementById('line2')
setupIntersectionObserver(line2, false, 0.15)
const line3 = document.getElementById('line3')
setupIntersectionObserver(line3, true, 0.15)
const line4 = document.getElementById('line4')
setupIntersectionObserver(line4, true, 0.8)

const dtelements = document.querySelectorAll('dt')
dtelements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls')
        const ddEle = document.getElementById(ddId)
        const ddArrowIcon = element.querySelectorAll('i')[0]
        ddEle.classList.toggle('hidden')
        ddArrowIcon.classList.toggle('-rotate-180')
    })
})