import React from 'react';
import PropTypes from 'prop-types';

function Controls({ onSubmit, onChange, url, jsonInput }) {
  const jsonPlaceholder = '{ \n   "send": "raw", \n   "json": "here" \n}'

    return (
      <div>
        <form onSubmit={onSubmit}>
          <section>
            <input 
              type='url'
              name='url'
              placeholder='api url'
              value={url}
              onChange={onChange}
            />
          </section>
          <section>
            <input 
              type='radio'
              name='method'
              value='GET'
              id='get'
              onChange={onChange}
              defaultChecked
            />
            <label htmlFor='get'>GET</label>
            <input 
              type='radio'
              name='method'
              value='POST'
              id='post'
              onChange={onChange}
            />
            <label htmlFor='post'>POST</label>
            <input 
              type='radio'
              name='method'
              value='PUT'
              id='put'
              onChange={onChange}
            />
            <label htmlFor='put'>PUT</label>
            <input 
              type='radio'
              name='method'
              value='DELETE'
              id='delete'
              onChange={onChange}
            />
            <label htmlFor='delete'>DELETE</label>
            <button>Fetch API</button>
          </section>
          <section>
            <textarea
              rows='4'
              columns='50'
              name='jsonInput'
              value={jsonInput}
              placeholder={jsonPlaceholder}
              onChange={onChange}
            ></textarea>
          </section>
        </form>
      </div>
    )
}

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,

}

export default Controls

