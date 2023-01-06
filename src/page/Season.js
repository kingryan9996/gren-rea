import React from 'react'
import '../App.css';

const Season = ({ subject, content }) => {

    return (
        <section className={subject}>
            <h2>{subject}</h2>
            <div className='season'>
                {
                    content.map((res, idx) => {
                        return <figure key={res.name}>
                            <img src={res.url} />
                            <figcaption> {subject} {idx + 1}</figcaption>
                        </figure>
                    })
                }
            </div>
        </section>
    )
}

export default Season