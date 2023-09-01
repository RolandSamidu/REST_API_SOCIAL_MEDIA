import axios from "axios";

const NOTIFY_API_BASE_URL = "http://localhost:8080/api/p1/n1";

class NotificationService {
    
    getNotification(){
        return axios.get(NOTIFY_API_BASE_URL);
    }

    createNotification(notification){
        return axios.post(NOTIFY_API_BASE_URL, notification);
    }

    getNotificationById(notificationId){
        return axios.get(NOTIFY_API_BASE_URL + '/' + notificationId);
    }

    updateNotification(notification, notificationId){
        return axios.put(NOTIFY_API_BASE_URL + '/' + notificationId, notification)
    }

    deleteNotification(notificationId){
        return axios.delete(NOTIFY_API_BASE_URL + '/' + notificationId);
    }
}

export default new NotificationService();