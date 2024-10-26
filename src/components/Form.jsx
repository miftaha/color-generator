/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className="p-4 grid gap-3 h-40">
      <h4 className="capitalize text-center text-2xl">color generator</h4>
      <form onSubmit={handleSubmit} className="flex p-4 justify-center py-6">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="h-full bg-white border-white"
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="py-2 px-4 max-w-[200px] text-xl bg-transparent"
        />
        <button
          style={{ backgroundColor: color }}
          className="bg-blue-600 py-2 px-4 rounded-md text-white"
        >
          submit
        </button>
      </form>
    </section>
  )
}

export default Form
