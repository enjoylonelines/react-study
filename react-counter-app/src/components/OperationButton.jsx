const OperationButton = ({handleCount, ops}) => {
  return (
    <button onClick={() => handleCount(ops)}>{ops}</button>
  )
}

export default OperationButton
