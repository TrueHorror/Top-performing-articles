const BASE_PATH = "http://localhost:8080"

export enum Endpoints{
    Articles = "/articles"
    
}

export const Paths = {
    Articles: BASE_PATH + Endpoints.Articles,
}