const sections = gsap.utils.toArray(".cols-2")

sections.forEach((element, index) => {
    let items = element.querySelectorAll(".item")
    let distance = (index % 2 == 0) ? -100 : 100
    let tl = gsap.timeline({ paused: true })


    tl.from(items, { xPercent: gsap.utils.wrap([distance, -distance]), duration: 2 })
    tl.from(items, { opacity: 0, duration: 0.3 }, 0)

    ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        markers: true,
        onEnter: () => tl.play()
    })

    ScrollTrigger.create({
        trigger: element,
        start: "top 100%",
        markers: true,
        onLeaveBack: () => tl.pause(0)
    })

})