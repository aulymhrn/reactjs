import React, { Component } from 'react'

const makanan = [
    {
        nama: `Soto`,
        harga: 12000
    },
    {
        nama: `Bakso`,
        harga: 10000
    },
    {
        nama: `Mie ayam`,
        harga: 15000
    },
    {
        nama: `Nasi goreng`,
        harga: 15000
    }
]

//Reduce
const total_bayar = makanan.reduce((total_harga,makanan) => {
    return total_harga+makanan.harga;
}, 0)
    const Map = () => {
    return (
      <div>
        <h2>maping</h2>
        <ul>
            {makanan.map((makanan, index) =>
              <li>{index + 1}.{makanan.nama} - Harga {makanan.harga} </li> )}
        </ul>
        <h2>Map Filter harga yang lebih dari 11.000</h2>
        <ul>
            {makanan.filter((makanan) => makanan.harga > 11000)
            .map((makanan, index) =>(
                <li>{index + 1}.{makanan.nama} - Harga {makanan.harga}</li>
            ) )}
        </ul>
        
        <h3>Total bayar : {total_bayar}</h3>
      </div>
    )
    }

    export default Map