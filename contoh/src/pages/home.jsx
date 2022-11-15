import react from 'react'

export default class Home extends react.Component {
    render() {
        return(
            <>
                <div className="flex justify-center items-center w-full h-[80vh] bg-fuchsia-200" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)) ,url(https://images.wallpaperscraft.com/image/single/tropical_island_palm_trees_90880_1920x1080.jpg)" }}>
                    <div className='flex flex-col gap-3 justify-center items-center w-2/3 h-2/3 p-5'>
                        <h1 className="text-white text-4xl font-bold">KlikTravel</h1>
                        <p className="text-white text-xl font-medium text-center">
                            Paket Wisata Pulau Komodo & Labuan Bajo Tour 3 Hari 2 Malam ✓ Fasilitas Lengkap ✓ Destinasi Menarik ✓ Pasti Berangkat ✓ Layanan 24 Jam ✓ Harga Murah
                        </p>
                        <a href='/' className="p-3 bg-green-400 rounded-lg text-white text-lg font-medium">
                            Click Here For Promotion and Quotas Information
                        </a>
                    </div>
                </div>
                <div className="w-full bg-white px-80 py-24 flex">
                    <p className="font-medium text-lg text-neutral-700">
                        <strong>Labuan Bajo</strong> adalah sebuah kota nelayan yang terletak di ujung barat Flores, Nusa Tenggara Timur. Kota ini memiliki fungsi strategis sebagai pusat pemerintahan, pusat perdagangan, pendidikan, serta pariwisata di Kabupaten Manggararai Barat. Tidak kalah dengan kota-kota lain di Indonesia yang sering dijadikan tujuan wisata, Labuan Bajo juga memiliki paket wisata unik yang tidak akan Anda temukan di tempat lain.
                        {<br />}
                        {<br />}
                        Pertama, Labuan Bajo merupakan kota pelabuhan bertingkat. Meski pesisir pantai yang dimiliki tidak begitu luas, tetapi Labuan Bajo menawarkan pemandangan dataran hijau berbukit-bukit. Hal ini pula yang menjadikan Labuan Bajo sebagai kota yang sangat indah. Kedua, paket keindahan Labuan Bajo juga semakin bertambah dengan beberapa pulau kecil tak berpenghuni yang tersebar di sekitarnya.
                        {<br />}
                        {<br />}
                        Selain itu, pusat pariwisata teramai di Flores ini juga disebut-sebut sebagai titik singgah utama bagi para wisatawan yang hendak berkunjung ke Pulau Komodo. Karenanya, tak heran jika kota ini tidak pernah ketinggalan dalam daftar paket wisata ke Pulau Komodo.
                        {<br />}
                        {<br />}
                        Birunya laut yang dipeluk hamparan perbukitan menjadi pemandangan eksotis yang sangat sayang jika disia-siakan. Tak heran jika siapapun yang menginjakkan kaki ke tempat ini pasti mengabadikannya lewat jepretan foto. Melihat foto-foto keindahan Labuan Bajo seperti punya daya pikat tersendiri yang menggoda siapa saja untuk mengunjunginya.
                        {<br />}
                        {<br />}
                        Jika anda punya rencana untuk berwisata ke Labuan Bajo tapi masih bingung bagaimana cara kesana dan mau ngapain disana, silahkan hubungi kami karena kami punya Paket Tour yang menarik untuk anda.
                        {<br />}
                        {<br />}
                        Paket tour Pulau Komodo dengan banyak pilihan Kapal terbaik sesuai dengan pilihan anda,  Harga promo dan kuota terbatas. Hubungi kami sekarang juga
                        {<br />}
                        {<br />}
                        Harga Terjangkau, Pasti Berangkat, Pelayanan Profesional, Jenis Tour 1 Hari, Tour 2 Hari 1 Malam.
                    </p>
                </div>
                <div className="w-full bg-white px-60 py-24 flex">
                    <div className="flex-1 flex justify-center flex-col">
                        <h1 className="text-7xl text-neutral-800 font-bold">Reach us here!</h1>
                        <h2 className="text-xl text-neutral-800 font-thin">We will help you everytime you need!</h2>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-end">
                        <a href="/" className="p-3 w-80 border-2 border-neutral-800 rounded-lg text-center">Instagram</a>
                        <a href="/" className="p-3 w-80 border-2 border-neutral-800 rounded-lg text-center">Twitter</a>
                        <a href="/" className="p-3 w-80 border-2 border-neutral-800 rounded-lg text-center">WhatsApp</a>
                    </div>
                </div>
            </>
        )
    }
}