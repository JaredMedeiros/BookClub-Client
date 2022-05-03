import { useState } from 'react'
import './Workblock.scss'


export default function Workblock() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const projectData = [
        {
            projectTitle: "Faire L'amour Literature Club",
            projectStack: "Cargo. Click for live site.",
            projectPhotos: [
                {image1:""},
                {image2:""},
                {image2:""},
            ],
            projectDate: "2020",
            projectLink: ''
        },
        {
            projectTitle: "TalkBack",
            projectStack: "Html, Css, Javascript, Axios. Click for code repository.",
            projectPhotos: [
                {image1:""},
                {image2:""},
                {image2:""},
            ],
            projectDate: "2022",
            projectLink: ''
        },
        {
            projectTitle: "RoseHips Band Site",
            projectStack: "Cargo. Click for live site.",
            projectPhotos: [
                {image1:""},
                {image2:""},
                {image2:""},
            ],
            projectDate: "2022",
            projectLink: ''
        },
        {
            projectTitle: "Shopify Hackathon",
            projectStack: "React. Click for code repository.",
            projectPhotos: [
                {image1:""},
                {image2:""},
                {image2:""},
            ],
            projectDate: "2022",
            projectLink: ''
        },
        {
            projectTitle: "Astrum",
            projectStack: "React, Axios, SASS, Node.js, Express.js, MongoDB, Atlas, Mongoose, JWT. Click for code repository.",
            projectPhotos: [
                {image1:"../../images/astrum/tp238-pf-s73-05-mockup.png"},
                {image2:"../../images/astrum/Screen Shot 2022-05-02 at 21.52.02.png"},
                {image2:"../../images/astrum/Screen Shot 2022-04-06 at 22.26.04.png"},
            ],
            projectDate: "2022",
            projectLink: ''
        },
        {
            projectTitle: "WorkBlock",
            projectStack: "Html, SASS, Javascript, Document Object Model. Click for live application.",
            projectPhotos: [
                {image1:""},
                {image2:""},
                {image2:""},
            ],
            projectDate: "2022",
            projectLink: ''
        },
    ]

    return (
        <main className = 'projects'>
            <h1 className = 'projects__section-title'>Work.</h1>
            <div className = 'projects__accordian'>

                {projectData.map((item, i, arr) => (
                    <div className = {i === arr.length - 1 ? 'projects__item--last' : 'projects__item' }>
                    <div className = 'projects__line' onClick={() => toggle(i)}>
                        <h2 className = 'projects__title'>{item.projectTitle}</h2>
                        <h3 className = 'projects__date'>{item.projectDate}</h3>
                    </div> 
                    <div className = { selected === i ? 'projects__content-show' : 'projects__content'}>
                        <p className = 'projects__build'>Build:  {item.projectStack}</p>
                        <div className = 'projects__images'>
                            <img className = 'image' src = {item.projectPhotos.image1} />
                            <img className = 'image' src = {item.projectPhotos.image2} />
                            <img className = 'image' src = {item.projectPhotos.image3} />
                        </div>
                    </div>
                    </div>
                ))}

            </div>
        </main>
    )
}