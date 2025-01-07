import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Louay0007',
        'instagram': 'https://www.instagram.com/louuuu007/',
        'facebook': 'https://www.facebook.com/louay.rjili.16',
        'linkedin': 'https://www.linkedin.com/in/afzalimdad9/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'louay.rjilii@gmail.com',
        onClick: () => openLink('mailto:louay.rjilii@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements