import { SampleService } from '../services/SampleService';

export class SampleController {

    static GetUser(req, res){

        // req.params.* -> Path parameters
        // req.query.* ->Query parameters

        let user = SampleService.GetUser(req.params.id);
        res.send(user);
    }
}