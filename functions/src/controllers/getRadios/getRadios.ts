
import admin = require('firebase-admin');
import { RadioModel } from "../../models/radio.model";
import { onRequest } from "firebase-functions/v2/https";
admin.initializeApp();

const db = admin.firestore();


export const getRadios = onRequest({
    cors:
        ['radio-fl.web.app', 'localhost:60065'],
    enforceAppCheck: true
}, (req, res) => {
    const radios: RadioModel[] = [];
    db.collection('radios').orderBy('name').where('isEnable', '==', true).get().then(snap => {
        snap.forEach(doc => {
            const radio: RadioModel = doc.data() as RadioModel;
            radio.id = doc.id;
            radios.push(radio);
        });

        // Cache control 300 seconds server cache 300 seconds browser cache
        res.set('Cache-Control', 'public, max-age=300, s-maxage=300');

        res.json({
            radios: radios,
            country: req.headers["x-appengine-country"]
        });
    });



});