import React, { useReducer, useState } from 'react';
import { Context } from "./store";
import Reducer from "./reducer"

// Initial state
const initialState = {
    products: {
        launch: {
            'air-jordan-1-mid-shoe-1': {
                name: 'Air Jordan 1 Mid',
                price: '115',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg'
            },

            'air-jordan-1-low-shoe-z': {
                name: 'Air Jordan 1 Low',
                price: '90',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-483c83ff-0235-4aec-80b3-d30fdc942585/air-jordan-1-low-shoe-z3Tl2VeJ.jpg'
            },
            'air-jordan-1-mid-shoe-2': {
                name: 'Air Jordan 2 Mid',
                price: '145',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg'
            },
            'air-zoom-type-mens-shoe-P': {
                name: 'Nike Air Zoom-Type',
                price: '150',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg'
            },
            'air-jordan-1-low-shoe-z1': {
                name: 'Air Jordan 1 High',
                price: '900',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-483c83ff-0235-4aec-80b3-d30fdc942585/air-jordan-1-low-shoe-z3Tl2VeJ.jpg'
            },
            'air-jordan-1-mid-shoe-1a': {
                name: 'Air Jordan 1 Mid',
                price: '115',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg'
            },

            'air-jordan-1-low-shoe-za': {
                name: 'Air Jordan 1 Low',
                price: '90',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-483c83ff-0235-4aec-80b3-d30fdc942585/air-jordan-1-low-shoe-z3Tl2VeJ.jpg'
            },
            'air-jordan-1-mid-shoe-2a': {
                name: 'Air Jordan 2 Mid',
                price: '145',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg'
            },
            'air-zoom-type-mens-shoe-Pa': {
                name: 'Nike Air Zoom-Type',
                price: '150',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg'
            },
            'air-jordan-1-low-shoe-z1a': {
                name: 'Air Jordan 1 High',
                price: '900',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-483c83ff-0235-4aec-80b3-d30fdc942585/air-jordan-1-low-shoe-z3Tl2VeJ.jpg'
            },
        },
        sale: {
            'react-element-55-se-mens-shoe-m': {
                name: 'Nike React Element 55 SE',
                price: '130',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a32226fe-8da6-4680-8cf7-f5ccc43057fb/react-element-55-se-mens-shoe-mZPF15.jpg'
            },

            'air-max-tailwind-iv-mens-shoe-f': {
                name: 'Nike Air Max Tailwind IV',
                price: '160',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/u4piau4adixpf8ux4iqv/air-max-tailwind-iv-mens-shoe-fF5q8X.jpg'
            },
            'react-element-55-se-mens-shoe-df': {
                name: 'Nike React  55 SE',
                price: '120',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a32226fe-8da6-4680-8cf7-f5ccc43057fb/react-element-55-se-mens-shoe-mZPF15.jpg'
            },
            'air-jordan-1-mid-se-mens-shoe-P': {
                name: 'Air Jordan 1 Mid SE',
                price: '125',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8db79801-e5a8-4e8b-ba12-fe47d756f3f8/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg'
            },
            'react-element-55-se-mens-shoe-mb': {
                name: 'Nike React Element 55 SE',
                price: '130',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a32226fe-8da6-4680-8cf7-f5ccc43057fb/react-element-55-se-mens-shoe-mZPF15.jpg'
            },

            'air-max-tailwind-iv-mens-shoe-fb': {
                name: 'Nike Air Max Tailwind IV',
                price: '160',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/u4piau4adixpf8ux4iqv/air-max-tailwind-iv-mens-shoe-fF5q8X.jpg'
            },
            'react-element-55-se-mens-shoe-dfb': {
                name: 'Nike React  55 SE',
                price: '120',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a32226fe-8da6-4680-8cf7-f5ccc43057fb/react-element-55-se-mens-shoe-mZPF15.jpg'
            },
            'air-jordan-1-mid-se-mens-shoe-Pb': {
                name: 'Air Jordan 1 Mid SE',
                price: '125',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8db79801-e5a8-4e8b-ba12-fe47d756f3f8/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg'
            }
        },
        newreleases: {
            'blazer-low-leather-mens-shoe-4': {
                name: 'Nike Blazer Low Leather',
                price: '75',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5369b128-1616-4086-8322-af84f96cf69f/blazer-low-leather-mens-shoe-4KCkNr.jpg'
            },

            'venture-runner-mens-shoe-H': {
                name: 'Nike Venture Runner',
                price: '70',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/30e7219a-1965-42d0-a8fb-17cb377dcfd6/venture-runner-mens-shoe-HHcvdw.jpg'
            },
            'blazer-low-leather-mens-shoe-8': {
                name: 'Nike Blazer High Leather',
                price: '750',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5369b128-1616-4086-8322-af84f96cf69f/blazer-low-leather-mens-shoe-4KCkNr.jpg'
            },
            'dbreak-sp-mens-shoe-t': {
                name: 'Nike DBreak SP',
                price: '110',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/df22108f-69d0-4c73-955d-ae704bd5f489/dbreak-sp-mens-shoe-tH1C69.jpg',
            },
            'blazer-low-leather-mens-shoe-4c': {
                name: 'Nike Blazer Low Leather',
                price: '75',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5369b128-1616-4086-8322-af84f96cf69f/blazer-low-leather-mens-shoe-4KCkNr.jpg'
            },

            'venture-runner-mens-shoe-Hc': {
                name: 'Nike Venture Runner',
                price: '70',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/30e7219a-1965-42d0-a8fb-17cb377dcfd6/venture-runner-mens-shoe-HHcvdw.jpg'
            },
            'blazer-low-leather-mens-shoe-8c': {
                name: 'Nike Blazer High Leather',
                price: '750',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5369b128-1616-4086-8322-af84f96cf69f/blazer-low-leather-mens-shoe-4KCkNr.jpg'
            },
            'dbreak-sp-mens-shoe-tc': {
                name: 'Nike DBreak SP',
                price: '110',
                imgAdd: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/df22108f-69d0-4c73-955d-ae704bd5f489/dbreak-sp-mens-shoe-tH1C69.jpg',
            }
        }
    }
}


