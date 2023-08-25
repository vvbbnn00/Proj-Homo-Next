const Datastore = require('@seald-io/nedb');
const db = new Datastore({filename: 'data/data.db', autoload: true});

export async function getPV() {
    return new Promise((resolve, reject) => {
        db.find({
            name: "pv"
        }, (err, docs) => {
            if (err) {
                reject(err)
            } else {
                // if not found, create one
                if (docs.length === 0) {
                    db.insert({
                        name: "pv",
                        pv: 0
                    }, (err, newDoc) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(newDoc)
                        }
                    })
                }
                resolve(docs)
            }
        })
    })
}

export async function updatePV() {
    // add py by 1
    return new Promise((resolve, reject) => {
        db.update({
            name: "pv"
        }, {
            $inc: {
                pv: 1
            }
        }, {}, (err, numReplaced) => {
            if (err) {
                reject(err)
            } else {
                resolve(numReplaced)
            }
        })
    })
}