import { useState, useEffect } from "react";

export default function useGeceModu() {
  const [gm, setGm] = useState('off');

  useEffect(() => {
    const olanDeger = localStorage.getItem('geceModu');
    if (olanDeger) {
      setGm(olanDeger);
    }
  }, []);


  const toggleGm = () => {
    const yeniDeger = gm === 'on' ? 'off' : 'on';
    localStorage.setItem('geceModu', yeniDeger);
    setGm(yeniDeger);
  };

  return [gm, toggleGm];
}