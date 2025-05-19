export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Azizah',
            child: 'Putri Bungsu',
            father: 'H. Jalaludin Syauti(alm)',
            mother: 'Hj. Neneng Aisyah',
            image: './src/assets/images/istri.png'
        },
        P: {
            id: 2,
            name: 'H.Aab Abdul Rokib,S.Kom',
            child: 'Putra Sulung',
            father: 'H. Hasan Basri(alm)',
            mother: 'Hj. Uyun Yunasih',
            image: './src/assets/images/pameget.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juni',
            date: '14',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juni',
            date: '14',
            day: 'Sabtu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Bunikasih Peuntas, RT 001 RW 007, Desa Mekarwangi, Kec. Warungkondang Kab. Cianjur 43261'
    },

    link: {
        calendar: 'https://calendar.app.google/RPf4JWipSRYF4Emn7',
        map: 'https://maps.app.goo.gl/cxXxehRxmr8FLDJM6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Aab Abdul Rokib',
            icon: './src/assets/images/dana.png',
            rekening: '0831 3004 2004'
        },
        {
            id: 2,
            name: 'Aab Abdul Rokib',
            icon: './src/assets/images/bri.png',
            rekening: '4257 0102 0326 536'
        },
    ],

    audio: './src/assets/audio/abdulqader.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxZUj_cZet1b6ULTatNkAbcVmIoq3f_Ef3vqMMFNpUdvAjvzWsuagUwDv4bb1HFkEI9/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
