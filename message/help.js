const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

 Library : *Baileys-MD*.
 Prefix : ( ${prefix} )
 Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
 Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 Balance : $${toCommas(getBalance(sender, balance))}

 *MAIN MENU*
 > ${prefix}menu
 > ${prefix}owner
 > ${prefix}donasi
 > ${prefix}speed
 > ${prefix}runtime
 > ${prefix}cekprem
 > ${prefix}listprem

 *CONVERTER/TOOLS*
 > ${prefix}sticker
 > ${prefix}toimg
 > ${prefix}tovid

 *DOWNLOADER*
 > ${prefix}play
 > ${prefix}tiktok
 > ${prefix}ytmp4
 > ${prefix}ytmp3
 > ${prefix}getvideo
 > ${prefix}getmusic
 > ${prefix}instagram
 > ${prefix}facebook
 
 *MAKER MENU*
 > ${prefix}neon
 > ${prefix}pencil
 > ${prefix}candy
 > ${prefix}christmas
 > ${prefix}3dchristmas
 > ${prefix}sparklechristmas
 > ${prefix}deepsea
 > ${prefix}scifi
 > ${prefix}rainbow
 > ${prefix}waterpipe
 > ${prefix}spooky
 > ${prefix}circuit
 > ${prefix}discovery
 > ${prefix}metalic
 > ${prefix}fiction
 > ${prefix}demon
 > ${prefix}transformer
 > ${prefix}berry
 > ${prefix}thunder
 > ${prefix}magma
 > ${prefix}3dstone
 > ${prefix}neonlight
 > ${prefix}glitch
 > ${prefix}harrypotter
 > ${prefix}brokenglass
 > ${prefix}papercut
 > ${prefix}watercolor
 > ${prefix}multicolor
 > ${prefix}neondevil
 > ${prefix}underwater
 > ${prefix}graffitibike
 > ${prefix}snow
 > ${prefix}cloud
 > ${prefix}honey
 > ${prefix}ice
 > ${prefix}fruitjuice
 > ${prefix}biscuit
 > ${prefix}wood
 > ${prefix}chocolate
 > ${prefix}strawberry
 > ${prefix}matrix
 > ${prefix}blood
 > ${prefix}dropwater
 > ${prefix}toxic
 > ${prefix}lava
 > ${prefix}rock
 > ${prefix}bloodglas
 > ${prefix}halloween
 > ${prefix}darkgold
 > ${prefix}joker
 > ${prefix}wicker
 > ${prefix}firework
 > ${prefix}skeleton
 > ${prefix}blackpink
 > ${prefix}sand
 > ${prefix}glue
 > ${prefix}1917
 > ${prefix}leaves
  
 *RANDOM MENU*
 > ${prefix}quote
 > ${prefix}cecan
 > ${prefix}cogan
  
 *SEARCH MENU*
 > ${prefix}lirik
 > ${prefix}grupwa
 > ${prefix}ytsearch
  
 *GAME MENU*
 > ${prefix}tictactoe
 > ${prefix}delttc
 > ${prefix}tebakgambar
  
 *PAYMENT & BANK*
 > ${prefix}topbalance
 > ${prefix}buylimit
 > ${prefix}buyglimit
 > ${prefix}transfer
 > ${prefix}limit
 > ${prefix}balance
  
 *GROUP MENU*
 > ${prefix}linkgrup
 > ${prefix}setppgrup
 > ${prefix}setnamegc
 > ${prefix}setdesc
 > ${prefix}group
 > ${prefix}revoke
 > ${prefix}hidetag
  
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 > ${prefix}join
 > ${prefix}broadcast
 > ${prefix}setppbot
 > ${prefix}exif
 > ${prefix}leave
 > ${prefix}addprem
 > ${prefix}delprem
`
}
