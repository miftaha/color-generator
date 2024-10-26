import { toast } from 'react-toastify'

/* eslint-disable react/prop-types */
const SingleColor = ({ color, index }) => {
  const { weight, hex } = color
  const saveToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(color)
      toast.success('Saved to clipboard')
    } catch (error) {
      toast.error('Failed to save to clipboard')
    }
  }
  return (
    <article onClick={saveToClipboard}>
      <div
        className={index > 10 ? 'w-full h-48 text-white' : 'w-full h-48'}
        style={{ backgroundColor: `#${hex}` }}
      >
        <p className="text-center pt-6">{weight}%</p>
        <p className="text-center">#{hex}</p>
      </div>
    </article>
  )
}

export default SingleColor
