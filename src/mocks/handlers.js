import { rest } from 'msw';
const baseURL = 'https://europe-west1-my-tcc-project-66a43.cloudfunctions.net/api'
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjczNzVhZmY3MGRmZTNjMzNlOTBjYTM2OWUzYTBlZjQxMzE3MmZkODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktdGNjLXByb2plY3QtNjZhNDMiLCJhdWQiOiJteS10Y2MtcHJvamVjdC02NmE0MyIsImF1dGhfdGltZSI6MTYwMDE3ODIxOCwidXNlcl9pZCI6IjVqeGh6UmFGWVVQM1RydXVPblR5a1RuTURhQTMiLCJzdWIiOiI1anhoelJhRllVUDNUcnV1T25UeWtUbk1EYUEzIiwiaWF0IjoxNjAwMTc4MjE4LCJleHAiOjE2MDAxODE4MTgsImVtYWlsIjoiamFjay5ibGFja0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamFjay5ibGFja0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JYeoSec4lYc8B-NXbEeT_insMIbHY6G2tq_V__uF5KmZ0U7IKiUweqqvvTc7A0mUBDs88m443XpZliOgUmGOCsszTO1zmov2kAeHFMm3Ik1Phvv8PTRkRP_KPZGg7OYaRNU9i84r5z0PFy8p9ToxFsQ5lnmstMXxLwLzf5vPn9b6CN5ZuYUKZQpBDbTsABsM5G3_wS2XSTPZWkPicjlOSJjp8upiQroi2JyOr7ZV4fAVAw52YOsKZVFcZMtflnALDP8U63whtw5D0L5WTGHdCCXOglyGtINUyIa2EK9-u-WioGJnp3gFbXLiJ4gPkLNVp1kO1vaL831Z9hWhvrezkA.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktdGNjLXByb2plY3QtNjZhNDMiLCJhdWQiOiJteS10Y2MtcHJvamVjdC02NmE0MyIsImF1dGhfdGltZSI6MTYwMDA5NDY2MSwidXNlcl9pZCI6IjVqeGh6UmFGWVVQM1RydXVPblR5a1RuTURhQTMiLCJzdWIiOiI1anhoelJhRllVUDNUcnV1T25UeWtUbk1EYUEzIiwiaWF0IjoxNjAwMDk0NjYxLCJleHAiOjE2MDAwOTgyNjEsImVtYWlsIjoiamFjay5ibGFja0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamFjay5ibGFja0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.UVIIO7MRlZ766mQpsQglyxRP6U4E_qXAARDwPk51F0YHqGykh-JTi8I_O-v7icOhtC1v1jRJx1JBXosKlcxhrQOPvhch2T5W4H5i4sT-ltlQLm89BoYHfFfDLrJz1-plmDJttlN90pcJs9ZqV2oPN5YGvr36TG04Jb0ylDeT92-wjIXi6BmcPEOJJK_uerkH4-ru-MModKbIFgkGJvQgjVdtjmsop7HIVYAMRg52BEuKPBvm1f9lvGW9GiwM9kjMzHzFtvw0eNZNX6c9BqGwTBvNYOC4vJTN_RNefc-bd0idAAoCC__PKsLmlAdTeiOHdk7-nZ4CTOtIDgeU3iSbKg";
import { user } from "./userModel";

export const handlers = [
    rest.get('/test', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ message: 'OK' })
        )
    }),
    rest.get('/user', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(user)
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