export const ContextProvider = ({ children }) => {
    const [state,setState] = useState(initialState)
   const [cart,dispatch] = useReducer(Reducer,{})
    // actions for functionality 



      const homeProducts = () => {
          const { launch, newreleases, sale } = state.products
          let lv = Object.entries(launch).slice(0, 4)
          let nrv = Object.entries(newreleases).slice(0, 4)
          let sv = Object.entries(sale).slice(0, 4)
          let l = {};
          let nr = {};
          let s = {};
          for (let i = 0; i < lv.length; i++) {
              if (lv[i][0] !== undefined) {
                  l[lv[i][0]] = lv[i][1]
              }
          }
          for (let i = 0; i < nrv.length; i++) {
              if (nrv[i][0] !== undefined) {
                  nr[nrv[i][0]] = nrv[i][1]
              }
          }
          for (let i = 0; i < sv.length; i++) {
              if (sv[i][0] !== undefined) {
                  s[sv[i][0]] = sv[i][1]
              }
          }  
          return {launch: l, newreleases:nr, sale:s}
      }

      const addProdcutToCart = (data) => {
        //   console.log(data)

          let carttt = {}
          let key = Object.keys(data)[0]
          let value = Object.values(data)[0]
          let p = cart[key]
        //   console.log(cart)
        //   console.log(key)
        //   console.log(p)
          if(!p){
            carttt = { ...data,...cart,}
          }else{
              let sp = {}
              sp[key] = {...value,quantity:value.quantity+p.quantity} 
            //   console.log(sp)
            //   delete cart[key]
              carttt = { ...cart,...sp}
          }
                    // carttt = { ...data,...cart,}
          dispatch({
                type:'UPDATE_CART',
                payload:carttt
          })
      }

    

    return (
        <Context.Provider value={{
            products: homeProducts(),
            specificProducts: (p) => {
                return state.products[p]
            },
            cart: cart,
            getProduct: (p) => {
                const  {launch, newreleases, sale} = state.products
                let values = {...launch, ...newreleases, ...sale}
             
                return values[p]
            },
            addProdcutToCart
        }}>
            {children}
        </Context.Provider>
    )
}