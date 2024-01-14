const Card = ({ person }) => {
  const { id, image, name, role, details } = person

  return (
    <>
      <div className="text">
        <h4>{role}</h4>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    </>
  )
}
export default Card
