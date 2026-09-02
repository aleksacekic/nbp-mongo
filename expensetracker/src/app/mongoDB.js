import dns from "node:dns";
import { MongoClient } from "mongodb";

// Novi kompjuter dobija samo link-local IPv6 DNS (fe80::1) od rutera, a Node-ov
// DNS resolver (c-ares) ne ume da ga koristi -> "querySrv ECONNREFUSED".
// Forsiramo javne DNS servere samo za Node proces.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error("Nedostaje MONGODB_URI environment varijabla")

let client = new MongoClient(URI, options)
let clientPromise

if(process.env.NODE_ENV !== 'production')
{
    if(!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
}
else
{
    clientPromise = client.connect()
}

export default clientPromise