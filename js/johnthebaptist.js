gsap.registerPlugin(ScrollTrigger)


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "svg",
        markers: true,
        scrub: false,
        start: "75% top",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "restart none none reverse"
    }
})
gsap.from(".top-container", { x: -1400, ease: "back", duration: 12 })
    .to(".content", { background: "black" })