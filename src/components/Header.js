import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{name}</h1>
            <Button color='green' text='Hello' onClick={onClick} />

        </header>
    )
}

Header.defaultProps = {
    name: 'Task tracker',
}

Header.propTypes = {
    name: PropTypes.string,
}

export default Header