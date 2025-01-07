import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Louay Rjili,',
    decrypTexts: [
        'An Informatique Systems Engineering Student',
        'A Web Master Developer',
        'I build things for the web',
        'A AI Developer',
        'A Web3 Developer',
        'A Gamer',
    ],
    desciption: `A dedicated and disciplined Full Stack developer who love to create things for internet, having more than 4 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:louay.rjilii@gmail.com?subject=Hello')
    }
}

export default outer