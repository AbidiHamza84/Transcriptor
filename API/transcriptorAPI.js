let transcript = function (audioBytes) {
    // Imports the Google Cloud client library
    const speech = require('@google-cloud/speech');

    // Creates a client
    const client = new speech.SpeechClient();

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: audioBytes,
    };
    const config = {
        encoding: 'AMR_WB',
        sampleRateHertz: 16000,
        languageCode: 'fr-FR',
    };
    const request = {
        audio: audio,
        config: config,
    };

    return client.recognize(request);
};

module.exports = transcript;



