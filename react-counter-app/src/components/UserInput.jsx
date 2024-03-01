const UserInput = ({input, setInput, handleReset}) => {
  return (
    <div className='user-input'>
      <input
        className='user-input-tag'
        type="number"
        onChange={(e) => setInput(+e.target.value)}
        value={input}
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default UserInput
