import React from 'react'

import logo from './logo.png'

import style from './Card.module.css'
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
    <div className={style.wrap}>
      <div className={style.title}>
        <h1>Mehr als eine Website</h1>
        <p>Entdecken Sie unsere clevere & zukunftssichere Lösung für den Online-Auftritt Ihres Industrieunternehmens</p>
      </div>
      <div>
      </div>

      <div className={"mt-8 " }>
        <div className="flow-root ">
          <ul role="list" className={"-my-6 divide-y divide-gray-200 " + style.card_wrap}>
            {products.map((product) => (
              <li key={product.id} className={"flex py-6 " + style.card_block}>
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
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>

              </li>
            ))}
          </ul>
          <button className={style.btn}>Jetzt Rabatt sichern</button>

        </div>
      </div>


    </div>
  )
}

