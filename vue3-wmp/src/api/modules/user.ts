import Api from "../request";

class User extends Api {
    /**
   * 获取所有活动
   */
    getActivityAllList(data) {
      return this.fetch({ key: 'activityAllList', data, });
    }
}

export default new User();
