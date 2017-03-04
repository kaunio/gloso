import React from 'react';

const GlosaTableRow = ({ g1, g2 }) => (
  <tr>
    <td>{g1}</td>
    <td>{g2}</td>
  </tr>
);

GlosaTableRow.propTypes = {
  g1: React.PropTypes.string.isRequired,
  g2: React.PropTypes.string.isRequired,
};

export default GlosaTableRow;
