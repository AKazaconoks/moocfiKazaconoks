import React from 'react'
import Part from './Part.js'

const Content = ({parts}) =>
  <div>
    {parts.map((part, i) =>
      <Part key={i} title={part.name} exercises={part.exercises} />
    )}
  </div>

export default Content