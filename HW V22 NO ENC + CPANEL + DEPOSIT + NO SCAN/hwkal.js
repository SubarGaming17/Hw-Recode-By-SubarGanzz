// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/GTcVDY465eVJg9XP2VvPKM'
global.ig = '@Subar_Gaming17' // ubah aja
global.email = 'gocimer0@gmail.com' //serah
global.region = 'Indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'あ⁩ItsMeSubar🔰' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://belzxpt.tokopannel.xyz' // Isi Domain Lu
global.apikey2 = 'ptla_qXaWqU61rSn4h9OKSGG9htKKo75cpwNg0httIfvmdGi' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_NUjyLsJyg72ZVHJtOA59Jh7yonPJ5UWPWqdv91fa95O' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.owner = ['6287755567549'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'あ⁩SubarBotzོ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'あ⁩SubarBotzོ' // ubah aja ini nama sticker
global.author = 'あ⁩ItsMeSubar🔰' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})