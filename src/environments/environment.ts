import { default as roro } from '../../auth_config.json'

let domain = roro.domain
let clientId = roro.clientId

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  }
};

