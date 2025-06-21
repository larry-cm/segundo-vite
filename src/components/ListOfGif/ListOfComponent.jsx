import Gif from '../Gif/Gif'
export default function ListOfComponent ({ gif }) {
    return (
        <section className='space-y-4 gap-4 content-column' >
            {
                gif?.map(({ id, url, title, frames, hash }) =>
                    <Gif
                        id={id}
                        key={id}
                        span={frames}
                        span1={hash}
                        title={title}
                        url={url}
                    />
                )
            }
        </section >
    )
}