import { rest } from 'msw';
const baseURL = 'https://europe-west1-my-tcc-project-66a43.cloudfunctions.net/api'
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjczNzVhZmY3MGRmZTNjMzNlOTBjYTM2OWUzYTBlZjQxMzE3MmZkODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktdGNjLXByb2plY3QtNjZhNDMiLCJhdWQiOiJteS10Y2MtcHJvamVjdC02NmE0MyIsImF1dGhfdGltZSI6MTYwMDA5NDY2MSwidXNlcl9pZCI6IjVqeGh6UmFGWVVQM1RydXVPblR5a1RuTURhQTMiLCJzdWIiOiI1anhoelJhRllVUDNUcnV1T25UeWtUbk1EYUEzIiwiaWF0IjoxNjAwMDk0NjYxLCJleHAiOjE2MDAwOTgyNjEsImVtYWlsIjoiamFjay5ibGFja0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamFjay5ibGFja0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.UVIIO7MRlZ766mQpsQglyxRP6U4E_qXAARDwPk51F0YHqGykh-JTi8I_O-v7icOhtC1v1jRJx1JBXosKlcxhrQOPvhch2T5W4H5i4sT-ltlQLm89BoYHfFfDLrJz1-plmDJttlN90pcJs9ZqV2oPN5YGvr36TG04Jb0ylDeT92-wjIXi6BmcPEOJJK_uerkH4-ru-MModKbIFgkGJvQgjVdtjmsop7HIVYAMRg52BEuKPBvm1f9lvGW9GiwM9kjMzHzFtvw0eNZNX6c9BqGwTBvNYOC4vJTN_RNefc-bd0idAAoCC__PKsLmlAdTeiOHdk7-nZ4CTOtIDgeU3iSbKg";

export const handlers = [
    rest.get('/test', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ message: 'OK' })
        )
    }),
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ token })
        )
    }),
    // Handles a GET /user request
    rest.post('/signup', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ token })
        )
    }),
]