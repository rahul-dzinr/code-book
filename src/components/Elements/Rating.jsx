
const Rating = ({ rating }) => {
  return (
    <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? "#E5B06E" : "none"}
        stroke="#E5B06E"
        strokeWidth="2"
        className="flex-shrink-0"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
  )
}

export default Rating