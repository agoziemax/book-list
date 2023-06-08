//How to Create a Context
import { createContext, useState } from 'react';

const DummyContext = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const valueToShare = {
    data,
    changeData: () => {
      setData(data + 1);
    },
  };

  return <DummyContext.Provider value={valueToShare}>{children}</DummyContext.Provider>;
}
export { Provider };
export default DummyContext;
