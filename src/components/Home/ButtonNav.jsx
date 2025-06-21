export function ButtonNav({ to, text }) {
    return (
        <li>
            <Link to={to || " "} className='px-4 py-2 border border-primary rounded-lg duration-300 hover:bg-primary  font-medium  transition text-text capitalize flex gap-4 '>
                <Search className='size-5 text-white ' />
                {text || 'Colombia '}
            </Link>
        </li>
    );
}