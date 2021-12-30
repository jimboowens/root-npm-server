
import express from 'express';
import Producer from '../globals/producer.component'
let router = express.Router();

class Home {
    public getHome() {
        return router.get('/', (req: any, res: any) => res.json(Producer))
    }
}
export default new Home();
