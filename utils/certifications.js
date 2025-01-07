import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'DataCamp Data Scientist with Python Track',
            platform: 'Coursera',
            link: '',
            date: 'Issued Sep 2024 · No Expiration Date',
            logo: '/assets/data.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Docker for absolute beginners',
            platform: 'Coursera',
            link: '',
            date: 'Issued Sep 2024 · No Expiration Date',
            logo: '/assets/docker.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'AWS Cloud Technical Essentials',
            platform: 'Coursera',
            link: '',
            date: 'Issued Aug 2024 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Microsoft Certified: Azure Fundamentals',
            platform: 'Coursera',
            link: '',
            date: 'Issued Avr 2024 · No Expiration DateIssued',
            logo: '/assets/az.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'NVIDIA Deep Learning AI Fundamentals',
            platform: 'NVIDIA Deep Learning Institute (DLI)',
            link: '',
            date: 'Issued Jul 2024 · No Expiration Date',
            logo: '/assets/vv.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications