import React from 'react'
import logo from './logo.png'
import Image from 'next/image'

export const Card = () => {
  const products = [
    {
      id: 1,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 3,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 4,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 5,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 6,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 7,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 8,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 9,
      name: 'Übersichtlichkeit & Lesbarkeit',
      href: '#',
      color: 'Potentielle Einkäufer finden alle wichtigen Daten zu Ihrem Unternehmen auf einen Blick',
      imageSrc: {logo},
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
   ]


  return (
    <div className={"bg-gradient-to-br from-blue-400 via-green-400 to-transparent pb-8"}>
      <div >
        <h1 className='py-40 px-0 my-auto text-gray-800 text-center font-Blinker text-4xl font-semibold leading-normal'>Mehr als eine Website</h1>
        <p className='w-1/2 text-blue-800 text-center font-Blinker text-base font-normal leading-7 mx-auto'>Entdecken Sie unsere clevere & zukunftssichere Lösung für den Online-Auftritt Ihres Industrieunternehmens</p>
      </div>
      <div>
      </div>

      <div className={"mt-8 " }>
        <div className="flow-root ">
          <ul role="list" className={"-my-6 divide-y divide-gray-200 flex flex-wrap w-11/12	 mx-auto justify-between" }>
            {products.map((product) => (
              <li key={product.id} className={"w-[30%] flex flex-wrap rounded-md bg-[#2E2C2F] shadow-md p-[20px] mb-8 "}>
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={logo}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="justify-center ml-4 flex flex-1 flex-col ">
                  <div>
                    <div className="flex justify-between text-base font-medium">
                      <h3 className='text-white text-center font-Blinker text-xl font-semibold leading-tight'>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-white font-Blinker text-base font-normal leading-tight mt-4">{product.color}</p>

              </li>
            ))}
          </ul>
          <button className={"w-[360px] h-[56px] bg-red-600 text-white mx-auto my-4 mb-[40px] flex justify-center items-center"}>Jetzt Rabatt sichern</button>

        </div>
      </div>


    </div>
  )
}

