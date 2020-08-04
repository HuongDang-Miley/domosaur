const span = document.querySelector('.mess-with-me')
span.style.fontSize = '3em'

const makeOrange = function () {
    span.style.color = 'orange'
}

span.addEventListener('click', makeOrange)

const paragraph = document.querySelector('p.mess-with-me')
paragraph.style.backgroundColor = 'green'

const hideMe = document.querySelector('#hide-me')
hideMe.style.display = 'none'

const triceratops = document.querySelector('#triceratops')
triceratops.style.width = "324px"


const makeRedBorder = function () {
    triceratops.style.border = '1px solid red'
}

triceratops.addEventListener('click', makeRedBorder)

const transparent = document.querySelector('#feathers')

const makeTransparent = function () {
    transparent.style.opacity = '50%'
}

transparent.addEventListener('click', makeTransparent)

const toggle = document.querySelector('#toggle')
let row = document.querySelector('#row')
console.dir(row.style)

const changeBackGroundColor = function () {
    if (row.style.backgroundColor !== 'tomato') {
        row.style.backgroundColor = 'tomato'
    } else {
        row.style.backgroundColor = ''
    }`§
}

toggle.addEventListener('click', changeBackGroundColor)

const biggify = document.querySelector('#biggify')

const enlargeBiggify = function () {
    biggify.style.width = '200px'
}

const defaultBiggify = function () {
    biggify.style.width = '162px'
}

biggify.addEventListener('mouseover', enlargeBiggify)

biggify.addEventListener('mouseleave', defaultBiggify)
