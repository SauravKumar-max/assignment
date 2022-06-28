import axios, { AxiosError } from "axios"
import { ServerError } from "../features.types";

export async function getInvocies(){
    try {
        const api = "https://rscdev.taxadda.com/api/invoice/list"
        const response = await axios.get(api);
        return response.data.invoices;
    } catch (error) {
         if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            if (serverError && serverError.response) {
              return serverError.response.data;
            }
        }
        console.log(error)
        return { message: "something snapped!" };
    }
}