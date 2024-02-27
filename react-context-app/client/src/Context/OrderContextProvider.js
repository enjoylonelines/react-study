import React, { useContext, useMemo, useState } from 'react'

const OrderContext = useContext();

export default OrderContextProvider = (props) => {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  })

  const value = useMemo(() => {
    return [{...orderCounts}];
  }, [orderCounts])

  return <OrderContext.Provider {...props} /> 
}
