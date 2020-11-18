import React from 'react'
import PropTypes from 'prop-types'

const Ola = ({ nome }) => {
  return <p>Seja bem-vindo {nome}</p>
}

Ola.propTypes = {
  nome: PropTypes.string.isRequired
}
Ola.defaultProps = {
  nome: 'Zé ninguém'
}

export default Ola