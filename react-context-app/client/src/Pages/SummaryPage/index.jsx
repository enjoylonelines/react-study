import React, { useState } from 'react'

const SummaryPage = () => {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <form>
        <input
          type="checkbox"
          checked={checked}
          id='confirm-checkbox'
          onClick={(e) => setChecked(e.target.checked)}
          readOnly
        />{' '}
        <label htmlFor="confirm-checkbox">
          주문하려는 것을 확인하셨나요?
        </label>
        <br />
        <button disabled={!checked} type='submit'>
          주문확인
        </button>
      </form>
    </>
  )
}

export default SummaryPage
