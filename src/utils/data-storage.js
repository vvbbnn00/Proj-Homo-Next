const Datastore = require('@seald-io/nedb');
let db = null

function getDB() {
    if (!db) {
        db = new Datastore({filename: 'data/data.db', autoload: true})
    }
    return db
}

export async function getPV() {
    const currentDB = getDB()
    return new Promise((resolve, reject) => {
        currentDB.find({
            name: "pv"
        }, (err, docs) => {
            if (err) {
                reject(err)
            } else {
                // if not found, create one
                if (docs.length === 0) {
                    currentDB.insert({
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
    const currentDB = getDB()
    // add py by 1
    return new Promise((resolve, reject) => {
        currentDB.update({
            name: "pv"
        }, {
            $inc: {
                pv: 1
            }
        }, {upsert: true}, (err, numReplaced) => {
            if (err) {
                reject(err)
            } else {
                resolve(numReplaced)
            }
        })
    })
}
