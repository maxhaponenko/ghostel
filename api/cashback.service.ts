import axios from "axios-instance"

export type CashbackRequest = {
    email: string;
    date: string;
    region: string;
    page: string;
}



export class CashbackService {

    private static axiosConfig = {
        headers: { 'Content-Type': 'application/json' }
    }

    public static async sendCashbackRequest(email: string) {
        const { data } = await axios.post('/cashback', {
            email: email
        }, this.axiosConfig)
        return data
    }
}