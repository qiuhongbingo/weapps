import { API } from '../../_common/config'
import { request } from '../../_common/api'

Page({
  onLoad() {
    request({ url: `${API}/demo` }).then(r => {})
  }
})
