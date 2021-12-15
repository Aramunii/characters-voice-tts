const axios = require('axios');
const fs = require('fs');

exports.getAudio = async function getAudio(text, character, filename) {
    response = await axios.post('https://api.15.ai/app/getAudioFile5', {
        "text": text,
        "character": character,
        "emotion": "Contextual"
    })

    var responseAudio = await axios.get('https://cdn.15.ai/audio/' + response.data.wavNames[0], {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'audio/wav'
        }
    })

    if (responseAudio.data) {
        fs.writeFile("./" + filename + ".mp3", responseAudio.data, function (err) {
            if (err) {
                return console.log(err)
            }
            console.log('Sucess');
        })
    }
}

