/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid'
import SingleColor from './SingleColor'

const ColorList = ({ colors }) => {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 ">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />
      })}
    </section>
  )
}

export default ColorList
