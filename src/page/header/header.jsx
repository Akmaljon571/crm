import useStart from '../../hooks/useStart'
import './header.scss'

function HeaderMe() {
    const {head} = useStart()
    return (
        <header className="header">
            <h1>{head}</h1>
        </header>
    )
}

export default HeaderMe