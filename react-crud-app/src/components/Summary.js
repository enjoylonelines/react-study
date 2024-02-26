export default function Summary({expenses}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
      <p style={{ fontSize: '2rem' }}>
        총합계: <span>{expenses.reduce((acc, cur) => acc += cur.amount, 0)}</span>
      </p>
    </div>
  )
}