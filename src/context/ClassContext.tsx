// import { createContext, useContext, ReactNode, useState } from "react";
// import axios from "../api/axios";

export function ClassContext() {
  return;
}
// type ClassContextProps = {
//   children: ReactNode;
// };

// // type CartItem = {
// //   id: number
// //   quantity: number
// // }

// type ClassContext = {
//   getClass: () => void;
//   //   getSubject: () => void
//   //   getChapter: ()=>void
//   //   getTopic: ()=>void
//   //   getSubtopic: ()=>void
//   //   addClass: ()=>void
//   //   addSubject: ()=>void
//   //   addChapter: ()=>void
//   // addTopic: () => void
//   // addSubtopic:()=>void
// };

// const ClassContext = createContext({} as ClassContext);

// export function useClass() {
//   return useContext(ClassContext);
// }
// export function ClassProvider({ children }: ClassContextProps) {
//   const [data, setData] = useState([]);

//   const getClass = async () => {
//     try {
//       const res = await axios.get("/class");
//       setData(res.data.class);
//       console.log(data);
//     } catch (err) {
//       console.log("Error\n", err);
//     }
//   };
//   //   const [isOpen, setIsOpen] = useState(false)
//   //   const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
//   //     "shopping-cart",
//   //     []
//   //   )

//   //   const cartQuantity = cartItems.reduce(
//   //     (quantity, item) => item.quantity + quantity,
//   //     0
//   //   )

//   //   const openCart = () => setIsOpen(true)
//   //   const closeCart = () => setIsOpen(false)
//   //   function getItemQuantity(id: number) {
//   //     return cartItems.find(item => item.id === id)?.quantity || 0
//   //   }
//   //   function increaseCartQuantity(id: number) {
//   //     setCartItems(currItems => {
//   //       if (currItems.find(item => item.id === id) == null) {
//   //         return [...currItems, { id, quantity: 1 }]
//   //       } else {
//   //         return currItems.map(item => {
//   //           if (item.id === id) {
//   //             return { ...item, quantity: item.quantity + 1 }
//   //           } else {
//   //             return item
//   //           }
//   //         })
//   //       }
//   //     })
//   //   }
//   //   function decreaseCartQuantity(id: number) {
//   //     setCartItems(currItems => {
//   //       if (currItems.find(item => item.id === id)?.quantity === 1) {
//   //         return currItems.filter(item => item.id !== id)
//   //       } else {
//   //         return currItems.map(item => {
//   //           if (item.id === id) {
//   //             return { ...item, quantity: item.quantity - 1 }
//   //           } else {
//   //             return item
//   //           }
//   //         })
//   //       }
//   //     })
//   //   }
//   //   function removeFromCart(id: number) {
//   //     setCartItems(currItems => {
//   //       return currItems.filter(item => item.id !== id)
//   //     })
//   //   }

//   return (
//     <ClassContext.Provider
//       value={{
//         getClass,
//         //         increaseCartQuantity,
//         //         decreaseCartQuantity,
//         //         removeFromCart,
//         //         openCart,
//         //         closeCart,
//         //         cartItems,
//         //         cartQuantity,
//       }}
//     >
//       {children}
//       {/* //       <ShoppingCart isOpen={isOpen} /> */}
//     </ClassContext.Provider>
//   );
// }
