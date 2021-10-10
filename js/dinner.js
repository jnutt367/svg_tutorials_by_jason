gsap.from("svg", { opacity: 0, duration: 3, ease: "bounce" })

let tl = gsap.timeline()

//let doubleBoxLift = gsap.timeline(  )
.to(".wine", { x: -50, y: -210, duration: 3 })
    .to(".dine", { x: 50, y: -240, duration: 2 })
    .to(".special-times", { x: -50, y: -700, ease: "elastic" })