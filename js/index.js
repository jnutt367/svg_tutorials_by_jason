const sections = gsap.utils.toArray(".cols-2")

sections.forEach((element, index) => {
    let items = element.querySelectorAll(".item")
    let distance = (index % 2 == 0) ? -100 : 100
    let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "restart none none reverse"
            }
        })
        .from(items, { xPercent: gsap.utils.wrap([distance, -distance]), duration: 2 })
        .fromTo(".main", { opacity: 0, duration: 2, ease: "back" }, { opacity: 1 }, 0.2)
})