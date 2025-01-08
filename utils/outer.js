import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Louay Rjili,',
    decrypTexts: [
        'A Computer Systems Engineering Student',
        'A Web Developer',
        'I build things for the web',
        'An AI Developer',
        'A Data Analysist',
        'A Gamer',
    ],
    desciption: `A dedicated and disciplined Full Stack developer who love to create things for internet, having more than 2 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:louay.rjilii@gmail.com?subject=Hello')
    }
}

export default outer
