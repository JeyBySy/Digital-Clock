class Digit {
    constructor(digit_place) {
        this.digit_place = digit_place
        this.a = "a"
        this.b = "b"
        this.c = "c"
        this.d = "d"
        this.e = "e"
        this.f = "f"
        this.g = "g"
    }
    display(num) {
        on(this.digit_place, num)
    }
}
function on(digit_place, num) {
    const Zero = [1, 1, 1, 1, 1, 1, 0]
    const One = [0, 1, 1, 0, 0, 0, 0]
    const Two = [1, 1, 0, 1, 1, 0, 1]
    const Three = [1, 1, 1, 1, 0, 0, 1]
    const Four = [0, 1, 1, 0, 0, 1, 1]
    const Five = [1, 0, 1, 1, 0, 1, 1]
    const Six = [1, 0, 1, 1, 1, 1, 1]
    const Seven = [1, 1, 1, 0, 0, 0, 0]
    const Eight = [1, 1, 1, 1, 1, 1, 1]
    const Nine = [1, 1, 1, 0, 0, 1, 1]

    const number = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine]
    const d = document.querySelector(`[data-digit="${digit_place}"]`)
    const segments = d.children

    for (let i = 0; i < segments.length; i++) {
        segments[i].classList.remove('one')
        switch (number[num][i]) {
            case 1:
                segments[i].classList.add('one')
                break;
            case 0:
                segments[i].classList.add('zero')
                break
            default:
                break;
        }
    }
}