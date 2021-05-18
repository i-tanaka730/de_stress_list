import axios from 'axios'

export class MicroCms {
  async getData (url, key) {
    const headers = { headers:{ "X-API-KEY": key } };
    const microCmsData = await axios.get(url, headers);
    return microCmsData.data.contents;
  }
}