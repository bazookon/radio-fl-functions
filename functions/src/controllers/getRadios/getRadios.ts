import * as functions from "firebase-functions";
// Import cors
import * as cors from "cors";

import admin = require('firebase-admin');
import { RadioModel } from "../../models/radio.model";
admin.initializeApp();

const db = admin.firestore();


export const getRadios = functions.https.onRequest((req, res) => {
    cors({ origin: true })(req, res, () => {
        const radios: RadioModel[] = [];
        db.collection('radios').get().then(snap => {
            snap.forEach(doc => {
                const radio: RadioModel = doc.data() as RadioModel;
                radio.id = doc.id;
                radios.push(radio);
            });
            res.json({
                radios: radios
            });
        });
    })



});