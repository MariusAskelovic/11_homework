import { useEffect, useState } from 'react';
import css from './homeTablePage.module.css';

export default function HomeTablePage() {
  const [arrData, setArrData] = useState([]);
  const [vipSelect, setVipSelect] = useState(false);

  useEffect(() => {
    fetch('https://magnetic-melon-yam.glitch.me')
      .then((resp) => resp.json())
      .then((data) => {
        setArrData(data);
      })
      .catch(console.warn);
  }, []);

  function handleCheckbox(event) {
    setVipSelect(event.target.checked ? true : false);
  }

  let filteredArr = arrData.filter((obj) => obj.vip === true);
  if (vipSelect === false) {
    filteredArr = arrData;
  }

  return (
    <div className={css.container}>
      <div className={css.flex}>
        <div className={css.vipBox}>
          <label htmlFor='vip'>Show VIP</label>
          <input
            type='checkbox'
            name='vip'
            id='vip'
            onChange={handleCheckbox}
          />
        </div>
        <div>
          <input type='text' placeholder='search name' />
        </div>
      </div>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.theadTr}>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {filteredArr.map((obj) => {
            const [firstName, lastName] = obj.name.split(' ');
            // const fullName = obj.name.split(' ');
            // const firstName = fullName[0];
            // const lastName = fullName[1];

            return (
              <tr key={obj.id} className={css.tbodyTr}>
                <td className={css.idCol}>{obj.id}:</td>
                <td>
                  <img src={obj.image} alt='' />
                </td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{obj.city}</td>
                <td>{obj.fav_color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
