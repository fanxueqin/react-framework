
import { observable, action} from 'mobx';
class AppState  {
    @observable name = 'zhangsan'

    @action.bound
    setName(data){
        this.name = ''
    }
}
export default AppState;
