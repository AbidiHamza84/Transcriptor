let express = require('express');
let bodyParser = require("body-parser");
let transcriptor = require('./../API/transcriptorAPI');
let router = express.Router();

/* POST users listing. */
router.post('/', async function (req, res, next) {
	let base64Audio = req.body.base64Audio;

	const [response] = await transcriptor(base64Audio);
	const transcription = response.results
		.map(result => result.alternatives[0].transcript)
		.join('\n');
	res.json({ request: transcription });
});


module.exports = router;
