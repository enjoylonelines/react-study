import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import Step from "../../components/Step";

const CompletePage = ({ setStep }) => {
  const [orderData, , resetOrderCounts] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async (orderData) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/order`,
        orderData
      );
      setOrderHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  const handleClick = () => {
    resetOrderCounts();
    setStep(0);
  };

  return (
    <>
      <Step step={2} />
      <div style={{ textAlign: "center" }}>
        <h2>주문이 성공했습니다.</h2>
        <p>지금까지 모든 주문</p>

        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <th>number</th>
              <th>price</th>
            </tr>
            {orderTable}
          </tbody>
        </table>

        <button onClick={handleClick}>돌아가기</button>
      </div>
    </>
  );
};

export default CompletePage;
