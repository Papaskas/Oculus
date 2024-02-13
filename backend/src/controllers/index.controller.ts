import Controller from '@src/controllers/controller';


export default class IndexController extends Controller {
  main() {
    this.res.send('ads');
  }
}
