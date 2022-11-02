import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ResponseType } from 'components/models'

export default class GetService {
  public static async apiRequest (url: string): Promise<ResponseType> {
    const result: ResponseType = await (await ApiService.ApiClient().get(`${url}`).catch(
      err => { //eslint-disable-line
        throw new HttpError('Ошибка при загрузке', err.response) //eslint-disable-line
      }))?.data as ResponseType //eslint-disable-line
    return result //eslint-disable-line
  }
}
