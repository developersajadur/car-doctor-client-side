import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyCard = () => {
    const { user , loading } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    if (!loading && user) {
      fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setCards(data));
    }
  }, [loading, user]);
    return (
        <div>
                       <div className="carousel-item relative my-10 lg:h-72 rounded-lg w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/checkout/checkout.png"
      className="w-full rounded-lg lg:h-72"
    />
    <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl text-white font-bold">Cart Details</h1>
      </div>
    </div>
    <div className="mb-20">
        {
            cards?.map(card => 
                <div key={card._id} className="overflow-x-auto">
                <table className="table font-bold text-2xl">
              
                  <tbody>
                    <tr>
                      <th>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask rounded-2xl w-40 h-40">
                              <img src={card?.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{card?.title}</div>
                            <p className="font-normal text-xl">Color: Red</p>
                            <p className="font-normal text-xl">Size: S</p>
                          </div>
                        </div>
                      </td>
                      <td>
                       ${card?.price}
                      </td>
                      <td>{card?.date}</td>
                      <th>
                        <button className="btn text-white font-bold bg-[#FF3811]">Pending</button>
                      </th>
                    </tr>
                  </tbody>
                  
                </table>
              </div>
            )
        }
        </div>
        </div>
    );
};

export default MyCard;