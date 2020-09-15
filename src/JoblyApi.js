import axios from "axios";
import { TOKEN_STORAGE_ID } from "./App.js"

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = localStorage.getItem(TOKEN_STORAGE_ID);
      console.log(`https://jobly-back.herokuapp.com/${endpoint}`);
      try {
        return (await axios({
          method: verb,
          url: `https://jobly-back.herokuapp.com/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
      }
  
      catch(err) {
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async getCompanies(search) {
        let res;
        if (search) {
            res = await this.request(`companies?search=${search}`)
        }
        else {
            res = await this.request(`companies`)
        }
        return res.companies;
    }

    static async getJobs(search) {
        let res;
        if (search) {
            res = await this.request(`jobs?search=${search}`)
        }
        else {
            res = await this.request(`jobs`)
        }
        return res.jobs;
    }

    static async applyToJob(id) {
        let res = await this.request(`jobs/${id}/apply`, {}, "post");
        return res.message;
      }
    
      static async login(data) {
        let res = await this.request(`login`, data, "post");
        return res.token;
      }
    
      static async register(data) {
        let res = await this.request(`users`, data, "post");
        return res.token;
      }
    
      static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
      }
    
      static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
      }
}

export default JoblyApi;