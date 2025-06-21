import { Link, } from "wouter"
export default function Gif ({ title, id, url, span, span1 }) {

    return (
        <> <Link to={`/gif/${id}`}
            className='h-fit w-full flex'
        >
            <picture className='h-fit w-full relative'>
                <img src={url} className='object-cover h-fit w-full' />
                <span className='sr-only'>Imagen para de gif para mirar sus propiedades</span>
                <p className='absolute bg-fondo/80 top-0 w-fit left-0 '>
                    {title}
                    {/* {span} */}
                    {/* {span1} */}
                </p>
                <div>

                </div>
            </picture>


        </Link>

        </>
    )

}