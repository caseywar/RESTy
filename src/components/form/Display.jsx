import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ results }) => {
    return (
        <section>
            <pre>
                {JSON.stringify(results, null, 2)}
            </pre>
        </section>
    )
}

Display.propTypes = {
    results: PropTypes.array
}

export default Display

