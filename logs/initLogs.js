module.exports = message => {
    let emojis = "🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🫐 🍑 🥭 🍍 🥥 🥝 🍅 🥑 🫒 🍆 🌶 🫑 🥒 🥬 🥦 🧄 🧅 🌽 🥕 🥗 🥔 🍠 🥜 🍯 🍞 🥐 🥖 🫓 🥨 🥯 🥞 🧇 🧀 🍗 🍖 🥩 🍤 🥚 🍳 🥓 🍔 🍟 🌭 🍕 🍝 🥪 🌮 🌯 🫔 🥙 🧆 🍜 🥘 🍲 🫕 🥫 🧂 🧈 🍥 🍣 🍱 🍛 🍙 🍚 🍘 🥟 🍢 🍡 🍧 🍨 🍦 🍰 🎂 🧁 🥧 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🥠 🥮 ☕ 🍵 🫖 🥣 🍼 🥤 🧋 🧃 🧉 🥛 🍺 🍻 🍷 🥂 🥃 🍸 🍹 🍾 🍶 🧊 🥄 🍴 🍽 🥢 🥡"
        .split(' ')
    
    console.log(
        `${
            process.env.NODE_ENV === 'ubuntu' 
                ? emojis[parseInt(Math.random() * ((emojis.length -1) - 0) + 0)]
                : '---->'
        } ${
            message
        }...`)
}